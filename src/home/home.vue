<!--
  This page is homepage
  You can launcher game here, only clicked button

-->

<template>
  <div class="flex h-screen">

    <!-- Launcher Button -->
    <div class="fixed right-5 bottom-5 z-50 w-60 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700
    p-4 rounded-lg shadow-lgm text-black dark:text-white **z-9999">
      <button class="btn text-xl">Launch Physics World</button>
      <p>{{ choose_package }}</p>
    </div>

    <!-- Nav -->
    <div class="bg-[rgba(0,0,0,0.1)] dark:gb-[rgba(255,255,255,0.1)] basis-1/16 w-full">
      <div class="relative w-fit group hover:bg-[rgba(0,0,0,0.1)]">
        <button class="bg-transparent boarder-0 outline-none">
          <img
          :src="theme==='dark'
          ? '../../assets/logo/gamepad/gamepad_dark.png'
          : '../../assets/logo/gamepad/gamepad_light.png'
          " class="scale-75">
        </button>
        <span class="
          absolute left-16 top-1/2 -translate-y-1/2
          dark:bg-gray-800 bg-gray-200
          dark:text-white text-gray-800
          text-sm px-3 py-1.5 rounded-md shadow-md
          opacity-0 group-hover:opacity-100
          pointer-events-none
          transition-opacity duration-200
          whitespace-nowrap
        ">
          GamePackage
        </span>
      </div>

      <div class="relative w-fit group hover:bg-[rgba(0,0,0,0.1)]">
        <button class="bg-transparent boarder-0 outline-none">
          <img
          :src="theme==='dark'
          ? '../../assets/logo/menu_list/menu_list_dark.png'
          : '../../assets/logo/menu_list/menu_list_light.png'
          " class="scale-75">
        </button>
        <span class="
          absolute left-16 top-1/2 -translate-y-1/2
          dark:bg-gray-800 bg-gray-200
          dark:text-white text-gray-800
          text-sm px-3 py-1.5 rounded-md shadow-md
          opacity-0 group-hover:opacity-100
          pointer-events-none
          transition-opacity duration-200
          whitespace-nowrap
        ">
          GamePackageList
        </span>
      </div>
      
      <div class="relative w-fit group hover:bg-[rgba(0,0,0,0.1)]">
        <button class="bg-transparent boarder-0 outline-none">
          <img
          :src="theme==='dark'
          ? '../../assets/logo/import/import_dark.png'
          : '../../assets/logo/import/import_light.png'
          " class="scale-75">
        </button>
        <span class="
            absolute left-16 top-1/2 -translate-y-1/2
            dark:bg-gray-800 bg-gray-200
            dark:text-white text-gray-800
            text-sm px-3 py-1.5 rounded-md shadow-md
            opacity-0 group-hover:opacity-100
            pointer-events-none
            transition-opacity duration-200
            whitespace-nowrap
        ">
          Download new game
        </span>
      </div>

      <div class="relative w-fit group hover:bg-[rgba(0,0,0,0.1)]">
        <button @click="test" class="bg-transparent boarder-0 outline-none">
          <img
          :src="theme==='dark'
          ? '../../assets/logo/gear/gear_dark.png'
          : '../../assets/logo/gear/gear_light.png'
          " class="scale-75">
        </button>
        <span class="
            absolute left-16 top-1/2 -translate-y-1/2
            dark:bg-gray-800 bg-gray-200
            dark:text-white text-gray-800
            text-sm px-3 py-1.5 rounded-md shadow-md
            opacity-0 group-hover:opacity-100
            pointer-events-none
            transition-opacity duration-200
            whitespace-nowrap
        ">
          Setting
        </span>
      </div>
       
    </div>

    

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme'
import { useRouter } from 'vue-router'
const router = useRouter()

const { theme } = useTheme()


function test()
{
  router.push('/setting')
}

const choose_package = ref('Choose Game Package');

window.onload = () => {
  if (window.Electron && window.Electron.ipcRenderer) {
    window.Electron.ipcRenderer.on('update-tooltip', (event, text) => {
      choose_package.value = text
    })
  }
}

</script>