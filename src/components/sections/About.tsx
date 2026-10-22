import type { Profile, SkillCategory } from '@/lib/api/types/api'

const PERSONA = ['Enfoque técnico', 'Detalle en datos', 'Entrega continua']

export function About({
  profile,
  categories,
}: {
  profile: Profile
  categories: SkillCategory[]
}) {
  const topSkills = categories.flatMap((c) => c.skills).slice(0, 8)
  const learning =
    profile.socials?.learning ||
    profile.specialty ||
    profile.title ||
    'Arquitectura backend'
  const headline = profile.headline || profile.title || profile.name

  return (
    <section id="sobre-mi" className="bg-folio-950 py-20 text-folio-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-teal-soft">Sobre mí</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-balance sm:text-5xl">
            {headline}
          </h2>
          {profile.bio ? (
            <p className="mt-6 text-base leading-relaxed text-folio-100/70 sm:text-lg">
              {profile.bio}
            </p>
          ) : null}

          <div className="mt-8 inline-flex items-center gap-3 text-left">
            <span className="grid size-8 place-items-center rounded-full bg-teal/15 text-teal-soft">
              ✦
            </span>
            <div>
              <p className="text-sm text-folio-100/90">Actualmente aprendiendo</p>
              <p className="text-xs text-folio-100/50">{learning}</p>
            </div>
          </div>
        </div>

        <dl className="mx-auto mt-14 flex max-w-3xl flex-wrap justify-center gap-10 text-center text-sm">
          <div>
            <dt className="text-folio-100/45">Experiencia</dt>
            <dd className="mt-1 font-display text-2xl">
              +{profile.yearsExperience} años
            </dd>
          </div>
          <div>
            <dt className="text-folio-100/45">Especialidad</dt>
            <dd className="mt-1 font-display text-2xl">
              {profile.specialty || '—'}
            </dd>
          </div>
          <div>
            <dt className="text-folio-100/45">Ubicación</dt>
            <dd className="mt-1 font-display text-2xl">
              {profile.location || 'Remoto'}
            </dd>
          </div>
        </dl>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-glass-border bg-glass p-6 md:col-span-2">
            <p className="text-sm text-teal-soft">Tech stack</p>
            <h3 className="mt-2 font-display text-2xl">Herramientas principales</h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {topSkills.map((skill) => (
                <li
                  key={skill.id}
                  className="rounded-full border border-glass-border bg-folio-900/80 px-3.5 py-1.5 text-sm text-folio-100/90"
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-glass-border bg-folio-900/80 p-6">
            <p className="text-sm text-teal-soft">Cómo trabajo</p>
            <h3 className="mt-2 font-display text-2xl">Principios</h3>
            <ul className="mt-6 space-y-2">
              {PERSONA.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-glass-border bg-folio-800/60 px-3 py-2 text-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
