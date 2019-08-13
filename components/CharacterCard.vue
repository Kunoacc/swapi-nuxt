<template>
    <div>
        <div class="shadow-lg rounded relative bg-white overflow-hidden flex flex-row items-center" id="card">
        <div class="w-1/2">
            <img src="~/assets/images/user-bg.jpg" alt="" srcset="">
        </div>
        <div class="w-1/2 text-left py-4 pr-4">
            <div class="mb-4">
                <h2 class="text-2xl font-bold mb-0 capitalize">{{user.name}}</h2>
                <span class="capitalize">{{user.gender}}</span>
            </div>
            <p><b>Birth Year:</b> {{user.birth_year}}</p>
            <p><b>Hair Color:</b> {{user.hair_color}}</p>
            <p><b>Skin Color:</b> {{user.skin_color}}</p>
            <button class="btn my-5">View Details</button>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    props: ['user'],
    methods: {

    },
    computed: {
    }
}
</script>
