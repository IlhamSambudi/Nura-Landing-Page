import React, { useState } from 'react'
import { X, CheckCircle2, Building2, Users, Calendar, ArrowRight, ShieldCheck } from 'lucide-react'

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    travelName: '',
    role: 'Pemilik / Direktur',
    phone: '',
    annualPilgrims: '250 - 500 Jamaah',
    notes: '',
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal card */}
      <div className="relative w-full max-w-xl rounded-3xl bg-nura-cream border border-nura-border p-6 sm:p-8 shadow-nura-dark z-10 my-auto text-nura-text">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-nura-text-muted hover:text-nura-text hover:bg-neutral-200/50 transition-colors"
          aria-label="Tutup modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-nura-forest/10 text-nura-forest mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Kemitraan Operator Travel (PPIU)</span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-nura-forest">
              Jadwalkan Demo Eksklusif Nura
            </h3>
            <p className="mt-1.5 text-sm text-nura-text-muted leading-relaxed">
              Pelajari bagaimana satu lapisan terpadu Nura mengorganisasi rombongan jamaah, panduan tawaf, dan alur kerja tour leader travel Anda.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-nura-text mb-1">
                  Nama Lengkap PIC
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: H. Ahmad Fauzi"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-nura-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-nura-purple"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-nura-text mb-1">
                    Nama Travel / PPIU
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Safar Barakah Utama"
                    value={formData.travelName}
                    onChange={(e) => setFormData({ ...formData, travelName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-nura-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-nura-purple"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-nura-text mb-1">
                    Peran / Jabatan
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-nura-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-nura-purple"
                  >
                    <option>Pemilik / Direktur</option>
                    <option>Manajer Operasional</option>
                    <option>Tour Leader / Mutawif</option>
                    <option>Staf Layanan Jamaah</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-nura-text mb-1">
                    Nomor WhatsApp Aktif
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="081234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-nura-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-nura-purple"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-nura-text mb-1">
                    Estimasi Jamaah Tahunan
                  </label>
                  <select
                    value={formData.annualPilgrims}
                    onChange={(e) => setFormData({ ...formData, annualPilgrims: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-nura-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-nura-purple"
                  >
                    <option>&lt; 250 Jamaah / tahun</option>
                    <option>250 - 500 Jamaah</option>
                    <option>500 - 1.500 Jamaah</option>
                    <option>&gt; 1.500 Jamaah</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-nura-text mb-1">
                  Kebutuhan Spesifik / Catatan Tambahan (Opsional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Misal: Tertarik uji coba untuk keberangkatan musim depan atau integrasi perangkat smartband..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-nura-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-nura-purple"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl font-semibold text-sm bg-nura-forest text-nura-cream hover:bg-nura-forest-light transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <span>Kirim Permintaan Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-nura-text-muted pt-1">
                <ShieldCheck className="w-4 h-4 text-nura-teal" />
                <span>Kerahasiaan data travel Anda terjamin di bawah PT Vauza Tamma Abadi</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-nura-teal/10 flex items-center justify-center text-nura-teal mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-nura-forest">
              Permintaan Demo Diterima
            </h3>
            <p className="mt-2 text-sm text-nura-text-muted max-w-md mx-auto leading-relaxed">
              Terima kasih, <strong className="text-nura-text">{formData.name}</strong> dari{' '}
              <strong className="text-nura-text">{formData.travelName}</strong>. Tim kemitraan Nura akan menghubungi nomor WhatsApp Anda dalam 1x24 jam kerja untuk menyepakati sesi walkthrough platform.
            </p>
            <div className="mt-6">
              <button
                onClick={handleReset}
                className="py-2.5 px-6 rounded-xl font-medium text-sm bg-nura-forest text-nura-cream hover:bg-nura-forest-light transition-all"
              >
                Kembali ke Halaman Utama
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
