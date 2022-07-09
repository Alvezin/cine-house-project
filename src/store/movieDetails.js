import { makeFetch } from "@/services/axiosConfig";
import { movieDetailsTypes } from "./mutationTypes";
const { SET_DATA_TO_STATE, SET_CAST_TO_STATE } = movieDetailsTypes;
export default {
  state: () => ({
    movie: [],
    movieId: null,
    imdbId: null,
    cast: [],
  }),
  mutations: {
    SET_DATA_TO_STATE(state, payload) {
      state.movie = payload;
      state.movieId = payload.id;
      state.imdbId = payload.imdb_id;
    },
    SET_CAST_TO_STATE(state, payload) {
      state.cast = [...payload];
    },
  },
  actions: {
    async getMovieData({ commit }, payload) {
      try {
        const req = await makeFetch.get(
          `/3/movie/${payload}?api_key=f19147dc14a96151bd1c0394b4b3b593&language=pt-BR`
        );
        commit(SET_DATA_TO_STATE, req.data);
      } catch (error) {}
    },
    async getCast({ commit, state }) {
      try {
        const req = await makeFetch.get(
          `/3/movie/${state.movieId}/credits?api_key=f19147dc14a96151bd1c0394b4b3b593&language=pt-BR`
        );
        commit(SET_CAST_TO_STATE, req.data.cast);
      } catch (error) {}
    },
  },
};
