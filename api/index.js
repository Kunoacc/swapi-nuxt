import { starshipsApi } from './starships'
import { PlanetsApi } from './planets'
import { charactersApi } from './characters'

export const api = () => ({
  ...starshipsApi(),
  ...PlanetsApi(),
  ...charactersApi()
})
