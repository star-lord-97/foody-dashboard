<template>
    <div class="p-6 flex flex-col w-full">
        <div class="flex flex-col space-y-6">
            <div class="space-y-2" v-for="timeslot in state.timeslots" :key="timeslot.id">
                <div
                    v-if="
                        state.todaysOrders.map((el) => el.timeslot.time_slot === timeslot.time_slot)
                            .length > 0
                    "
                >
                    <div class="flex items-center space-x-2">
                        <div class="flex items-center space-x-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                fill='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                viewBox="0 0 256 256"
                                class="w-5 h-5"
                            >
                                <rect width="256" height="256" fill="none"></rect>
                                <circle
                                    cx="128"
                                    cy="128"
                                    r="96"
                                    fill="none"
                                    stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                    stroke-miterlimit="10"
                                    stroke-width="16"
                                ></circle>
                                <polyline
                                    points="128 72 128 128 184 128"
                                    fill="none"
                                    stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                ></polyline>
                            </svg>
                            <span>{{ timeslot.time_slot }}</span>
                        </div>
                        <div
                            class="
                                p-1.5
                                flex
                                items-center
                                space-x-2
                                text-xs
                                border border-orangeButton border-dashed
                                rounded
                                bg-lightOrangeBackground
                            "
                        >
                            <span class="text-orangeButton font-semibold">{{
                                timeslot.stage
                            }}</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-2 text-sm">
                        <router-link
                            :to="'/orders/' + order.id"
                            class="p-6 bg-lightGrayBackground rounded-lg"
                            v-for="order in state.todaysOrders.map(
                                (el) => el.timeslot.time_slot === timeslot.time_slot
                            )"
                            :key="order.id"
                        >
                            <div class="flex flex-col space-y-1">
                                <span>Order Number: {{ order.id }}</span>
                                <div class="flex items-center space-x-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        fill='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                        viewBox="0 0 256 256"
                                        class="w-4 h-4"
                                    >
                                        <rect width="256" height="256" fill="none"></rect>
                                        <path
                                            d="M40,64V192a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H56A16,16,0,0,1,40,64v0A16,16,0,0,1,56,48H192"
                                            fill="none"
                                            stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="16"
                                        ></path>
                                        <circle cx="180" cy="144" r="12"></circle>
                                    </svg>
                                    <span class="text-orangeButton">{{ order.total }}EGP</span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from "@vue/runtime-core";
import store from "../store";

const state = reactive({
    timeslots: [],
    todaysOrders: [],
});

onMounted(() => {
    store.dispatch("getTimeslots").then((res) => {
        state.timeslots = res.data.results;
        setInterval(() => {
            store.dispatch("getTodaysOrders").then((res) => {
                state.todaysOrders = res.data.results;
            });
        }, 60000);
    });
});
</script>

<style></style>
