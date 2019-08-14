export const peopleApi = getData => ({
  async getPerson (id) {
    try {
      const response = await getData(`people/${id}/`)
      if (response.ok && response.status == 200) {
        return await response.json()
      }
      throw new Error(response.statusText)
    } catch (error) {
      return error
    }
  },

  async getPeople () {
    try {
      const response = await getData(`people/`)
      if (response.ok && response.status == 200) {
        return await response.json()
      }
      throw new Error(response.statusText)
    } catch (error) {
      return error
    }
  },

  async searchPeople(query) {
    try {
      const response = await getData(`people/?search=${encodeURI(query)}`)
      if (response.ok && response.status == 200) {
        return await response.json()
      }
      throw new Error(response.statusText)
    } catch (error) {
      return error
    }
  }
})
