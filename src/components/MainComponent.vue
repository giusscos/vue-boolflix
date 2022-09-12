<template>
    <main class="main_content">
        <ul class="list_wrapper container">
            <li class="list_item" v-for="movie in movies" :key="movie.id">
                <CardMovieComponent :movie="movie" />
            </li>
            <li class="list_item" v-for="tv in tvs" :key="tv.id">
                <CardTvComponent :tv="tv" />
            </li>
        </ul>
    </main>
</template>
<script>
import state from '../store.js'
import CardTvComponent from './CardTvComponent.vue'
import CardMovieComponent from './CardMovieComponent.vue'

export default {
    name: 'MainComponent',
    data() {
        return {
            flag_path: 'https://flagsapi.com/',
            poster_path: 'https://image.tmdb.org/t/p/w342',
        }
    },
    computed: {
        search() {
            return state.query
        },
        listMovies() {
            return state.listMovies
        },
        listTvs() {
            return state.listTvs
        },
        movieFilter() {
            return state.listMovies.filter((el) => {
                const title = el.title.toLowerCase()
                const findMovie = this.search.toLowerCase()

                if (title.includes(findMovie)) {
                    return true
                }

                return false
            })
        },
        tvsFilter() {
            return state.listTvs.filter((el) => {
                const title = el.name.toLowerCase()
                const findTv = this.search.toLowerCase()

                if (title.includes(findTv)) {
                    return true
                }

                return false
            })
        },
        movies() {
            return this.movieFilter.map((el) => {
                const movie = {
                    title: el.title,
                    origin_title: el.original_title,
                    lang: el.original_language,
                    flag: `${this.flag_path}${el.original_language.toUpperCase()}/flat/64.png`,
                    poster: this.poster_path + el.poster_path,
                    vote: Math.floor(el.vote_average / 2),
                    overview: el.overview,
                }

                return movie
            })
        },
        tvs() {
            return this.tvsFilter.map((el) => {
                const movie = {
                    title: el.name,
                    origin_title: el.original_name,
                    lang: el.original_language,
                    flag: `${this.flag_path}${el.original_language.toUpperCase()}/flat/64.png`,
                    poster: this.poster_path + el.poster_path,
                    vote: Math.floor(el.vote_average / 2),
                    overview: el.overview,
                }

                return movie
            })
        }
    },
    components: {
        CardMovieComponent,
        CardTvComponent
    }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.main_content {
    height: 100vh;
    background-color: $bf-bg_darker;
    overflow: auto;

    .list_wrapper {
        gap: 1rem;
        display: flex;
        flex-wrap: wrap;
        padding: 2rem 0.5rem;

        color: $bf-text_white;

        .list_item{
            flex-basis: calc((100% / 4) - 1rem);
        }
    }
}
</style>