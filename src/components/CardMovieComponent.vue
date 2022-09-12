<template>
    <li>
        Titolo: {{ movie.title }}<br>
        Titolo originale: {{ movie.origin_title }}<br>
        Lingua originale: {{ movie.lang }} <img height="20px" :src="movie.flag" alt="" /> <br>
        Voto: {{ movie.vote }} <br>
        Poster: <img :src="movie.poster" :alt="`Poster de: ${movie.original_title}`" />
    </li>
</template>
<script>
export default {
    name: 'CardMovieComponent',
    props: {
        movie: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>

</style>