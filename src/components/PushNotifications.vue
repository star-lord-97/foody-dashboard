<template>
    <div v-if="state.showNewNotificationModal">
        <div
            class="fixed top-0 left-0 z-10 w-screen h-screen cursor-pointer"
            style="background: rgba(0, 0, 0, 0.5)"
            @click="state.showNewNotificationModal = false"
        ></div>
        <div
            class="bg-white fixed h-3/5 w-1/3 z-20 rounded-xl overflow-hidden"
            style="top: 20%; left: 33%"
        >
            <div class="p-6 flex flex-col items-center justify-between h-full">
                <div class="flex w-full justify-between">
                    <h1>New Notification</h1>
                    <svg
                        v-if="state.showNewNotificationModal"
                        @click="state.showNewNotificationModal = false"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 cursor-pointer"
                        viewBox="0 0 256 256"
                        focusable="false"
                        color='var(--token-d998ba50-db2a-431f-a911-5e59340fbf01, rgb(33, 33, 33)) /* {"name":"Black (New)"} */'
                    >
                        <g
                            color='var(--token-d998ba50-db2a-431f-a911-5e59340fbf01, rgb(33, 33, 33)) /* {"name":"Black (New)"} */'
                            weight="regular"
                        >
                            <line
                                x1="200"
                                y1="56"
                                x2="56"
                                y2="200"
                                stroke='var(--token-d998ba50-db2a-431f-a911-5e59340fbf01, rgb(33, 33, 33)) /* {"name":"Black (New)"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="200"
                                y1="200"
                                x2="56"
                                y2="56"
                                stroke='var(--token-d998ba50-db2a-431f-a911-5e59340fbf01, rgb(33, 33, 33)) /* {"name":"Black (New)"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                        </g>
                    </svg>
                </div>
                <div class="border rounded-lg p-4 flex flex-col items-start w-full space-y-4">
                    <div class="flex w-full justify-between items-center">
                        <label for="type" class="text-grayText text-sm">Notification Date</label>
                        <v-date-picker v-model="state.newNotification.date">
                            <template v-slot="{ inputValue, inputEvents }">
                                <input
                                    class="bg-white border px-2 py-1 rounded"
                                    :value="inputValue"
                                    v-on="inputEvents"
                                />
                            </template>
                        </v-date-picker>
                    </div>
                    <div class="flex w-full justify-between items-center">
                        <label for="type" class="text-grayText text-sm">Notification Time</label>
                        <v-date-picker mode="time" v-model="state.newNotification.time" />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Notification Body</label>
                        <textarea
                            type="text"
                            class="
                                focus:outline-none
                                py-4
                                pl-4
                                pr-12
                                bg-grayBackground
                                rounded-lg
                                w-full
                            "
                            placeholder="Enter Body"
                            v-model="state.newNotification.body"
                        ></textarea>
                    </div>
                </div>
                <div class="flex justify-between w-full space-x-4">
                    <button
                        class="
                            text-orangeButton
                            border border-orangeButton
                            font-semibold
                            py-4
                            px-4
                            rounded-md
                            text-center
                            w-1/2
                        "
                        @click="state.showNewNotificationModal = false"
                    >
                        Cancel
                    </button>
                    <button
                        class="
                            bg-orangeButton
                            text-white
                            font-semibold
                            py-4
                            px-4
                            rounded-md
                            text-center
                            w-1/2
                        "
                        @click="registerNotification"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col">
        <div class="px-4 pt-10 pb-6 flex justify-between">
            <h1 class="font-bold">Push Notifications</h1>
            <button
                class="
                    bg-orangeButton
                    text-white
                    font-bold
                    text-sm
                    flex
                    items-center
                    px-4
                    py-1.5
                    rounded-lg
                    border border-orangeButton
                "
                @click="state.showNewNotificationModal = true"
            >
                <span>Push New Notification</span>
            </button>
        </div>
        <div class="grid grid-cols-3 gap-4 px-4">
            <div
                v-for="notification in state.notifications"
                :key="notification.id"
                class="border rounded-xl p-6 flex flex-col space-y-4"
            >
                <div class="flex justify-between text-xs">
                    <span class="text-grayText">{{ notification.date }}</span>
                    <span class="text-grayText">{{ notification.time }}</span>
                </div>
                <p>{{ notification.body }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import store from "../store";

const state = reactive({
    showNewNotificationModal: false,
    notifications: [],
    newNotification: {
        date: new Date(),
        time: new Date(),
        body: "",
    },
});

onMounted(() => {
    store.dispatch("getAllNotifications").then((res) => {
        state.notifications = res.data.results;
    });
});
</script>

<style></style>
