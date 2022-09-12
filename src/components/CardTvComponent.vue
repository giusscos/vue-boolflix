<template>
    <li>
        <h3>
            Nome: {{ tv.title }}
        </h3>
        <p>
            Nome originale: {{ tv.origin_title }}
        </p>
        <p>
            Lingua originale: {{ tv.lang }} <img height="20px" :src="tv.flag" alt="" />
        </p>
        <p>
            Poster: <img :src="tv.poster" :alt="`Poster de: ${tv.origin_title}`" />
        </p>
        <p>
             Voto: <!-- {{ tv.vote }} -->
             <span v-for="(star,i) in tv.vote" :key="`${i}.star`">
                <i class="fa-solid fa-star"></i>
            </span>
        </p>
    </li>
</template>
<script>
export default {
    name: 'CardTvComponent',
    props: {
        tv: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>

</style>