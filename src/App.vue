<template>
    <div
        class="fixed flex bg-white justify-center items-center w-screen min-h-screen z-50"
        v-if="isLoading"
    >
        <moon-loader color="black"></moon-loader>
    </div>
    <div class="w-screen h-screen font-urbanist">
        <Login v-if="$route.name === 'login'" />
        <div v-else class="flex">
            <div class="w-80 bg-grayBackground h-full p-6 flex flex-col fixed">
                <div class="flex items-center justify-between" v-if="user">
                    <img
                        src="./assets/profile-picture.jpg"
                        alt=""
                        class="rounded-full w-20 h-20 object-cover"
                    />
                    <div>
                        <div class="flex items-center space-x-2">
                            <h1 class="font-semibold text-lg">{{ user.username }}</h1>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                fill='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                viewBox="0 0 256 256"
                                class="w-5 h-5"
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
                        </div>
                        <p class="text-grayText text-sm">{{ user.email }}</p>
                    </div>
                </div>
                <hr class="my-4" />
                <div class="flex flex-col text-sm">
                    <router-link
                        to="/orders"
                        class="
                            cursor-pointer
                            flex
                            items-center
                            space-x-4
                            px-4
                            py-3
                            hover:bg-orangeBackground hover:text-orangeButton
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                            viewBox="0 0 256 256"
                            class="w-5 h-5"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <rect
                                x="32.00781"
                                y="80.00005"
                                width="160"
                                height="128"
                                rx="8"
                                stroke-width="16"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                fill="none"
                            ></rect>
                            <path
                                d="M64.00781,48.00005h152a8,8,0,0,1,8,8V176"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></path>
                        </svg>
                        <h1>Orders Management</h1>
                    </router-link>
                    <router-link
                        to="/items"
                        class="
                            cursor-pointer
                            flex
                            items-center
                            space-x-4
                            px-4
                            py-3
                            hover:bg-orangeBackground hover:text-orangeButton
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                            viewBox="0 0 256 256"
                            class="w-5 h-5"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <path
                                d="M23.44054,75.69239a8.02578,8.02578,0,0,1,2.13281-10.834,176.07221,176.07221,0,0,1,204.85329,0,8.02577,8.02577,0,0,1,2.13281,10.834L134.74929,229.394a8,8,0,0,1-13.49858,0Z"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></path>
                            <path
                                d="M36.74566,96.60039a144.01884,144.01884,0,0,1,182.50866,0"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></path>
                            <path
                                d="M164.31747,182.93292a28.00353,28.00353,0,1,1,28.82269-45.29368"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></path>
                            <path
                                d="M57.89918,129.84281A28.00328,28.00328,0,1,1,84,168q-.91436,0-1.81448-.05785"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></path>
                        </svg>
                        <h1>Items Management</h1>
                    </router-link>
                    <router-link
                        to="/extras"
                        class="
                            cursor-pointer
                            flex
                            items-center
                            space-x-4
                            px-4
                            py-3
                            hover:bg-orangeBackground hover:text-orangeButton
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                            viewBox="0 0 256 256"
                            class="w-5 h-5"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <path
                                d="M23.44054,75.69239a8.02578,8.02578,0,0,1,2.13281-10.834,176.07221,176.07221,0,0,1,204.85329,0,8.02577,8.02577,0,0,1,2.13281,10.834L134.74929,229.394a8,8,0,0,1-13.49858,0Z"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></path>
                            <path
                                d="M36.74566,96.60039a144.01884,144.01884,0,0,1,182.50866,0"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></path>
                            <path
                                d="M164.31747,182.93292a28.00353,28.00353,0,1,1,28.82269-45.29368"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></path>
                            <path
                                d="M57.89918,129.84281A28.00328,28.00328,0,1,1,84,168q-.91436,0-1.81448-.05785"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></path>
                        </svg>
                        <h1>Extras Management</h1>
                    </router-link>
                    <router-link
                        to="/kitchen"
                        class="
                            cursor-pointer
                            flex
                            items-center
                            space-x-4
                            px-4
                            py-3
                            hover:bg-orangeBackground hover:text-orangeButton
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            focusable="false"
                            color='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                            class="w-5 h-5"
                        >
                            <g
                                color='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                weight="regular"
                            >
                                <line
                                    x1="96"
                                    y1="16"
                                    x2="96"
                                    y2="48"
                                    fill="none"
                                    stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                ></line>
                                <line
                                    x1="128"
                                    y1="16"
                                    x2="128"
                                    y2="48"
                                    fill="none"
                                    stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                ></line>
                                <line
                                    x1="160"
                                    y1="16"
                                    x2="160"
                                    y2="48"
                                    fill="none"
                                    stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                ></line>
                                <path
                                    d="M48,80H208a8,8,0,0,1,8,8v96a24,24,0,0,1-24,24H64a24,24,0,0,1-24-24V88A8,8,0,0,1,48,80Z"
                                    fill="none"
                                    stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                ></path>
                                <line
                                    x1="248"
                                    y1="96"
                                    x2="216"
                                    y2="120"
                                    fill="none"
                                    stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                ></line>
                                <line
                                    x1="8"
                                    y1="96"
                                    x2="40"
                                    y2="120"
                                    fill="none"
                                    stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                ></line>
                            </g>
                        </svg>
                        <h1>Kitchen View</h1>
                    </router-link>
                    <router-link
                        to="/buildings"
                        class="
                            cursor-pointer
                            flex
                            items-center
                            space-x-4
                            px-4
                            py-3
                            hover:bg-orangeBackground hover:text-orangeButton
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                            viewBox="0 0 256 256"
                            class="w-5 h-5"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <line
                                x1="16"
                                y1="215.98316"
                                x2="240"
                                y2="215.98316"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <path
                                d="M143.99414,215.98316v-176a8,8,0,0,0-8-8h-96a8,8,0,0,0-8,8v176"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></path>
                            <path
                                d="M223.99414,215.98316v-112a8,8,0,0,0-8-8h-72"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></path>
                            <line
                                x1="63.99414"
                                y1="71.98316"
                                x2="95.99414"
                                y2="71.98316"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="79.99414"
                                y1="135.98316"
                                x2="111.99414"
                                y2="135.98316"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="63.99414"
                                y1="175.98316"
                                x2="95.99414"
                                y2="175.98316"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="175.99414"
                                y1="175.98316"
                                x2="191.99414"
                                y2="175.98316"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="175.99414"
                                y1="135.98316"
                                x2="191.99414"
                                y2="135.98316"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                        </svg>
                        <h1>Buildings Management</h1>
                    </router-link>
                    <router-link
                        to="/promo-codes"
                        class="
                            cursor-pointer
                            flex
                            items-center
                            space-x-4
                            px-4
                            py-3
                            hover:bg-orangeBackground hover:text-orangeButton
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                            viewBox="0 0 256 256"
                            class="w-5 h-5"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <polyline
                                points="184 48 224 48 224 88"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></polyline>
                            <polyline
                                points="72 208 32 208 32 168"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></polyline>
                            <polyline
                                points="224 168 224 208 184 208"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></polyline>
                            <polyline
                                points="32 88 32 48 72 48"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></polyline>
                            <line
                                x1="80"
                                y1="88"
                                x2="80"
                                y2="168"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="176"
                                y1="88"
                                x2="176"
                                y2="168"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="144"
                                y1="88"
                                x2="144"
                                y2="168"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="112"
                                y1="88"
                                x2="112"
                                y2="168"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                        </svg>
                        <h1>Promo Codes</h1>
                    </router-link>
                    <router-link
                        to="/notifications"
                        class="
                            cursor-pointer
                            flex
                            items-center
                            space-x-4
                            px-4
                            py-3
                            hover:bg-orangeBackground hover:text-orangeButton
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            focusable="false"
                            color='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                            class="w-5 h-5"
                        >
                            <g
                                color='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                weight="regular"
                            >
                                <path
                                    d="M56.20305,104A71.899,71.899,0,0,1,128.5484,32.002c39.58967.29432,71.25651,33.20133,71.25651,72.90185V112c0,35.81563,7.49325,56.59893,14.093,67.95814A7.999,7.999,0,0,1,207.01628,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641Z"
                                    fill="none"
                                    stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                ></path>
                                <path
                                    d="M96,192v8a32,32,0,0,0,64,0v-8"
                                    fill="none"
                                    stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                ></path>
                            </g>
                        </svg>
                        <h1>Push Notifications</h1>
                    </router-link>
                    <router-link
                        to="/users"
                        class="
                            cursor-pointer
                            flex
                            items-center
                            space-x-4
                            px-4
                            py-3
                            hover:bg-orangeBackground hover:text-orangeButton
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                            viewBox="0 0 256 256"
                            class="w-5 h-5"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <circle
                                cx="88.00033"
                                cy="108"
                                r="52"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-miterlimit="10"
                                stroke-width="16"
                            ></circle>
                            <path
                                d="M155.41251,57.937A52.00595,52.00595,0,1,1,169.52209,160"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></path>
                            <path
                                d="M15.99613,197.39669a88.01736,88.01736,0,0,1,144.00452-.00549"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></path>
                            <path
                                d="M169.52209,160a87.89491,87.89491,0,0,1,72.00032,37.3912"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></path>
                        </svg>
                        <h1>Users</h1>
                    </router-link>
                    <router-link
                        to="/settings"
                        class="
                            cursor-pointer
                            flex
                            items-center
                            space-x-4
                            px-4
                            py-3
                            hover:bg-orangeBackground hover:text-orangeButton
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                            viewBox="0 0 256 256"
                            class="w-5 h-5"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <circle
                                cx="128.00098"
                                cy="128.00195"
                                r="48"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></circle>
                            <path
                                d="M197.40626,80.65057a83.91174,83.91174,0,0,1,6.28744,10.91L229.64,105.964a103.88962,103.88962,0,0,1,.03183,44.05764L203.71112,164.433a83.912,83.912,0,0,1-6.30466,10.90011l.49943,29.67182a103.88959,103.88959,0,0,1-38.13912,22.05638l-25.46093-15.27692a83.91075,83.91075,0,0,1-12.5921-.01L96.2669,227.04288a103.88979,103.88979,0,0,1-38.171-22.00126l.49974-29.68828a83.91052,83.91052,0,0,1-6.28743-10.91005L26.362,150.0399a103.88962,103.88962,0,0,1-.03182-44.05764L52.29083,91.5709a83.9124,83.9124,0,0,1,6.30466-10.9001L58.09606,50.999A103.88973,103.88973,0,0,1,96.23518,28.94259l25.46094,15.27693a83.91075,83.91075,0,0,1,12.5921.00995L159.73505,28.961a103.88943,103.88943,0,0,1,38.171,22.00126Z"
                                fill="none"
                                stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></path>
                        </svg>
                        <h1>Settings</h1>
                    </router-link>
                </div>
                <button @click="logout" class="mt-auto p-4 flex space-x-4 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                        viewBox="0 0 256 256"
                        class="w-5 h-5"
                    >
                        <rect width="256" height="256" fill="none"></rect>
                        <polyline
                            points="174.011 86 216 128 174.011 170"
                            fill="none"
                            stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        ></polyline>
                        <line
                            x1="104"
                            y1="128"
                            x2="215.97057"
                            y2="128"
                            fill="none"
                            stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        ></line>
                        <path
                            d="M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56"
                            fill="none"
                            stroke='var(--token-9368426e-3480-425c-a8b0-62b9bfbee28c, rgb(189, 189, 189)) /* {\"name\":\"Gray (New)\"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        ></path>
                    </svg>
                    <h1 class="text-sm text-grayText">Logout</h1>
                </button>
            </div>
            <div class="w-full bg-white ml-80">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, reactive } from "@vue/runtime-core";
import store from "./store";
import Login from "./views/Login.vue";
import MoonLoader from "vue-spinner/src/MoonLoader.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isLoading = computed(() => {
    return store.getters.isLoading;
});

const user = computed(() => {
    return store.getters.user;
});

const isLogged = computed(() => {
    return store.getters.isLogged;
});

const logout = () => {
    store.commit("toggleLoading");
    store.dispatch("logout").then((res) => {
        router.push("/login");
        store.commit("toggleLoading");
    });
};

onMounted(() => {
    if (!isLogged.value) {
        router.push("/login");
    }
});
</script>

<style scoped>
.router-link-active,
.router-link-exact-active {
    @apply text-orangeButton;
    @apply bg-orangeBackground;
}
</style>
