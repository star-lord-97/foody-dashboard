<template>
    <div class="w-full p-6 flex flex-col space-y-6">
        <div class="flex space-x-4">
            <img
                src="../assets/mini-sandwiches.jpg"
                alt=""
                class="rounded-lg w-32 h-20 object-cover"
            />
            <div class="flex flex-col space-y-2 items-start">
                <div class="flex items-center space-x-2 font-semibold">
                    <h1 class="text-xl">Mini Sandwiches</h1>
                    <span class="text-lg text-orangeButton">58.00 EGP</span>
                </div>
                <p class="text-sm text-grayText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate libero quae
                    voluptatem facere consequuntur dignissimos illo aliquam labore exercitationem
                    repellat.
                </p>
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
                >
                    Edit Item
                </button>
            </div>
        </div>
        <h1 class="border-b text-sm">Item Details</h1>
        <h1 class="font-semibold text-lg">More Details</h1>
        <div class="flex flex-col space-y-2">
            <p class="text-xs text-grayText">Item Cost</p>
            <p class="text-sm">15 EGP</p>
            <p class="text-xs text-grayText">Discount</p>
            <p class="text-sm">0 EGP</p>
        </div>
        <h1 class="font-semibold text-lg">Selections</h1>
        <div class="flex flex-col">
            <p class="text-xs text-grayText">Size (min:1, max:1)</p>
            <div class="flex items-center space-x-2">
                <h1 class="text-grayBullet text-lg">&#x25cf;</h1>
                <p class="text-sm">Small</p>
                <h1 class="text-orangeButton text-xs">Default</h1>
            </div>
            <div class="flex items-center space-x-2">
                <h1 class="text-grayBullet text-lg">&#x25cf;</h1>
                <p class="text-sm">Small</p>
                <h1 class="text-orangeButton text-xs">+10 EGP</h1>
            </div>
            <div class="flex items-center space-x-2">
                <h1 class="text-grayBullet text-lg">&#x25cf;</h1>
                <p class="text-sm">Small</p>
                <h1 class="text-orangeButton text-xs">+15 EGP</h1>
            </div>
        </div>
        <div class="flex flex-col">
            <p class="text-xs text-grayText">Extra (max:2)</p>
            <div class="flex items-center space-x-2">
                <h1 class="text-grayBullet text-lg">&#x25cf;</h1>
                <p class="text-sm">Onion</p>
                <h1 class="text-orangeButton text-xs">+10 EGP</h1>
            </div>
            <div class="flex items-center space-x-2">
                <h1 class="text-grayBullet text-lg">&#x25cf;</h1>
                <p class="text-sm">Mushroom</p>
                <h1 class="text-orangeButton text-xs">+10 EGP</h1>
            </div>
            <div class="flex items-center space-x-2">
                <h1 class="text-grayBullet text-lg">&#x25cf;</h1>
                <p class="text-sm">Spicy</p>
                <h1 class="text-orangeButton text-xs">+10 EGP</h1>
            </div>
            <div class="flex items-center space-x-2">
                <h1 class="text-grayBullet text-lg">&#x25cf;</h1>
                <p class="text-sm">Ranch dressing</p>
                <h1 class="text-orangeButton text-xs">+10 EGP</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
