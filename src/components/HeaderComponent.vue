<template>
    <header>
        <input type="text" placeholder="Cerca un film" v-model="search" />
        <button @click="getMovies()">Cerca</button>
    </header>
</template>
<script>
import axios from 'axios'
import state from '../store.js'

export default {
    name: 'HeaderComponent',
    data() {
        return {
            search: '',
            base_tmdb_uri: 'https://api.themoviedb.org/3',
            api_key: '4d27808e8194023af7e00188b1d397e2',
        }
    },
    methods: {
        getMovies() {
            if(this.search.trim() === '')
                return 

            state.query = this.search

            axios
                .get(`${this.base_tmdb_uri}/search/movie`, {
                    params: {
                        api_key: this.api_key,
                        query: state.query,
                    }
                })
                .then((res) => {
                    console.log(res.data.results)
                    state.listMovies = res.data.results
                })
                .catch((err) => {
                    console.log(err)
                })

            axios
                .get(`${this.base_tmdb_uri}/search/tv`, {
                    params: {
                        api_key: this.api_key,
                        query: state.query,
                    }
                })
                .then((res) => {
                    console.log(res.data.results)
                    state.listTvs = res.data.results
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
}
</script>
<style lang="scss" scoped>

</style>