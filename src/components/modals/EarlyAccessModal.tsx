import React, { useState } from 'react'
import { X, CheckCircle2, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react'

interface EarlyAccessModalProps {
  isOpen: boolean
  onClose: () => void
  initialInterest?: string
}

export const EarlyAccessModal: React.FC<EarlyAccessModalProps> = ({
  isOpen,
  onClose,
  initialInterest = 'Ibadah Harian & Umrah',
}) => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    interest: initialInterest,
    device: 'Android',
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
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-lg rounded-3xl bg-nura-cream border border-nura-border p-6 sm:p-8 shadow-nura-dark z-10 my-auto text-nura-text">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-nura-text-muted hover:text-nura-text hover:bg-neutral-200/50 transition-colors"
          aria-label="Tutup modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-nura-purple/10 text-nura-purple mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Akses Awal Komunitas Nura</span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-nura-forest">
              Bergabung dengan Akses Awal
            </h3>
            <p className="mt-1.5 text-sm text-nura-text-muted leading-relaxed">
              Dapatkan pembaruan rilis fitur, panduan manasik terpandu, dan kesempatan mencoba modul Nura Vital lebih awal.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-nura-text mb-1">
                  Nama Anda
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Fathur Rahman"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-nura-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-nura-purple"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-nura-text mb-1">
                  Email atau Nomor WhatsApp
                </label>
                <input
                  type="text"
                  required
                  placeholder="nama@email.com atau 0812xxxx"
                  value={formData.emailOrPhone}
                  onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-nura-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-nura-purple"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-nura-text mb-1">
                    Minat Utama Anda
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-nura-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-nura-purple"
                  >
                    <option>Ibadah Harian & Umrah</option>
                    <option>Nura Vital (Smartband Kebugaran)</option>
                    <option>Tour Leader / Mutawif Lapangan</option>
                    <option>Keluarga Jamaah Umrah</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-nura-text mb-1">
                    Perangkat Smartphone
                  </label>
                  <select
                    value={formData.device}
                    onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-nura-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-nura-purple"
                  >
                    <option>Android</option>
                    <option>iOS (Apple iPhone)</option>
                    <option>Keduanya</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl font-semibold text-sm bg-nura-purple text-white hover:bg-nura-purple-dark transition-all flex items-center justify-center gap-2 shadow-nura-purple"
                >
                  <span>Daftar Akses Awal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-center text-nura-text-muted">
                Kami menghargai privasi Anda. Tidak ada spam atau notifikasi iklan mengganggu.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-nura-purple/10 flex items-center justify-center text-nura-purple mb-4">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-nura-forest">
              Selamat Bergabung, {formData.name}!
            </h3>
            <p className="mt-2 text-sm text-nura-text-muted max-w-md mx-auto leading-relaxed">
              Anda terdaftar dalam daftar antrian prioritas awal Nura. Kami akan mengirimkan undangan beta eksklusif saat gelombang akses berikutnya dibuka.
            </p>
            <div className="mt-6">
              <button
                onClick={handleReset}
                className="py-2.5 px-6 rounded-xl font-medium text-sm bg-nura-purple text-white hover:bg-nura-purple-dark transition-all"
              >
                Selesai
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
