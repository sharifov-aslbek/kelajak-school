<template>
    <div>
      <!-- Background page content (for demo purposes) -->
      <div class="">
        <!-- <div class="flex justify-between items-center mb-6">
          <div class="text-amber-800">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="flex items-center">
            <span class="mr-2 text-amber-800 font-medium">Kurslar</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-800">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
          <button class="text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
  
        <div class="bg-amber-50 rounded-lg p-6 mb-6">
          <h2 class="text-amber-800 text-2xl font-bold mb-3">Master-klass va musobaqalar</h2>
          <p class="text-amber-700">
            «Najot Ta'lim»da har hafta soha bo'yicha o'tkaziladigan master-klass va musobaqalarda qatnashib, amaliy va muhim ko'nikmalarga ega bo'ling.
          </p>
        </div> -->
  
        <!-- Modal overlay -->
        <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <!-- Modal content -->
          <div class="relative w-full max-w-md">
            <!-- Close button -->
            <button 
              @click="closeModal" 
              class="absolute top-3 right-3 bg-white bg-opacity-20 rounded-full p-1 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
  
            <!-- Modal card -->
            <div class="bg-yellow-600 rounded-3xl p-6 pt-10 pb-8 shadow-xl">
              <!-- Python logo -->
              <div class="flex mb-4">
                <div class="flex">
                  <div class="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
                    <div class="bg-yellow-400 rounded-full w-7 h-7 flex items-center justify-center relative">
                      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 bg-blue-600 rounded-full w-2 h-2"></div>
                      <div class="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/3 bg-blue-600 rounded-full w-2 h-2"></div>
                      <div class="absolute bottom-0 right-1/4 transform translate-x-1/2 translate-y-1/3 bg-blue-600 rounded-full w-2 h-2"></div>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Modal content -->
              <div class="text-white mb-8">
                <h2 class="text-2xl font-bold mb-2">          {{ $t('subtitle-home') }}
                </h2>
              </div>
  
              <!-- Button -->
              <div class="flex justify-start">
                <a href="https://online-qabulga-yozilish.netlify.app/" class="bg-white text-gray-800 px-5 py-2 rounded-lg font-medium">
          {{ $t('link-hero') }}
                  
                </a>
              </div>
  
              <!-- JS logo -->
              <div class="absolute bottom-6 right-6">
                <div class="rounded-lg w-12 h-12 flex items-center justify-center transform rotate-12 shadow-md">
                  <!-- <span class="text-black font-bold text-xl">JS</span> -->
                   <img src="@/assets/images/kelajak-schoollogo.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Button to open modal -->
        <!-- <button 
          @click="openModal" 
          class="bg-emerald-600 text-white w-full py-3 rounded-lg font-medium"
        >
          So'rov yuborish
        </button> -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isModalOpen = ref(true);
  
  const openModal = () => {
    isModalOpen.value = true;
  };
  
  const closeModal = () => {
    isModalOpen.value = false;
  };
  </script>
  
  <style>
  body {
    font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  </style>