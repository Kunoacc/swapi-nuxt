import { starshipsApi } from './starships'
import { PlanetsApi } from './planets'
import { peopleApi } from './people'

export const api = getData => ({
  ...starshipsApi(getData),
  ...PlanetsApi(getData),
  ...peopleApi(getData),
  async get (url) {
    try {
      const response = await fetch(url)
      if (response.ok && response.status == 200) {
        let data = await response.json()
        return {'url': response.url, ...data}
      }
      throw new Error(response.statusText)
    } catch (error) {
      return error
    }
  }
})
