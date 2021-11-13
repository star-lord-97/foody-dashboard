<template>
    <div class="w-full">
        <div class="px-4 pt-10 pb-6 flex justify-between">
            <div class="flex items-center space-x-6 text-sm w-full">
                <h1
                    class="cursor-pointer"
                    @click="state.currentComponent = 'ReceivedOrders'"
                    :class="state.currentComponent === 'ReceivedOrders' ? '' : 'text-grayText'"
                >
                    Received Orders
                </h1>
                <span class="text-grayBullet">●</span>
                <h1
                    class="cursor-pointer"
                    @click="state.currentComponent = 'OrdersHistory'"
                    :class="state.currentComponent === 'OrdersHistory' ? '' : 'text-grayText'"
                >
                    Orders History
                </h1>
            </div>
        </div>
        <ReceivedOrders v-if="state.currentComponent === 'ReceivedOrders'" />
        <OrdersHistory v-if="state.currentComponent === 'OrdersHistory'" />
    </div>
</template>

<script setup>
name: "OrdersManagement";

import { reactive } from "@vue/reactivity";
import ReceivedOrders from "./ReceivedOrders.vue";
import OrdersHistory from "./OrdersHistory.vue";

const state = reactive({
    currentComponent: "ReceivedOrders",
});
</script>

<style></style>
