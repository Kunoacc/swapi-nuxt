<template>
  <div class="bg-gray-300">
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  components: {
    Navbar
  },
  mounted () {
    this.get()
  },
  methods: {
    async get () {
      console.log(this.$api)
      const response = await this.$api.getPeople()
      console.log(response)
      return response
    }
  }
}
</script>

<style lang="scss">
body * {
  font-family: "DM Sans", sans-serif !important;
}

#card{
    z-index: 1;

    &::before{
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/user-bg.jpg');
    background-size: cover;
    background-position: center center;
    opacity: .15;
    top: 0;
    left: 150px;
    }
}

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
