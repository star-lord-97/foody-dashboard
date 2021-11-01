<template>
    <!-- Edit Promo Modal -->
    <div v-if="state.editPromo.showEditModal">
        <div
            class="fixed top-0 left-0 z-10 w-screen h-screen cursor-pointer"
            style="background: rgba(0, 0, 0, 0.5)"
            @click="
                state.editPromo.showEditModal = false;
                state.newPromoCode = {
                    code: '',
                    usage_number_limit: '',
                    expiration_date: new Date(),
                    discount_value: '',
                    maximum_value: '',
                };
            "
        ></div>
        <div
            class="bg-white fixed h-5/5 w-1/3 z-20 rounded-xl overflow-hidden"
            style="top: 5%; left: 33%"
        >
            <div class="p-6 flex flex-col items-center justify-between h-full">
                <div class="flex w-full justify-between">
                    <h1>Edit Promo</h1>
                    <svg
                        v-if="state.showNewPromoCodeModal"
                        @click="state.showNewPromoCodeModal = false"
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
                        <label for="type" class="text-grayText text-sm">Code</label>
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
                            placeholder="Ex: hn3js"
                            v-model="state.newPromoCode.code"
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm"
                            >Number of valid codes</label
                        >
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
                            placeholder="Ex: 10"
                            v-model="state.newPromoCode.usage_number_limit"
                        />
                    </div>
                    <div class="flex items-center w-full justify-between">
                        <label for="type" class="text-grayText text-sm">Expiry date</label>
                        <v-date-picker
                            :min-date="new Date()"
                            v-model="state.newPromoCode.expiration_date"
                            mode="date"
                            :masks="{
                                input: 'YYYY-MM-DD',
                            }"
                        >
                            <template v-slot="{ inputValue, inputEvents }">
                                <input
                                    class="
                                        px-2
                                        py-1
                                        border
                                        rounded
                                        focus:outline-none focus:border-blue-300
                                    "
                                    :value="inputValue"
                                    v-on="inputEvents"
                                />
                            </template>
                        </v-date-picker>
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Discount Percentage</label>
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
                            placeholder="Ex: 30"
                            v-model="state.newPromoCode.discount_value"
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Discount Maximum</label>
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
                            placeholder="Ex: 30"
                            v-model="state.newPromoCode.maximum_value"
                        />
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
                        @click="
                            state.editPromo.showEditModal = false;
                            state.newPromoCode = {
                                code: '',
                                usage_number_limit: '',
                                expiration_date: new Date(),
                            };
                        "
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
                        @click="editPromoCode"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- delete modal -->
    <div v-if="state.deletePromoCode.showDeleteModal">
        <div
            class="fixed top-0 left-0 z-10 w-screen h-screen cursor-pointer"
            style="background: rgba(0, 0, 0, 0.5)"
            @click="state.deletePromoCode.showDeleteModal = false"
        ></div>
        <div
            class="bg-white fixed h-2/5 w-1/3 z-20 rounded-xl overflow-hidden"
            style="top: 30%; left: 33%"
        >
            <div class="p-6 flex flex-col items-center justify-between h-full space-y-8">
                <div class="w-full text-center">
                    Are you sure you want to delete
                    <span class="font-bold">{{ state.deletePromoCode.promoToDelete.code }}</span
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
                        @click="state.deletePromoCode.showDeleteModal = false"
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
                        @click="deletePromoCode"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- create promo modal -->
    <div v-if="state.showNewPromoCodeModal">
        <div
            class="fixed top-0 left-0 z-10 w-screen h-screen cursor-pointer"
            style="background: rgba(0, 0, 0, 0.5)"
            @click="state.showNewPromoCodeModal = false"
        ></div>
        <div
            class="bg-white fixed h-5/5 w-1/3 z-20 rounded-xl overflow-hidden"
            style="top: 5%; left: 33%"
        >
            <div class="p-6 flex flex-col items-center justify-between h-full">
                <div class="flex w-full justify-between">
                    <h1>New Promo</h1>
                    <svg
                        v-if="state.showNewPromoCodeModal"
                        @click="state.showNewPromoCodeModal = false"
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
                        <label for="type" class="text-grayText text-sm">Code</label>
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
                            placeholder="Ex: hn3js"
                            v-model="state.newPromoCode.code"
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm"
                            >Number of valid codes</label
                        >
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
                            placeholder="Ex: 10"
                            v-model="state.newPromoCode.usage_number_limit"
                        />
                    </div>
                    <div class="flex items-center w-full justify-between">
                        <label for="type" class="text-grayText text-sm">Expiry date</label>
                        <v-date-picker
                            :min-date="new Date()"
                            v-model="state.newPromoCode.expiration_date"
                            mode="date"
                            :masks="{
                                input: 'YYYY-MM-DD',
                            }"
                        >
                            <template v-slot="{ inputValue, inputEvents }">
                                <input
                                    class="
                                        px-2
                                        py-1
                                        border
                                        rounded
                                        focus:outline-none focus:border-blue-300
                                    "
                                    :value="inputValue"
                                    v-on="inputEvents"
                                />
                            </template>
                        </v-date-picker>
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Discount Percentage</label>
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
                            placeholder="Ex: 30"
                            v-model="state.newPromoCode.discount_value"
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Discount Maximum</label>
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
                            placeholder="Ex: 30"
                            v-model="state.newPromoCode.maximum_value"
                        />
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
                        @click="state.showNewPromoCodeModal = false"
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
                        @click="registerPromoCode"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="w-full">
        <div class="px-4 pt-10 pb-6 flex justify-between">
            <div class="flex items-center space-x-6">
                <h1 class="font-semibold text-xl">Promo Codes</h1>
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
                        placeholder="Search for ..."
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
                "
                @click="state.showNewPromoCodeModal = true"
            >
                <span>Create Promo</span>
            </button>
        </div>
        <div class="p-6 grid grid-cols-4 gap-3">
            <div
                v-for="promoCode in state.promoCodes"
                :key="promoCode"
                class="flex flex-col p-4 space-y-2 shadow-sm rounded-lg bg-grayBackground"
                :class="new Date(promoCode.expiration_date + 1) < new Date() ? 'opacity-50' : ''"
            >
                <div class="flex justify-between">
                    <div class="text-sm">{{ promoCode.code }}</div>
                    <div class="flex space-x-2">
                        <svg
                            @click="getPromoCode({ ...promoCode })"
                            class="h-4 w-4 cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                            viewBox="0 0 256 256"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <path
                                d="M96,216H48a8,8,0,0,1-8-8V163.31371a8,8,0,0,1,2.34315-5.65686l120-120a8,8,0,0,1,11.3137,0l44.6863,44.6863a8,8,0,0,1,0,11.3137Z"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
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
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                        </svg>
                        <svg
                            @click="
                                state.deletePromoCode.showDeleteModal = true;
                                state.deletePromoCode.promoToDelete = promoCode;
                            "
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                            viewBox="0 0 256 256"
                            class="h-4 w-4 cursor-pointer"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <line
                                x1="215.99609"
                                y1="56"
                                x2="39.99609"
                                y2="56.00005"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="104"
                                y1="104"
                                x2="104"
                                y2="168"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="152"
                                y1="104"
                                x2="152"
                                y2="168"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <path
                                d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></path>
                            <path
                                d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></path>
                        </svg>
                    </div>
                </div>
                <hr />
                <span class="text-xs"
                    >Used {{ promoCode.usage_number }} of {{ promoCode.usage_number_limit }}</span
                >
                <span class="text-xs"
                    >Discount {{ promoCode.discount_value }}%, maximum
                    {{ promoCode.maximum_value }} EGP</span
                >
                <span
                    class="text-xs"
                    :class="
                        new Date(promoCode.expiration_date + 1) < new Date() ? 'text-red-500' : ''
                    "
                    >Exp. {{ promoCode.expiration_date }}</span
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import store from "../store";
import Toggle from "@vueform/toggle";

const state = reactive({
    deletePromoCode: {
        showDeleteModal: false,
        promoToDelete: {},
    },
    editPromo: {
        showEditModal: false,
        promoIdToEdit: {},
    },
    showNewPromoCodeModal: false,
    promoCodes: [],
    newPromoCode: {
        code: "",
        usage_number_limit: "",
        expiration_date: new Date(),
        discount_value: "",
        maximum_value: "",
    },
    showSearchBar: false,
    search: "",
});

const deletePromoCode = () => {
    store.dispatch("deletePromoCode", state.deletePromoCode.promoToDelete.id).then((res) => {
        state.promoCodes = res.data.results;
        state.deletePromoCode.showDeleteModal = false;
    });
};

const editPromoCode = () => {
    store
        .dispatch("editPromoCode", {
            id: state.editPromo.promoIdToEdit,
            data: {
                ...state.newPromoCode,
                expiration_date: state.newPromoCode.expiration_date.toISOString().split("T")[0],
            },
        })
        .then((res) => {
            state.promoCodes = res.data.results;
            state.newPromoCode = {
                code: "",
                usage_number_limit: "",
                expiration_date: new Date(),
                discount_value: "",
                maximum_value: "",
            };
            state.editPromo.showEditModal = false;
        });
};

const registerPromoCode = () => {
    store
        .dispatch("registerPromoCode", {
            ...state.newPromoCode,
            expiration_date: state.newPromoCode.expiration_date.toISOString().split("T")[0],
        })
        .then((res) => {
            state.promoCodes = res.data.results;
            state.newPromoCode = {
                code: "",
                usage_number_limit: "",
                expiration_date: new Date(),
                discount_value: "",
                maximum_value: "",
            };
            state.showNewPromoCodeModal = false;
        });
};

const getPromoCode = ({ id, code }) => {
    store.dispatch("getPromoCode", code).then((res) => {
        state.newPromoCode.code = res.results[0].code;
        state.newPromoCode.usage_number_limit = res.results[0].usage_number_limit;
        state.newPromoCode.expiration_date = new Date(res.results[0].expiration_date);
        state.newPromoCode.discount_value = res.results[0].discount_value;
        state.newPromoCode.maximum_value = res.results[0].maximum_value;
        state.editPromo.promoIdToEdit = id;
        state.editPromo.showEditModal = true;
    });
};

const search = () => {
    store.dispatch("searchPromoCodes", state.search).then((res) => {
        state.promoCodes = res.results;
        state.search = "";
        state.showSearchBar = false;
    });
};

onMounted(() => {
    store.dispatch("getPromoCodes").then((res) => {
        state.promoCodes = res.data.results;
    });
});
</script>

<style src="@vueform/toggle/themes/default.css"></style>
