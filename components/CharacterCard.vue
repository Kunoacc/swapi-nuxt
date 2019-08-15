<template>
  <base-card :is-carousel="isCarousel">
    <nuxt-link :to="{name: 'characters-name', params: {name: user.name.toLowerCase().replace(/ /g, '-')}}">
      <div :id="`card-${rand}`"
      class="shadow-md rounded relative bg-white overflow-hidden flex flex-row items-center card hover:shadow-xl">
        <div class="w-1/2 p-4 relative">
          <div class="gradient-cover" />
          <img :src="imageUrl" class="py-4" alt="" srcset="">
        </div>
        <div class="w-full px-8 pb-8 lg:px-2 lg:w-1/2 text-left py-4 pr-4">
          <div class="mb-4">
            <h2 class="text-2xl font-bold mb-0 capitalize">
              {{ user.name }}
            </h2>
            <span class="capitalize">{{ user.gender }}</span>
          </div>
          <p><b>Birth Year:</b> {{ user.birth_year }}</p>
          <p><b>Hair Color:</b> {{ user.hair_color }}</p>
          <p><b>Skin Color:</b> {{ user.skin_color }}</p>
        </div>
      </div>
    </nuxt-link>
  </base-card>
</template>

<script>
export default {
  props:{
    user: {
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
  data(){
    return {
    }
  },
  computed: {
    rand () {
      return this.$randNum(1, 1000)
    }
  },
  mounted () {
    this.$applyCSS(this.imageUrl, this, this.rand)
  },
  beforeUpdate () {
    this.$applyCSS(this.imageUrl, this, this.rand)
  }
}
</script>

<style lang="scss" scoped>
.gradient-cover{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, rgba(255,255,255,.6) 70%, #ffffff 100%);
}
</style>
