import axios from 'axios'
import type { AxiosError } from 'axios'
import type { ApiResponse } from '@/lib/api/types/api'
import { API_BASE_URL } from '@/lib/config'

export class ApiError extends Error {
  status: number
  fieldErrors: Record<string, string[]>

  constructor(
    message: string,
    status: number,
    fieldErrors: Record<string, string[]> = {},
  ) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.fieldErrors = fieldErrors
  }
}

export function parseApiError(error: unknown): ApiError {
  if (error instanceof ApiError) return error

  const axiosError = error as AxiosError<ApiResponse<unknown>>
  const status = axiosError.response?.status ?? 0
  const data = axiosError.response?.data

  if (data?.status === 'error') {
    return new ApiError(
      data.message ?? 'Ha ocurrido un error.',
      status,
      data.errors ?? {},
    )
  }

  if (axiosError.message === 'Network Error') {
    return new ApiError(
      'No se pudo conectar con el servidor. Verifica que la API esté en ejecución.',
      0,
    )
  }

  return new ApiError(
    axiosError.message || 'Ha ocurrido un error inesperado.',
    status,
  )
}

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

api.interceptors.response.use(
  (res) => res,
  (error: AxiosError<ApiResponse<unknown>>) =>
    Promise.reject(parseApiError(error)),
)

export default api
