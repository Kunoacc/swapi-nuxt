export const starshipsApi = getData => ({
  async getStarhship (id) {
    try {
      const response = await getData(`starships/${id}/`)
      if (response.ok && response.status == 200) {
        return await response.json()
      }
      throw new Error(response.statusText)
    } catch (error) {
      return error
    }
  },

  async getStarships () {
    try {
      const response = await getData(`starships/`)
      if (response.ok && response.status == 200) {
        return await response.json()
      }
      throw new Error(response.statusText)
    } catch (error) {
      return error
    }
  },

  async searchStarships(query) {
    try {
      const response = await getData(`starships/?search=${encodeURI(query)}`)
      if (response.ok && response.status == 200) {
        return await response.json()
      }
      throw new Error(response.statusText)
    } catch (error) {
      return error
    }
  }
})
