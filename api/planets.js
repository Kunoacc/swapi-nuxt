export const PlanetsApi = () => ({
  async getPlanet (id) {
    try {
      const response = await fetch(`swapi.co/api/planets/${id}/`)
      if (response.ok) {
        return await response.json()
      }
      throw new Error(response.statusText)
    } catch (error) {
      return error
    }
  },

  async getPlanets () {
    try {
      const response = await fetch(`swapi.co/api/planets/`)
      if (response.ok) {
        return await response.json()
      }
      throw new Error(response.statusText)
    } catch (error) {
      return error
    }
  }
})