<template>
  <div>
    <div class="w-full relative z-0">
      <div class="absolute h-full w-full justify-center text-white flex items-center z-10 flex-col">
        <h1 class="font-bold text-2xl mt-5">
          Planets
        </h1>
        <p class="w-1/2 md:w1/3 lg:w-3/12 text-center my-8">
          Get started by searching for your favourite planets on the star wars directory. Begin by typing into the text box.
        </p>
        <input type="text"
          class="py-2 px-4 mb-10 w-2/3 md:w-1/3 text-gray-800 focus:border-black focus:outline-none focus:shadow-md"
          placeholder="Enter search query here" v-model="searchTerm">
      </div>
      <div class="absolute h-full w-full bg-black opacity-50" />
      <img src="~/assets/images/background.jpg" class="h-half w-full object-cover" alt>
    </div>
    <div class="container">
      <div class="home-section flex-row inline-flex">

      </div>
      <div class="home-section">
        <h2 class="text-3xl font-semibold section-title pb-2">
          {{searchTerm ? `"${searchTerm}" - Search Results` : 'Planets'}}
        </h2>
        <div class="row" v-if="isLoading">
          <planet-loader />
          <planet-loader class="hidden md:block" />
          <planet-loader class="hidden md:block" />
        </div>
        <div class="row items-stretch pb-8" v-if="planets.length > 0 && !isLoading">
          <planet-card v-for="(planet, index) in planets"
          :planet="planet" :image-url="$assetImage('planets', 1, 3, 'jpg')" :key="index" />
        </div>
        <div class="row pb-8" v-if="!isLoading && planets.length == 0">
          <div class="w-full h-64 flex justify-center items-center">
            <h3 class="text-4xl font-normal text-gray-500">
              {{searchTerm ? 'No results found' : 'No planets have been added'}}
            </h3>
          </div>
        </div>
      </div>
      <div class="home-section justify-center pb-16" v-if="planets.length > 0 && !isLoading && planets.length >= 10">
        <pagination :total-items="totalPlanets" :currentPage="currentPage"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from "lodash";
  export default {
    async asyncData({query}){
      console.log(query)
      let currentPage;
      let searchTerm;
      if (query.page) {
        currentPage = query.page
      } else {currentPage = 1}
      if (query.search) {
        searchTerm = query.search
      } else { searchTerm = ""}
      return {
        currentPage: currentPage,
        searchTerm: searchTerm
      }
    },
    data(){
      return {
        planets: [],
        isLoading: false,
        totalPlanets: 0
      }
    },
    async mounted(){
      let planets
      this.isLoading = true
      await this.updateData(this.searchTerm)
      this.isLoading = false
    },
    methods: {
      async updateData(value){
        let planets
        if (value) {
          planets = await this.$api.searchPlanets(value)
        } else {
          planets = await this.$api.getPlanets()
        }
        this.planets = planets.results
        this.totalPlanets = planets.count
      },
      debouncedData: debounce(function (value){
          this.updateData(value).then(() => {
            this.isLoading = false
          })
        }, 500)
    },
    watchQuery: true,
    watch: {
      searchTerm(val){
        this.isLoading = true
        this.$router.push({path: this.$route.path, query: {search: val}})
        this.debouncedData(val)
      }
    }
  }
</script>
