<template>
  <div>
    <div class="w-full relative z-0">
      <div class="absolute h-full w-full justify-center text-white flex items-center z-10 flex-col">
        <h1 class="font-bold text-2xl mt-5">
          Starships
        </h1>
        <p class="w-1/2 md:w1/3 lg:w-3/12 text-center my-8">
          Get started by searching for your favourite starships on the star wars directory. Begin by typing into the text box.
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
          {{searchTerm ? `"${searchTerm}" - Search Results` : 'starships'}}
        </h2>
        <div class="row" v-if="isLoading">
          <starship-loader />
          <starship-loader class="hidden md:block" />
          <starship-loader class="hidden md:block" />
        </div>
        <div class="row items-stretch pb-8" v-if="starships.length > 0 && !isLoading">
          <starship-card v-for="(starship, index) in starships"
          :starship="starship" :image-url="$assetImage('starships', 1, 6)" :key="index" />
        </div>
        <div class="row pb-8" v-if="!isLoading && starships.length == 0">
          <div class="w-full h-64 flex justify-center items-center">
            <h3 class="text-4xl font-normal text-gray-500">
              {{searchTerm ? 'No results found' : 'No starships have been added'}}
            </h3>
          </div>
        </div>
      </div>
      <div class="home-section justify-center pb-16" v-if="starships.length > 0 && !isLoading && totalStarships > 10">
        <pagination :total-items="totalStarships" :current-page="currentPage" :url="apiUrl" @change-page="updatePage"></pagination>
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
        currentPage = parseInt(query.page)
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
        starships: [],
        isLoading: false,
        totalStarships: 0,
        apiUrl: ''
      }
    },
    async mounted(){
      let people
      this.isLoading = true
      await this.updateData(this.searchTerm, this.currentPage)
      if (this.currentPage > 1) {
        await this.updatePage(this.$urlify(this.apiUrl, this.currentPage))
      }
      this.isLoading = false
    },
    methods: {
      async updateData(value, currentPage = 1){
        let starships
        if (value) {
          starships = await this.$api.searchStarships(value)
        } else {
          starships = await this.$api.getStarships()
        }
        this.starships = starships.results
        this.totalStarships = starships.count
        this.apiUrl = starships.url
        this.currentPage = currentPage
        this.$route.query.page = currentPage
      },
      debouncedData: debounce(async function (value){
        this.updateData(value).then(() => {
            this.isLoading = false
        })
        }, 500),
      async updatePage({url, value}){
        this.isLoading = true
        this.$router.push({path: this.$route.path, query: {page: url[url.length-1], search: this.$route.query.search}}).catch(err => {})
        let starships = await this.$api.get(url)
        this.starships = starships.results
        this.totalStarships = starships.count
        this.apiUrl = starships.url
        this.currentPage = value
        this.isLoading = false
      }
    },
    watchQuery: true,
    scrollToTop: false,
    watch: {
      searchTerm(val){
        this.isLoading = true
        this.$router.push({path: this.$route.path, query: {page: 1, search: val}})
        this.debouncedData(val)
      },
    }
  }
</script>
