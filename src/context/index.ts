import { createContext } from "react"

export const LocationContext = createContext<ILocationContext>({
  location: '',
  isLocation: false,
  setLocation: () => undefined,
  setIsLocation: () => undefined
})