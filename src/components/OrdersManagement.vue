<template>
    <div class="px-4 pt-10 pb-6 flex items-center space-x-6 text-sm w-full">
        <h1
            class="cursor-pointer"
            @click="state.currentComponent = ReceivedOrders"
            :class="currentComponentName === 'ReceivedOrders' ? '' : 'text-grayText'"
        >
            Received Orders
        </h1>
        <span class="text-grayBullet">●</span>
        <h1
            class="cursor-pointer"
            @click="state.currentComponent = OrdersHistory"
            :class="currentComponentName === 'OrdersHistory' ? '' : 'text-grayText'"
        >
            Orders History
        </h1>
    </div>
    <component :is="state.currentComponent" />
</template>

<script setup>
import { computed, reactive } from "@vue/reactivity";
import ReceivedOrders from "./ReceivedOrders.vue";
import OrdersHistory from "./OrdersHistory.vue";

const state = reactive({
    currentComponent: ReceivedOrders,
});

const currentComponentName = computed(() => {
    return state.currentComponent.__file
        .split("/")
        [state.currentComponent.__file.split("/").length - 1].replace(".vue", "");
});
</script>

<style></style>
