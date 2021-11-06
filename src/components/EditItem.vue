<template>
    <!-- edit item modal -->
    <div v-if="state.showEditItemModal">
        <div
            class="fixed top-0 left-0 z-10 w-screen h-screen cursor-pointer"
            style="background: rgba(0, 0, 0, 0.5)"
            @click="state.showEditItemModal = false"
        ></div>
        <div
            class="bg-white fixed h-4/5 w-1/3 z-20 rounded-xl overflow-y-scroll"
            style="top: 5%; left: 33%"
        >
            <div class="p-6 flex flex-col items-center justify-between">
                <div class="flex w-full justify-between">
                    <h1>New Item</h1>
                    <svg
                        v-if="state.showEditItemModal"
                        @click="state.showEditItemModal = false"
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
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Name</label>
                        <input
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
                            placeholder="Name"
                            v-model="state.item.name"
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Item Description</label>
                        <input
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
                            placeholder="Description"
                            v-model="state.item.description"
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Item Price</label>
                        <input
                            type="number"
                            class="
                                focus:outline-none
                                py-4
                                pl-4
                                pr-12
                                bg-grayBackground
                                rounded-lg
                                w-full
                            "
                            placeholder="Price"
                            v-model="state.item.price"
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Item Cost</label>
                        <input
                            type="number"
                            class="
                                focus:outline-none
                                py-4
                                pl-4
                                pr-12
                                bg-grayBackground
                                rounded-lg
                                w-full
                            "
                            placeholder="Cost"
                            v-model="state.item.item_cost"
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Max per day</label>
                        <input
                            type="number"
                            class="
                                focus:outline-none
                                py-4
                                pl-4
                                pr-12
                                bg-grayBackground
                                rounded-lg
                                w-full
                            "
                            placeholder="Max per day"
                            v-model="state.item.max_per_day"
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Max per slot</label>
                        <input
                            type="number"
                            class="
                                focus:outline-none
                                py-4
                                pl-4
                                pr-12
                                bg-grayBackground
                                rounded-lg
                                w-full
                            "
                            placeholder="Max per slot"
                            v-model="state.item.max_per_slot"
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Price on discount</label>
                        <input
                            type="number"
                            class="
                                focus:outline-none
                                py-4
                                pl-4
                                pr-12
                                bg-grayBackground
                                rounded-lg
                                w-full
                            "
                            placeholder="Price on discount"
                            v-model="state.item.price_on_discount"
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Category</label>
                        <select
                            class="
                                focus:outline-none
                                py-4
                                pl-4
                                pr-12
                                bg-grayBackground
                                rounded-lg
                                w-full
                            "
                            v-model="state.item.category_id"
                        >
                            <option
                                v-for="category in state.categories"
                                :key="category.id"
                                :value="category.id"
                            >
                                {{ category.name }}
                            </option>
                        </select>
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Extras</label>
                        <treeselect
                            v-model="state.item.extras"
                            :multiple="true"
                            :flat="true"
                            :options="
                                state.extras.map((el) => {
                                    return { id: el.id, label: el.name };
                                })
                            "
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Image</label>
                        <input type="file" @change="uploadImage($event)" />
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
                        @click="state.showEditItemModal = false"
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
                        @click="updateItem"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full p-6 flex flex-col space-y-6">
        <div class="flex space-x-4">
            <img
                :src="'/src/assets' + state.item.image"
                alt=""
                class="rounded-lg w-32 h-24 object-cover"
            />
            <div class="flex flex-col space-y-2 items-start">
                <div class="flex items-center space-x-2 font-semibold">
                    <h1 class="text-xl">{{ state.item.name }}</h1>
                    <span class="text-lg text-orangeButton">{{ state.item.price }} EGP</span>
                </div>
                <p class="text-sm text-grayText">{{ state.item.description }}</p>
                <button
                    class="
                        bg-orangeButton
                        text-white
                        font-semibold
                        px-4
                        py-1.5
                        rounded-md
                        text-center text-sm
                    "
                    @click="state.showEditItemModal = true"
                >
                    Edit Item
                </button>
            </div>
        </div>
        <h1 class="border-b text-sm">Item Details</h1>
        <h1 class="font-semibold text-lg">More Details</h1>
        <div class="flex flex-col space-y-2">
            <p class="text-xs text-grayText">Item Cost</p>
            <p class="text-sm">{{ state.item.item_cost }} EGP</p>
            <p class="text-xs text-grayText">Discount</p>
            <p class="text-sm">{{ state.item.price_on_discount }} EGP</p>
            <p class="text-xs text-grayText">Max per day</p>
            <p class="text-sm">{{ state.item.max_per_day }}</p>
            <p class="text-xs text-grayText">Max per slot</p>
            <p class="text-sm">{{ state.item.max_per_slot }}</p>
        </div>
        <h1 class="font-semibold text-lg">Selections</h1>
        <div class="flex flex-col" v-if="state.extras.length > 0">
            <p class="text-xs text-grayText">Extras</p>
            <div
                v-for="extra in state.item.extras"
                :key="extra"
                class="flex items-center space-x-2"
            >
                <h1 class="text-lg text-grayText">&#x25cf;</h1>
                <p class="text-sm">{{ state.extras.find((el) => el.id === extra).name }}</p>
                <h1 class="text-orangeButton text-xs">
                    +{{ state.extras.find((el) => el.id === extra).extra_cost }} EGP
                </h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import store from "../store";
import Treeselect from "vue3-treeselect";
import "vue3-treeselect/dist/vue3-treeselect.css";
import axios from "axios";

const route = useRoute();
const router = useRouter();

const state = reactive({
    item: {
        name: "",
        description: "",
        price: "",
        item_cost: "",
        price_on_discount: "",
        active: true,
        category_id: "",
        extras: [],
        image: "",
        size_medium_price: 0,
        size_large_price: 0,
        max_per_day: "",
        max_per_slot: "",
    },
    showEditItemModal: false,
    categories: [],
    extras: [],
});

const uploadImage = (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    axios
        .post("http://localhost:8000/api/v1/upload/", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => {
            state.item.image = res.data.file;
        });
};

const updateItem = () => {
    store.dispatch("updateItem", { id: route.params.id, data: state.item }).then((res) => {
        state.showEditItemModal = false;
    });
};

onMounted(() => {
    store.dispatch("getMenuItem", route.params.id).then((res) => {
        state.item.name = res.data.name;
        state.item.description = res.data.description;
        state.item.price = res.data.price;
        state.item.item_cost = res.data.item_cost;
        state.item.price_on_discount = res.data.price_on_discount;
        state.item.active = res.data.active;
        state.item.category_id = res.data.category_id;
        state.item.extras = res.data.extras;
        state.item.image = res.data.image;
        state.item.max_per_day = res.data.max_per_day;
        state.item.max_per_slot = res.data.max_per_slot;
        store.dispatch("getCategories").then((res) => {
            state.categories = res.data.results;
            store.dispatch("getExtras").then((res) => {
                state.extras = res.data.results;
            });
        });
    });
});
</script>

<style></style>
