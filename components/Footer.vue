<template>
  <div class="bg-white border-t">
    <div class="container px-4 py-2">
      <div class="md:flex justify-between items-center text-sm w-full">
        <div class="text-center md:text-left py-3 md:py-4 border-b md:border-b-0">
          <a href="#" class="no-underline text-grey-dark mr-4">Swapi Nuxt - Star Wars Directory</a>
        </div>
        <div class="md:flex md:flex-row-reverse items-center py-4">
          <div class="text-grey text-center md:mr-4">
            <a href="https://nelsonatuonwu.me" target="_blank" class="text-blue-500"> Nelson Atuonwu</a>
            &copy; {{date}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      date() {
        return new Date().getFullYear()
      }
    }
  }

</script>
