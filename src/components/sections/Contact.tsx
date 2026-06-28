'use client'

import { useState } from 'react'

const objectifs = [
  { value: 'course', label: 'Course à pied / Trail' },
  { value: 'poids', label: 'Perte de poids' },
  { value: 'retraite', label: 'Cap retraite 60+' },
  { value: 'indecis', label: 'Je ne sais pas encore' },
]

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Erreur serveur')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="bg-white"
      style={{ padding: 'clamp(44px,7vh,80px) 0' }}
    >
      <div className="w-[min(1120px,90vw)] mx-auto flex flex-wrap gap-[clamp(40px,5vw,80px)] items-start">

        {/* Informations */}
        <div data-reveal="" className="flex-[1_1_360px]">
          <p className="m-0 mb-4 font-semibold text-[clamp(13px,1.4vw,16px)] tracking-[0.02em] text-[#1f4a37]">
            Contact
          </p>

          <h2
            className="m-0 font-bold"
            style={{
              fontSize: 'clamp(30px,4.6vw,56px)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              textWrap: 'balance',
            }}
          >
            On démarre votre parcours ?
          </h2>

          <p
            className="mt-[clamp(18px,2.4vw,26px)] mb-0 text-[#6e6e73] max-w-[440px]"
            style={{ fontSize: 'clamp(17px,1.6vw,20px)', lineHeight: 1.55 }}
          >
            Le premier échange est offert et sans engagement.
          </p>

          <div className="flex flex-col gap-[18px] mt-[clamp(30px,4vw,40px)]">
            <div>
              <p className="m-0 mb-[3px] text-[12px] tracking-[0.04em] uppercase font-semibold text-[#86868b]">
                Zone d&apos;intervention
              </p>
              <p className="m-0 text-[16px] font-medium">
                Rennes Ouest · Montfort-sur-Meu et alentours
              </p>
            </div>
            <div>
              <p className="m-0 mb-[3px] text-[12px] tracking-[0.04em] uppercase font-semibold text-[#86868b]">
                Téléphone
              </p>
              <p className="m-0 text-[16px] font-medium text-[#6e6e73]">À renseigner</p>
            </div>
            <div>
              <p className="m-0 mb-[3px] text-[12px] tracking-[0.04em] uppercase font-semibold text-[#86868b]">
                E-mail
              </p>
              <p className="m-0 text-[16px] font-medium text-[#6e6e73]">À renseigner</p>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div
          data-reveal=""
          data-reveal-delay="120"
          className="flex-[1_1_400px] bg-[#f5f5f7] rounded-[24px]"
          style={{ padding: 'clamp(26px,3vw,40px)' }}
        >
          {status === 'success' ? (
            <div className="text-center py-10 px-2">
              <div className="w-14 h-14 rounded-full bg-[#1f4a37] text-white flex items-center justify-center text-[26px] mx-auto mb-[18px]">
                ✓
              </div>
              <h3 className="m-0 mb-2 text-[22px] font-bold tracking-tight">
                Merci, c&apos;est noté !
              </h3>
              <p className="m-0 text-[15px] text-[#6e6e73] leading-[1.5]">
                Je vous recontacte sous 48h pour votre premier échange offert.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>

              <label className="flex flex-col gap-[7px] text-[13px] font-semibold text-[#1d1d1f]">
                Nom
                <input
                  type="text"
                  name="nom"
                  required
                  placeholder="Votre nom"
                  className="px-[15px] py-[13px] border border-black/[0.14] rounded-xl text-[16px] bg-white outline-none transition-colors duration-200 focus:border-[#1f4a37]"
                />
              </label>

              <label className="flex flex-col gap-[7px] text-[13px] font-semibold text-[#1d1d1f]">
                E-mail
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="vous@exemple.fr"
                  className="px-[15px] py-[13px] border border-black/[0.14] rounded-xl text-[16px] bg-white outline-none transition-colors duration-200 focus:border-[#1f4a37]"
                />
              </label>

              <label className="flex flex-col gap-[7px] text-[13px] font-semibold text-[#1d1d1f]">
                Objectif
                <select
                  name="objectif"
                  className="px-[15px] py-[13px] border border-black/[0.14] rounded-xl text-[16px] bg-white outline-none transition-colors duration-200 focus:border-[#1f4a37] text-[#1d1d1f]"
                >
                  {objectifs.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-[7px] text-[13px] font-semibold text-[#1d1d1f]">
                Message
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Parlez-moi de votre projet…"
                  className="px-[15px] py-[13px] border border-black/[0.14] rounded-xl text-[16px] bg-white outline-none resize-y font-[inherit] transition-colors duration-200 focus:border-[#1f4a37]"
                />
              </label>

              {status === 'error' && (
                <p className="m-0 text-[14px] text-red-600 text-center">
                  Une erreur est survenue. Veuillez réessayer.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-1 bg-[#1f4a37] text-white border-none font-semibold text-[16px] py-[15px] px-6 rounded-full cursor-pointer transition-colors duration-200 font-[inherit] hover:bg-[#25593f] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Envoi en cours…' : 'Envoyer ma demande'}
              </button>

              <p className="m-1 text-[13px] text-[#86868b] text-center">
                Réponse sous 48h. Le premier échange est offert.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
