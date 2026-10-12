# NURA — Public-Facing Landing Page

> **Faith. Journey. Wellbeing. Connected.**  
> *“One connected companion for the moments that matter.”*  
> *Satu ekosistem digital untuk pengalaman Muslim sehari-hari, perjalanan ibadah, dan wellbeing yang lebih terarah.*

A premium, calm, and emotionally resonant public-facing product landing page for **NURA** — an integrated Muslim digital ecosystem connecting everyday faith practices, guided pilgrimage (Umrah), travel operator workflows (PPIU), and optional wearable wellbeing.

Built as a product initiative operating under **PT Vauza Tamma Abadi**.

---

## 1. Project Overview & Design Philosophy

Nura is not a generic SaaS product. Its visual and interaction design embodies:
- **Quietly Premium**: Spacious whitespace, subtle elevations, rich dark-forest and deep-plum surfaces, warm ivory/cream backgrounds, refined typography (`Plus Jakarta Sans`, `Inter`, `Instrument Serif`), and controlled micro-interactions.
- **Truthful & Grounded**: Real UI screenshots from the built Nura application are used throughout the page. All metrics are truthfully qualified as *“Management-reported”* or *“Internal product baseline”* derived from the Day-90 Master Dossier.
- **Responsible Wellbeing**: Nura Vital is strictly framed around non-medical wellness cues and device-supported habits, with explicit disclaimers regarding clinical diagnosis.
- **Operator Wedge**: Travel operators and tour leaders (PPIU) serve as the commercial distribution wedge, clearly distinguished in the B2B workflows and audience segmentation sections.

---

## 2. Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/) (TypeScript)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) with a custom design token system
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**:
  - `@fontsource-variable/plus-jakarta-sans` (Modern Display & UI Sans)
  - `@fontsource-variable/inter` (High-readability Body Sans)
  - `@fontsource/instrument-serif` (Editorial Display Accent)
- **Asset Pipeline**: Python Pillow script converting raw app captures into high-resolution WebP assets with transparent brand mark extractions.

---

## 3. Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v24)
- npm or pnpm

### Installation
```bash
# Navigate to the landing page directory
cd "Nura Landing"

# Install dependencies
npm install
```

### Running Locally
```bash
npm run dev
```
The dev server will start at `http://127.0.0.1:5173/`.

### Production Build
```bash
npm run build
```
Build output is generated in `dist/` with zero TypeScript errors or warnings.

To preview the production build:
```bash
npm run preview
```

---

## 4. Directory Structure

```
Nura Landing/
├── public/
│   ├── favicon.png          # High-DPI browser favicon
│   ├── apple-touch-icon.png # iOS home screen icon
│   ├── icon-512.png         # PWA / high-res icon
│   └── og-image.jpg         # Open Graph & Twitter social share card
├── scripts/
│   └── prepare_assets.py    # Automated screenshot cropper & logo extractor
├── src/
│   ├── assets/
│   │   └── nura/
│   │       ├── app-screens/ # 29 cropped & optimized WebP screenshots
│   │       └── logo/        # Extracted transparent PNG mark & wordmarks
│   ├── components/
│   │   ├── architecture/    # Ecosystem architecture & data boundary
│   │   ├── audience/        # Persona tabs (Operators, Pilgrims, Daily, Vital)
│   │   ├── common/          # Reusable ScreenshotFrame component
│   │   ├── cta/             # High-impact closing CTA section
│   │   ├── daily/           # Nura Daily practice & prayer clock tabs
│   │   ├── ecosystem/       # 4 Product pillars overview
│   │   ├── evidence/        # Day-90 traction & baseline metrics
│   │   ├── experience/      # Discover -> Set up -> Use -> Reflect -> Return
│   │   ├── hero/            # Hero section with multi-device composition
│   │   ├── layout/          # Sticky Navbar, AnnouncementBar, Footer
│   │   ├── modals/          # B2B DemoModal & EarlyAccessModal
│   │   ├── northstar/       # WMAU (Weekly Meaningful Active Users)
│   │   ├── operators/       # B2B Travel Operator (PPIU) workflow section
│   │   ├── pilgrimage/      # Umrah companion & 6-stage Journey Timeline
│   │   ├── problem/         # 4 Fragmented experiences section
│   │   ├── product/         # Art-directed product showcase gallery
│   │   ├── roadmap/         # 2024 to 2026+ evolution milestones
│   │   ├── solution/        # Visual ecosystem solution diagram
│   │   ├── trust/           # Faith-first, PDP compliance & governance
│   │   └── vital/           # Nura Vital (Wear. Sync. Interpret. Act.)
│   ├── data/
│   │   ├── audiences.ts     # Persona data, pain points, and stats
│   │   ├── metrics.ts       # Baseline metrics & WMAU definitions
│   │   ├── navigation.ts    # Navbar & Footer links
│   │   ├── products.ts      # 4 Product modules metadata & features
│   │   ├── roadmap.ts       # Product chronology & future stages
│   │   └── screenshots.ts   # Central asset import registry
│   ├── lib/
│   │   └── utils.ts         # Class name joining helper (cn)
│   ├── App.tsx              # Main page orchestration
│   ├── index.css            # Tokens, fonts & global styles
│   └── main.tsx             # Entry mount
├── index.html               # Semantic HTML & Open Graph metadata
├── tailwind.config.ts       # NURA color palette tokens
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite build config with path aliases
```

---

## 5. Design System Tokens

The CSS variables and Tailwind theme strictly adhere to NURA's color palette:

| Token | Hex Value | Usage |
|---|---|---|
| `--nura-purple` | `#8454E4` | Brand identity, logo mark, interactive accents, CTA glow |
| `--nura-purple-light` | `#9C6CFC` | Highlight gradients and tags |
| `--nura-cream` | `#FAF7F0` | Primary warm background surface |
| `--nura-ivory` | `#F5F1E6` | Alternate section background |
| `--nura-forest` | `#0B2D2C` | Deep dark sections, pilgrimage trust, primary buttons |
| `--nura-forest-dark` | `#061A19` | Deepest contrast surfaces |
| `--nura-teal` | `#1F736B` | Secondary accents, indicators, calmness |
| `--nura-gold` | `#DAAB5B` | Spiritual warmth, timeline highlights, key CTA details |
| `--nura-plum` | `#15111F` | Nura Vital & wearable wellbeing surface |
| `--nura-charcoal` | `#121017` | Deep contrast wearable accents |

---

## 6. How to Extend & Maintain

### 6.1 Updating Content or Dummy Data
All page copy, metrics, and persona information are decoupled from JSX and live in `src/data/`:
- **Change Metrics**: Edit `src/data/metrics.ts`. Remember to preserve the `statusLabel` (*Management-reported* or *Internal product baseline*).
- **Update Roadmap**: Edit `src/data/roadmap.ts`.
- **Add / Edit Personas**: Edit `src/data/audiences.ts`.
- **Add / Edit Product Modules**: Edit `src/data/products.ts`.

### 6.2 Adding Real CTAs & URLs
- To connect the **Book a Demo** form to a CRM (e.g. HubSpot, WhatsApp API, or backend webhook), edit `handleSubmit` in `src/components/modals/DemoModal.tsx`.
- To connect **Join Early Access** to an email provider (e.g. Resend, Mailchimp), edit `handleSubmit` in `src/components/modals/EarlyAccessModal.tsx`.

### 6.3 Re-running the Asset Pipeline
If you add new screenshots to the `../Nura Apps` folder:
```bash
python scripts/prepare_assets.py
```
This automatically crops out Android status/gesture bars, optimizes into modern WebP format, and places them into `src/assets/nura/app-screens/`.

---

## 7. Accessibility & Performance Standards

- **Semantic Hierarchy**: Proper `h1` through `h4` hierarchy across all 19 sections.
- **Touch Targets**: Minimum 44px on all interactive elements.
- **High Contrast**: WCAG AA compliant text contrast across both light (cream/ivory) and dark (forest/plum) themes.
- **Motion Safety**: Respects `prefers-reduced-motion` to disable animations for sensitive users.
- **Zero Heavy Runtimes**: Minimal bundle footprint (~104 kB gzipped JS), instant hydration, responsive across mobile (`375px`), tablet (`768px`), and wide desktop (`1440px+`).

---

## 8. Legal Attribution

Nura is an intellectual and product project operating under **PT Vauza Tamma Abadi**.  
*Kemenag RI PPIU Alignment • UU PDP No. 27/2022 Compliant Architecture.*
