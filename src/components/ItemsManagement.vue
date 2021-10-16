<template>
    <div class="w-full">
        <div class="px-4 pt-10 pb-6 flex justify-between">
            <div class="flex space-x-2">
                <div
                    class="text-xs px-4 py-2 rounded-full cursor-pointer"
                    :class="
                        state.currentTab === 'All'
                            ? 'text-white bg-orangeButton'
                            : 'text-grayText bg-lightGrayBackground border border-graySVG'
                    "
                    @click="state.currentTab = 'All'"
                >
                    All
                </div>
                <div
                    class="text-xs px-4 py-2 rounded-full cursor-pointer"
                    :class="
                        state.currentTab === 'Offers'
                            ? 'text-white bg-orangeButton'
                            : 'text-grayText bg-lightGrayBackground border border-graySVG'
                    "
                    @click="state.currentTab = 'Offers'"
                >
                    Offers
                </div>
                <div
                    class="
                        text-xs
                        px-4
                        py-2
                        rounded-full
                        cursor-pointer
                        flex
                        space-x-2
                        items-center
                    "
                    :class="
                        state.currentTab === 'Appetizer'
                            ? 'text-white bg-orangeButton'
                            : 'text-grayText bg-lightGrayBackground border border-graySVG'
                    "
                    @click="state.currentTab = 'Appetizer'"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                        viewBox="0 0 24 24"
                        class="w-4 h-4 fill-current"
                    >
                        <path
                            d="M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zm-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z"
                        ></path>
                    </svg>
                    <span>Appetizer</span>
                </div>
                <div
                    class="
                        text-xs
                        px-4
                        py-2
                        rounded-full
                        cursor-pointer
                        flex
                        space-x-2
                        items-center
                    "
                    :class="
                        state.currentTab === 'Soup'
                            ? 'text-white bg-orangeButton'
                            : 'text-grayText bg-lightGrayBackground border border-graySVG'
                    "
                    @click="state.currentTab = 'Soup'"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                        viewBox="0 0 24 24"
                        class="w-4 h-4 fill-current"
                    >
                        <path
                            d="M19.66 14c-.66 1.92-2.24 3.54-4.4 4.39l-1.26.5V20h-4v-1.11l-1.27-.5c-2.16-.85-3.74-2.47-4.4-4.39h15.33M22 2L4 3.99V12H2c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25H10.5V8H22V6.5H10.5V4.78L22 3.51V2zM8 6.5V5.06l1-.11V6.5H8zm-2.5 0V5.34l1-.11V6.5h-1zM8 12V8h1v4H8zm-2.5 0V8h1v4h-1z"
                        ></path>
                    </svg>
                    <span>Soup</span>
                </div>
                <div
                    class="
                        text-xs
                        px-4
                        py-2
                        rounded-full
                        cursor-pointer
                        flex
                        space-x-2
                        items-center
                    "
                    :class="
                        state.currentTab === 'Main Dishes'
                            ? 'text-white bg-orangeButton'
                            : 'text-grayText bg-lightGrayBackground border border-graySVG'
                    "
                    @click="state.currentTab = 'Main Dishes'"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                        viewBox="0 0 24 24"
                        class="w-4 h-4 fill-current"
                    >
                        <path
                            d="M2 19l2 2h16l2-2zm1-1h16.97c.29-3.26-2.28-6-5.48-6-2.35 0-4.35 1.48-5.14 3.55-.41-.23-.87-.38-1.35-.47V9h1.75C10.99 9 12 7.99 12 6.75h9v-1.5h-9C12 4.01 10.99 3 9.75 3H3v1.5h1v.75H3v1.5h1v.75H3V9h1v7.39c-.44.46-.78 1-1 1.61zm11.5-4c.99 0 1.91.4 2.58 1.14.24.26.44.55.58.86h-6.32c.58-1.21 1.81-2 3.16-2zM8 4.5h2v.75H8V4.5zm0 2.25h2v.75H8v-.75zM5.5 4.5h1v.75h-1V4.5zm0 2.25h1v.75h-1v-.75zM5.5 9h1v6.06c-.35.06-.68.17-1 .3V9z"
                        ></path>
                    </svg>
                    <span>Main Dishes</span>
                </div>
                <div
                    class="
                        text-xs
                        px-4
                        py-2
                        rounded-full
                        cursor-pointer
                        flex
                        space-x-2
                        items-center
                    "
                    :class="
                        state.currentTab === 'Burger'
                            ? 'text-white bg-orangeButton'
                            : 'text-grayText bg-lightGrayBackground border border-graySVG'
                    "
                    @click="state.currentTab = 'Burger'"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                        viewBox="0 0 24 24"
                        class="w-4 h-4 fill-current"
                    >
                        <path
                            d="M2 19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3H2v3zm2-1h16v1H4v-1zm14.66-6.5c-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1v2c1.9 0 2.17-1 3.35-1 1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.4.98 3.32 1l-.01-1.98c-1.61-.33-1.62-1.02-3.33-1.02zM22 9c.02-4-4.28-6-10-6C6.29 3 2 5 2 9v1h20V9zM4.18 8C5.01 5.81 8.61 5 12 5c3.31 0 5.93.73 7.19 1.99.3.31.52.64.65 1.01H4.18z"
                        ></path>
                    </svg>
                    <span>Burger</span>
                </div>
                <div
                    class="
                        text-xs
                        px-4
                        py-2
                        rounded-full
                        cursor-pointer
                        flex
                        space-x-2
                        items-center
                    "
                    :class="
                        state.currentTab === 'Sandwich'
                            ? 'text-white bg-orangeButton'
                            : 'text-grayText bg-lightGrayBackground border border-graySVG'
                    "
                    @click="state.currentTab = 'Sandwich'"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                        viewBox="0 0 24 24"
                        class="w-4 h-4 fill-current"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M18 3H6C3.79 3 2 4.79 2 7c0 1.48.81 2.75 2 3.45V19c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.55c1.19-.69 2-1.97 2-3.45 0-2.21-1.79-4-4-4zm-4 12h-4v-4h4v4z"
                        ></path>
                    </svg>
                    <span>Sandwich</span>
                </div>
                <div
                    class="
                        text-xs
                        px-4
                        py-2
                        rounded-full
                        cursor-pointer
                        flex
                        space-x-2
                        items-center
                    "
                    :class="
                        state.currentTab === 'Salad'
                            ? 'text-white bg-orangeButton'
                            : 'text-grayText bg-lightGrayBackground border border-graySVG'
                    "
                    @click="state.currentTab = 'Salad'"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                        viewBox="0 0 24 24"
                        class="w-4 h-4 fill-current"
                    >
                        <path
                            d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"
                        ></path>
                    </svg>
                    <span>Salad</span>
                </div>
            </div>
            <div
                class="
                    bg-orangeButton
                    text-white
                    font-bold
                    text-sm
                    flex
                    items-center
                    px-4
                    rounded-lg
                "
            >
                <span>Add Category</span>
            </div>
        </div>
        <div class="p-6 space-y-4">
            <h1 class="font-bold text-xl">Main Dishes</h1>
            <div class="grid grid-cols-4 gap-3">
                <div
                    class="
                        bg-grayBackground
                        border border-grayBullet
                        rounded-lg
                        flex flex-col
                        items-center
                        justify-center
                        space-y-2
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill='var(--token-7bae798a-7be9-463f-89cd-adec47409e16, rgb(117, 117, 117)) /* {"name":"Gray - Medium"} */'
                        viewBox="0 0 256 256"
                        class="h-5 w-5"
                    >
                        <rect width="256" height="256" fill="none"></rect>
                        <line
                            x1="40"
                            y1="128"
                            x2="216"
                            y2="128"
                            fill="none"
                            stroke='var(--token-7bae798a-7be9-463f-89cd-adec47409e16, rgb(117, 117, 117)) /* {"name":"Gray - Medium"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        ></line>
                        <line
                            x1="128"
                            y1="40"
                            x2="128"
                            y2="216"
                            fill="none"
                            stroke='var(--token-7bae798a-7be9-463f-89cd-adec47409e16, rgb(117, 117, 117)) /* {"name":"Gray - Medium"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        ></line>
                    </svg>
                    <span class="text-grayText">Add Item/s</span>
                </div>
                <div
                    class="flex items-center space-x-4 p-4 shadow-sm rounded-lg"
                    v-for="item in numberOfIterations"
                    :key="item"
                >
                    <img
                        src="../assets/meal.jpg"
                        class="w-12 h-12 object-cover rounded-md"
                        alt="meal"
                    />
                    <div class="flex flex-col space-y-1 w-full">
                        <div class="flex justify-between">
                            <span class="text-sm">Chicken Fillet</span>
                            <span class="text-xs">54.00 EGP</span>
                        </div>
                        <span class="text-xs text-grayText"
                            >Lorem ipsum, dolor sit amet consectetur adipisicing.</span
                        >
                        <span class="text-xs text-orangeButton">4.0/5</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, reactive } from "@vue/reactivity";

const state = reactive({
    currentTab: "Main Dishes",
});

const numberOfIterations = computed(() => {
    switch (state.currentTab) {
        case "All":
        case "Main Dishes":
            return 15;
        case "Offers":
            return 1;
        case "Appetizer":
            return 2;
        case "Soup":
            return 3;
        case "Burger":
            return 1;
        case "Sandwich":
            return 2;
        case "Salad":
            return 3;
    }
});
</script>

<style></style>
