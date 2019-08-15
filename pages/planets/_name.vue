<template>
  <div>
    <div class="w-full relative z-0 shadow-lg">
      <div class="absolute h-full w-full justify-center text-white flex items-center z-10 flex-col">
        <h1 class="font-bold text-2xl mt-10">
          Starships / {{planet.name}}
        </h1>
      </div>
      <div class="absolute h-full w-full bg-black opacity-50" />
      <img src="~/assets/images/background.jpg" class="h-64 w-full object-cover" alt>
    </div>
    <div class="container">
      <div class="home-section">
        <div class="flex-col md:flex-row row mt-0 bg-white items-start md:items-center relative">
          <div class="h-32 mx-auto mt-10 md:mt-0 md:mx-0 md:h-full w-2/4 md:w-1/4 img relative md:absolute"
            :style="{backgroundImage: `url(${$assetImage('planets', 1, 3, 'jpg')})`}" />
          <div
            class="flex flex-col text-center md:text-left pb-8 md:py-8 w-full md:w-3/4 mt-10 md:mt-0 md:ml-auto pl-0 md:pl-12">
            <p><b>Name:</b> {{planet.name}}</p>
            <p><b>Diameter:</b> {{$numberFormat(planet.diameter)}}</p>
            <p><b>Orbital Period:</b> {{$numberFormat(planet.orbital_period)}}</p>
            <p><b>Gravity:</b> {{$numberFormat(planet.gravity)}}</p>
            <p><b>Population:</b> {{$numberFormat(planet.population)}}</p>
            <p><b>Rotation Period:</b> {{$numberFormat(planet.rotation_period)}}</p>
            <p><b>Surface Water:</b> {{$numberFormat(planet.surface_water)}}</p>
            <p><b>Terrain:</b> {{planet.terrain}}</p>
          </div>
        </div>
      </div>
      <div class="home-section">
        <div class="row pb-8">
          <div class="w-full">
            <h2 class="text-3xl font-semibold section-title pb-2">
              Inhabitants
            </h2>
            <div class="row items-stretch" v-if="residents.length > 0">
              <carousel :per-page="1" class="w-full" :per-page-custom="[[640,1], [768, 2], [1024, 3]]">
                <slide v-for="(resident, index) in residents" :key="index">
                  <character-card :image-url="$assetImage('people', 1, 3)" :user="resident" class="w-full"
                    :is-carousel="true" />
                </slide>
              </carousel>
            </div>
            <div class="row py-24 justify-center" v-else>
              <h2 class="text-2xl font-semibold text-gray-500 pb-2">
                {{planet.name}} has no residents 😢
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
      let data = await $nuxt.$api.searchPlanets(params.name.replace(/-/g, " "))
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
        results: planet
      } = await $nuxt.$api.searchPlanets(params.name.replace(/-/g, " "))
      console.log(planet[0])
      let residents = []
      planet[0].residents.forEach(async (val) => residents.push(await $nuxt.$api.get(val)))
      return {
        planet: planet[0],
        residents
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
