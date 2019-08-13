

<script>
  import { ContentLoader } from "vue-content-loader"

  export default {
    components: {
      ContentLoader
    }
  }
</script>
<template>
  <content-loader
    :height="475"
    :width="600"
    :speed="2"
    primaryColor="#f5f5f5"
    secondaryColor="#ecebeb"
  >
    <rect x="12" y="68" rx="5" ry="5" width="292" height="272" />
  </content-loader>
</template>