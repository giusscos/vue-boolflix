<template>
    <main class="main_content">
        <ul class="list_wrapper container">
            <li class="list_item" v-for="movie in movies" :key="movie.id">
                <CardComponent :el="movie"/>
            </li>
            <li class="list_item" v-for="tv in tvs" :key="tv.id">
                <CardComponent :el="tv" />
            </li>
        </ul>
    </main>
</template>
<script>
import state from '../store.js'
import CardComponent from './CardComponent.vue'

export default {
    name: 'MainComponent',
    data() {
        return {
            flags: {
                it: 'https://flagsapi.com/IT/flat/64',
                en: 'https://flagsapi.com/GB/flat/64',
                de: 'https://flagsapi.com/DE/flat/64',
            },
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
        listPeople(){
            return state.listPeople.know_for
        },
        movieFilter() {
            return this.listMovies.filter((el) => {
                const title = el.title.toLowerCase()
                const findMovie = this.search.toLowerCase()

                if (title.includes(findMovie)) {
                    return true
                }

                return false
            })
        },
        tvsFilter() {
            return this.listTvs.filter((el) => {
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
                    flag: this.flags[el.original_language],
                    poster: el.poster_path ? this.poster_path + el.poster_path : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fedutech4teachers.edublogs.org%2Ffiles%2F2017%2F02%2FIMG_0628-zcvmln-1024x1024.png&f=1&nofb=1',
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
                    flag: this.flags[el.original_language],
                    poster: el.poster_path ? this.poster_path + el.poster_path : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fedutech4teachers.edublogs.org%2Ffiles%2F2017%2F02%2FIMG_0628-zcvmln-1024x1024.png&f=1&nofb=1',
                    vote: Math.floor(el.vote_average / 2),
                    overview: el.overview,
                }

                return movie
            })
        }
    },
    components: {
        CardComponent
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
            flex-basis: calc((100% / 3) - 1rem);
        }
    }
}
</style>