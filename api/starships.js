export const starshipsApi = () => ({
  async getStarhship (id) {
    try {
      const response = await fetch(`swapi.co/api/starships/${id}/`)
      if (response.ok) {
        return await response.json()
      }
      throw new Error(response.statusText)
    } catch (error) {
      return error
    }
  },

  async getStarships () {
    try {
      const response = await fetch(`swapi.co/api/starships/`)
      if (response.ok) {
        return await response.json()
      }
      throw new Error(response.statusText)
    } catch (error) {
      return error
    }
  }
})
