<script>
  import ContentLoader from "./ContentLoader";

  export default {
    components: {
      ContentLoader
    }
  }

</script>
<template>
  <base-loader>
    <content-loader :height="'100%'" :width="'100%'" :speed="2" primary-color="#ffffff" secondary-color="#f5f5f5">
      <rect x="12" y="0" rx="5" ry="5" width="350" height="272" />
    </content-loader>
  </base-loader>
</template>
