import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev }
        delete updated[name]
        return updated
      })
    }

    if (isSuccess) {
      setIsSuccess(false)
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nama nggak boleh kosong.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email nggak boleh kosong.'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Format email keliru (contoh: user@domain.com).'
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Pesan nggak boleh kosong.'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSuccess(false)

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSuccess(true)
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <section className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-6xl sm:text-8xl font-black tracking-tight text-zinc-950 dark:text-zinc-50 uppercase leading-[0.9]">
          CONTACT<span className="text-zinc-400 dark:text-zinc-600">.</span>
        </h1>
        <p className="font-mono text-xs sm:text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mt-3">
          // ADA PROYEK, TANYA-TANYA, ATAU MAU NGOBROL? LEMPAR PESAN KE SINI.
        </p>
      </div>

      {/* Grid: 2 Kolom */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Kolom Kiri: Informasi Kontak */}
        <div className="lg:col-span-5 space-y-6">
          <div className="border-2 border-zinc-950 dark:border-zinc-50 bg-white dark:bg-zinc-900 p-6 sm:p-7 shadow-[5px_5px_0_0_currentColor] space-y-6">
            <div className="pb-3 border-b-2 border-zinc-950 dark:border-zinc-50 flex items-center justify-between">
              <h2 className="font-mono font-black text-sm uppercase tracking-tight text-zinc-950 dark:text-zinc-50">
                DIRECT_LINKS //
              </h2>
              <span className="font-mono text-xs text-zinc-500">CHANNELS</span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Bisa langsung kontak lewat medsos atau kirim form di sebelah.
            </p>

            {/* Links List */}
            <div className="space-y-3 font-mono">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kevinmarsha131"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 border-2 border-zinc-950 dark:border-zinc-50 bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 shadow-[3px_3px_0_0_currentColor] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_currentColor] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide">
                    LINKEDIN ↗
                  </p>
                  <p className="text-[11px] text-zinc-500">
                    linkedin.com/in/kevinmarsha131
                  </p>
                </div>
                <span className="text-xs text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-zinc-50">
                  [GO]
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/just_only_vin/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 border-2 border-zinc-950 dark:border-zinc-50 bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 shadow-[3px_3px_0_0_currentColor] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_currentColor] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide">
                    INSTAGRAM ↗
                  </p>
                  <p className="text-[11px] text-zinc-500">
                    instagram.com/just_only_vin
                  </p>
                </div>
                <span className="text-xs text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-zinc-50">
                  [GO]
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/kevinmarsha131"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 border-2 border-zinc-950 dark:border-zinc-50 bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 shadow-[3px_3px_0_0_currentColor] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_currentColor] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide">
                    GITHUB ↗
                  </p>
                  <p className="text-[11px] text-zinc-500">
                    github.com/kevinmarsha131
                  </p>
                </div>
                <span className="text-xs text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-zinc-50">
                  [GO]
                </span>
              </a>
            </div>

            {/* Quick Status Box */}
            <div className="pt-3 border-t-2 border-zinc-950 dark:border-zinc-50 font-mono text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
              <div>// LOKASI: Malang, Jawa Timur</div>
              <div>// RESPON: 24-48 jam kerja</div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Form */}
        <div className="lg:col-span-7 space-y-6">
          {/* Notifikasi Sukses */}
          {isSuccess && (
            <div
              role="alert"
              className="border-2 border-emerald-600 bg-emerald-100 dark:bg-emerald-950/60 p-4 font-mono text-xs text-emerald-950 dark:text-emerald-200 shadow-[4px_4px_0_0_#059669]"
            >
              <div className="font-bold text-sm uppercase flex items-center gap-2">
                <span>[✓] PESAN_TERKIRIM!</span>
              </div>
              <p className="mt-1 leading-relaxed">
                Pesan udah masuk. Nanti bakal gue bales secepatnya. Thanks!
              </p>
            </div>
          )}

          {/* Form Card */}
          <div className="border-2 border-zinc-950 dark:border-zinc-50 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-[5px_5px_0_0_currentColor]">
            <div className="pb-3 border-b-2 border-zinc-950 dark:border-zinc-50 mb-6 flex items-center justify-between">
              <h2 className="font-mono font-black text-sm uppercase tracking-tight text-zinc-950 dark:text-zinc-50">
                SEND_MESSAGE //
              </h2>
              <span className="font-mono text-xs text-zinc-500">* REQUIRED</span>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Nama */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-xs font-bold uppercase tracking-wider text-zinc-950 dark:text-zinc-50 mb-1.5"
                >
                  NAMA *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Siapa nama kamu?"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`w-full px-3.5 py-2.5 border-2 font-mono text-xs sm:text-sm text-zinc-950 dark:text-zinc-50 focus:outline-hidden transition-colors ${
                    errors.name
                      ? 'border-red-600 bg-red-50 dark:bg-red-950/30'
                      : 'border-zinc-950 dark:border-zinc-50 bg-zinc-50 dark:bg-zinc-950 focus:bg-white dark:focus:bg-zinc-900'
                  }`}
                />
                {errors.name && (
                  <p id="name-error" className="font-mono text-xs text-red-600 dark:text-red-400 mt-1">
                    ! {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs font-bold uppercase tracking-wider text-zinc-950 dark:text-zinc-50 mb-1.5"
                >
                  EMAIL *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@kamu.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full px-3.5 py-2.5 border-2 font-mono text-xs sm:text-sm text-zinc-950 dark:text-zinc-50 focus:outline-hidden transition-colors ${
                    errors.email
                      ? 'border-red-600 bg-red-50 dark:bg-red-950/30'
                      : 'border-zinc-950 dark:border-zinc-50 bg-zinc-50 dark:bg-zinc-950 focus:bg-white dark:focus:bg-zinc-900'
                  }`}
                />
                {errors.email && (
                  <p id="email-error" className="font-mono text-xs text-red-600 dark:text-red-400 mt-1">
                    ! {errors.email}
                  </p>
                )}
              </div>

              {/* Pesan */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs font-bold uppercase tracking-wider text-zinc-950 dark:text-zinc-50 mb-1.5"
                >
                  PESAN *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tulis pesan atau obrolan kamu di sini..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`w-full px-3.5 py-2.5 border-2 font-mono text-xs sm:text-sm text-zinc-950 dark:text-zinc-50 focus:outline-hidden resize-y transition-colors ${
                    errors.message
                      ? 'border-red-600 bg-red-50 dark:bg-red-950/30'
                      : 'border-zinc-950 dark:border-zinc-50 bg-zinc-50 dark:bg-zinc-950 focus:bg-white dark:focus:bg-zinc-900'
                  }`}
                />
                {errors.message && (
                  <p id="message-error" className="font-mono text-xs text-red-600 dark:text-red-400 mt-1">
                    ! {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-zinc-950 dark:border-zinc-50 bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0_0_currentColor] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_currentColor] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer"
                >
                  <span>KIRIM PESAN</span>
                  <span>→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
