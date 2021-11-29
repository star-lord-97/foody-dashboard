<template>
    <!-- Filter Modal -->
    <div v-if="state.showFilterModal">
        <div
            class="fixed top-0 left-0 z-10 w-screen h-screen cursor-pointer"
            style="background: rgba(0, 0, 0, 0.5)"
            @click="state.showFilterModal = false"
        ></div>
        <div
            class="bg-white fixed h-2/5 w-1/5 z-20 rounded-xl overflow-hidden"
            style="top: 30%; left: 40%"
        >
            <div class="p-6 flex flex-col items-start space-y-2">
                <h1>Filter</h1>
                <div class="flex flex-col w-full">
                    <label for="type" class="text-grayText text-sm">Filter Type</label>
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
                        id="type"
                        name="type"
                        v-model="state.filter.type"
                    >
                        <option value="assigned_to__name__contains">Assigned to ..</option>
                        <option value="name__contains">Building</option>
                    </select>
                </div>
                <div class="flex flex-col w-full">
                    <label for="type" class="text-grayText text-sm">Filter Attribute</label>
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
                        v-model="state.filter.value"
                    />
                </div>
                <button
                    class="
                        bg-orangeButton
                        text-white text-sm
                        font-semibold
                        py-1.5
                        px-4
                        rounded-md
                        text-center
                    "
                    @click="filter"
                >
                    Filter
                </button>
            </div>
        </div>
    </div>
    <!-- New Building Modal -->
    <div v-if="state.showNewBuildingModal">
        <div
            class="fixed top-0 left-0 z-10 w-screen h-screen cursor-pointer"
            style="background: rgba(0, 0, 0, 0.5)"
            @click="state.showNewBuildingModal = false"
        ></div>
        <div
            class="bg-white fixed h-3/5 w-1/3 z-20 rounded-xl overflow-hidden"
            style="top: 20%; left: 33%"
        >
            <div class="p-6 flex flex-col items-center justify-between h-full">
                <div class="flex w-full justify-between">
                    <h1>New Building</h1>
                    <svg
                        v-if="state.showNewBuildingModal"
                        @click="state.showNewBuildingModal = false"
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
                        <label for="type" class="text-grayText text-sm">Building Name</label>
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
                            v-model="state.newBuilding.name"
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Assign to</label>
                        <select
                            class="focus:outline-none py-4 pl-4 pr-12 bg-grayBackground rounded-lg"
                            id="type"
                            name="type"
                            v-model="state.newBuilding.assigned_to"
                        >
                            <option v-for="user in state.users" :key="user.id" :value="user.id">
                                {{ user.name }}
                            </option>
                        </select>
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
                        @click="state.showNewBuildingModal = false"
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
                        @click="registerBuilding"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- Edit Building Modal -->
    <div v-if="state.editBuilding.showEditBuildingModal">
        <div
            class="fixed top-0 left-0 z-10 w-screen h-screen cursor-pointer"
            style="background: rgba(0, 0, 0, 0.5)"
            @click="state.editBuilding.showEditBuildingModal = false"
        ></div>
        <div
            class="bg-white fixed h-3/5 w-1/3 z-20 rounded-xl overflow-hidden"
            style="top: 20%; left: 33%"
        >
            <div class="p-6 flex flex-col items-center justify-between h-full">
                <div class="flex w-full justify-between">
                    <h1>New Building</h1>
                    <svg
                        v-if="state.editBuilding.showEditBuildingModal"
                        @click="state.editBuilding.showEditBuildingModal = false"
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
                        <label for="type" class="text-grayText text-sm">Building Name</label>
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
                            v-model="state.newBuilding.name"
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Assign to</label>
                        <select
                            class="focus:outline-none py-4 pl-4 pr-12 bg-grayBackground rounded-lg"
                            id="type"
                            name="type"
                            v-model="state.newBuilding.assigned_to"
                        >
                            <option v-for="user in state.users" :key="user.id" :value="user.id">
                                {{ user.name }}
                            </option>
                        </select>
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
                        @click="state.editBuilding.showEditBuildingModal = false"
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
                        @click="editBuilding"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- delete modal -->
    <div v-if="state.deleteBuilding.showDeleteModal">
        <div
            class="fixed top-0 left-0 z-10 w-screen h-screen cursor-pointer"
            style="background: rgba(0, 0, 0, 0.5)"
            @click="state.deleteBuilding.showDeleteModal = false"
        ></div>
        <div
            class="bg-white fixed h-2/5 w-1/3 z-20 rounded-xl overflow-hidden"
            style="top: 30%; left: 33%"
        >
            <div class="p-6 flex flex-col items-center justify-between h-full space-y-8">
                <div class="w-full text-center">
                    Are you sure you want to delete
                    <span class="font-bold">{{ state.deleteBuilding.buildingToDelete.name }}</span
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
                        @click="state.deleteBuilding.showDeleteModal = false"
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
                        @click="deleteBuilding"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- New Delivery Man Modal -->
    <div v-if="state.showNewDeliveryManModal">
        <div
            class="fixed top-0 left-0 z-10 w-screen h-screen cursor-pointer"
            style="background: rgba(0, 0, 0, 0.5)"
            @click="state.showNewDeliveryManModal = false"
        ></div>
        <div
            class="bg-white fixed h-4/5 w-1/3 z-20 rounded-xl overflow-x-scroll"
            style="top: 10%; left: 33%"
        >
            <div class="p-6 flex flex-col items-center space-y-6">
                <div class="flex w-full justify-between">
                    <h1>New Delivery Man</h1>
                    <svg
                        v-if="state.showNewDeliveryManModal"
                        @click="state.showNewDeliveryManModal = false"
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
                        <label for="type" class="text-grayText text-sm">Delivery Name</label>
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
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Phone Number</label>
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
                            placeholder="Enter Phone Number"
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Email</label>
                        <span class="text-xs">We will send an invitation to this mail</span>
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
                            placeholder="Enter Email"
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm">Password</label>
                        <span class="text-xs">He won't be able to change this password</span>
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
                            placeholder="Enter Password"
                        />
                    </div>
                </div>
                <div class="border rounded-lg p-4 flex flex-col items-start w-full space-y-4">
                    <div class="flex flex-col w-full space-y-2">
                        <label for="type" class="text-grayText text-sm"
                            >Assign delivery to building(s)</label
                        >
                        <treeselect
                            v-model="state.buildings"
                            :multiple="true"
                            :flat="true"
                            :options="[
                                { id: 0, label: 'A-17 - Valeo' },
                                { id: 1, label: 'A-18 - Valeo' },
                                { id: 2, label: 'A-19 - Valeo' },
                                { id: 3, label: 'A-20 - Valeo' },
                                { id: 4, label: 'A-21 - Valeo' },
                                { id: 5, label: 'A-22 - Valeo' },
                            ]"
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
                        @click="state.showNewDeliveryManModal = false"
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
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col">
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
                        cursor-pointer
                    "
                    @click="state.showFilterModal = true"
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
                        placeholder="Search by building name ..."
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
                    @click="
                        state.showNewBuildingModal = true;
                        store.dispatch('getAllUsers').then((res) => {
                            state.users = res.data
                                .filter((el) => el.is_delivery_man === true)
                                .map((el) => {
                                    return { id: el.id, name: el.name };
                                });
                            state.newBuilding.assigned_to = state.users[0].id;
                        });
                    "
                >
                    <span>New Building</span>
                </button>
                <button
                    @click="state.showNewDeliveryManModal = true"
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
                v-for="building in state.buildings"
                :key="building"
            >
                <span class="w-12 text-center">{{ building.id }}</span>
                <span class="pl-2 w-3/12">{{ building.name }}</span>
                <span class="pl-2 w-4/12">{{ building.number_of_users }} Users</span>
                <div class="pl-2 w-4/12 flex items-center space-x-2">
                    <span>{{ building.assigned_to.name }}</span>
                </div>
                <div class="pl-2 flex items-center space-x-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill='var(--token-574d4218-ff40-4048-adf1-2a196fe571b1, rgb(190, 35, 35)) /* {\"name\":\"Primary Red\"} */'
                        viewBox="0 0 256 256"
                        class="h-5 w-5 cursor-pointer"
                        @click="
                            state.deleteBuilding.showDeleteModal = true;
                            state.deleteBuilding.buildingToDelete = building;
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
                            getBuilding(building.id);
                            store.dispatch('getAllUsers').then((res) => {
                                state.users = res.data.map((el) => {
                                    return { id: el.id, name: el.name };
                                });
                                state.newBuilding.assigned_to = state.users[0].id;
                                state.editBuilding.buildingToEdit = building;
                            });
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
import Treeselect from "vue3-treeselect";
import "vue3-treeselect/dist/vue3-treeselect.css";
import store from "../store";

const state = reactive({
    showFilterModal: false,
    showNewBuildingModal: false,
    showSearchBar: false,
    showNewDeliveryManModal: false,
    deleteBuilding: {
        showDeleteModal: false,
        buildingToDelete: {},
    },
    editBuilding: {
        showEditBuildingModal: false,
        buildingToEdit: {},
    },
    buildings: [],
    filter: {
        type: "assigned_to__name__contains",
        value: "",
    },
    search: "",
    newBuilding: {
        name: "",
        assigned_to: "",
        number_of_users: 0,
    },
    users: [],
});

const filter = () => {
    store
        .dispatch("filterBuildings", { ...state.filter })
        .then((res) => {
            state.buildings = res.data.results;
            state.filter = {
                type: "assigned_to__name__contains",
                value: "",
            };
            state.showFilterModal = false;
        })
        .catch((err) => {
            state.buildings = [];
            state.showFilterModal = false;
        });
};

const search = () => {
    store.dispatch("searchBuildings", state.search).then((res) => {
        state.buildings = res.data.results;
        state.search = "";
    });
};

const deleteBuilding = () => {
    store.dispatch("deleteBuilding", state.deleteBuilding.buildingToDelete.id).then((res) => {
        state.buildings = res.data.results;
        state.deleteBuilding.showDeleteModal = false;
    });
};

const registerBuilding = () => {
    store.dispatch("registerBuilding", state.newBuilding).then((res) => {
        state.buildings = res.data.results;
        state.newBuilding = {
            name: "",
            assigned_to: "",
            number_of_users: 0,
        };
        state.showNewBuildingModal = false;
    });
};

const getBuilding = (id) => {
    store.dispatch("getBuilding", id).then((res) => {
        state.newBuilding.name = res.name;
        state.newBuilding.assigned_to = res.assigned_to;
        state.editBuilding.showEditBuildingModal = true;
    });
};

const editBuilding = () => {
    store
        .dispatch("editBuilding", {
            id: state.editBuilding.buildingToEdit.id,
            data: state.newBuilding,
        })
        .then((res) => {
            state.buildings = res.data.results;
            state.newBuilding = {
                name: "",
                assigned_to: "",
                number_of_users: 0,
            };
            state.editBuilding.showEditBuildingModal = false;
        });
};

onMounted(() => {
    store
        .dispatch("getBuildings")
        .then((res) => {
            state.buildings = res.data.results;
        })
        .catch((err) => {});
});
</script>

<style></style>
