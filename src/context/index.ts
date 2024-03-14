import { createContext } from "react"

export const LocationContext = createContext<ILocationContext>({
  location: '',
  setLocation: () => undefined,
})