<template>
    <div class="flex bg-[rgba(0,0,0,0.1)] dark:gb-[rgba(255,255,255,0.9)] w-64 h-full">
        <nav>
            <div @click="router.push('/')" class="flex item-center w-64 hover:bg-[rgba(0,0,0,0.1)] p-5">
                <div class="w-6 h-6 mt-auto mb-auto ml-3">
                   <img
                    :src="theme==='dark'
                    ? '../../assets/logo/left/left_dark.png'
                    : '../../assets/logo/left/left_light.png'
                    " class="scale-200"> 
                </div>
                <span class="text text-3xl ml-3 text-black dark:text-white">Quit</span>
            </div>

            <div @click="router.push('/setting/generic')" class="flex item-center w-64 hover:bg-[rgba(0,0,0,0.1)] p-5">
                <div class="w-6 h-6 mt-auto mb-auto ml-3">
                   <img
                    :src="theme==='dark'
                    ? '../../assets/logo/wrench/wrench_dark.png'
                    : '../../assets/logo/wrench/wrench_light.png'
                    " class="scale-200"> 
                </div>
                <span class="text text-3xl ml-3 text-black dark:text-white">Generic</span>
            </div>
            
            <div @click="" class="flex item-center w-64 hover:bg-[rgba(0,0,0,0.1)] p-5">
                <div class="w-6 h-6 mt-auto mb-auto ml-3">
                   <img
                    :src="theme==='dark'
                    ? '../../assets/logo/rocket/rocket_dark.png'
                    : '../../assets/logo/rocket/rocket_light.png'
                    " class="scale-120"> 
                </div>
                <span class="text text-3xl ml-3 text-black dark:text-white">Launcher</span>
            </div>

            <div @click="" class="flex item-center w-64 hover:bg-[rgba(0,0,0,0.1)] p-5">
                <div class="w-6 h-6 mt-auto mb-auto ml-3">
                   <img
                    :src="theme==='dark'
                    ? '../../assets/logo/import/import_dark.png'
                    : '../../assets/logo/import/import_light.png'
                    " class="scale-200"> 
                </div>
                <span class="text text-3xl ml-3 text-black dark:text-white">Download</span>
            </div>

            <div @click="" class="flex item-center w-64 hover:bg-[rgba(0,0,0,0.1)] p-5">
                <div class="w-6 h-6 mt-auto mb-auto ml-3">
                   <img
                    :src="theme==='dark'
                    ? '../../assets/logo/information/information_dark.png'
                    : '../../assets/logo/information/information_light.png'
                    " class="scale-200"> 
                </div>
                <span class="text text-3xl ml-3 text-black dark:text-white">About</span>
            </div>
            
        </nav>
        <article>
            <div class="flex-1 
             bg-white dark:bg-gray-900 
             text-gray-900 dark:text-white 
             overflow-y-auto 
             p-6">
      <router-view />
    </div>
        </article>
    </div>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router'
import { useTheme } from '../composables/useTheme';

const { theme } = useTheme();

const router = useRouter()



</script>