import { Dashboard } from "../pages/Dashboard"
import { Settings } from "../pages/Settings"
import { Paths } from "../utils/enums"

export const routes: Route[] = [
  { title: 'Dashboard', path: Paths.dashboard, element: Dashboard },
  { title: 'Settings', path: Paths.settings, element: Settings}
]