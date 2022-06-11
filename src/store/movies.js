import { makeFetch } from "@/services/axiosConfig";
import { types } from "./mutationTypes";
const { GET_DISCOVER_MOVIES, GET_HORROR_MOVIES, GET_ANIMATION_MOVIES, GET_COMEDY_MOVIES, GET_ACTION_MOVIES } = types;
export default {
  state: () => ({
    discoverMovies: [],
    horrorMovies: [],
    animationMovies: [],
    comedyMovies: [],
    actionMovies: [],
  }),
  mutations: {
    GET_DISCOVER_MOVIES(state, payload) {
      state.discoverMovies = [...payload];
    },
    GET_HORROR_MOVIES (state, payload) {
      state.horrorMovies = [...payload]
    },
    GET_ANIMATION_MOVIES(state, payload) {
      state.animationMovies = [...payload]
    },
    GET_COMEDY_MOVIES(state, payload) {
      state.comedyMovies = [...payload]
    },
    GET_ACTION_MOVIES(state, payload) {
      state.actionMovies = [...payload]
    }
  },
  actions: {
    async getDiscover({ commit }) {
      try {
        const req = await makeFetch.get(
          "/3/discover/movie?api_key=f19147dc14a96151bd1c0394b4b3b593&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=free"
        );
        commit(GET_DISCOVER_MOVIES, req.data.results);
      } catch (error) {
        console.log(error);
      }
    },
    async getHorrorMovies ({ commit }) {
      try {
        const req = await makeFetch.get(
          "/3/discover/movie?api_key=f19147dc14a96151bd1c0394b4b3b593&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate"
        )
        commit(GET_HORROR_MOVIES, req.data.results)
      } catch (error) {
        console.log(error)
      }
    },
    async getAnimationMovies ({ commit }) {
      try {
        const req = await makeFetch.get(
          "/3/discover/movie?api_key=f19147dc14a96151bd1c0394b4b3b593&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate"
        )
        commit(GET_ANIMATION_MOVIES, req.data.results)
      } catch (error) {
        console.log(error)
      }
    },
    async getComedyMovies ({ commit }) {
      try {
        const req = await makeFetch.get(
          "/3/discover/movie?api_key=f19147dc14a96151bd1c0394b4b3b593&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate"
        )
        commit(GET_COMEDY_MOVIES, req.data.results)
      } catch (error) {
        console.log(error)
      }
    },
    async getActionMovies ({ commit }) {
      try {
        const req = await makeFetch.get(
          "/3/discover/movie?api_key=f19147dc14a96151bd1c0394b4b3b593&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate"
        )
        commit(GET_ACTION_MOVIES, req.data.results)
      } catch (error) {
        console.log(error)
      }
    }
  },
};
