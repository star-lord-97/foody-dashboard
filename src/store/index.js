import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        baseUrl: "http://127.0.0.1:8000/api/v1",
        token: localStorage.getItem("foody_token") || null,
        isAdmin: localStorage.getItem("foody_isAdmin") || false,
        isStaff: localStorage.getItem("foody_isStaff") || false,
        loading: false,
        validationErrors: false,
    },
    getters: {
        token(state) {
            return state.token;
        },
        isLogged(state) {
            return state.token !== null;
        },
        isAdmin(state) {
            return state.isAdmin;
        },
        isStaff(state) {
            return state.isStaff;
        },
        loading(state) {
            return state.loading;
        },
        validationErrors(state) {
            return state.validationErrors;
        },
    },
    mutations: {
        toggleLoading(state) {
            state.loading = !state.loading;
        },
        setValidationErrors(state) {
            state.validationErrors = true;
        },
        resetValidationErrors(state) {
            state.validationErrors = false;
        },
    },
    actions: {
        login(context, payload) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                const url = context.state.baseUrl + "/auth/jwt/create/";
                axios
                    .post(url, payload)
                    .then((res) => {
                        localStorage.setItem("foody_token", res.data.access);
                        context.state.token = res.data.access;
                        context.dispatch("getUserData").then((res) => {
                            localStorage.setItem("foody_isAdmin", res.data.is_superuser);
                            localStorage.setItem("foody_isStaff", res.data.is_staff);
                            context.state.isAdmin = res.data.is_superuser;
                            context.state.isStaff = res.data.is_staff;
                            context.commit("resetValidationErrors");
                            context.commit("toggleLoading");
                            resolve(res);
                        });
                    })
                    .catch((err) => {
                        context.commit("setValidationErrors");
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        logout(context) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                localStorage.removeItem("foody_token");
                context.state.token = null;
                localStorage.removeItem("foody_isAdmin");
                context.state.isAdmin = false;
                localStorage.removeItem("foody_isStaff");
                context.state.isStaff = false;
                context.commit("toggleLoading");
                resolve();
            });
        },

        getUserData(context) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/auth/users/me/";
                axios
                    .get(url)
                    .then((res) => {
                        context.commit("resetValidationErrors");
                        context.commit("toggleLoading");
                        resolve(res);
                    })
                    .catch((err) => {
                        context.commit("setValidationErrors");
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        getBuildings(context) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/buildings/";
                axios
                    .get(url)
                    .then((res) => {
                        context.commit("resetValidationErrors");
                        context.commit("toggleLoading");
                        resolve(res);
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        filterBuildings(context, payload) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/buildings/";
                const parameters =
                    payload.type === "name__contains"
                        ? { name__contains: payload.value }
                        : { assigned_to__name__contains: payload.value };
                axios
                    .get(url, {
                        params: parameters,
                    })
                    .then((res) => {
                        context.commit("resetValidationErrors");
                        context.commit("toggleLoading");
                        resolve(res);
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        searchBuildings(context, payload) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/buildings/";
                const parameters = { name__contains: payload };
                axios
                    .get(url, {
                        params: parameters,
                    })
                    .then((res) => {
                        context.commit("resetValidationErrors");
                        context.commit("toggleLoading");
                        resolve(res);
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        deleteBuilding(context, id) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/buildings/" + id;
                axios
                    .delete(url)
                    .then((res) => {
                        context.dispatch("getBuildings").then((res) => {
                            context.commit("resetValidationErrors");
                            context.commit("toggleLoading");
                            resolve(res);
                        });
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        registerBuilding(context, building) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/buildings/";
                axios
                    .post(url, building)
                    .then((res) => {
                        context.dispatch("getBuildings").then((res) => {
                            context.commit("resetValidationErrors");
                            context.commit("toggleLoading");
                            resolve(res);
                        });
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        getBuilding(context, id) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/buildings/" + id;
                axios
                    .get(url)
                    .then((res) => {
                        context.commit("toggleLoading");
                        resolve(res.data);
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        getAllUsers(context) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/auth/list";
                axios
                    .get(url)
                    .then((res) => {
                        context.commit("toggleLoading");
                        resolve(res);
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        editBuilding(context, { id, data }) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/buildings/" + id;
                axios
                    .put(url, data)
                    .then((res) => {
                        context.dispatch("getBuildings").then((res) => {
                            context.commit("resetValidationErrors");
                            context.commit("toggleLoading");
                            resolve(res);
                        });
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        getCategories(context) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/categories/";
                axios
                    .get(url)
                    .then((res) => {
                        context.commit("resetValidationErrors");
                        context.commit("toggleLoading");
                        resolve(res);
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        getExtras(context) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/extras/";
                axios
                    .get(url)
                    .then((res) => {
                        context.commit("resetValidationErrors");
                        context.commit("toggleLoading");
                        resolve(res);
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        editCategory(context, { id, data }) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/categories/" + id;
                axios
                    .put(url, data)
                    .then((res) => {
                        context.dispatch("getCategories").then((res) => {
                            context.commit("resetValidationErrors");
                            context.commit("toggleLoading");
                            resolve(res);
                        });
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        getCategory(context, id) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/categories/" + id;
                axios
                    .get(url)
                    .then((res) => {
                        context.commit("toggleLoading");
                        resolve(res.data);
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        registerCategory(context, category) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/categories/";
                axios
                    .post(url, category)
                    .then((res) => {
                        context.dispatch("getCategories").then((res) => {
                            context.commit("resetValidationErrors");
                            context.commit("toggleLoading");
                            resolve(res);
                        });
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        getPromoCodes(context) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/promocodes/";
                axios
                    .get(url)
                    .then((res) => {
                        context.commit("resetValidationErrors");
                        context.commit("toggleLoading");
                        resolve(res);
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        editPromoCode(context, { id, data }) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/promocodes/update/" + id;
                axios
                    .put(url, data)
                    .then((res) => {
                        context.dispatch("getPromoCodes").then((res) => {
                            context.commit("resetValidationErrors");
                            context.commit("toggleLoading");
                            resolve(res);
                        });
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        getPromoCode(context, code) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/promocodes/";
                axios
                    .get(url, { params: { code } })
                    .then((res) => {
                        context.commit("toggleLoading");
                        resolve(res.data);
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        registerPromoCode(context, promoCode) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/promocodes/";
                axios
                    .post(url, promoCode)
                    .then((res) => {
                        context.dispatch("getPromoCodes").then((res) => {
                            context.commit("resetValidationErrors");
                            context.commit("toggleLoading");
                            resolve(res);
                        });
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        deletePromoCode(context, id) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/promocodes/destroy/" + id;
                axios
                    .delete(url)
                    .then((res) => {
                        context.dispatch("getPromoCodes").then((res) => {
                            context.commit("resetValidationErrors");
                            context.commit("toggleLoading");
                            resolve(res);
                        });
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        searchPromoCodes(context, keyword) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/promocodes/";
                axios
                    .get(url, { params: { code: keyword } })
                    .then((res) => {
                        context.commit("toggleLoading");
                        resolve(res.data);
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        getCategoryItems(context, categoryId) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/menuitems/";
                axios
                    .get(url, { params: { category_id: categoryId } })
                    .then((res) => {
                        context.commit("resetValidationErrors");
                        context.commit("toggleLoading");
                        resolve(res);
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        getMenuItem(context, id) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/menuitems/" + id;
                axios
                    .get(url)
                    .then((res) => {
                        context.commit("resetValidationErrors");
                        context.commit("toggleLoading");
                        resolve(res);
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        registerItem(context, item) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/menuitems/";
                axios
                    .post(url, item)
                    .then((res) => {
                        context.dispatch("getCategoryItems", item.category_id).then((res) => {
                            context.commit("resetValidationErrors");
                            context.commit("toggleLoading");
                            resolve(res);
                        });
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        registerItem(context, item) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/menuitems/";
                axios
                    .post(url, item)
                    .then((res) => {
                        context.commit("resetValidationErrors");
                        context.commit("toggleLoading");
                        resolve(res);
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },

        updateItem(context, { id, data }) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/menuitems/" + id;
                axios
                    .put(url, data)
                    .then((res) => {
                        context.commit("resetValidationErrors");
                        context.commit("toggleLoading");
                        resolve(res);
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },
    },
});
