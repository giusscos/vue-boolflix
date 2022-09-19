<template>
    <div class="card_wrapper">
        <div class="poster">
            <img :src="el.poster" :alt="`Poster de: ${el.origin_title}`" />
        </div>
        <div class="card_info">
            <h3>
                Titolo:
                <span class="card_content">
                    {{ el.title }}
                </span>
            </h3>
            <p>
                Titolo originale:
                <span class="card_content">
                    {{ el.origin_title }}
                </span>
            </p>
            <p>
                Lingua:
                <span class="card_content" v-if="el.flag">
                    <img height="20px" :src="el.flag" :alt="`${el.lang}`" />
                </span>
                <span class="card_content" v-else>
                    <span>
                        {{ el.lang }}
                    </span>
                </span>
            </p>
            <p class="card_vote">
                Voto:
                <!-- {{ el.vote }} -->
                <span v-for="star in 5" :key="`${star}.star`">
                    <span class="vote_average" v-if="star <= el.vote">
                        <font-awesome-icon icon="fa-solid fa-star" />
                    </span>
                    <span class="vote" v-else-if="star > el.vote">
                        <font-awesome-icon icon="fa-regular fa-star" />
                    </span>
                </span>
            </p>
            <p class="card_overview">
                Overview:
                <span class="card_content">
                    {{ el.overview}}
                </span>
            </p>
            <ul class="card_cast">
                Cast:
                <li class="card_content" v-for="(cast, i) in castFilter" :key="`${i}cast`">
                    {{ cast.original_name }};
                </li>
            </ul>
            <ul class="card_genre">
                Genere:
                <li class="card_content" v-for="(genre, i) in genreFilter" :key="`${i}gen`">
                    {{ genre.name }};
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'CardComponent',
    props: {
        el: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            search: '',
            base_tmdb_uri: 'https://api.themoviedb.org/3',
            api_key: '4d27808e8194023af7e00188b1d397e2',
            listCast: [],
            listGenres: [],
        }
    },
    mounted() {
        axios
            .get(`${this.base_tmdb_uri}/movie/${this.el.id}/credits`, {
                params: {
                    api_key: this.api_key,
                    language: 'it'
                }
            })
            .then((res) => {
                // console.log(res.data.cast)
                this.listCast = res.data.cast
            })
            .catch((err) => {
                console.log(err)
            })
        axios
            .get(`${this.base_tmdb_uri}/movie/${this.el.id}`, {
                params: {
                    api_key: this.api_key,
                    language: 'it'
                }
            })
            .then((res) => {
                this.listGenres = res.data.genres
                // console.log(this.listGenres)
            })
            .catch((err) => {
                console.log(err)
            })

    },
    computed: {
        castFilter() {
            const people = []
            if (this.listCast.length >= 5) {
                for (let i = 0; i < 5; i++) {
                    people.push(this.listCast[i])
                }
            }
            return people
        },
        genreFilter() {
            const genres = []
            if (this.listGenres) {
                for (let i = 0; i < this.listGenres.length; i++) {
                    genres.push(this.listGenres[i])
                }
            }
            return genres
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';
</style>