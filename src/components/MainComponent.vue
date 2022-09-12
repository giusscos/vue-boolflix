<template>
    <main>
        <ul>
            <li>
                <h3>
                    Film
                </h3>
            </li>
            <li v-for="movie in movieFilter" :key="movie.id">
                Titolo: {{ movie.title }}<br>
                Titolo originale: {{ movie.original_title }}<br>
                Lingua originale >> <img height="20px"
                    :src="`https://flagsapi.com/${movie.original_language.toUpperCase()}/flat/64.png`"
                    :alt="`Bandiera > ${movie.original_language}`" /> <br>
                Voto: {{ movie.vote_average }}<br>
                Poster: <img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" :alt="`Poster de: ${movie.original_title}`"/>
            </li>
            <li>
                <h3>
                    Serie Tv
                </h3>
            </li>
            <li v-for="tv in tvsFilter" :key="tv.id">
                Nome: {{ tv.name }} <br>
                Nome originale: {{ tv.original_name }} <br>
                Lingua originale >> <img height="20px"
                    :src="`https://flagsapi.com/${tv.original_language.toUpperCase()}/flat/64.png`"
                    :alt="`Bandiera > ${tv.original_language}`" /> <br>
                Voto: {{ tv.vote_average }}<br>
                Poster: <img :src="`https://image.tmdb.org/t/p/w200${tv.poster_path}`" :alt="`Poster de: ${tv.original_title}`"/>
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
        }
    },
}
</script>
<style lang="scss" scoped>

</style>