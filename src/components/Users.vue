<template>
    <div class="w-full">
        <div class="px-4 pt-10 pb-6 flex justify-between">
            <div class="flex items-center space-x-6">
                <h1 class="font-semibold text-xl">Users</h1>
                <div
                    class="
                        bg-semiLightGrayBackground
                        flex
                        space-x-4
                        items-center
                        px-4
                        py-1
                        rounded-md
                    "
                    :class="state.showSearchBar ? 'w-80' : 'cursor-pointer'"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill='var(--token-410de126-d64d-48e5-95b9-b10c155ba32c, rgb(49, 49, 49)) /* {\"name\":\"Black\"} */'
                        viewBox="0 0 256 256"
                        class="h-5 w-5"
                    >
                        <rect width="256" height="256" fill="none"></rect>
                        <circle
                            cx="116"
                            cy="116"
                            r="84"
                            fill="none"
                            stroke='var(--token-410de126-d64d-48e5-95b9-b10c155ba32c, rgb(49, 49, 49)) /* {\"name\":\"Black\"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        ></circle>
                        <line
                            x1="175.39356"
                            y1="175.40039"
                            x2="223.99414"
                            y2="224.00098"
                            fill="none"
                            stroke='var(--token-410de126-d64d-48e5-95b9-b10c155ba32c, rgb(49, 49, 49)) /* {\"name\":\"Black\"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        ></line>
                    </svg>
                    <input
                        v-if="state.showSearchBar"
                        type="text"
                        class="bg-semiLightGrayBackground w-full text-sm focus:outline-none py-0.5"
                        placeholder="Search by email ..."
                        autofocus
                        v-model="state.search"
                        @keyup.enter="search"
                    />
                    <span @click="state.showSearchBar = true" v-else>Search</span>
                    <svg
                        v-if="state.showSearchBar"
                        @click="state.showSearchBar = false"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        focusable="false"
                        color='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                        class="h-5 w-5 cursor-pointer"
                    >
                        <g
                            color='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                            weight="regular"
                        >
                            <line
                                x1="200"
                                y1="56"
                                x2="56"
                                y2="200"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="200"
                                y1="200"
                                x2="56"
                                y2="56"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="flex items-center space-x-4">
                <button
                    class="
                        bg-white
                        text-orangeButton
                        font-bold
                        text-sm
                        flex
                        items-center
                        px-4
                        py-1.5
                        rounded-lg
                        border border-orangeButton
                    "
                >
                    <span>Export Users</span>
                </button>
            </div>
        </div>
        <div class="flex flex-col p-6 space-y-2">
            <div class="flex flex-row text-grayText text-sm divide-x-2">
                <span class="w-12 text-center">ID</span>
                <span class="pl-2 w-3/12">Name</span>
                <span class="pl-2 w-3/12">Username</span>
                <span class="pl-2 w-3/12">Building</span>
                <span class="pl-2 w-3/12">Email</span>
            </div>
            <div
                class="flex flex-row bg-grayBackground text-sm divide-x-2 py-4 rounded-sm"
                v-for="user in state.users"
                :key="user.id"
            >
                <span class="w-12 text-center">{{ user.id }}</span>
                <span class="pl-2 w-3/12">{{ user.name }}</span>
                <span class="pl-2 w-3/12">{{ user.username }}</span>
                <span class="pl-2 w-3/12">{{ user.building_name }}</span>
                <span class="pl-2 w-3/12">{{ user.email }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from "@vue/runtime-core";
import store from "../store";

const state = reactive({
    showSearchBar: false,
    users: [],
    search: "",
});

const search = () => {
    store.dispatch("searchUsers", state.search).then((res) => {
        state.users = res.data;
        state.search = "";
    });
};

onMounted(() => {
    store.dispatch("getUsers").then((res) => {
        state.users = res.data;
    });
});
</script>

<style></style>
