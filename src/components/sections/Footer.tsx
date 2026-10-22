import type { Profile } from '@/lib/api/types/api'

function initialsFrom(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export function Footer({ profile }: { profile: Profile }) {
  const year = new Date().getFullYear()
  const github = profile.socials?.github
  const linkedin = profile.socials?.linkedin
  const initials = initialsFrom(profile.name)

  return (
    <footer className="border-t border-glass-border bg-folio-950 py-10 text-folio-100/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          {profile.logoUrl ? (
            <img
              src={profile.logoUrl}
              alt=""
              className="h-9 w-9 rounded-full object-cover ring-1 ring-glass-border"
            />
          ) : (
            <span className="grid h-9 w-9 place-items-center rounded-full bg-teal/15 font-display text-xs font-bold text-teal-soft ring-1 ring-glass-border">
              {initials || 'CV'}
            </span>
          )}
          <p className="text-sm">
            © {year} {profile.name}
          </p>
        </div>
        <div className="flex gap-4 text-sm">
          {github ? (
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-soft"
            >
              GitHub
            </a>
          ) : null}
          {linkedin ? (
            <a
              href={`https://www.linkedin.com/in/${linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-soft"
            >
              LinkedIn
            </a>
          ) : null}
          <a href="#top" className="hover:text-teal-soft">
            Arriba ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
