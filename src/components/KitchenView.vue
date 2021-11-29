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
                        <button
                            @click="startPreparing(timeslot.id)"
                            class="
                                text-sm
                                bg-orangeButton
                                text-white
                                rounded-lg
                                px-4
                                py-1
                                font-bold
                            "
                            v-if="timeslot.stage === 'pending'"
                        >
                            Start Preparing
                        </button>
                        <button
                            @click="markPacked(timeslot.id)"
                            class="
                                text-sm
                                bg-orangeButton
                                text-white
                                rounded-lg
                                px-4
                                py-1
                                font-bold
                            "
                            v-if="timeslot.stage === 'preparing'"
                        >
                            Mark as packed
                        </button>
                        <button
                            @click="outToDeliver(timeslot.id)"
                            class="
                                text-sm
                                bg-orangeButton
                                text-white
                                rounded-lg
                                px-4
                                py-1
                                font-bold
                            "
                            v-if="timeslot.stage === 'packed'"
                        >
                            Out to deliver
                        </button>
                    </div>
                    <div class="grid grid-cols-5 gap-2 text-sm">
                        <div
                            v-for="order in state.todaysOrders.map(
                                (el) => el.timeslot.time_slot === timeslot.time_slot
                            )"
                            :key="order.id"
                            class="p-6 bg-lightGrayBackground rounded-lg border"
                        >
                            <div class="flex flex-col space-y-1">
                                <span>Order Number: 1</span>
                                <hr />
                                <div
                                    v-for="item in order.items"
                                    :key="item.id"
                                    class="flex flex-col space-y-1"
                                >
                                    <span>Chicken Blah</span>
                                    <span v-for="extra in item.extras" :key="extra.id">{{
                                        extra.name
                                    }}</span>
                                    <hr />
                                </div>
                                <span>{{ order.notes }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, reactive } from "@vue/runtime-core";
import store from "../store";

const state = reactive({
    timeslots: [],
    todaysOrders: [],
    getTodaysOrders: null,
});

const startPreparing = (id) => {
    store.dispatch("changeTimeslotStage", { id: id, data: { stage: "preparing" } }).then((res) => {
        state.timeslots = res.data.results;
    });
};

const markPacked = (id) => {
    store.dispatch("changeTimeslotStage", { id: id, data: { stage: "packed" } }).then((res) => {
        state.timeslots = res.data.results;
    });
};

const outToDeliver = (id) => {
    store.dispatch("changeTimeslotStage", { id: id, data: { stage: "out" } }).then((res) => {
        state.timeslots = res.data.results;
    });
};

onMounted(() => {
    store.dispatch("getTimeslots").then((res) => {
        state.timeslots = res.data.results;
        state.getTodaysOrders = setInterval(() => {
            store.dispatch("getTodaysOrders").then((res) => {
                state.todaysOrders = res.data.results;
            });
        }, 60000);
    });
});

onUnmounted(() => {
    clearInterval(state.getTodaysOrders);
});
</script>

<style></style>
