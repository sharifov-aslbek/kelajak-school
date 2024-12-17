<!-- <template>
   <footer class="foot bg-brand-blue py-4">
      <div class="container">
         <div class="content flex justify-start mx:justify-between flex-wrap gap-10 text-white">
            <div class="text-content text-white">
               <div class="logo flex items-center gap-2">
                  <img class="w-[50px] mb-[10px] rounded-full" src="@/assets/images/logo-2.jpg" alt="">
                  <h3>Kelajak School</h3>
               </div>
            <p class="w-full max-w-[370px] my-3">{{ $t('footer-subtitle') }}</p>
            <p class="w-full max-w-[350px] my-3">{{ $t('footer-subtitle-2') }}</p>

            <div class="socials flex gap-3">
               <a href="https://t.me/Kelajak_school_qarshi" class="hover:text-gray-200">
               <i class="fa-brands fa-telegram"></i>
            </a>
 
            <a href="https://www.instagram.com/kelajak.school/" class="hover:text-gray-200">
               <i class="fa-brands fa-instagram"></i>
            </a>
            </div>
         </div>

         <div class="quick-links flex flex-col gap-5 w-full max-w-[330px] l:w-auto">
            <router-link to="qulaylik" class="hover:font-bold">{{ $t('navbar-link') }}</router-link>
            <router-link to="connection" class="hover:font-bold">{{ $t('navbar-link-2') }}</router-link>
            <router-link to="" class="hover:font-bold">{{ $t('navbar-link-3') }}</router-link>
            <router-link to="support" class="hover:font-bold">{{ $t('link-hero') }}</router-link>
         </div>

         <div class="phone flex flex-col gap-2 sm:gap-5 w-full max-w-[370px] mx:w-auto">
            <h3>{{ $t('footer-aloqa') }}</h3>
            <h4><i class="fa-solid fa-phone"></i> +998 91 463 33 22</h4>
            <h4><i class="fa-solid fa-phone"></i> +998 93 363 33 22</h4>
         </div>

         <div class="location flex flex-col gap-2 sm:gap-5">
            <h3>{{ $t('footer-location-text') }}:</h3>
            <h4><i class="fa-solid fa-location-dot"></i> Qarshi Shahar, Mustaqillik ko'chasi 5-uy</h4>

            <h3>{{ $t('footer-moljal') }}:</h3>
            <h4><i class="fa-solid fa-location-dot"></i> {{ $t('footer-moljal-text') }}</h4>
         </div>
         </div>
         
         <div class="line border w-full max-w-full my-4 mx-auto border-gray-500"></div>
         <div class="developed mx:text-center text-white">Kelajak School || 2024-2025</div>
      </div>
   </footer>
</template>

<script>
export default {
   
}
</script>

<style>

</style> -->


<template>
   <footer class="bg-[#1B2B44] text-white py-8">
     <div class="container mx-auto px-4">
       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         <!-- School Info Section -->
         <div class="space-y-4">
           <div class="flex items-center space-x-2">
             <img src="@/assets/images/logo-2.jpg" alt="Kelajak School Logo" class="w-10 h-10 rounded-full bg-white" />
             <h2 class="text-xl font-bold">Kelajak School</h2>
           </div>
           <p class="text-sm">
            {{ $t('footer-subtitle') }}
           </p>
           <p class="text-sm">
            {{ $t('footer-subtitle-2') }}
           </p>
           <div class="flex space-x-4">
             <a href="https://t.me/Kelajak_school_qarshi" aria-label="Telegram" class="hover:text-blue-400 transition-colors">
               <SendIcon size="20" />
             </a>
             <a href="https://www.instagram.com/kelajak.school/" aria-label="Instagram" class="hover:text-pink-400 transition-colors">
               <InstagramIcon size="20" />
             </a>
           </div>
         </div>
 
         <!-- Quick Links Section -->
         <div>
           <h3 class="text-lg font-semibold mb-4">{{ $t('navbar-link') }}</h3>
           <ul class="space-y-2">
             <li><a href="#" class="hover:text-gray-300 transition-colors">{{ $t('navbar-link-2') }}</a></li>
             <li><a href="#" class="hover:text-gray-300 transition-colors">{{ $t('navbar-link-3') }}</a></li>
             <li><a href="#" class="hover:text-gray-300 transition-colors">{{ $t('link-hero') }}</a></li>
           </ul>
         </div>
 
         <!-- Contact Section -->
         <div>
           <h3 class="text-lg font-semibold mb-4">{{ $t('footer-aloqa') }}</h3>
           <ul class="space-y-2">
             <li class="flex items-center space-x-2">
               <PhoneIcon size="16" />
               <a href="tel:+998914633322" class="hover:text-gray-300 transition-colors">+998 91 463 33 22</a>
             </li>
             <li class="flex items-center space-x-2">
               <PhoneIcon size="16" />
               <a href="tel:+998933633322" class="hover:text-gray-300 transition-colors">+998 93 363 33 22</a>
             </li>
           </ul>
         </div>
 
         <!-- Address Section -->
         <div>
           <h3 class="text-lg font-semibold mb-4">{{ $t('footer-location-text') }}:</h3>
           <p class="flex items-start space-x-2 mb-2">
             <MapPinIcon size="20" class="mt-1 flex-shrink-0" />
             <span>Qarshi Shahar, Mustaqillik ko'chasi 5-uy</span>
           </p>
           <p class="flex items-start space-x-2">
             <MapPinIcon size="20" class="mt-1 flex-shrink-0" />
             <span>
               <strong class="block">{{ $t('footer-moljal') }}:</strong>
               Nasaf Markaziy Stadioni yonida
             </span>
           </p>
         </div>
       </div>
 
       <!-- Copyright Section -->
       <div class="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
         <p>Kelajak School || 2024-2025</p>
       </div>
     </div>
   </footer>
 </template>
 
 <script setup>
 import { SendIcon, InstagramIcon, PhoneIcon, MapPinIcon } from 'lucide-vue-next'
 </script>