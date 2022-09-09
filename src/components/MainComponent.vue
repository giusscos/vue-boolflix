<template>
    <main>
        <ul>
            <li v-for="(movie, i) in movieFilter" :key="i">
                {{ movie.title }}<br>
                {{ movie.original_title }}<br>
                {{ movie.original_language }}<br>
                {{ movie.vote_average }}<br>
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
        listMovies(){
            return state.listMovies
        },
        movieFilter() {
            return state.listMovies.filter((el) => {
                const title = el.title.toLowerCase()
                const find = this.searchMovie.toLowerCase()

                console.log('main > ', find)

                if (title.includes(find)) {
                    return true
                }

                return false
            })
        }
    }
}
</script>
<style lang="scss" scoped>

</style>