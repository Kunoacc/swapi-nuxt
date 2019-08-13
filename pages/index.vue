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
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlanetCard from "~/components/PlanetCard.vue";
import StarshipCard from "~/components/StarshipCard.vue";
import CharacterCard from "~/components/CharacterCard.vue";
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
  components: {
    PlanetCard, StarshipCard, CharacterCard
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.h-half {
  height: calc(100vh / 1.5);
  min-height: 500px;
}

.container {
  @apply flex justify-center items-center text-center mx-auto;
}

.btn {
  transition: all 0.2s ease;
  @apply bg-blue-300 flex rounded-sm border-0 px-4 py-2 shadow;
}

.btn:hover {
  transition: all 0.2s ease;
  transform: scale(1, 1);
  @apply bg-blue-500 shadow-md;
}
</style>
