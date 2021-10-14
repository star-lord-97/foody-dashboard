<template>
    <div class="w-full h-full flex">
        <div class="w-1/2 bg-grayBackground flex flex-col justify-center items-center">
            <div class="w-5/12 flex flex-col justify-center items-center space-y-6">
                <div class="flex flex-col items-center w-full">
                    <h1>Logo</h1>
                    <p class="text-xl">Sign in to Dashboard</p>
                </div>
                <div class="space-y-6 flex flex-col w-full">
                    <input
                        type="text"
                        placeholder="Enter your Email"
                        class="
                            text-sm
                            font-semibold
                            py-4
                            border border-inputBorder
                            rounded-md
                            focus:outline-none
                            px-4
                        "
                    />
                    <input
                        type="text"
                        placeholder="Enter your password"
                        class="
                            text-sm
                            font-semibold
                            py-4
                            border border-inputBorder
                            rounded-md
                            focus:outline-none
                            px-4
                        "
                    />
                </div>
                <div class="flex justify-between w-full text-sm">
                    <div class="flex items-center space-x-2">
                        <input type="checkbox" name="remember" id="remember" />
                        <p>Remember me</p>
                    </div>
                    <h1 class="text-orangeButton cursor-pointer">Reset Password!</h1>
                </div>
                <router-link
                    class="
                        bg-orangeButton
                        text-white
                        font-semibold
                        w-full
                        py-2
                        rounded-md
                        text-center
                    "
                    :to="{ name: 'dashboard' }"
                >
                    Login
                </router-link>
            </div>
        </div>
        <div class="w-1/2 h-full relative">
            <div class="absolute w-full h-full top-0 right-0 bg-black opacity-60"></div>
            <div
                class="
                    absolute
                    w-full
                    h-full
                    top-0
                    right-0
                    flex flex-col
                    justify-center
                    items-center
                    text-white
                "
            >
                <h1 class="text-7xl font-bold">Welcome Back!</h1>
                <p class="text-lg font-semibold">Very good works are waiting for you!</p>
            </div>
            <img
                src="../assets/login-backdrop.jpg"
                class="h-full object-cover"
                alt="login-backdrop"
            />
        </div>
    </div>
</template>

<script setup></script>

<style scoped></style>
