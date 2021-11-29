<template>
    <div class="flex flex-col space-y-2 w-full">
        <div class="flex flex-col p-6 space-y-2">
            <div class="flex flex-row text-grayText text-sm divide-x-2">
                <span class="w-12 text-center">ID</span>
                <span class="pl-2 w-2/12">User</span>
                <span class="pl-2 w-2/12">Building</span>
                <span class="pl-2 w-2/12">Price</span>
                <span class="pl-2 w-2/12">Date & Time</span>
                <span class="pl-2 w-2/12">Stage</span>
                <span class="pl-2 w-2/12">Actions</span>
            </div>
            <div
                class="flex flex-row bg-grayBackground text-sm divide-x-2 py-4 rounded-sm"
                v-for="order in state.orders"
                :key="order.id"
            >
                <span class="w-12 text-center">{{ order.id }}</span>
                <span class="pl-2 w-2/12 underline">{{ order.user.name }}</span>
                <span class="pl-2 w-2/12">{{ order.building.name }}</span>
                <span class="pl-2 w-2/12">{{ order.total }} EGP</span>
                <span class="pl-2 w-2/12">{{ order.date }} . {{ order.timeslot.time_slot }}</span>
                <span class="pl-2 w-2/12 text-orangeButton">{{ order.state }}</span>
                <router-link :to="'/orders/' + order.id" class="pl-2 w-2/12 text-blue-400 underline"
                    >Show Details</router-link
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, reactive } from "@vue/runtime-core";
import store from "../store";

const state = reactive({
    orders: [],
    getOrders: null,
});

onMounted(() => {
    state.getOrders = setInterval(() => {
        store.dispatch("getOrders").then((res) => {
            state.orders = res.data.results;
        });
    }, 10000);
});

onUnmounted(() => {
    clearInterval(state.getOrders);
});
</script>

<style></style>
