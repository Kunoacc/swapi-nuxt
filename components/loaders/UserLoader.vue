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
    <rect x="13" y="65" rx="5" ry="5" width="184" height="228" />
    <rect x="216" y="62" rx="0" ry="0" width="168" height="38" />
    <rect x="218" y="139" rx="0" ry="0" width="168" height="13.2" />
    <rect x="220" y="161" rx="0" ry="0" width="168" height="13.2" />
    <rect x="219" y="183" rx="0" ry="0" width="168" height="13.2" />
    <rect x="220" y="205" rx="0" ry="0" width="168" height="13.2" />
  </content-loader>
</template>