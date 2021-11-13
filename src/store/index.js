import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        baseUrl: "http://localhost:8000/foody",
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
        // login
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
                        axios
                            .get(context.state.baseUrl + `/auth/user_detail/${res.data.id}`)
                            .then((res) => {
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
        // buildings
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
        // categories
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
        // promocodes
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
        // items
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
        // extras
        searchExtras(context, payload) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/extras/";
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
        deleteExtra(context, id) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/extras/" + id;
                axios
                    .delete(url)
                    .then((res) => {
                        context.dispatch("getExtras").then((res) => {
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
        registerExtra(context, extra) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/extras/";
                axios
                    .post(url, extra)
                    .then((res) => {
                        context.dispatch("getExtras").then((res) => {
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
        getExtra(context, id) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/extras/" + id;
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
        editExtra(context, { id, data }) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/extras/" + id;
                axios
                    .put(url, data)
                    .then((res) => {
                        context.dispatch("getExtras").then((res) => {
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
        // notifications
        getAllNotifications(context) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/notifications/";
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
        // users
        searchUsers(context, payload) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/auth/list";
                const parameters = {
                    email__contains: payload,
                    is_staff: false,
                    is_superuser: false,
                    is_delivery_man: false,
                };
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
        getUsers(context) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/auth/list";
                axios
                    .get(url, {
                        params: {
                            is_staff: false,
                            is_superuser: false,
                            is_delivery_man: false,
                        },
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
        // system users
        searchSystemUsers(context, payload) {
            context.commit("toggleLoading");
            const users = [];
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/auth/list";
                axios
                    .get(url, {
                        params: {
                            email__contains: payload,
                            is_staff: true,
                        },
                    })
                    .then((res) => {
                        users.push(res.data);
                        axios
                            .get(url, {
                                params: {
                                    email__contains: payload,
                                    is_superuser: true,
                                },
                            })
                            .then((res) => {
                                users.push(res.data);
                                axios
                                    .get(url, {
                                        params: {
                                            email__contains: payload,
                                            is_delivery_man: true,
                                        },
                                    })
                                    .then((res) => {
                                        users.push(res.data);
                                        context.commit("resetValidationErrors");
                                        context.commit("toggleLoading");
                                        resolve(users);
                                    });
                            });
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },
        getSystemUsers(context) {
            context.commit("toggleLoading");
            const users = [];
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/auth/list";
                axios
                    .get(url, {
                        params: {
                            is_staff: true,
                        },
                    })
                    .then((res) => {
                        users.push(res.data);
                        axios
                            .get(url, {
                                params: {
                                    is_superuser: true,
                                },
                            })
                            .then((res) => {
                                users.push(res.data);
                                axios
                                    .get(url, {
                                        params: {
                                            is_delivery_man: true,
                                        },
                                    })
                                    .then((res) => {
                                        users.push(res.data);
                                        context.commit("resetValidationErrors");
                                        context.commit("toggleLoading");
                                        resolve(users);
                                    });
                            });
                    })
                    .catch((err) => {
                        context.commit("toggleLoading");
                        reject(err);
                    });
            });
        },
        // timeslots
        getTimeslots(context) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/timeslot/";
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
        changeTimeslotStage(context, { id, data }) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/timeslot/" + id;
                axios
                    .put(url, data)
                    .then((res) => {
                        context.dispatch("getTimeslots").then((res) => {
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
        // orders
        getOrders(context) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/orders/";
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
        getTodaysOrders(context) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/orders/";
                axios
                    .get(url, {
                        params: {
                            date: new Date(),
                        },
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
        getOrder(context, id) {
            context.commit("toggleLoading");
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] = "Bearer " + context.getters.token;
                const url = context.state.baseUrl + "/orders/" + id;
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
    },
});
