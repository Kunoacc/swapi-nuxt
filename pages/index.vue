<template>
  <div>
    <div class="w-full relative z-0">
      <div class="absolute h-full w-full justify-center text-white flex items-center z-10 flex-col">
        <h1 class="font-bold text-2xl mt-5">Star Wars Directory</h1>
        <p class="w-1/2 md:w1/3 lg:w-3/12 text-center my-8">
          Find your favourite characters, films, spaceships, planets all on the star wars directory. Begin with a simple search.
        </p>
        <input
        type="text"
        class="py-2 px-4 mb-10 w-2/3 md:w-1/3 text-gray-800 focus:border-black focus:outline-none focus:shadow-md"
        placeholder="Enter search query here">
      </div>
      <div class="absolute h-full w-full bg-black opacity-50" />
      <img src="~/assets/images/background.jpg" class="h-half w-full object-cover" alt>
    </div>
    <div class="container">
      <div class="px-4">
        <div class="flex flex-wrap -mx-4 mt-4">
        <!-- <PlanetCard class="px-2"></PlanetCard> -->
        <!-- <StarshipCard class="px-4 w-1/2 my-4"></StarshipCard> -->
        <character-card class="px-4 w-1/3 my-4" :user="user"></character-card>
        <character-card class="px-4 w-1/3 my-4" :user="user"></character-card>
        <character-card class="px-4 w-1/3 my-4" :user="user"></character-card>
        <character-card class="px-4 w-1/3 my-4" :user="user"></character-card>
        <starship-loader class="px-4 w-1/3 my-4"></starship-loader>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    isLoading: false,
    planets: [],
    starships: [],
    characters: [],
    user: {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
    }
    }
  },
  mounted: function () {
    this.isLoading = true;

  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
