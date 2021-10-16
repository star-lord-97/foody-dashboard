<template>
    <div class="p-6 flex flex-col w-full">
        <div class="flex flex-col space-y-6">
            <div class="space-y-2">
                <div class="flex items-center space-x-2">
                    <div class="flex items-center space-x-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                            viewBox="0 0 256 256"
                            class="w-5 h-5"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <circle
                                cx="128"
                                cy="128"
                                r="96"
                                fill="none"
                                stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                stroke-miterlimit="10"
                                stroke-width="16"
                            ></circle>
                            <polyline
                                points="128 72 128 128 184 128"
                                fill="none"
                                stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></polyline>
                        </svg>
                        <span>1:00pm</span>
                    </div>
                    <div
                        class="
                            p-1.5
                            flex
                            items-center
                            space-x-2
                            text-xs
                            border border-orangeButton border-dashed
                            rounded
                            bg-lightOrangeBackground
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                            viewBox="0 0 256 256"
                            class="h-4 w-4"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <line
                                x1="64"
                                y1="192"
                                x2="192"
                                y2="64"
                                fill="none"
                                stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <polyline
                                points="88 64 192 64 192 168"
                                fill="none"
                                stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></polyline>
                        </svg>
                        <span class="text-orangeButton font-semibold">Out to deliver</span>
                        <span class="underline">Change</span>
                    </div>
                </div>
                <div class="grid grid-cols-4 gap-2 text-sm">
                    <div
                        class="p-6 bg-lightGrayBackground rounded-lg"
                        v-for="item in 4"
                        :key="item"
                    >
                        <div class="flex flex-col space-y-1">
                            <span>Order Number: 1</span>
                            <div class="flex items-center space-x-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    fill='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                    viewBox="0 0 256 256"
                                    class="w-4 h-4"
                                >
                                    <rect width="256" height="256" fill="none"></rect>
                                    <path
                                        d="M40,64V192a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H56A16,16,0,0,1,40,64v0A16,16,0,0,1,56,48H192"
                                        fill="none"
                                        stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="16"
                                    ></path>
                                    <circle cx="180" cy="144" r="12"></circle>
                                </svg>
                                <span class="text-orangeButton">254EGP</span>
                            </div>
                        </div>
                        <hr class="my-4" />
                        <div class="flex items-center">
                            <div class="w-1/2 flex flex-col">
                                <span class="text-xs text-grayText">Pickup time</span>
                                <div class="flex items-center space-x-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        fill='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                        viewBox="0 0 256 256"
                                        class="w-3 h-3"
                                    >
                                        <rect width="256" height="256" fill="none"></rect>
                                        <circle
                                            cx="128"
                                            cy="128"
                                            r="96"
                                            fill="none"
                                            stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                            stroke-miterlimit="10"
                                            stroke-width="16"
                                        ></circle>
                                        <polyline
                                            points="128 72 128 128 184 128"
                                            fill="none"
                                            stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="16"
                                        ></polyline>
                                    </svg>
                                    <span>01:55 PM</span>
                                </div>
                            </div>
                            <div class="w-1/2 flex flex-col">
                                <span class="text-xs text-grayText">Delivery time</span>
                                <div class="flex items-center space-x-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        fill='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                        viewBox="0 0 256 256"
                                        class="w-3 h-3"
                                    >
                                        <rect width="256" height="256" fill="none"></rect>
                                        <circle
                                            cx="128"
                                            cy="128"
                                            r="96"
                                            fill="none"
                                            stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                            stroke-miterlimit="10"
                                            stroke-width="16"
                                        ></circle>
                                        <polyline
                                            points="128 72 128 128 184 128"
                                            fill="none"
                                            stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="16"
                                        ></polyline>
                                    </svg>
                                    <span>02:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="space-y-2">
                <div class="flex items-center space-x-2">
                    <div class="flex items-center space-x-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                            viewBox="0 0 256 256"
                            class="w-5 h-5"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <circle
                                cx="128"
                                cy="128"
                                r="96"
                                fill="none"
                                stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                stroke-miterlimit="10"
                                stroke-width="16"
                            ></circle>
                            <polyline
                                points="128 72 128 128 184 128"
                                fill="none"
                                stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></polyline>
                        </svg>
                        <span>2:00pm</span>
                    </div>
                    <div
                        class="
                            p-1.5
                            flex
                            items-center
                            space-x-2
                            text-xs
                            border border-orangeButton border-dashed
                            rounded
                            bg-lightOrangeBackground
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                            viewBox="0 0 256 256"
                            class="w-4 h-4"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <line
                                x1="96"
                                y1="16"
                                x2="96"
                                y2="48"
                                fill="none"
                                stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
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
                                stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
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
                                stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <path
                                d="M48,80H208a8,8,0,0,1,8,8v96a24,24,0,0,1-24,24H64a24,24,0,0,1-24-24V88A8,8,0,0,1,48,80Z"
                                fill="none"
                                stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
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
                                stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
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
                                stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                        </svg>
                        <span class="text-orangeButton font-semibold">In Kitchen</span>
                        <span class="underline">Change</span>
                    </div>
                </div>
                <div class="grid grid-cols-4 gap-2 text-sm">
                    <div
                        class="p-6 bg-lightGrayBackground rounded-lg"
                        v-for="item in 4"
                        :key="item"
                    >
                        <div class="flex flex-col space-y-1">
                            <span>Order Number: 1</span>
                            <div class="flex items-center space-x-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    fill='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                    viewBox="0 0 256 256"
                                    class="w-4 h-4"
                                >
                                    <rect width="256" height="256" fill="none"></rect>
                                    <path
                                        d="M40,64V192a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H56A16,16,0,0,1,40,64v0A16,16,0,0,1,56,48H192"
                                        fill="none"
                                        stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="16"
                                    ></path>
                                    <circle cx="180" cy="144" r="12"></circle>
                                </svg>
                                <span class="text-orangeButton">254EGP</span>
                            </div>
                        </div>
                        <hr class="my-4" />
                        <div class="flex items-center">
                            <div class="w-1/2 flex flex-col">
                                <span class="text-xs text-grayText">Pickup time</span>
                                <div class="flex items-center space-x-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        fill='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                        viewBox="0 0 256 256"
                                        class="w-3 h-3"
                                    >
                                        <rect width="256" height="256" fill="none"></rect>
                                        <circle
                                            cx="128"
                                            cy="128"
                                            r="96"
                                            fill="none"
                                            stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                            stroke-miterlimit="10"
                                            stroke-width="16"
                                        ></circle>
                                        <polyline
                                            points="128 72 128 128 184 128"
                                            fill="none"
                                            stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="16"
                                        ></polyline>
                                    </svg>
                                    <span>01:55 PM</span>
                                </div>
                            </div>
                            <div class="w-1/2 flex flex-col">
                                <span class="text-xs text-grayText">Delivery time</span>
                                <div class="flex items-center space-x-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        fill='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                        viewBox="0 0 256 256"
                                        class="w-3 h-3"
                                    >
                                        <rect width="256" height="256" fill="none"></rect>
                                        <circle
                                            cx="128"
                                            cy="128"
                                            r="96"
                                            fill="none"
                                            stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                            stroke-miterlimit="10"
                                            stroke-width="16"
                                        ></circle>
                                        <polyline
                                            points="128 72 128 128 184 128"
                                            fill="none"
                                            stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="16"
                                        ></polyline>
                                    </svg>
                                    <span>02:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="space-y-2">
                <div class="flex items-center space-x-2">
                    <div class="flex items-center space-x-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                            viewBox="0 0 256 256"
                            class="w-5 h-5"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <circle
                                cx="128"
                                cy="128"
                                r="96"
                                fill="none"
                                stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                stroke-miterlimit="10"
                                stroke-width="16"
                            ></circle>
                            <polyline
                                points="128 72 128 128 184 128"
                                fill="none"
                                stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></polyline>
                        </svg>
                        <span>3:00pm</span>
                    </div>
                    <div
                        class="
                            p-1.5
                            flex
                            items-center
                            space-x-2
                            text-xs
                            border border-grayText border-dashed
                            rounded
                            bg-semiLightGrayBackground
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                            viewBox="0 0 256 256"
                            class="w-4 h-4"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <line
                                x1="128"
                                y1="32"
                                x2="128"
                                y2="64"
                                fill="none"
                                stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="195.88225"
                                y1="60.11775"
                                x2="173.25483"
                                y2="82.74517"
                                fill="none"
                                stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="224"
                                y1="128"
                                x2="192"
                                y2="128"
                                fill="none"
                                stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="195.88225"
                                y1="195.88225"
                                x2="173.25483"
                                y2="173.25483"
                                fill="none"
                                stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="128"
                                y1="224"
                                x2="128"
                                y2="192"
                                fill="none"
                                stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="60.11775"
                                y1="195.88225"
                                x2="82.74517"
                                y2="173.25483"
                                fill="none"
                                stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="32"
                                y1="128"
                                x2="64"
                                y2="128"
                                fill="none"
                                stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="60.11775"
                                y1="60.11775"
                                x2="82.74517"
                                y2="82.74517"
                                fill="none"
                                stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                        </svg>
                        <span class="text-grayText font-semibold">Waiting for the preparing</span>
                        <span class="underline">Change</span>
                    </div>
                </div>
                <div class="grid grid-cols-4 gap-2 text-sm">
                    <div
                        class="p-6 bg-lightGrayBackground rounded-lg"
                        v-for="item in 4"
                        :key="item"
                    >
                        <div class="flex flex-col space-y-1">
                            <span>Order Number: 1</span>
                            <div class="flex items-center space-x-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    fill='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                    viewBox="0 0 256 256"
                                    class="w-4 h-4"
                                >
                                    <rect width="256" height="256" fill="none"></rect>
                                    <path
                                        d="M40,64V192a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H56A16,16,0,0,1,40,64v0A16,16,0,0,1,56,48H192"
                                        fill="none"
                                        stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="16"
                                    ></path>
                                    <circle cx="180" cy="144" r="12"></circle>
                                </svg>
                                <span class="text-orangeButton">254EGP</span>
                            </div>
                        </div>
                        <hr class="my-4" />
                        <div class="flex items-center">
                            <div class="w-1/2 flex flex-col">
                                <span class="text-xs text-grayText">Pickup time</span>
                                <div class="flex items-center space-x-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        fill='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                        viewBox="0 0 256 256"
                                        class="w-3 h-3"
                                    >
                                        <rect width="256" height="256" fill="none"></rect>
                                        <circle
                                            cx="128"
                                            cy="128"
                                            r="96"
                                            fill="none"
                                            stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                            stroke-miterlimit="10"
                                            stroke-width="16"
                                        ></circle>
                                        <polyline
                                            points="128 72 128 128 184 128"
                                            fill="none"
                                            stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="16"
                                        ></polyline>
                                    </svg>
                                    <span>01:55 PM</span>
                                </div>
                            </div>
                            <div class="w-1/2 flex flex-col">
                                <span class="text-xs text-grayText">Delivery time</span>
                                <div class="flex items-center space-x-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        fill='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                        viewBox="0 0 256 256"
                                        class="w-3 h-3"
                                    >
                                        <rect width="256" height="256" fill="none"></rect>
                                        <circle
                                            cx="128"
                                            cy="128"
                                            r="96"
                                            fill="none"
                                            stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                            stroke-miterlimit="10"
                                            stroke-width="16"
                                        ></circle>
                                        <polyline
                                            points="128 72 128 128 184 128"
                                            fill="none"
                                            stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {"name":"Orange (New)"} */'
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="16"
                                        ></polyline>
                                    </svg>
                                    <span>02:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <div class="flex items-center space-x-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                        viewBox="0 0 256 256"
                        class="w-5 h-5"
                    >
                        <rect width="256" height="256" fill="none"></rect>
                        <circle
                            cx="128"
                            cy="128"
                            r="96"
                            fill="none"
                            stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                            stroke-miterlimit="10"
                            stroke-width="16"
                        ></circle>
                        <polyline
                            points="128 72 128 128 184 128"
                            fill="none"
                            stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        ></polyline>
                    </svg>
                    <span>4:00pm</span>
                </div>
                <div
                    class="
                        p-1.5
                        flex
                        items-center
                        space-x-2
                        text-xs
                        border border-grayText border-dashed
                        rounded
                        bg-semiLightGrayBackground
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                        viewBox="0 0 256 256"
                        class="w-4 h-4"
                    >
                        <rect width="256" height="256" fill="none"></rect>
                        <circle
                            cx="128"
                            cy="128"
                            r="96"
                            fill="none"
                            stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                            stroke-miterlimit="10"
                            stroke-width="16"
                        ></circle>
                        <circle cx="92" cy="108" r="12"></circle>
                        <circle cx="164" cy="108" r="12"></circle>
                        <circle cx="92" cy="108" r="12"></circle>
                        <circle cx="164" cy="108" r="12"></circle>
                        <path
                            d="M169.58,176a48.016,48.016,0,0,0-83.15966-.00055"
                            fill="none"
                            stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        ></path>
                    </svg>
                    <span class="text-grayText font-semibold">No orders yet</span>
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <div class="flex items-center space-x-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                        viewBox="0 0 256 256"
                        class="w-5 h-5"
                    >
                        <rect width="256" height="256" fill="none"></rect>
                        <circle
                            cx="128"
                            cy="128"
                            r="96"
                            fill="none"
                            stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                            stroke-miterlimit="10"
                            stroke-width="16"
                        ></circle>
                        <polyline
                            points="128 72 128 128 184 128"
                            fill="none"
                            stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        ></polyline>
                    </svg>
                    <span>5:00pm</span>
                </div>
                <div
                    class="
                        p-1.5
                        flex
                        items-center
                        space-x-2
                        text-xs
                        border border-grayText border-dashed
                        rounded
                        bg-semiLightGrayBackground
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                        viewBox="0 0 256 256"
                        class="w-4 h-4"
                    >
                        <rect width="256" height="256" fill="none"></rect>
                        <circle
                            cx="128"
                            cy="128"
                            r="96"
                            fill="none"
                            stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                            stroke-miterlimit="10"
                            stroke-width="16"
                        ></circle>
                        <circle cx="92" cy="108" r="12"></circle>
                        <circle cx="164" cy="108" r="12"></circle>
                        <circle cx="92" cy="108" r="12"></circle>
                        <circle cx="164" cy="108" r="12"></circle>
                        <path
                            d="M169.58,176a48.016,48.016,0,0,0-83.15966-.00055"
                            fill="none"
                            stroke='var(--token-b8662b1d-1f87-4920-8a02-02777140dd12, rgb(158, 158, 158)) /* {"name":"Dark Gray"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        ></path>
                    </svg>
                    <span class="text-grayText font-semibold">No orders yet</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style></style>
