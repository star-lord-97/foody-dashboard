<template>
    <!-- New Extra Modal -->
    <div v-if="state.showNewExtraModal">
        <div
            class="fixed top-0 left-0 z-10 w-screen h-screen cursor-pointer"
            style="background: rgba(0, 0, 0, 0.5)"
            @click="state.showNewExtraModal = false"
        ></div>
        <div
            class="bg-white fixed h-3/5 w-1/3 z-20 rounded-xl overflow-hidden"
            style="top: 20%; left: 33%"
        >
            <div class="p-6 flex flex-col items-center justify-between h-full">
                <div class="flex w-full justify-between">
                    <h1>New Extra</h1>
                    <svg
                        v-if="state.showNewExtraModal"
                        @click="state.showNewExtraModal = false"
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
                        <label for="type" class="text-grayText text-sm">Extra Name</label>
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
                            v-model="state.newExtra.name"
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Extra Cost</label>
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
                            placeholder="Extra Cost"
                            v-model="state.newExtra.extra_cost"
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Active</label>
                        <Toggle v-model="state.newExtra.active" />
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
                        @click="state.showNewExtraModal = false"
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
                        @click="registerExtra"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- Edit Extra Modal -->
    <div v-if="state.editExtra.showEditExtraModal">
        <div
            class="fixed top-0 left-0 z-10 w-screen h-screen cursor-pointer"
            style="background: rgba(0, 0, 0, 0.5)"
            @click="state.editExtra.showEditExtraModal = false"
        ></div>
        <div
            class="bg-white fixed h-3/5 w-1/3 z-20 rounded-xl overflow-hidden"
            style="top: 20%; left: 33%"
        >
            <div class="p-6 flex flex-col items-center justify-between h-full">
                <div class="flex w-full justify-between">
                    <h1>Edit Extra</h1>
                    <svg
                        v-if="state.editExtra.showEditExtraModal"
                        @click="state.editExtra.showEditExtraModal = false"
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
                        <label for="type" class="text-grayText text-sm">Extra Name</label>
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
                            v-model="state.newExtra.name"
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Extra Cost</label>
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
                            placeholder="Extra Cost"
                            v-model="state.newExtra.extra_cost"
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Extra Cost</label>
                        <Toggle v-model="state.newExtra.active" />
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
                        @click="state.editExtra.showEditExtraModal = false"
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
                        @click="editExtra"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- delete modal -->
    <div v-if="state.deleteExtra.showDeleteModal">
        <div
            class="fixed top-0 left-0 z-10 w-screen h-screen cursor-pointer"
            style="background: rgba(0, 0, 0, 0.5)"
            @click="state.deleteExtra.showDeleteModal = false"
        ></div>
        <div
            class="bg-white fixed h-2/5 w-1/3 z-20 rounded-xl overflow-hidden"
            style="top: 30%; left: 33%"
        >
            <div class="p-6 flex flex-col items-center justify-between h-full space-y-8">
                <div class="w-full text-center">
                    Are you sure you want to delete
                    <span class="font-bold">{{ state.deleteExtra.extraToDelete.name }}</span
                    >?
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
                        @click="state.deleteExtra.showDeleteModal = false"
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
                        @click="deleteExtra"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col">
        <div class="px-4 pt-10 pb-6 flex justify-between">
            <div class="flex items-center space-x-6">
                <h1 class="font-semibold text-xl">Extras Management</h1>
                <div
                    class="
                        bg-semiLightGrayBackground
                        flex
                        space-x-4
                        items-center
                        px-4
                        py-1
                        rounded-md
                    "
                    :class="state.showSearchBar ? 'w-80' : 'cursor-pointer'"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill='var(--token-410de126-d64d-48e5-95b9-b10c155ba32c, rgb(49, 49, 49)) /* {\"name\":\"Black\"} */'
                        viewBox="0 0 256 256"
                        class="h-5 w-5"
                    >
                        <rect width="256" height="256" fill="none"></rect>
                        <circle
                            cx="116"
                            cy="116"
                            r="84"
                            fill="none"
                            stroke='var(--token-410de126-d64d-48e5-95b9-b10c155ba32c, rgb(49, 49, 49)) /* {\"name\":\"Black\"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        ></circle>
                        <line
                            x1="175.39356"
                            y1="175.40039"
                            x2="223.99414"
                            y2="224.00098"
                            fill="none"
                            stroke='var(--token-410de126-d64d-48e5-95b9-b10c155ba32c, rgb(49, 49, 49)) /* {\"name\":\"Black\"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        ></line>
                    </svg>
                    <input
                        v-if="state.showSearchBar"
                        type="text"
                        class="bg-semiLightGrayBackground w-full text-sm focus:outline-none py-0.5"
                        placeholder="Search by extra name ..."
                        autofocus
                        v-model="state.search"
                        @keyup.enter="search"
                    />
                    <span @click="state.showSearchBar = true" v-else>Search</span>
                    <svg
                        v-if="state.showSearchBar"
                        @click="state.showSearchBar = false"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        focusable="false"
                        color='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                        class="h-5 w-5 cursor-pointer"
                    >
                        <g
                            color='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                            weight="regular"
                        >
                            <line
                                x1="200"
                                y1="56"
                                x2="56"
                                y2="200"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="200"
                                y1="200"
                                x2="56"
                                y2="56"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="flex items-center space-x-4">
                <button
                    class="
                        bg-white
                        text-orangeButton
                        font-bold
                        text-sm
                        flex
                        items-center
                        px-4
                        py-1.5
                        rounded-lg
                        border border-orangeButton
                    "
                    @click="state.showNewExtraModal = true"
                >
                    <span>New Extra</span>
                </button>
            </div>
        </div>
        <div class="flex flex-col p-6 space-y-2">
            <div class="flex flex-row text-grayText text-sm divide-x-2">
                <span class="w-12 text-center">ID</span>
                <span class="pl-2 w-5/12"> Extra </span>
                <span class="pl-2 w-5/12">Extra Cost</span>
                <span class="pl-2">Actions</span>
            </div>
            <div
                class="flex flex-row bg-grayBackground text-sm divide-x-2 py-4 rounded-sm"
                v-for="extra in state.extras"
                :key="extra"
            >
                <span class="w-12 text-center">{{ extra.id }}</span>
                <div class="pl-2 w-5/12 flex space-x-2 items-center">
                    <span>{{ extra.name }}</span>
                    <h1 class="text-2xl" :class="extra.active ? 'text-green-400' : 'text-red-400'">
                        &#x25cf;
                    </h1>
                </div>
                <span class="pl-2 w-5/12">{{ extra.extra_cost }}</span>
                <div class="pl-2 flex items-center space-x-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill='var(--token-574d4218-ff40-4048-adf1-2a196fe571b1, rgb(190, 35, 35)) /* {\"name\":\"Primary Red\"} */'
                        viewBox="0 0 256 256"
                        class="h-5 w-5 cursor-pointer"
                        @click="
                            state.deleteExtra.showDeleteModal = true;
                            state.deleteExtra.extraToDelete = extra;
                        "
                    >
                        <rect width="256" height="256" fill="none"></rect>
                        <line
                            x1="215.99609"
                            y1="60"
                            x2="39.99609"
                            y2="60.00005"
                            fill="none"
                            stroke='var(--token-574d4218-ff40-4048-adf1-2a196fe571b1, rgb(190, 35, 35)) /* {\"name\":\"Primary Red\"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="24"
                        ></line>
                        <line
                            x1="104"
                            y1="104"
                            x2="104"
                            y2="168"
                            fill="none"
                            stroke='var(--token-574d4218-ff40-4048-adf1-2a196fe571b1, rgb(190, 35, 35)) /* {\"name\":\"Primary Red\"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="24"
                        ></line>
                        <line
                            x1="152"
                            y1="104"
                            x2="152"
                            y2="168"
                            fill="none"
                            stroke='var(--token-574d4218-ff40-4048-adf1-2a196fe571b1, rgb(190, 35, 35)) /* {\"name\":\"Primary Red\"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="24"
                        ></line>
                        <path
                            d="M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60"
                            fill="none"
                            stroke='var(--token-574d4218-ff40-4048-adf1-2a196fe571b1, rgb(190, 35, 35)) /* {\"name\":\"Primary Red\"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="24"
                        ></path>
                        <path
                            d="M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60"
                            fill="none"
                            stroke='var(--token-574d4218-ff40-4048-adf1-2a196fe571b1, rgb(190, 35, 35)) /* {\"name\":\"Primary Red\"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="24"
                        ></path>
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="rgb(51, 143, 204)"
                        viewBox="0 0 256 256"
                        class="h-5 w-5 cursor-pointer"
                        @click="
                            getExtra(extra.id);
                            state.editExtra.extraToEdit = extra;
                        "
                    >
                        <rect width="256" height="256" fill="none"></rect>
                        <path
                            d="M96,216H48a8,8,0,0,1-8-8V163.31371a8,8,0,0,1,2.34315-5.65686l120-120a8,8,0,0,1,11.3137,0l44.6863,44.6863a8,8,0,0,1,0,11.3137Z"
                            fill="none"
                            stroke="rgb(51, 143, 204)"
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
                            stroke="rgb(51, 143, 204)"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        ></line>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import "vue3-treeselect/dist/vue3-treeselect.css";
import Toggle from "@vueform/toggle";
import store from "../store";

const state = reactive({
    showNewExtraModal: false,
    showSearchBar: false,
    deleteExtra: {
        showDeleteModal: false,
        extraToDelete: {},
    },
    editExtra: {
        showEditExtraModal: false,
        extraToEdit: {},
    },
    extras: [],
    search: "",
    newExtra: {
        name: "",
        extra_cost: "",
        active: 1,
    },
});

const search = () => {
    store.dispatch("searchExtras", state.search).then((res) => {
        state.extras = res.data.results;
        state.search = "";
    });
};

const deleteExtra = () => {
    store.dispatch("deleteExtra", state.deleteExtra.extraToDelete.id).then((res) => {
        state.extras = res.data.results;
        state.deleteExtra.showDeleteModal = false;
    });
};

const registerExtra = () => {
    store.dispatch("registerExtra", state.newExtra).then((res) => {
        state.extras = res.data.results;
        state.newExtra = {
            name: "",
            extra_cost: "",
            active: 0,
        };
        state.showNewExtraModal = false;
    });
};

const getExtra = (id) => {
    store.dispatch("getExtra", id).then((res) => {
        state.newExtra.name = res.name;
        state.newExtra.extra_cost = res.extra_cost;
        state.newExtra.active = res.active;
        state.editExtra.showEditExtraModal = true;
    });
};

const editExtra = () => {
    store
        .dispatch("editExtra", {
            id: state.editExtra.extraToEdit.id,
            data: state.newExtra,
        })
        .then((res) => {
            state.extras = res.data.results;
            state.newExtra = {
                name: "",
                extra_cost: "",
                active: 0,
            };
            state.editExtra.showEditExtraModal = false;
        });
};

onMounted(() => {
    store
        .dispatch("getExtras")
        .then((res) => {
            state.extras = res.data.results;
        })
        .catch((err) => {});
});
</script>

<style></style>
