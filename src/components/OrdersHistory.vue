<template>
    <div class="flex flex-col space-y-2 w-full">
        <div class="flex flex-col p-6 space-y-2">
            <div class="flex flex-row text-grayText text-sm divide-x-2">
                <span class="w-12 text-center">ID</span>
                <span class="pl-2 w-2/12">User</span>
                <span class="pl-2 w-2/12">Building</span>
                <span class="pl-2 w-2/12">Price</span>
                <span class="pl-2 w-2/12">Date & Time</span>
                <span class="pl-2 w-2/12">Stage</span>
                <span class="pl-2 w-2/12">Actions</span>
            </div>
            <div
                class="flex flex-row bg-grayBackground text-sm divide-x-2 py-4 rounded-sm"
                v-for="item in 15"
                :key="item"
            >
                <span class="w-12 text-center">1</span>
                <span class="pl-2 w-2/12 underline">Kareem Mohamed</span>
                <span class="pl-2 w-2/12">14 A</span>
                <span class="pl-2 w-2/12">250 EGP</span>
                <span class="pl-2 w-2/12">2 Jan 2019 . 2:00</span>
                <span class="pl-2 w-2/12 text-orangeButton">Delivered</span>
                <span class="pl-2 w-2/12 text-blue-400 underline">Show Details</span>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style></style>
