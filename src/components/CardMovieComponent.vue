<template>
    <div class="card_wrapper">
        <div class="poster">
            <img :src="movie.poster" :alt="`Poster de: ${movie.original_title}`" />
        </div>
        <div class="card_info">
            <h3>
                {{ movie.title }}
            </h3>
            <p>
                {{ movie.origin_title }}
            </p>
            <p>
                {{ movie.lang }} <img height="20px" :src="movie.flag" alt="" />
            </p>
            <p class="card_vote">
                Voto:
                <!-- {{ movie.vote }}  -->
                <span v-for="star in 5" :key="`${star}.star`">
                    <span class="vote_average" v-if="star < movie.vote">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span class="vote" v-else-if="star > movie.vote">
                        <i class="fa-regular fa-star"></i>
                    </span>
                </span>
            </p>
        </div>
    </div>
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
@import '../style/index.scss';
</style>