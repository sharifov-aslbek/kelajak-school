<template>
    <div v-if="isVisible" class="relative bg-yellow-600 py-2 px-4 flex items-center justify-between">
      <!-- Left side icons -->
      <div class="flex items-center space-x-4">
        <div class="relative w-10 h-10 md:w-12 md:h-12">
          <!-- <img src="/python-icon.svg" alt="Python" class="absolute w-full h-full object-contain" /> -->
        </div>
        <div class="relative w-10 h-10 md:w-12 md:h-12 ml-2">
          <!-- <img src="/camera-icon.svg" alt="Camera" class="absolute w-full h-full object-contain" /> -->
        </div>
      </div>
      
      <!-- Center text -->
      <div class="flex-1 text-center">
        <h2 class="text-white font-medium text-sm md:text-xl">
          {{ $t('subtitle-home') }}
        </h2>
      </div>
      
      <!-- Button -->
      <div class="flex items-center space-x-4">
        <RouterLink to="/support" class="bg-white text-gray-800 px-3 py-1 md:px-4 md:py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
          {{ $t('link-hero') }}
        </RouterLink>
        
        <!-- Right side icons -->
        <div class="relative w-10 h-10 md:w-12 md:h-12 ml-2 hidden md:block">
          <!-- <img src="/js-icon.svg" alt="JavaScript" class="absolute w-full h-full object-contain" /> -->
        </div>
        
        <!-- Close button -->
        <button 
          @click="closeBanner" 
          class="text-white hover:text-gray-200 transition-colors"
          aria-label="Close banner"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // State to control banner visibility
  const isVisible = ref(true);
  
  // Function to close the banner
  const closeBanner = () => {
    isVisible.value = false;
    
    // Optional: Save to localStorage to keep banner closed on future visits
    // localStorage.setItem('bannerClosed', 'true');
  };
  
  // Check localStorage on component mount
//   onMounted(() => {
//     if (localStorage.getItem('bannerClosed') === 'true') {
//       isVisible.value = false;
//     }
//   });
  </script>
  
  <style scoped>
  /* Additional custom styles can be added here if needed */
  </style>