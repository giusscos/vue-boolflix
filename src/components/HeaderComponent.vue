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
        <div class="filter_wrapper">
            <ul class="filter_list">
                <li v-for="(genre, i) in getGenre" :key="`${i}filter`" 
                :class="{
                    'list_item capitalize': true,
                    'evidence': getQuery.includes(genre.id),
                }" @click="addGenre(genre.id)">
                    {{ genre.name }}
                </li>
            </ul>
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
            if (this.search.trim() === '') {
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
                    // console.log(res.data.results)
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
                    // console.log(res.data.results)
                    state.listTvs = res.data.results
                })
            .catch((err) => {
                console.log(err)
            })

            this.search = ''
            state.genreQuery = new Array
        },
        addGenre(data) {
            if (!state.genreQuery.includes(data)) {
                state.genreQuery.push(data)
            }
        }
    },
    mounted() {
        axios
            .get(`${this.base_tmdb_uri}/genre/movie/list`, {
                params: {
                    api_key: this.api_key,
                    language: 'it'
                }
            })
            .then((res) => {
                state.listGenre = res.data.genres
            })
            .catch((err) => {
                console.log(err)
            })
    },
    computed: {
        getGenre() {
            return state.listGenre
        },
        getQuery() {
            return state.genreQuery
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.main_header {
    display: flex;
    gap: 1.5rem;
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

    .filter_wrapper {
        flex-basis: 100%;
        padding: 0 0 1rem;
        .filter_list {
            gap: 1.5rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            color: $bf-text_white;

            .list_item {
                cursor: pointer;
                opacity: 0.7;
                transition: 200ms ease-in-out;

                &:hover,
                &.evidence {
                    opacity: 1;
                }
            }
        }
    }
}
</style>