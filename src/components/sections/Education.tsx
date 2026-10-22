import type { Education as EducationType } from '@/lib/api/types/api'

const typeLabels: Record<string, string> = {
  pregrado: 'Pregrado',
  certificacion: 'Certificación',
  tecnico: 'Técnico',
  curso: 'Cursos',
}

export function Education({ items }: { items: EducationType[] }) {
  return (
    <section id="formacion" className="bg-folio-900 py-20 text-folio-50">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium text-teal-soft">Formación</p>
        <h2 className="mt-2 font-display text-4xl tracking-tight">Estudios</h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl border border-glass-border bg-glass p-6"
            >
              <p className="text-sm text-teal-soft">
                {typeLabels[item.type] ?? item.type}
                {item.period ? ` · ${item.period}` : ''}
              </p>
              <h3 className="mt-2 font-display text-xl">{item.title}</h3>
              <p className="mt-1 text-folio-100/60">{item.institution}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
