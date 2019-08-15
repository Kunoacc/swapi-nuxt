<template>
  <base-card :is-carousel="isCarousel">
    <nuxt-link :to="`starships/${starship.name.toLowerCase().replace(/ /g, '-')}`">
      <div :id="`card-${rand}`"
        class="shadow-md rounded relative bg-white overflow-hidden flex flex-col card hover:shadow-xl">
        <div class="w-1/2 mx-auto pt-8">
          <img :src="imageUrl" alt="" srcset="">
        </div>
        <div class="w-full text-left py-4 px-8 pb-8">
          <div class="mb-4">
            <h2 class="text-2xl font-bold mb-0">
              {{starship.name}}
            </h2>
            <span>{{starship.model}}</span>
          </div>
          <p><b>Passengers:</b> {{$numberFormat(starship.passengers)}}</p>
          <p><b>Crew:</b> {{$numberFormat(starship.crew)}}</p>
          <p><b>Starship Class:</b> {{starship.starship_class}}</p>
        </div>
      </div>
    </nuxt-link>
  </base-card>
</template>

<script>
  export default {
    props: {
      starship: {
        type: Object,
      },
      imageUrl: {
        type: String
      },
      isCarousel: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      rand() {
        return this.$randNum(1, 1000)
      }
    },
    mounted() {
      this.$applyCSS(this.imageUrl, this, this.rand)
    },
    beforeUpdate() {
      this.$applyCSS(this.imageUrl, this, this.rand)
    }
  }

</script>
