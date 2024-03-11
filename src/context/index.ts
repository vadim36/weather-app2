import { createContext } from "react"

export const LocationContext = createContext<TLocationContext>({
  location: '',
  setLocation: () => undefined
})