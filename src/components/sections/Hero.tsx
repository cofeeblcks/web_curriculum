import { motion, useReducedMotion } from 'motion/react'
import type { Profile } from '@/lib/api/types/api'

export function Hero({ profile }: { profile: Profile }) {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-ink-950 text-ink-50"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(45,212,191,0.18),transparent_45%),radial-gradient(ellipse_at_80%_10%,rgba(14,165,233,0.16),transparent_40%),linear-gradient(160deg,#04131a_0%,#0b1f2a_45%,#071018_100%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px]" />

      <motion.div
        className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-6 pb-20 pt-32"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="max-w-4xl font-display text-5xl leading-[0.95] font-semibold tracking-tight text-balance sm:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-ink-100/75 sm:text-xl">
          {profile.headline}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#contacto"
            className="rounded-md bg-accent-500 px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-accent-400"
          >
            Contactar
          </a>
          <a
            href="#experiencia"
            className="rounded-md border border-ink-100/20 px-5 py-3 text-sm font-semibold text-ink-50 transition hover:border-accent-400/50 hover:text-accent-200"
          >
            Ver experiencia
          </a>
        </div>
      </motion.div>
    </section>
  )
}
