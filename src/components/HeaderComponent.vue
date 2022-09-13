<template>
    <header class="main_header">
        <div class="logo_wrapper">
            <h1 class="logo_title">
                Boolflix
            </h1>
        </div>
        <div class="search_wrapper">
            <input type="text" placeholder="Cerca un film" v-model="search" @keyup.enter="getMovies()" />
            <button @click="getMovies()">Cerca</button>
        </div>
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
            if (this.search.trim() === ''){
                this.search = ''
                return
            }

            state.query = this.search

            axios
                .get(`${this.base_tmdb_uri}/search/movie`, {
                    params: {
                        api_key: this.api_key,
                        query: state.query,
                        language: 'it'
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
                        language: 'it',
                    }
                })
                .then((res) => {
                    console.log(res.data.results)
                    state.listTvs = res.data.results
                })
                .catch((err) => {
                    console.log(err)
                })

            axios
                .get(`${this.base_tmdb_uri}/search/person`, {
                    params: {
                        api_key: this.api_key,
                        query: state.query, 
                        language: 'it'
                    }
                })
                .then((res) =>{
                    console.log(res.data.results)
                    state.listPeople = res.data.results
                })

            this.search = ''
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.main_header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0.5rem 1rem;

    background-color: $bf-bg;

    .logo_wrapper {
        .logo_title {
            color: $bf-accent;
            text-transform: uppercase;
        }
    }

    .search_wrapper {
        gap: 1rem;
        display: flex;
        margin-left: auto;

        input[type="text"] {
            font-size: 1rem;
            padding: 0.5rem 1rem;
            border-radius: 0.25rem;
            border: 0px solid transparent;

            &:focus {
                outline: 2px solid $bf-accent;
            }
        }

        button {
            cursor: pointer;
            border-radius: 0.25rem;
            padding: 0.5rem 1.5rem;
            border: 0px solid transparent;

            font-size: 1rem;
            font-weight: bold;

            &:hover {
                color: #ddd;
                background-color: $bf-accent;
            }

            &:focus {
                outline: 2px solid $bf-accent;
            }
        }
    }
}
</style>