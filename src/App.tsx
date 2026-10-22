import { DocumentFavicon } from '@/components/DocumentFavicon'
import { Marquee } from '@/components/Marquee'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Education } from '@/components/sections/Education'
import { Experience } from '@/components/sections/Experience'
import { Footer } from '@/components/sections/Footer'
import { Hero } from '@/components/sections/Hero'
import { Nav } from '@/components/sections/Nav'
import { Skills } from '@/components/sections/Skills'
import { usePortfolioData } from '@/hooks/usePortfolioData'

export default function App() {
  const { portfolio, loading, error } = usePortfolioData()

  if (loading) {
    return (
      <div className="grid min-h-screen place-items-center bg-folio-950 text-folio-100/70">
        Cargando portfolio…
      </div>
    )
  }

  if (error || !portfolio) {
    return (
      <div className="grid min-h-screen place-items-center bg-folio-950 px-6 text-center text-folio-50">
        <div>
          <p className="font-display text-2xl">No se pudo cargar el portfolio</p>
          <p className="mt-2 text-folio-100/60">{error || 'Sin datos'}</p>
        </div>
      </div>
    )
  }

  const { profile, skillCategories, experiences, educations } = portfolio

  return (
    <div className="bg-folio-950">
      <DocumentFavicon logoUrl={profile.logoUrl} />
      <Nav profile={profile} />
      <Hero profile={profile} />
      <Marquee />
      <About profile={profile} categories={skillCategories} />
      <Skills categories={skillCategories} />
      <Experience items={experiences} />
      <Education items={educations} />
      <Contact profile={profile} />
      <Footer profile={profile} />
    </div>
  )
}
