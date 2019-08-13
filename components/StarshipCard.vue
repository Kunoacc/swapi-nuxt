<template>
    <div>
        <div class="shadow-lg rounded relative bg-white overflow-hidden flex flex-col" id="card">
        <div class="w-1/2 mx-auto">
            <img src="~/assets/images/starships/1.png" alt="" srcset="">
        </div>
        <div class="w-1/2 text-left py-4 px-8 pb-8">
            <div class="mb-4">
                <h2 class="text-2xl font-bold mb-0">Nelson Atuonwu</h2>
                <span>Male</span>
            </div>
            <p><b>Birth Year:</b> 1333</p>
            <p><b>Hair Color:</b> Brown</p>
            <p><b>Skin Color:</b> Fair</p>
        </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #card::before{
        background-image: url('../assets/images/user-bg.jpg');
    }
</style>
