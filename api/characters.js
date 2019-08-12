export const charactersApi = () => ({
  async getCharacter(id) {
    try {
      const response = await fetch(`swapi.co/api/characters/${id}/`)
      if (response.ok) {
        return response.json()
      }
      throw new Error(response.statusText)
    } catch (error) {
      return error
    }
  },

  async geCharacters() {
    try {
      const response = await fetch(`swapi.co/api/characters/`)
      if (response.ok) {
        return response.json()
      }
      throw new Error(response.statusText)
    } catch (error) {
      return error
    }
  }
})
