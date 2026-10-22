import api from '@/lib/api/client'
import type { ApiResponse, Portfolio } from '@/lib/api/types/api'

export const portfolioService = {
  get() {
    return api.get<ApiResponse<Portfolio>>('/portfolio')
  },
  contact(payload: { name: string; email: string; message: string }) {
    return api.post<ApiResponse<unknown>>('/contact', payload)
  },
}
