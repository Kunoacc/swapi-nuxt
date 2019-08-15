<template>
  <div>
    <div class="w-full relative z-0">
      <div class="absolute h-full w-full justify-center text-white flex items-center z-10 flex-col">
        <h1 class="font-bold text-2xl mt-5">
          Characters
        </h1>
        <p class="w-1/2 md:w1/3 lg:w-3/12 text-center my-8">
          Get started by searching for your favourite characters on the star wars directory. Begin by typing into the text box.
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
        <div class="w-full flex justify-between px-4">
          <h2 class="text-3xl font-semibold section-title pb-2">
            {{searchTerm ? `"${searchTerm}" - Search Results` : 'Characters'}}
          </h2>
          <select class="w-2/4 md:w-1/3 lg:w-1/4 px-4" v-model="filter">
            <option value="" selected disabled>Select gender to filter</option>
            <option value="all">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="row" v-if="isLoading">
          <character-loader />
          <character-loader class="hidden md:block" />
          <character-loader class="hidden md:block" />
        </div>
        <div class="row items-stretch pb-8" v-if="characters.length > 0 && !isLoading">
          <character-card v-for="(character, index) in characters"
          :user="character" :image-url="$assetImage('people', 1, 4)" :key="index" />
        </div>
        <div class="row pb-8" v-if="!isLoading && characters.length == 0">
          <div class="w-full h-64 flex justify-center items-center">
            <h3 class="text-4xl font-normal text-gray-500">
              {{searchTerm ? 'No results found' : 'No characters have been added'}}
            </h3>
          </div>
        </div>
      </div>
      <div class="home-section justify-center pb-16" v-if="characters.length > 0 && !isLoading && totalPeople > 10">
        <pagination :total-items="totalPeople" :current-page="currentPage" :url="apiUrl" @change-page="updatePage"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from "lodash";
  export default {
    name: 'characters',
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
        characters: [],
        isLoading: false,
        totalPeople: 0,
        apiUrl: '',
        charactersCopy: [],
        filter: ''
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
        let people
        if (value) {
          people = await this.$api.searchPeople(value)
        } else {
          people = await this.$api.getPeople()
        }
        this.characters = people.results
        this.totalPeople = people.count
        this.apiUrl = people.url
        this.currentPage = currentPage
        this.$route.query.page = currentPage
        this.filter = ''
      },
      debouncedData: debounce(function (value){
        const self = this
          this.updateData(value).then(() => {
            this.$forceUpdate()
            this.isLoading = false
          })
        }, 500),
      async updatePage({url, value}){
        this.isLoading = true
        this.$router.push({path: this.$route.path, query: {page: url[url.length-1], search: this.$route.query.search}}).catch(err => {})
        let people = await this.$api.get(url)
        this.characters = people.results
        this.totalPeople = people.count
        this.apiUrl = people.url
        this.currentPage = value
        this.filter = ''
        this.$forceUpdate()
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
      filter(val, oldVal){
        this.isLoading = true
        if (!oldVal || !val) {
          this.charactersCopy = this.characters
        }
        this.characters = val == "all" ? this.charactersCopy : this.charactersCopy.filter(x => x.gender == val)
        this.isLoading = false
      }
    }
  }
</script>
