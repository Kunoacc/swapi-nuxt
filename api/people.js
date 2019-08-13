export const peopleApi = getData => ({
  async getPerson (id) {
    try {
      const response = await getData(`people/${id}/`)
      if (response.ok) {
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
      if (response.ok) {
        return await response.json()
      }
      throw new Error(response.statusText)
    } catch (error) {
      return error
    }
  }
})
