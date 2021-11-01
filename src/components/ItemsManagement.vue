<template>
    <!-- Edit Category Modal -->
    <div v-if="state.showEditCategoryModal">
        <div
            class="fixed top-0 left-0 z-10 w-screen h-screen cursor-pointer"
            style="background: rgba(0, 0, 0, 0.5)"
            @click="state.showEditCategoryModal = false"
        ></div>
        <div
            class="bg-white fixed h-2/5 w-1/5 z-20 rounded-xl overflow-hidden"
            style="top: 30%; left: 40%"
        >
            <div class="p-6 flex flex-col items-center justify-between h-full">
                <div class="flex w-full justify-between">
                    <h1>Edit Category</h1>
                    <svg
                        v-if="state.showEditCategoryModal"
                        @click="state.showEditCategoryModal = false"
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
                <div class="flex flex-col w-full space-y-2">
                    <label for="type" class="text-grayText text-sm">Category Name</label>
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
                        placeholder="Enter Name"
                        v-model="state.newCategory.name"
                    />
                </div>
                <div class="flex items-center w-full justify-between">
                    <label for="type" class="text-grayText text-sm">Show category to users</label>
                    <Toggle v-model="state.newCategory.active" />
                </div>
                <button
                    class="
                        text-white
                        bg-orangeButton
                        font-semibold
                        py-2
                        rounded-md
                        text-center
                        w-full
                    "
                    @click="editCategory"
                >
                    Create
                </button>
            </div>
        </div>
    </div>
    <!-- Create Category -->
    <div v-if="state.showCreateCategoryModal">
        <div
            class="fixed top-0 left-0 z-10 w-screen h-screen cursor-pointer"
            style="background: rgba(0, 0, 0, 0.5)"
            @click="state.showCreateCategoryModal = false"
        ></div>
        <div
            class="bg-white fixed h-2/5 w-1/5 z-20 rounded-xl overflow-hidden"
            style="top: 30%; left: 40%"
        >
            <div class="p-6 flex flex-col items-center justify-between h-full">
                <div class="flex w-full justify-between">
                    <h1>New Category</h1>
                    <svg
                        v-if="state.showCreateCategoryModal"
                        @click="state.showCreateCategoryModal = false"
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
                <div class="flex flex-col w-full space-y-2">
                    <label for="type" class="text-grayText text-sm">Category Name</label>
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
                        placeholder="Enter Category Name"
                        v-model="state.newCategory.name"
                    />
                </div>
                <div class="flex items-center w-full justify-between">
                    <label for="type" class="text-grayText text-sm">Show category to users</label>
                    <Toggle v-model="state.newCategory.active" />
                </div>
                <button
                    class="
                        text-white
                        bg-orangeButton
                        font-semibold
                        py-2
                        rounded-md
                        text-center
                        w-full
                    "
                    @click="registerCategory"
                >
                    Create
                </button>
            </div>
        </div>
    </div>
    <!-- new item modal -->
    <div v-if="state.showCreateItemModal">
        <div
            class="fixed top-0 left-0 z-10 w-screen h-screen cursor-pointer"
            style="background: rgba(0, 0, 0, 0.5)"
            @click="state.showCreateItemModal = false"
        ></div>
        <div
            class="bg-white fixed h-4/5 w-1/3 z-20 rounded-xl overflow-y-scroll"
            style="top: 5%; left: 33%"
        >
            <div class="p-6 flex flex-col items-center justify-between">
                <div class="flex w-full justify-between">
                    <h1>New Item</h1>
                    <svg
                        v-if="state.showCreateItemModal"
                        @click="state.showCreateItemModal = false"
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
                            v-model="state.newItem.name"
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
                            v-model="state.newItem.description"
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
                            v-model="state.newItem.price"
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
                            v-model="state.newItem.item_cost"
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
                            v-model="state.newItem.max_per_day"
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
                            v-model="state.newItem.max_per_slot"
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
                            v-model="state.newItem.price_on_discount"
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
                            v-model="state.newItem.category_id"
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
                    <div class="flex flex-col w-full space-y-2" v-if="state.extras.length > 0">
                        <label for="type" class="text-grayText text-sm">Extras</label>
                        <treeselect
                            v-model="state.newItem.extras"
                            :multiple="true"
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
                        @click="state.showCreateItemModal = false"
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
                        @click="registerItem"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full">
        <div class="px-4 pt-10 pb-6 flex justify-between">
            <div class="flex space-x-2">
                <div
                    class="text-xs px-4 py-2 rounded-full cursor-pointer"
                    v-for="category in state.categories"
                    :key="category"
                    :class="
                        state.currentCategory.name === category.name
                            ? 'text-white bg-orangeButton'
                            : 'text-grayText bg-lightGrayBackground border border-graySVG'
                    "
                    @click="
                        state.currentCategory = category;
                        getCategoryItems();
                    "
                >
                    {{ category.name }}
                </div>
            </div>
            <button
                class="
                    bg-orangeButton
                    text-white
                    font-bold
                    text-sm
                    flex
                    items-center
                    px-4
                    rounded-lg
                    cursor-pointer
                "
                @click="state.showCreateCategoryModal = true"
            >
                Add Category
            </button>
        </div>
        <div class="p-6 space-y-4">
            <div class="flex items-center space-x-2">
                <h1 class="font-bold text-xl">{{ state.currentCategory.name }}</h1>
                <h1
                    class="text-2xl"
                    :class="state.currentCategory.active ? 'text-green-400' : 'text-red-400'"
                >
                    &#x25cf;
                </h1>
                <svg
                    @click="getCategory(state.currentCategory.id)"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    color='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {"name":"Gray (New)"} */'
                    class="h-5 w-5 cursor-pointer"
                >
                    <g
                        color='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {"name":"Gray (New)"} */'
                        weight="regular"
                    >
                        <path
                            d="M96,216H48a8,8,0,0,1-8-8V163.31371a8,8,0,0,1,2.34315-5.65686l120-120a8,8,0,0,1,11.3137,0l44.6863,44.6863a8,8,0,0,1,0,11.3137Z"
                            fill="none"
                            stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {"name":"Gray (New)"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        ></path>
                        <line
                            x1="136"
                            y1="64"
                            x2="192"
                            y2="120"
                            fill="none"
                            stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {"name":"Gray (New)"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        ></line>
                    </g>
                </svg>
            </div>
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
                        cursor-pointer
                    "
                    @click="state.showCreateItemModal = true"
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
                <router-link
                    :to="'/items/' + item.id"
                    class="flex items-center space-x-4 p-4 shadow-sm rounded-lg w-full"
                    v-for="item in state.items"
                    :key="item"
                >
                    <img
                        :src="'/foody-dashboard/src/assets' + item.image"
                        class="w-12 h-12 object-cover rounded-md"
                        :alt="item.name"
                    />
                    <div class="flex flex-col space-y-1 w-full">
                        <div class="flex justify-between">
                            <span class="text-sm">{{ item.name }}</span>
                            <span class="text-xs">{{ item.price }} EGP</span>
                        </div>
                        <span class="text-xs text-grayText">{{ item.description }}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import Toggle from "@vueform/toggle";
import axios from "axios";
import store from "../store";
import Treeselect from "vue3-treeselect";
import "vue3-treeselect/dist/vue3-treeselect.css";
import { useRouter } from "vue-router";

const router = useRouter();

const state = reactive({
    currentCategory: {},
    showEditCategoryModal: false,
    showCreateCategoryModal: false,
    showCreateItemModal: false,
    categories: [],
    items: [],
    extras: [],
    newCategory: {
        name: "",
        active: true,
    },
    newItem: {
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
});

const editCategory = () => {
    store
        .dispatch("editCategory", {
            id: state.currentCategory.id,
            data: state.newCategory,
        })
        .then((res) => {
            state.categories = res.data.results;
            state.newCategory = {
                name: "",
                active: true,
            };
            state.currentCategory = state.categories[0];
            state.showEditCategoryModal = false;
        });
};

const registerCategory = () => {
    store
        .dispatch("registerCategory", {
            ...state.newCategory,
        })
        .then((res) => {
            state.categories = res.data.results;
            state.newCategory = {
                name: "",
                active: true,
            };
            state.showCreateCategoryModal = false;
        });
};

const getCategory = (id) => {
    store.dispatch("getCategory", id).then((res) => {
        state.newCategory.name = res.name;
        state.newCategory.active = res.active;
        state.showEditCategoryModal = true;
    });
};

const getCategoryItems = () => {
    store.dispatch("getCategoryItems", state.currentCategory.id).then((res) => {
        state.items = res.data.results;
    });
};

const registerItem = () => {
    store.dispatch("registerItem", state.newItem).then((res) => {
        router.push("/items/" + res.data.id);
    });
};

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
            state.newItem.image = res.data.file;
        });
};

onMounted(() => {
    store.dispatch("getCategories").then((res) => {
        state.categories = res.data.results;
        state.currentCategory = state.categories[0];
        state.newItem.category_id = state.categories[0].id;
        getCategoryItems();
        store.dispatch("getExtras").then((res) => {
            state.extras = res.data.results;
        });
    });
});
</script>

<style src="@vueform/toggle/themes/default.css"></style>
