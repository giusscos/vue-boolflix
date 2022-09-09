import Vue from "vue";

const state = Vue.observable({
    query: '',
    listMovies: [],
    listTvs: []
})

export default state