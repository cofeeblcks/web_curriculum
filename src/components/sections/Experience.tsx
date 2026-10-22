import type { Experience as ExperienceType } from '@/lib/api/types/api'

function formatRange(startsOn: string, endsOn: string | null) {
  const startYear = startsOn.slice(0, 4)
  if (!endsOn) return `${startYear} – Actualidad`
  const endYear = endsOn.slice(0, 4)
  return startYear === endYear ? startYear : `${startYear} – ${endYear}`
}

export function Experience({ items }: { items: ExperienceType[] }) {
  return (
    <section id="experiencia" className="bg-sand-50 py-24 text-ink-950">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium text-accent-700">Experiencia profesional</p>
        <h2 className="mt-2 font-display text-4xl tracking-tight">Trayectoria</h2>

        <ol className="mt-12 space-y-10 border-l border-ink-900/15 pl-6">
          {items.map((item) => (
            <li key={item.id} className="relative">
              <span className="absolute top-1.5 -left-[1.9rem] h-3 w-3 rounded-full bg-accent-500 ring-4 ring-sand-50" />
              <p className="text-sm text-accent-800">
                {formatRange(item.startsOn, item.endsOn)}
                {item.location ? ` · ${item.location}` : ''}
              </p>
              <h3 className="mt-1 font-display text-2xl">{item.title}</h3>
              <p className="text-ink-800/70">· {item.company}</p>
              {item.description ? (
                <p className="mt-3 max-w-3xl leading-relaxed text-ink-800/80">
                  {item.description}
                </p>
              ) : null}
              {item.techTags?.length ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.techTags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-ink-950/5 px-2.5 py-1 text-xs text-ink-800"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
