<template>
    <li>
        <h3>
            Titolo: {{ movie.title }}
        </h3>
        <p>
            Titolo originale: {{ movie.origin_title }}
        </p>
        <p>
            Lingua originale: {{ movie.lang }} <img height="20px" :src="movie.flag" alt="" />
        </p>
        <p>
            Poster: <img :src="movie.poster" :alt="`Poster de: ${movie.original_title}`" />
        </p>
        <p>
            Voto:
            <!-- {{ movie.vote }}  -->
            <span v-for="star in 5" :key="`${star}.star`">
                <span v-if="star < movie.vote">
                    <i class="fa-solid fa-star"></i>
                </span>
                <span v-else-if="star > movie.vote">
                    <i class="fa-regular fa-star"></i>
                </span>
            </span>
        </p>
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