import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        token: localStorage.getItem("token") || null,
    },
    getters: {
        token(state) {
            return state.token;
        },
    },
    mutations: {},
    actions: {
        login(context, payload) {
            return new Promise((resolve, reject) => {
                const url = "http://127.0.0.1:8000/api/v1/auth/jwt/create/";
                axios
                    .post(url, payload)
                    .then((res) => {
                        localStorage.setItem("token", res.data.access);
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        getUserData(context) {
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = "http://127.0.0.1:8000/api/v1/auth/users/me/";
                axios
                    .get(url)
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
    },
});
