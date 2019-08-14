<script>
  import ContentLoader from './ContentLoader'

  export default {
    components: {
      ContentLoader
    }
  }

</script>

<template>
  <base-loader>
    <content-loader :height="'100%'" :width="'100%'" :speed="2" primary-color="#ffffff" secondary-color="#f5f5f5">
    <rect x="13" y="0" rx="5" ry="5" width="184" height="228" />
    <rect x="220" y="0" rx="5" ry="5" width="168" height="38" />
    <rect x="220" y="74" rx="5" ry="5" width="168" height="15" />
    <rect x="220" y="96" rx="5" ry="5" width="168" height="15" />
    <rect x="220" y="118" rx="5" ry="5" width="168" height="15" />
    <rect x="220" y="140" rx="5" ry="5" width="168" height="15" />
  </content-loader>
  </base-loader>
</template>
