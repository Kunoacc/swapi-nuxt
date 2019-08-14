<template>
    <div class="flex flex-row justify-center items-center">
        <div class="pagination">
            <button v-for="val in iterations" :key="val"
            :class="{'active': currentPage == val}" :disabled="currentPage == val"
            @click="$emit('changePage', val)">{{val}}</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['totalItems', 'currentPage', 'searchTerm'],
    mounted(){
        this.getIterations()
    },
    data(){
        return {
            iterations: []
        }
    },
    methods: {
        getIterations(){
            let perPage = 10
            let iterations = this.totalItems / perPage
            this.iterations = this.$range(1, Math.floor(iterations))
        },
        urlify(value){
            if(this.searchTerm){

            }
        }
    }
}
</script>

<style lang="scss" scoped>
 .pagination{
    @apply flex px-4;

    & button{
        @apply px-5 py-2 border border-gray-600 rounded-none;

        &.active{
            @apply border-none bg-blue-500 text-white font-semibold;
        }

        &:nth-child(1){
            @apply rounded-tl rounded-bl;
        }

        &:nth-last-child(1){
            @apply rounded-tr rounded-br;
        }

    }
 }
</style>