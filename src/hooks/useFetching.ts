import { useState } from "react"

export default function useFetching(callback: Function):TUseFetching {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  async function fetching():Promise<void> {
    try {
      setError('')
      setIsLoading(true)
      await callback()
    } catch (error: unknown) {
      const message: string = (error as Error).message ?? 'Unexpected error'
      setError(message)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, error]
}