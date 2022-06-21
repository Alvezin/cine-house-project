import { makeFetch } from "@/services/axiosConfig";
import { movieDetailsTypes } from "./mutationTypes";
const { SET_DATA_TO_STATE } = movieDetailsTypes
export default {
    state: () => ({
        movie: null,

    }),
    mutations: {
        SET_DATA_TO_STATE (state, payload) {
            state.movie = payload
        }
    },
    actions: {
        async getMovieData ( { commit }, payload ) {
            try {
                const req = await makeFetch.get(`/3/movie/${ payload }?api_key=f19147dc14a96151bd1c0394b4b3b593&language=pt-BR`)
                console.log(req.data)
                commit(SET_DATA_TO_STATE, req.data)
            } catch (error) {

            }
        } 
    }

}