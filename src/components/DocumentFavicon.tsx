import { useEffect } from 'react'

const DEFAULT_FAVICON = '/favicon.svg'

export function DocumentFavicon({ logoUrl }: { logoUrl: string | null }) {
  useEffect(() => {
    const link = document.querySelector("link[rel='icon']") as HTMLLinkElement | null
    if (!link) return
    link.href = logoUrl || DEFAULT_FAVICON
  }, [logoUrl])

  return null
}
