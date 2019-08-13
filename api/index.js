import { starshipsApi } from './starships'
import { PlanetsApi } from './planets'
import { peopleApi } from './people'

export const api = getData => ({
  ...starshipsApi(getData),
  ...PlanetsApi(getData),
  ...peopleApi(getData),
  async search () {

  }
})
