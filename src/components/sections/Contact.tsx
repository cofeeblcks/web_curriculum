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
    <section id="contacto" className="bg-sand-100 py-24 text-ink-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-accent-700">Contacto</p>
          <h2 className="mt-2 font-display text-4xl tracking-tight">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mt-4 text-lg text-ink-800/75">
            No dudes en escribirme. Estoy disponible para conversar sobre
            desarrollo backend, bases de datos y arquitectura web.
          </p>

          <dl className="mt-10 space-y-4 text-sm">
            {profile.publicEmail ? (
              <div>
                <dt className="text-ink-700/60">Correo</dt>
                <dd>
                  <a
                    href={`mailto:${profile.publicEmail}`}
                    className="font-medium hover:text-accent-800"
                  >
                    {profile.publicEmail}
                  </a>
                </dd>
              </div>
            ) : null}
            {profile.phones?.length ? (
              <div>
                <dt className="text-ink-700/60">Teléfonos</dt>
                <dd className="space-y-1 font-medium">
                  {profile.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="block hover:text-accent-800"
                    >
                      {phone}
                    </a>
                  ))}
                </dd>
              </div>
            ) : null}
            {profile.location ? (
              <div>
                <dt className="text-ink-700/60">Ubicación</dt>
                <dd className="font-medium">{profile.location}</dd>
              </div>
            ) : null}
          </dl>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-4 border border-ink-900/10 bg-sand-50 p-6"
        >
          <label className="block text-sm">
            Nombre
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full border border-ink-900/15 bg-white px-3 py-2"
              required
            />
          </label>
          <label className="block text-sm">
            Correo
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full border border-ink-900/15 bg-white px-3 py-2"
              required
            />
          </label>
          <label className="block text-sm">
            Mensaje
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="mt-1 w-full border border-ink-900/15 bg-white px-3 py-2"
              required
            />
          </label>
          {status ? <p className="text-sm text-accent-800">{status}</p> : null}
          {error ? <p className="text-sm text-rose-700">{error}</p> : null}
          <button
            type="submit"
            disabled={sending}
            className="bg-ink-950 px-5 py-3 text-sm font-semibold text-sand-50 transition hover:bg-ink-800 disabled:opacity-60"
          >
            {sending ? 'Enviando…' : 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </section>
  )
}
