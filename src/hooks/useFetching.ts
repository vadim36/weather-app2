import { useState } from "react";

export function useFetching(callback: Function):useFetchingReturn {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  async function fetching() {
    try {
      setIsLoading(true)
      await callback()
    } catch (error: unknown) {
      setError((error as Error).message)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, error]
}