<template>
  <div class="pb-8">
    <div class="w-full relative z-0">
      <div class="absolute h-full w-full justify-center text-white flex items-center z-10 flex-col">
        <h1 class="font-bold text-4xl mt-5">
          Star Wars Directory
        </h1>
        <p class="w-1/2 md:w1/3 lg:w-3/12 text-center my-8 text-base">
          Find your favourite characters, films, spaceships, planets all on the star wars directory.
        </p>
      </div>
      <div class="absolute h-full w-full bg-black opacity-50" />
      <img src="~/assets/images/background.jpg" class="h-half w-full object-cover" alt>
    </div>
    <div class="container" v-if="!loadingError">
      <div class="home-section">
        <!-- CHARACTERS -->
        <h2 class="text-3xl font-semibold section-title pb-2">
          Characters
        </h2>
        <div class="row" v-if="isLoading">
          <character-loader />
          <character-loader class="hidden md:block" />
          <character-loader class="hidden md:block" />
        </div>
        <div class="row items-stretch" v-else>
          <character-card :user="character" :image-url="$assetImage('people', 1, 4)"
          v-for="(character, index) in characters" :key="index" />
        </div>
      </div>

      <!-- STARSHIPS -->
      <div class="home-section">
        <h2 class="text-3xl font-semibold section-title pb-2">
          Starships
        </h2>
        <div class="row" v-if="isLoading">
          <starship-loader />
          <starship-loader class="hidden md:block"/>
          <starship-loader class="hidden md:block"/>
        </div>
        <div class="row items-stretch" v-else>
          <carousel :per-page="1" class="w-full" :per-page-custom="[[640,1], [768, 2], [1024, 3]]">
            <slide v-for="(starship, index) in starships" :key="index">
              <starship-card :image-url="$assetImage('starships', 1, 6)" :starship="starship" class="w-full" :is-carousel="true"/>
            </slide>
          </carousel>
        </div>
      </div>

      <!-- PLANETS -->
      <div class="home-section">
        <h2 class="text-3xl font-semibold section-title pb-2">
          Planets
        </h2>
        <div class="row" v-if="isLoading">
          <planet-loader />
          <planet-loader class="hidden md:block"/>
          <planet-loader class="hidden md:block"/>
        </div>
        <div class="row items-stretch" v-else>
          <carousel :per-page="1" class="w-full" :per-page-custom="[[640,1], [768, 2], [1024, 3]]">
            <slide v-for="(planet, index) in planets" :key="index">
              <planet-card :planet="planet" :image-url="$assetImage('planets', 1, 3, 'jpg')" :is-carousel="true" />
            </slide>
          </carousel>
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <div class="home-section py-40">
        <h3 class="font-semibold text-3xl text-gray-600">
          {{errorMessage}}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: true,
        loadingError: false,
        errorMessage: '',
        planets: [],
        starships: [],
        characters: [],
      }
    },
    async mounted() {
      await this.getData()
      this.isLoading = false
    },
    methods: {
      async getData(){
        try{
          const characters = await this.$api.getPeople()
          const planets = await this.$api.getPlanets()
          const starships = await this.$api.getStarships()
          console.log(characters.results)
          console.log(starships.results)
          console.log(planets.results)
          characters.results.length = 6
          planets.results.length = 6
          starships.results.length = 6
          this.characters = characters.results
          this.planets = planets.results
          this.starships = starships.results
        } catch(e){
          this.loadingError = true
          this.errorMessage = 'Something went wrong, please try again'
        }
      }
    }
  }

</script>
