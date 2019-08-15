<template>
    <div>
        
    </div>
</template>

<script>
export default {
    async validate({params}){
        let data = await $nuxt.$api.searchPeople(params.name.replace(/-/g, " "))
        if (data.results.length  == 0) {
            return false
        } else {
            return true
        }
    },

    async asyncData({ params }){
        let { results: character } = await $nuxt.$api.searchPeople(params.name.replace(/-/g, " "))
        console.log(character[0])
        let {name: species} = await $nuxt.$api.get(character[0].species[0])
        let starships = []
        character[0].starships.forEach(async (val) => starships.push(await $nuxt.$api.get(val)))
        let planet = await $nuxt.$api.get(character[0].homeworld)
        return { character: character[0], species, starships, planet }
    }
}
</script>

<style lang="scss" scoped>

</style>