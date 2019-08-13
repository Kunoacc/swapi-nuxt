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
    <rect x="14" y="69" rx="5" ry="5" width="292" height="144" />
    <rect x="15.34" y="225.88" rx="5" ry="5" width="208" height="20.46" />
    <rect x="15.34" y="255.88" rx="5" ry="5" width="294" height="15.01" />
    <rect x="16.34" y="280.88" rx="5" ry="5" width="295" height="15.01" />
    <rect x="14.34" y="303.88" rx="5" ry="5" width="296" height="14.96" />
  </content-loader>
</template>