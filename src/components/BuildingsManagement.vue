<template>
    <div class="w-full">
        <div class="px-4 pt-10 pb-6 flex justify-between">
            <div class="flex items-center space-x-6">
                <h1 class="font-semibold text-xl">Building Management</h1>
                <div
                    class="
                        bg-semiLightGrayBackground
                        flex
                        space-x-2
                        items-center
                        px-4
                        py-1
                        rounded-md
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill='var(--token-410de126-d64d-48e5-95b9-b10c155ba32c, rgb(49, 49, 49)) /* {\"name\":\"Black\"} */'
                        viewBox="0 0 256 256"
                        class="h-5 w-5"
                    >
                        <rect width="256" height="256" fill="none"></rect>
                        <path
                            d="M42.08441,48H213.91559a8,8,0,0,1,5.91952,13.38138l-65.75463,72.33009A8,8,0,0,0,152,139.09285v56.62568a8,8,0,0,1-3.5624,6.6564l-32,21.33334A8,8,0,0,1,104,217.05186v-77.959a8,8,0,0,0-2.08048-5.38138L36.16489,61.38138A8,8,0,0,1,42.08441,48Z"
                            fill="none"
                            stroke='var(--token-410de126-d64d-48e5-95b9-b10c155ba32c, rgb(49, 49, 49)) /* {\"name\":\"Black\"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        ></path>
                    </svg>
                    <span>Filter</span>
                </div>
                <div
                    class="
                        bg-semiLightGrayBackground
                        flex
                        space-x-2
                        items-center
                        px-4
                        py-1
                        rounded-md
                    "
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
                    <span>Search</span>
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
                >
                    <span>New Building</span>
                </button>
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
                    "
                >
                    <span>New Delivery man</span>
                </button>
            </div>
        </div>
        <div class="flex flex-col p-6 space-y-2">
            <div class="flex flex-row text-grayText text-sm divide-x-2">
                <span class="w-12 text-center">ID</span>
                <span class="pl-2 w-3/12">Building</span>
                <span class="pl-2 w-4/12">Number of users</span>
                <span class="pl-2 w-4/12">Assigned to</span>
                <span class="pl-2">Actions</span>
            </div>
            <div
                class="flex flex-row bg-grayBackground text-sm divide-x-2 py-4 rounded-sm"
                v-for="item in 15"
                :key="item"
            >
                <span class="w-12 text-center">1</span>
                <span class="pl-2 w-3/12">14 A - Valeo</span>
                <span class="pl-2 w-4/12">15 Users</span>
                <div class="pl-2 w-4/12 flex items-center space-x-2">
                    <img
                        src="../assets/profile-picture.jpg"
                        class="w-5 h-5 rounded-full object-cover"
                        alt="assigned-to"
                    />
                    <span>Kareem Mohamed</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill='var(--token-d998ba50-db2a-431f-a911-5e59340fbf01, rgb(33, 33, 33)) /* {\"name\":\"Black (New)\"} */'
                        viewBox="0 0 256 256"
                        class="w-5 h-5"
                    >
                        <rect width="256" height="256" fill="none"></rect>
                        <path
                            d="M215.39111,92.93848A8.00015,8.00015,0,0,0,208,88H48a8,8,0,0,0-5.65674,13.657l80,79.99976a7.99945,7.99945,0,0,0,11.31348,0l80-79.99976A8.00011,8.00011,0,0,0,215.39111,92.93848Z"
                        ></path>
                    </svg>
                </div>
                <div class="pl-2 flex items-center space-x-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill='var(--token-574d4218-ff40-4048-adf1-2a196fe571b1, rgb(190, 35, 35)) /* {\"name\":\"Primary Red\"} */'
                        viewBox="0 0 256 256"
                        class="h-5 w-5"
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
                        class="h-5 w-5"
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

<script setup></script>

<style></style>
