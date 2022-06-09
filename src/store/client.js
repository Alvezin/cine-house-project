import { clientDB } from "@/services/axiosConfig"
import { types } from "./mutationTypes";
const { SET_USER_DATA } = types
export default {
    state: () => ({
        id: null,
        client: [],
    }),
    mutations: {
        SET_USER_DATA (state, payload) {
            console.log(payload)
            state.client = payload
        }
    },
    actions: {
        async getClient ({ commit }, payload) {
            try {
                const req = await clientDB.get(`/clientes/${ payload }`)
                commit(SET_USER_DATA, req.data)
            } catch (error) {

            }
        }
    }
}