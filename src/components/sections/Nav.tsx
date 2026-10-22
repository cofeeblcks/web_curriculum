import type { Profile } from '@/lib/api/types/api'

const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
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
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-3 text-ink-50">
          {profile.logoUrl ? (
            <img
              src={profile.logoUrl}
              alt=""
              className="h-10 w-10 rounded-full object-cover ring-1 ring-accent-400/40"
            />
          ) : (
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-500/20 font-display text-sm font-bold text-accent-300 ring-1 ring-accent-400/40">
              {initials || 'HC'}
            </span>
          )}
          <span className="hidden font-display text-lg tracking-wide sm:block">
            {profile.name.split(' ').slice(0, 2).join(' ')}
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-ink-100/80 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-accent-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
