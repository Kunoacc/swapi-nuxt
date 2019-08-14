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
      <rect x="15.34" y="0" rx="5" ry="5" width="295" height="144" />
      <rect x="15.34" y="156.88" rx="5" ry="5" width="200" height="20" />
      <rect x="15.34" y="187" rx="5" ry="5" width="295" height="15" />
      <rect x="15.34" y="211" rx="5" ry="5" width="295" height="15" />
      <rect x="15.34" y="235" rx="5" ry="5" width="295" height="15" />
    </content-loader>
  </base-loader>
</template>
