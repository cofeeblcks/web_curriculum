import { motion, useReducedMotion } from 'motion/react'
import type { Profile } from '@/lib/api/types/api'

export function Hero({ profile }: { profile: Profile }) {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-folio-950 pb-14 pt-28 text-folio-50"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(41,128,185,0.28),transparent_55%),radial-gradient(ellipse_at_85%_35%,rgba(93,173,226,0.1),transparent_40%)]" />

      <motion.div
        className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        {profile.available ? (
          <p className="inline-flex items-center gap-2 rounded-full border border-teal/35 bg-teal/10 px-3 py-1 text-xs font-medium text-teal-soft">
            <span className="size-1.5 rounded-full bg-teal-soft" />
            Disponible para proyectos
          </p>
        ) : null}

        <div className="relative mt-8">
          <div className="absolute inset-0 scale-110 rounded-full bg-teal/20 blur-2xl" aria-hidden />
          {profile.avatarUrl ? (
            <img
              src={profile.avatarUrl}
              alt=""
              className="relative mx-auto size-36 rounded-full object-cover object-top sm:size-44"
            />
          ) : (
            <div className="relative mx-auto grid size-36 place-items-center rounded-full bg-folio-800 font-display text-4xl text-teal-soft sm:size-44">
              {profile.name.slice(0, 1)}
            </div>
          )}
        </div>

        <h1 className="mt-6 font-display text-3xl tracking-tight sm:text-4xl">
          {profile.name}
        </h1>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#contacto"
            className="rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-deep"
          >
            Contactar
          </a>
          <a
            href="#sobre-mi"
            className="rounded-full border border-glass-border bg-glass px-6 py-3 text-sm font-semibold text-folio-50 transition hover:border-teal/40 hover:text-teal-soft"
          >
            Conocer más
          </a>
        </div>
      </motion.div>
    </section>
  )
}
