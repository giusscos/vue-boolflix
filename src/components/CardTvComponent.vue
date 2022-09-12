<template>
    <li>
        Nome: {{ tv.title }} <br>
        Nome originale: {{ tv.origin_title }} <br>
        Lingua originale: {{ tv.lang }} <img height="20px" :src="tv.flag" alt="" /> <br>
        Voto: {{ tv.vote }} <br>
        Poster: <img :src="tv.poster" :alt="`Poster de: ${tv.origin_title}`" />
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