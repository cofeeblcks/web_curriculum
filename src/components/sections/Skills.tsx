import type { SkillCategory } from '@/lib/api/types/api'

export function Skills({ categories }: { categories: SkillCategory[] }) {
  return (
    <section id="habilidades" className="bg-ink-950 py-24 text-ink-50">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium text-accent-300">Habilidades técnicas</p>
        <h2 className="mt-2 font-display text-4xl tracking-tight">Stack y herramientas</h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {categories.map((category) => (
            <div key={category.id}>
              <h3 className="font-display text-xl text-accent-200">{category.name}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill.id}
                    className="rounded-md border border-ink-100/10 bg-ink-900/60 px-3 py-1.5 text-sm text-ink-100/90"
                  >
                    {skill.name}
                    {skill.note ? (
                      <span className="ml-1 text-xs text-ink-100/50">
                        ({skill.note})
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
