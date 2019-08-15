<template>
  <base-card :is-carousel="isCarousel">
    <nuxt-link :to="{name: 'planets-name', params: {name: planet.name.toLowerCase().replace(/ /g, '-')}}">
      <div class="shadow-md rounded relative bg-white overflow-hidden flex flex-col hover:shadow-xl">
        <div class="m-4 relative">
          <div class="dark-gradient-cover flex flex-col justify-end pb-10 text-white">
            <h2 class="text-2xl font-semibold">Planet {{planet.name}}</h2>
            <p><b>Population:</b> {{$numberFormat(planet.population)}}</p>
          </div>
          <img :src="imageUrl" height="100px" width="auto" class="rounded" alt="" srcset="">
        </div>
      </div>
    </nuxt-link>
  </base-card>
</template>

<script>
  export default {
    props: {
      planet: {
        type: Object,
      },
      imageUrl: {
        type: String
      },
      isCarousel: {
        type: Boolean,
        default: false
      }
    }
  }

</script>

<style scoped>
  .dark-gradient-cover {
    position: absolute;
    margin: auto;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, .4) 50%, #000000 100%);
    @apply rounded;
  }

</style>
