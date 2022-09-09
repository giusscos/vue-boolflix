<template>
    <main>
        <ul>
            <li v-for="movie in movieFilter" :key="movie.id">
                Titolo: {{ movie.title }}<br>
                Titolo originale: {{ movie.original_title }}<br>
                Lingua originale >> <img height="20px" :src="`https://flagsapi.com/${movie.original_language.toUpperCase()}/flat/64.png`" :alt="`Bandiera > ${movie.original_language}`"/> <br>    
                Voto: {{ movie.vote_average }}<br>
            </li>
        </ul>
    </main>
</template>
<script>
import state from '../store.js'

export default {
    name: 'MainComponent',
    computed: {
        searchMovie() {
            return state.query
        },
        listMovies() {
            return state.listMovies
        },
        movieFilter() {
            return state.listMovies.filter((el) => {
                const title = el.title.toLowerCase()
                const find = this.searchMovie.toLowerCase()

                if (title.includes(find)) {
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