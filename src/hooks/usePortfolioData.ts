import { useEffect, useState } from 'react'
import { ApiError } from '@/lib/api/client'
import { portfolioService } from '@/lib/api/services/portfolio'
import type { Portfolio } from '@/lib/api/types/api'

export function usePortfolioData() {
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    void portfolioService
      .get()
      .then(({ data }) => {
        setPortfolio(data.data ?? null)
      })
      .catch((err: unknown) => {
        setError(err instanceof ApiError ? err.message : 'Error al cargar')
      })
      .finally(() => setLoading(false))
  }, [])

  return { portfolio, loading, error }
}
