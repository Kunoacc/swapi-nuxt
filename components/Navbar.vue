<template>
  <nav class="flex items-center justify-between lg:justify-around flex-wrap bg-blue-500 p-6 fixed w-full opacity-75 z-10">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <!-- <span class="font-semibold text-xl tracking-tight">Star Wars</span> -->
      <span class="font-semibold text-xl tracking-tight">
        <img src="~/assets/images/logo.png" class="w-auto h-8" alt="">
      </span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        @click="toggle"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div id="menu" class="w-full block sm:flex-grow lg:flex-grow-0 ml-auto lg:flex lg:items-center lg:w-auto hidden">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
          Characters
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
          Starships
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
          Planets
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggle () {
      document.getElementById('menu').classList.toggle('hidden')
    }
  }
}

</script>

<style>

</style>
