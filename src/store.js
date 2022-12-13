import Vue from "vue";

const state = Vue.observable({
    query: '',
    genreQuery: '',
    listMovies: [],
    listTvs: [],
    listGenre: []
})

export default state