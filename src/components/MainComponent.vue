<template>
    <main>
        <ul>
            <li>
                <h3>
                    Film
                </h3>
            </li>
            <li v-for="movie in movies" :key="movie.id">
                Titolo: {{ movie.title }}<br>
                Titolo originale: {{ movie.origin_title }}<br>
                Lingua originale: {{ movie.lang }} <img height="20px" :src="movie.flag" alt="" /> <br>
                Voto: {{ movie.vote }} <br>
                Poster: <img :src="movie.poster" :alt="`Poster de: ${movie.original_title}`" />
            </li>
            <li>
                <h3>
                    Serie Tv
                </h3>
            </li>
            <li v-for="tv in tvs" :key="tv.id">
                Nome: {{ tv.title }} <br>
                Nome originale: {{ tv.origin_title }} <br>
                Lingua originale: {{ tv.lang }} <img height="20px" :src="tv.flag" alt="" /> <br>
                Voto: {{ tv.vote }} <br>
                Poster: <img :src="tv.poster"
                    :alt="`Poster de: ${tv.origin_title}`" />
            </li>
        </ul>
    </main>
</template>
<script>
import state from '../store.js'

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
}
</script>
<style lang="scss" scoped>

</style>