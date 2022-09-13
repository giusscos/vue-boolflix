import Vue from "vue";

const state = Vue.observable({
    query: '',
    listMovies: [],
    listTvs: [],
    listPeople: []
})

export default state