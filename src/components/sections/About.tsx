import type { Profile } from '@/lib/api/types/api'

export function About({ profile }: { profile: Profile }) {
  return (
    <section id="sobre-mi" className="bg-sand-50 py-24 text-ink-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[auto_1.2fr_0.8fr] lg:items-start">
        {profile.avatarUrl ? (
          <img
            src={profile.avatarUrl}
            alt={`Retrato de ${profile.name}`}
            className="mx-auto h-40 w-40 rounded-full object-cover ring-1 ring-ink-900/10 lg:mx-0 lg:h-48 lg:w-48"
          />
        ) : null}
        <div>
          <p className="text-sm font-medium text-accent-700">Sobre mí</p>
          <h2 className="mt-2 font-display text-4xl tracking-tight">
            {profile.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-800/80">
            {profile.bio}
          </p>
        </div>
        <dl className="grid gap-4 self-start sm:grid-cols-3 lg:grid-cols-1">
          <Stat label="Experiencia" value={`+${profile.yearsExperience} años`} />
          <Stat label="Especialidad" value={profile.specialty ?? '—'} />
          <Stat label="Ubicación" value={profile.location ?? '—'} />
        </dl>
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-ink-900/10 pt-4">
      <dt className="text-sm text-ink-700/60">{label}</dt>
      <dd className="mt-2 font-display text-2xl">{value}</dd>
    </div>
  )
}
