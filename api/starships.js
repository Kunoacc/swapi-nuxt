export const starshipsApi = getData => ({
  async getStarhship (id) {
    try {
      const response = await getData(`starships/${id}/`)
      if (response.ok && response.status == 200) {
        let data = await response.json()
        return {'url': response.url, ...data}
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
        let data = await response.json()
        return {'url': response.url, ...data}
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
        let data = await response.json()
        return {'url': response.url, ...data}
      }
      throw new Error(response.statusText)
    } catch (error) {
      return error
    }
  }
})
