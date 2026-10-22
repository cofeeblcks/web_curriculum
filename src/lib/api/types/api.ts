export interface ApiResponse<T> {
  status: 'success' | 'error'
  message?: string
  data?: T
  meta?: { pagination?: PaginationMeta }
  errors?: Record<string, string[]>
}

export interface PaginationMeta {
  total: number
  count: number
  per_page: number
  current_page: number
  total_pages: number
}

export interface Profile {
  id: number
  name: string
  title: string | null
  headline: string | null
  bio: string | null
  yearsExperience: number
  specialty: string | null
  location: string | null
  available: boolean
  logoUrl: string | null
  avatarUrl: string | null
  publicEmail: string | null
  phones: string[]
  socials: Record<string, string>
}

export interface Skill {
  id: number
  name: string
  note: string | null
  sortOrder: number
}

export interface SkillCategory {
  id: number
  name: string
  sortOrder: number
  skills: Skill[]
}

export interface Experience {
  id: number
  title: string
  company: string
  location: string | null
  startsOn: string
  endsOn: string | null
  description: string | null
  techTags: string[]
  sortOrder: number
}

export interface Education {
  id: number
  type: string
  title: string
  institution: string
  period: string | null
  sortOrder: number
}

export interface Portfolio {
  profile: Profile
  skillCategories: SkillCategory[]
  experiences: Experience[]
  educations: Education[]
}
