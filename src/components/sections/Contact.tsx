import { useState, type FormEvent } from 'react'
import { ApiError } from '@/lib/api/client'
import { portfolioService } from '@/lib/api/services/portfolio'
import type { Profile } from '@/lib/api/types/api'

export function Contact({ profile }: { profile: Profile }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    setSending(true)
    setError('')
    setStatus('')
    try {
      await portfolioService.contact({ name, email, message })
      setStatus('Mensaje enviado. Te responderé pronto.')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'No se pudo enviar')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contacto" className="bg-folio-950 py-20 text-folio-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 rounded-3xl bg-teal px-8 py-10 text-white sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              ¡Conectemos y creemos algo increíble!
            </h2>
            <p className="mt-3 text-sm text-white/80">
              Escríbeme para colaboraciones, consultas o simplemente para saludar.
            </p>
          </div>
          <a
            href={
              profile.publicEmail
                ? `mailto:${profile.publicEmail}`
                : '#contacto-form'
            }
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-folio-950 px-6 py-3 text-sm font-semibold text-folio-50 transition hover:bg-folio-800"
          >
            Contact me →
          </a>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-teal-soft">Contacto</p>
            <h3 className="mt-2 font-display text-3xl tracking-tight">
              ¿Tienes un proyecto en mente?
            </h3>
            <dl className="mt-8 space-y-4 text-sm">
              {profile.publicEmail ? (
                <div>
                  <dt className="text-folio-100/45">Correo</dt>
                  <dd>
                    <a
                      href={`mailto:${profile.publicEmail}`}
                      className="font-medium text-folio-50 hover:text-teal-soft"
                    >
                      {profile.publicEmail}
                    </a>
                  </dd>
                </div>
              ) : null}
              {profile.phones?.length ? (
                <div>
                  <dt className="text-folio-100/45">Teléfonos</dt>
                  <dd className="space-y-1 font-medium">
                    {profile.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="block hover:text-teal-soft"
                      >
                        {phone}
                      </a>
                    ))}
                  </dd>
                </div>
              ) : null}
              {profile.location ? (
                <div>
                  <dt className="text-folio-100/45">Ubicación</dt>
                  <dd className="font-medium">{profile.location}</dd>
                </div>
              ) : null}
            </dl>
          </div>

          <form
            id="contacto-form"
            onSubmit={onSubmit}
            className="space-y-4 rounded-3xl border border-glass-border bg-glass p-6"
          >
            <label className="block text-sm">
              Nombre
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-xl border border-glass-border bg-folio-900 px-3 py-2.5 outline-none focus:border-teal/40"
                required
              />
            </label>
            <label className="block text-sm">
              Correo
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-glass-border bg-folio-900 px-3 py-2.5 outline-none focus:border-teal/40"
                required
              />
            </label>
            <label className="block text-sm">
              Mensaje
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="mt-1 w-full rounded-xl border border-glass-border bg-folio-900 px-3 py-2.5 outline-none focus:border-teal/40"
                required
              />
            </label>
            {status ? <p className="text-sm text-teal-soft">{status}</p> : null}
            {error ? <p className="text-sm text-rose-400">{error}</p> : null}
            <button
              type="submit"
              disabled={sending}
              className="rounded-full bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-deep disabled:opacity-60"
            >
              {sending ? 'Enviando…' : 'Enviar mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
