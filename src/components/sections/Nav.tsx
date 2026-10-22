import type { Profile } from '@/lib/api/types/api'

const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Stack' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#formacion', label: 'Formación' },
  { href: '#contacto', label: 'Contacto' },
]

function initialsFrom(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export function Nav({ profile }: { profile: Profile }) {
  const initials = initialsFrom(profile.name)

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-3 text-folio-50">
          {profile.logoUrl ? (
            <img
              src={profile.logoUrl}
              alt=""
              className="h-10 w-10 rounded-full object-cover ring-1 ring-teal/40"
            />
          ) : (
            <span className="grid h-10 w-10 place-items-center rounded-full bg-teal/15 font-display text-sm font-bold text-teal-soft ring-1 ring-teal/30">
              {initials || 'CV'}
            </span>
          )}
          <span className="hidden font-display text-lg tracking-wide sm:block">
            {profile.name.split(' ').slice(0, 2).join(' ')}
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-glass-border bg-folio-900/70 px-2 py-1.5 text-sm text-folio-100/75 backdrop-blur-md md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 transition hover:bg-glass hover:text-teal-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-deep"
        >
          Contactar
        </a>
      </div>
    </header>
  )
}
