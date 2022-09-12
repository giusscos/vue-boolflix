<template>
    <main>
        <ul>
            <li>
                <h3>
                    Film
                </h3>
            </li>
            <li v-for="movie in movies" :key="movie.id">
                <CardMovieComponent :movie="movie"/>
            </li>
            <li>
                <h3>
                    Serie Tv
                </h3>
            </li>
            <li v-for="tv in tvs" :key="tv.id">
                <CardTvComponent :tv="tv" />
            </li>
        </ul>
    </main>
</template>
<script>
import state from '../store.js'
import CardMovieComponent from './CardMovieComponent.vue'
import CardTvComponent from './CardTvComponent.vue'

export default {
    name: 'MainComponent',
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
                    flag: `https://flagsapi.com/${el.original_language.toUpperCase()}/flat/64.png`,
                    poster: `https://image.tmdb.org/t/p/w200${el.poster_path}`,
                    vote: Math.floor(el.vote_average / 2),
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
                    flag: `https://flagsapi.com/${el.original_language.toUpperCase()}/flat/64.png`,
                    poster: `https://image.tmdb.org/t/p/w200${el.poster_path}`,
                    vote: Math.floor(el.vote_average / 2),
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

</style>