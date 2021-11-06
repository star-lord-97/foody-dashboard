<template>
    <div class="flex flex-col">
        <div class="px-4 pt-10 pb-6 font-semibold text-xl">Settings</div>
        <div class="grid grid-cols-3 gap-8 px-6">
            <router-link
                class="
                    flex flex-col
                    items-center
                    justify-center
                    p-6
                    border
                    rounded-xl
                    space-y-4
                    hover:bg-grayBackground
                    cursor-pointer
                "
                to="/sys-users"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    color='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {\"name\":\"Orange (New)\"} */'
                    class="h-20 w-20"
                >
                    <g
                        color='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {\"name\":\"Orange (New)\"} */'
                        weight="regular"
                    >
                        <circle
                            cx="88.00033"
                            cy="108"
                            r="52"
                            fill="none"
                            stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {\"name\":\"Orange (New)\"} */'
                            stroke-miterlimit="10"
                            stroke-width="16"
                        ></circle>
                        <path
                            d="M155.41251,57.937A52.00595,52.00595,0,1,1,169.52209,160"
                            fill="none"
                            stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {\"name\":\"Orange (New)\"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        ></path>
                        <path
                            d="M15.99613,197.39669a88.01736,88.01736,0,0,1,144.00452-.00549"
                            fill="none"
                            stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {\"name\":\"Orange (New)\"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        ></path>
                        <path
                            d="M169.52209,160a87.89491,87.89491,0,0,1,72.00032,37.3912"
                            fill="none"
                            stroke='var(--token-5295d512-3876-4ab3-8171-8819b3ec86f2, rgb(252, 183, 76)) /* {\"name\":\"Orange (New)\"} */'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        ></path>
                    </g>
                </svg>
                <span>Manage System Users</span>
            </router-link>
        </div>
    </div>
</template>

<script setup></script>

<style></style>
