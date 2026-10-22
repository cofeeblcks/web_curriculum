import type { Experience as ExperienceType } from '@/lib/api/types/api'

function formatRange(startsOn: string, endsOn: string | null) {
  const startYear = startsOn.slice(0, 4)
  if (!endsOn) return `${startYear} – Actualidad`
  const endYear = endsOn.slice(0, 4)
  return startYear === endYear ? startYear : `${startYear} – ${endYear}`
}

export function Experience({ items }: { items: ExperienceType[] }) {
  return (
    <section id="experiencia" className="relative overflow-hidden bg-folio-950 py-24 text-folio-50">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 h-[420px] bg-[radial-gradient(ellipse_at_center,rgba(41,128,185,0.12),transparent_65%)]" />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium text-teal-soft">Experiencia</p>
          <h2 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
            Dónde he trabajado
          </h2>
        </div>

        <ol className="mt-14 space-y-0">
          {items.map((item, index) => (
            <li key={item.id}>
              {index > 0 ? (
                <div className="my-8 h-px w-full bg-glass-border" />
              ) : null}
              <div className="grid gap-4 sm:grid-cols-[1fr_1.1fr] sm:gap-8">
                <div>
                  <h3 className="font-display text-xl leading-snug">
                    {item.title}
                    <span className="text-teal-soft">, {item.company}</span>
                  </h3>
                  <p className="mt-2 text-xs tracking-wide text-folio-100/45 uppercase">
                    {formatRange(item.startsOn, item.endsOn)}
                    {item.location ? ` / ${item.location}` : ''}
                  </p>
                </div>
                <div>
                  {item.description ? (
                    <p className="text-sm leading-relaxed text-folio-100/70">
                      {item.description}
                    </p>
                  ) : null}
                  {item.techTags?.length ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.techTags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-glass-border px-2.5 py-1 text-xs text-folio-100/70"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
