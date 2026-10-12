"""
Nura Landing — asset preparation pipeline.

Reads the original app screenshots from  ../Nura Apps  and writes optimised,
web-ready assets into  src/assets/nura  and  public/.

  python scripts/prepare_assets.py

Requires: Pillow  (pip install Pillow)

What it does
------------
1. Crops the Android status bar (time, WhatsApp icon, battery) and gesture bar
   from each selected screenshot so only the Nura UI remains.
2. Exports each screen as WebP (720px wide, ~2x for the largest on-page size).
3. Extracts the real Nura logo (mark + wordmark) from the splash screenshot
   using colour-to-alpha against white, producing transparent PNGs.
4. Generates favicon / apple-touch icon and an OpenGraph share image.

Only screens listed in SCREENS are exported. Screens containing personal data
(phone numbers, PPIU registry details) or demo testimonials are intentionally
excluded.
"""

from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT.parent / "Nura Apps"
OUT_SCREENS = ROOT / "src" / "assets" / "nura" / "app-screens"
OUT_LOGO = ROOT / "src" / "assets" / "nura" / "logo"
PUBLIC = ROOT / "public"

# Status bar / gesture bar crop for the 1080x2400 captures
CROP_TOP = 104
CROP_BOTTOM = 2352
TARGET_W = 720

# source filename -> semantic output name
SCREENS: dict[str, str] = {
    "1791620745933.jpg": "daily-home",
    "1791620745899.jpg": "daily-ayat",
    "1791620745790.jpg": "daily-prayer-clock",
    "1791620745718.jpg": "daily-prayer-schedule",
    "1791620745828.jpg": "daily-world-time",
    "1791620745130.jpg": "daily-streak",
    "1791620745679.jpg": "daily-quran-intro",
    "1791620745536.jpg": "daily-quran-qari",
    "1791620745443.jpg": "daily-quran-target",
    "1791620745346.jpg": "platform-hub",
    "1791620742529.jpg": "pilgrimage-guide",
    "1791620742837.jpg": "pilgrimage-checklist",
    "1791620742597.jpg": "pilgrimage-doa",
    "1791620744324.jpg": "pilgrimage-stages",
    "1791620744363.jpg": "pilgrimage-journey",
    "1791620743279.jpg": "pilgrimage-ihram",
    "1791620743067.jpg": "pilgrimage-tawaf",
    "1791620743801.jpg": "pilgrimage-sai-card",
    "1791620743932.jpg": "pilgrimage-tawaf-card",
    "1791620744019.jpg": "pilgrimage-checklist-dark",
    "1791620744206.jpg": "pilgrimage-dashboard",
    "1791620745035.jpg": "pilgrimage-features",
    "1791620743414.jpg": "ops-broadcast",
    "1791620743340.jpg": "ops-members",
    "1791620743507.jpg": "ops-info",
    "1791620744740.jpg": "ops-leader-hub",
    "1791620744998.jpg": "vital-home",
    "1791620744909.jpg": "vital-devices",
    "1791620744951.jpg": "vital-connect",
}

LOGO_SRC = "photo_2026-10-12_09-14-05.jpg"
# vertical segments detected for the splash logo (mark, wordmark)
LOGO_MARK_Y = (900, 1415)
LOGO_WORD_Y = (1478, 1610)


def color_to_alpha_white(im: Image.Image, boost: float | None = None) -> Image.Image:
    """GIMP-style colour-to-alpha against pure white (keeps anti-aliasing).

    `boost` rescales alpha (a / boost, clamped) so light-but-solid colours,
    such as the lilac end of the Nura mark gradient, stay fully opaque.
    """
    im = im.convert("RGB")
    px = im.load()
    w, h = im.size
    out = Image.new("RGBA", (w, h))
    opx = out.load()
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            a = max(255 - r, 255 - g, 255 - b) / 255.0
            if boost:
                a = min(1.0, a / boost)
            if a <= 0.035:
                opx[x, y] = (0, 0, 0, 0)
                continue
            nr = int(max(0, min(255, (r - 255 * (1 - a)) / a)))
            ng = int(max(0, min(255, (g - 255 * (1 - a)) / a)))
            nb = int(max(0, min(255, (b - 255 * (1 - a)) / a)))
            opx[x, y] = (nr, ng, nb, int(a * 255))
    return out


def trim(im: Image.Image, pad: int = 4) -> Image.Image:
    bbox = im.getchannel("A").point(lambda v: 255 if v > 8 else 0).getbbox()
    if not bbox:
        return im
    l, t, r, b = bbox
    return im.crop((max(0, l - pad), max(0, t - pad), min(im.width, r + pad), min(im.height, b + pad)))


def tint(im: Image.Image, rgb: tuple[int, int, int]) -> Image.Image:
    solid = Image.new("RGBA", im.size, rgb + (255,))
    solid.putalpha(im.getchannel("A"))
    return solid


def export_screens() -> None:
    OUT_SCREENS.mkdir(parents=True, exist_ok=True)
    for src_name, out_name in SCREENS.items():
        src = SRC / src_name
        if not src.exists():
            print(f"  ! missing {src_name}")
            continue
        im = Image.open(src).convert("RGB")
        im = im.crop((0, CROP_TOP, im.width, CROP_BOTTOM))
        ratio = TARGET_W / im.width
        im = im.resize((TARGET_W, round(im.height * ratio)), Image.LANCZOS)
        im.save(OUT_SCREENS / f"{out_name}.webp", "WEBP", quality=80, method=6)
        print(f"  ✓ {out_name}.webp  {im.size}")


def export_logo() -> tuple[Image.Image, Image.Image]:
    OUT_LOGO.mkdir(parents=True, exist_ok=True)
    src = Image.open(SRC / LOGO_SRC).convert("RGB")
    mark = trim(color_to_alpha_white(src.crop((200, LOGO_MARK_Y[0], 980, LOGO_MARK_Y[1])), boost=0.2))
    word = trim(color_to_alpha_white(src.crop((200, LOGO_WORD_Y[0], 980, LOGO_WORD_Y[1]))))

    mark.save(OUT_LOGO / "nura-mark.png", optimize=True)
    word.save(OUT_LOGO / "nura-wordmark.png", optimize=True)
    tint(word, (250, 247, 240)).save(OUT_LOGO / "nura-wordmark-light.png", optimize=True)

    # smaller web copies
    m_small = mark.copy()
    m_small.thumbnail((160, 160), Image.LANCZOS)
    m_small.save(OUT_LOGO / "nura-mark-160.png", optimize=True)
    print(f"  ✓ logo mark {mark.size}, wordmark {word.size}")
    return mark, word


def export_icons(mark: Image.Image) -> None:
    PUBLIC.mkdir(parents=True, exist_ok=True)
    for size, name, bg in [
        (64, "favicon.png", None),
        (180, "apple-touch-icon.png", (250, 247, 240, 255)),
        (512, "icon-512.png", (250, 247, 240, 255)),
    ]:
        canvas = Image.new("RGBA", (size, size), bg or (0, 0, 0, 0))
        m = mark.copy()
        inner = int(size * (0.86 if bg is None else 0.62))
        m.thumbnail((inner, inner), Image.LANCZOS)
        canvas.alpha_composite(m, ((size - m.width) // 2, (size - m.height) // 2))
        canvas.save(PUBLIC / name, optimize=True)
    print("  ✓ favicon / apple-touch / icon-512")


def _font(names: list[str], size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for n in names:
        try:
            return ImageFont.truetype(n, size)
        except OSError:
            continue
    return ImageFont.load_default()


def rounded(im: Image.Image, radius: int) -> Image.Image:
    mask = Image.new("L", im.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, im.width, im.height), radius, fill=255)
    out = im.convert("RGBA")
    out.putalpha(mask)
    return out


def export_og(mark: Image.Image, word: Image.Image) -> None:
    W, H = 1200, 630
    og = Image.new("RGBA", (W, H), (246, 241, 230, 255))
    # soft forest glow on the right
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(glow).ellipse((700, -120, 1480, 760), fill=(19, 64, 58, 255))
    og.alpha_composite(glow.filter(ImageFilter.GaussianBlur(4)))

    m = mark.copy(); m.thumbnail((92, 92), Image.LANCZOS)
    w = word.copy(); w.thumbnail((190, 60), Image.LANCZOS)
    og.alpha_composite(m, (80, 80))
    og.alpha_composite(w, (80 + m.width + 18, 80 + (m.height - w.height) // 2 + 4))

    d = ImageDraw.Draw(og)
    head = _font(["seguisb.ttf", "segoeuib.ttf", "arialbd.ttf"], 64)
    sub = _font(["segoeui.ttf", "arial.ttf"], 25)
    y = 230
    for line in ["Faith. Journey.", "Wellbeing.", "Connected."]:
        d.text((80, y), line, font=head, fill=(21, 33, 30, 255))
        y += 76
    d.text((80, y + 18), "One connected companion", font=sub, fill=(84, 92, 88, 255))
    d.text((80, y + 50), "for the moments that matter.", font=sub, fill=(84, 92, 88, 255))

    # two real screens
    for i, (name, x, yy) in enumerate([("daily-home", 790, 70), ("pilgrimage-stages", 975, 130)]):
        p = OUT_SCREENS / f"{name}.webp"
        if not p.exists():
            continue
        s = Image.open(p).convert("RGB")
        s.thumbnail((210, 460), Image.LANCZOS)
        frame = Image.new("RGBA", (s.width + 16, s.height + 16), (14, 20, 19, 255))
        frame = rounded(frame, 34)
        frame.alpha_composite(rounded(s, 26), (8, 8))
        og.alpha_composite(frame, (x, yy))
    og.convert("RGB").save(PUBLIC / "og-image.jpg", quality=86)
    print("  ✓ og-image.jpg")


if __name__ == "__main__":
    print("Exporting screens…")
    export_screens()
    print("Extracting logo…")
    mk, wd = export_logo()
    export_icons(mk)
    export_og(mk, wd)
    print("Done.")
