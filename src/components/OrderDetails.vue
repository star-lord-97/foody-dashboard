<template>
    <div class="w-full p-6 flex flex-col space-y-6">
        <!-- <h1>Order Number: #{{ state.order.id }}</h1> -->
        <div class="grid grid-cols-3 gap-6">
            <div class="col-span-2 rounded-xl border flex flex-col"></div>
            <div class="col-span-1 rounded-xl border"></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();

const state = reactive({
    order: {},
});

onMounted(() => {
    store.dispatch("getOrder", route.params.id).then((res) => {
        state.order = res.data.results;
    });
});
</script>

<style></style>
