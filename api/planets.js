export const PlanetsApi = getData => ({
  async getPlanet (id) {
    try {
      const response = await getData(`planets/${id}/`)
      if (response.ok && response.status == 200) {
        return await response.json()
      }
      throw new Error(response.statusText)
    } catch (error) {
      return error
    }
  },

  async getPlanets () {
    try {
      const response = await getData(`planets/`)
      if (response.ok && response.status == 200) {
        return await response.json()
      }
      throw new Error(response.statusText)
    } catch (error) {
      return error
    }
  },

  async searchPlanets(query) {
    try {
      const response = await getData(`planets/?search=${encodeURI(query)}`)
      if (response.ok && response.status == 200) {
        return await response.json()
      }
      throw new Error(response.statusText)
    } catch (error) {
      return error
    }
  }
})
