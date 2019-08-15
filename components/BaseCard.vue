<template>
  <div :class="{'px-4 w-full md:w-1/2 lg:w-1/3 my-4 flex': !isCarousel, 'w-full px-4 my-4 flex' : isCarousel}">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    isCarousel: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
* {
  transition: all 0.2s ease;
}
</style>
