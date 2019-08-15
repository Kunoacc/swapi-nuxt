<template>
  <div>
    <div class="w-full relative z-0 shadow-lg">
      <div class="absolute h-full w-full justify-center text-white flex items-center z-10 flex-col">
        <h1 class="font-bold text-2xl mt-10">
          Characters / {{character.name}}
        </h1>
      </div>
      <div class="absolute h-full w-full bg-black opacity-50" />
      <img src="~/assets/images/background.jpg" class="h-64 w-full object-cover" alt>
    </div>
    <div class="container">
      <div class="home-section">
        <div class="flex-col md:flex-row row mt-0 bg-white items-start md:items-center relative">
          <div class="h-32 mx-auto mt-10 md:mt-0 md:mx-0 md:h-full w-2/4 md:w-1/4 img relative md:absolute"
            :style="{backgroundImage: `url(${$assetImage('people', 1, 3)})`}" />
          <div
            class="flex flex-col text-center md:text-left pb-8 md:py-8 w-full md:w-3/4 mt-10 md:mt-0 md:ml-auto pl-0 md:pl-12">
            <p><b>Name:</b> {{character.name}}</p>
            <p><b>Birth Year:</b> {{character.birth_year}}</p>
            <p><b>Eye Color:</b> {{character.eye_color}}</p>
            <p><b>Gender:</b> {{character.gender}}</p>
            <p><b>Species:</b> {{species}}</p>
            <p><b>Skin Color:</b> {{character.skin_color}}</p>
            <p><b>Mass:</b> {{character.mass}}</p>
            <p><b>Height:</b> {{character.height}}</p>
            <p><b>Hair Color:</b> {{character.hair_color}}</p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
      <div class="home-section">
        <div class="row pb-8">
          <div class="w-full md:w-1/2">
            <h2 class="text-3xl font-semibold section-title pb-2">
              Home World
            </h2>
            <div class="row items-stretch">
              <carousel :per-page="1" class="w-full" :per-page-custom="[[640,1], [768, 1], [1024, 2]]">
                <slide v-for="(planet, index) in [planet]" :key="index">
                  <planet-card :planet="planet" :image-url="$assetImage('planets', 1, 3, 'jpg')" :is-carousel="true" />
                </slide>
              </carousel>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <h2 class="text-3xl font-semibold section-title pb-2">
              Starships
            </h2>
            <div class="row items-stretch" v-if="starships.length > 0">
              <carousel :per-page="1" class="w-full" :per-page-custom="[[640,1], [768, 1], [1024, 2]]">
                <slide v-for="(starship, index) in starships" :key="index">
                  <starship-card :image-url="$assetImage('starships', 1, 6)" :starship="starship" class="w-full"
                    :is-carousel="true" />
                </slide>
              </carousel>
            </div>
            <div class="row py-24 justify-center" v-else>
              <h2 class="text-2xl font-semibold text-gray-500 pb-2">
                {{character.name}} has no starships 😢
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    async validate({
      params
    }) {
      let data = await $nuxt.$api.searchPeople(params.name.replace(/-/g, " "))
      if (data.results.length == 0) {
        return false
      } else {
        return true
      }
    },

    async asyncData({
      params
    }) {
      let {
        results: character
      } = await $nuxt.$api.searchPeople(params.name.replace(/-/g, " "))
      console.log(character[0])
      let {
        name: species
      } = await $nuxt.$api.get(character[0].species[0])
      let starships = []
      character[0].starships.forEach(async (val) => starships.push(await $nuxt.$api.get(val)))
      let planet = await $nuxt.$api.get(character[0].homeworld)
      return {
        character: character[0],
        species,
        starships,
        planet
      }
    }
  }

</script>

<style lang="scss" scoped>
  .img {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    @apply bg-gray-400;
  }

</style>
