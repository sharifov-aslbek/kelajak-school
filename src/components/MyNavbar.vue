<template>
   <header class="head bg-brand-blue py-3">
      <div class="container flex items-center justify-between">
         <div class="logo flex items-center">
            <router-link to="/">
               <img class="w-[70px] s:w-[80px]" src="../assets/images/kelajak-schoollogo.jpg" alt="">
            </router-link>
         </div>
 
         <div class="menu hidden items-center w-full max-w-[800px] justify-center gap-7 xc:gap-0 xc:justify-around text-gray-200 xc:flex">
            <router-link to="qulaylik" class="hover:font-bold">{{ $t('navbar-link') }}</router-link>
            <router-link to="connection" class="hover:font-bold">{{ $t('navbar-link-2') }}</router-link>
            <router-link to="about-school" class="hover:font-bold">{{ $t('navbar-link-3') }}</router-link>
            <router-link to="support" class="hover:font-bold">{{ $t('link-hero') }}</router-link>
         </div>
 
         <div class="actions hidden xc:flex items-center text-white gap-3">
            <a href="https://t.me/Kelajak_school_qarshi" class="hover:text-gray-200">
               <i class="fa-brands fa-telegram"></i>
            </a>
 
            <a href="https://www.instagram.com/kelajak.school/" class="hover:text-gray-200">
               <i class="fa-brands fa-instagram"></i>
            </a>
 
            <div class="dropdown">
             <button @click="toggleDropdown" class="dropdown-toggle  hover:bg-white hover:text-brand-blue flex items-center gap-2 px-2 text-white py-1">
                {{ currentLocale }} <i class="fa-solid fa-chevron-down text-[13px]"></i>
             </button>
             <ul v-if="dropdownOpen" class="dropdown-menu bg-white">
             <li 
                v-for="locale in $i18n.availableLocales" 
                :key="`locale-${locale}`" 
                @click="changeLocale(locale)" 
                class="dropdown-item cursor-pointer hover:bg-blue-800 hover:text-white text-black py-1"
             >
                {{ locale }}
             </li>
             </ul>

            </div>
            <a href="/login" class="flex rounded-lg items-center gap-2">
             Login <UserIcon width="20"/>
            </a>
 
         </div>
 
         <div class="burger block xc:hidden text-white text-[25px] cursor-pointer" @click="isMenuOpen = true">
            <i class="fa-solid fa-bars-staggered"></i>
         </div>
          <!-- <Transition>
          <div v-if="isMenuOpen" class="bg-black/60 for-bg w-full max-w-full h-screen fixed top-0 left-0">
          <div
            class="mobile-menu bg-white w-[80%] fixed left-0 top-0 flex flex-col items-start h-screen justify-start p-4">
            <div class="logo flex justify-between items-center w-full">
              <img src="../assets/images/logo-2.jpg" class=" w-[60px] sm:w-[100px] rounded-full" alt="Logo">
              <i @click="toggleMenu" class="fa-solid fa-xmark text-2xl text-grey-500 cursor-pointer text-brand-blue hover:text-blue-700"></i>
            </div>
 
            <div class="dropdown">
             <button @click="toggleDropdownMenu" class="dropdown-toggle bg-blue-900 hover:bg-blue-700 flex mt-10 text-[13px] md:text-[16px] items-center gap-2 px-2 text-white py-1">
                {{ currentLocale }} <i class="fa-solid fa-chevron-down text-[13px]"></i>
             </button>
             <ul v-if="dropMenu" class="dropdown-menu bg-blue-900">
             <li 
                v-for="locale in $i18n.availableLocales" 
                :key="`locale-${locale}`" 
                @click="changeLocaleMenu(locale)" 
                class="dropdown-item cursor-pointer hover:bg-blue-700 text-white py-1"
             >
                {{ locale }}
             </li>
             </ul>
          </div>
 
            <ul class="menu-mini flex flex-col justify-start items-start gap-6 pt-10">
               <router-link to="qulaylik" class="text-blue-800 hover:font-bold">{{ $t('navbar-link') }}</router-link>
               <router-link to="connection" class="text-blue-800 hover:font-bold">{{ $t('navbar-link-2') }}</router-link>
               <router-link to="about-school" class="text-blue-800 hover:font-bold">{{ $t('navbar-link-3') }}</router-link>
               <router-link to="support" class="text-blue-800 hover:font-bold">{{ $t('link-hero') }}</router-link>
            </ul>

            <div class='socials flex gap-4 mt-10'> 
               <a href="https://t.me/Kelajak_school_qarshi" class="text-brand-blue text-[18px] xs:text-[25px] hover:text-blue-500">
               <i class="fa-brands fa-telegram"></i>
               </a>
 
            <a href="https://www.instagram.com/kelajak.school/" class="text-brand-blue text-[18px] xs:text-[25px] hover:text-blue-500">
               <i class="fa-brands fa-instagram"></i>
            </a>
            </div>
            <div class="number flex flex-col items-start mt-5 pt-8 gap-3">
               <i class="fa-solid fa-phone text-brand-blue"></i>
              <h3 class="font-medium text-blue-800 hover:font-bold text-[16px]">+998 91 463 33 22</h3>
              <h3 class="font-medium  text-blue-800 hover:font-bold text-[16px]">+998 93 363 33 22</h3>
            </div>
          </div>
        </div>
        
       </Transition> -->

       
      <Transition name="slide">
      <div v-if="isMenuOpen" class="fixed inset-0 bg-black/40 z-50">
        <div
            class="mobile-menu bg-white w-[80%] fixed left-0 top-0 flex flex-col items-start h-screen justify-start p-4">
            <div class="logo flex justify-between items-center w-full">
              <img src="../assets/images/logo-2.jpg" class=" w-[60px] sm:w-[100px] rounded-full" alt="Logo">
              <i @click="toggleMenu" class="fa-solid fa-xmark text-2xl text-grey-500 cursor-pointer text-brand-blue hover:text-blue-700"></i>
            </div>
 
            <div class="dropdown">
             <button @click="toggleDropdownMenu" class="dropdown-toggle bg-blue-900 hover:bg-blue-700 flex mt-10 text-[13px] md:text-[16px] items-center gap-2 px-2 text-white py-1">
                {{ currentLocale }} <i class="fa-solid fa-chevron-down text-[13px]"></i>
             </button>
             <ul v-if="dropMenu" class="dropdown-menu bg-blue-900">
             <li 
                v-for="locale in $i18n.availableLocales" 
                :key="`locale-${locale}`" 
                @click="changeLocaleMenu(locale)" 
                class="dropdown-item cursor-pointer hover:bg-blue-700 text-white py-1"
             >
                {{ locale }}
             </li>
             </ul>
          </div>
 
            <ul class="menu-mini flex flex-col justify-start items-start gap-6 pt-10">
               <router-link to="qulaylik" class="text-blue-800 hover:font-bold">{{ $t('navbar-link') }}</router-link>
               <router-link to="connection" class="text-blue-800 hover:font-bold">{{ $t('navbar-link-2') }}</router-link>
               <router-link to="about-school" class="text-blue-800 hover:font-bold">{{ $t('navbar-link-3') }}</router-link>
               <router-link to="support" class="text-blue-800 hover:font-bold">{{ $t('link-hero') }}</router-link>
            </ul>

            <div class='socials flex gap-4 mt-10'> 
               <a href="https://t.me/Kelajak_school_qarshi" class="text-brand-blue text-[18px] xs:text-[25px] hover:text-blue-500">
               <i class="fa-brands fa-telegram"></i>
               </a>
 
            <a href="https://www.instagram.com/kelajak.school/" class="text-brand-blue text-[18px] xs:text-[25px] hover:text-blue-500">
               <i class="fa-brands fa-instagram"></i>
            </a>
            </div>
            <div class="number flex flex-col items-start mt-5 pt-8 gap-3">
               <i class="fa-solid fa-phone text-brand-blue"></i>
              <h3 class="font-medium text-blue-800 hover:font-bold text-[16px]">+998 91 463 33 22</h3>
              <h3 class="font-medium  text-blue-800 hover:font-bold text-[16px]">+998 93 363 33 22</h3>
            </div>
          </div>
      </div>
    </Transition>
      </div>
   </header>
 </template>
 

 <script setup>
 import { ref, computed, onMounted } from 'vue';
 import { useI18n } from 'vue-i18n';
 import { UserIcon } from 'lucide-vue-next';
 
 const isMenuOpen = ref(false);
 const dropdownOpen = ref(false);
 const dropMenu = ref(false);
 
 const { locale } = useI18n();
 const currentLocale = computed(() => locale.value);
 
 const toggleMenu = () => {
   isMenuOpen.value = !isMenuOpen.value;
 };
 
 const toggleDropdown = () => {
   dropdownOpen.value = !dropdownOpen.value;
 };
 
 const toggleDropdownMenu = () => {
   dropMenu.value = !dropMenu.value;
 };
 
 const changeLocale = (newLocale) => {
   locale.value = newLocale;
   dropdownOpen.value = false;
 };
 
 const changeLocaleMenu = (newLocale) => {
   locale.value = newLocale;
   dropMenu.value = false;
 };
 
 const checkWindowWidth = () => {
   window.addEventListener('resize', () => {
     let windowWidth = window.innerWidth;
     if (windowWidth > 640) {
       isMenuOpen.value = false;
     }
   });
 };
 
 onMounted(() => {
   checkWindowWidth();
 });
 </script>


<style scoped>
 .for-bg {
   z-index: 1000;
 }
   .mobile-menu {
      z-index: 1000;
   }
 .head .container .menu a.router-link-exact-active {
   color: #fff; 
   font-weight: 600;
 }
 /* we will explain what these classes do next! */
 .v-enter-active,
 .v-leave-active {
   transition: opacity 0.5s ease;
 }
 
 .v-enter-from,
 .v-leave-to {
   opacity: 0;
 }
 
 .dropdown {
   position: relative;
   z-index: 999;
   display: inline-block;
 }
 
 .dropdown-toggle {
   cursor: pointer;
   outline: none;
   border: none;
 }

 .slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}
 
 .dropdown-menu {
   position: absolute;
   top: 100%;
   left: 0;
   z-index: 10;
   display: block;
   margin: 0;
   padding: 0;
   list-style: none;
 }
 
 .dropdown-item {
   padding: 0.25rem 1rem;
 }
 
 @media (max-width:1020px) {
   .head .container .menu a {
      font-size: 14px;
   }
 }
 </style>