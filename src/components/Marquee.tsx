const DEFAULT_ITEMS = [
  'BACKEND',
  'BASES DE DATOS',
  'LARAVEL',
  'POSTGRES',
  'ARQUITECTURA',
  'APIs',
  'FULLSTACK',
]

export function Marquee({ items = DEFAULT_ITEMS }: { items?: string[] }) {
  const loop = [...items, ...items]

  return (
    <div className="relative overflow-hidden bg-teal py-3 text-white">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap px-4 text-sm font-semibold tracking-[0.12em] uppercase">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="inline-flex items-center gap-10">
            <span>{item}</span>
            <span aria-hidden className="text-white/45">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
