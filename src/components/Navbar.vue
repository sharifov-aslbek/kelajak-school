<template>
   <header class="head relative bg-brand-blue py-3 z-20">
      <div class="container flex items-center justify-between">
         <div class="logo flex items-center">
            <router-link to="/">
               <img class="w-[70px] sm:w-[100px]" src="../assets/images/kelajak-schoollogo.jpg" alt="">
            </router-link>
         </div>
 
         <div class="menu hidden items-center w-full max-w-[600px] justify-center gap-7 dm:gap-0 dm:justify-around text-gray-200 m:flex">
            <router-link to="about" class="hover:font-bold">{{ $t('navbar-link') }}</router-link>
            <router-link to="/" class="hover:font-bold">{{ $t('navbar-link-2') }}</router-link>
            <router-link to="search" class="hover:font-bold">{{ $t('navbar-link-3') }}</router-link>
         </div>
 
         <div class="actions hidden m:flex items-center text-white gap-3">
            <a href="https://t.me/Kelajak_school_qarshi" class="hover:text-gray-200">
               <i class="fa-brands fa-telegram"></i>
            </a>
 
            <a href="https://www.instagram.com/kelajak.school/" class="hover:text-gray-200">
               <i class="fa-brands fa-instagram"></i>
            </a>
 
            <div class="dropdown">
             <button @click="toggleDropdown" class="dropdown-toggle bg-blue-900 hover:bg-blue-700 flex items-center gap-2 px-2 text-white py-1">
                {{ currentLocale }} <i class="fa-solid fa-chevron-down text-[13px]"></i>
             </button>
             <ul v-if="dropdownOpen" class="dropdown-menu bg-brand-blue">
             <li 
                v-for="locale in $i18n.availableLocales" 
                :key="`locale-${locale}`" 
                @click="changeLocale(locale)" 
                class="dropdown-item cursor-pointer hover:bg-blue-800 text-white py-1"
             >
                {{ locale }}
             </li>
             </ul>
          </div>
 
         </div>
 
         <div class="burger block m:hidden text-white text-[25px] cursor-pointer" @click="isMenuOpen = true">
            <i class="fa-solid fa-bars-staggered"></i>
         </div>
          <Transition>
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
               <router-link to="/" class="text-blue-800 hover:font-bold">{{ $t('navbar-link') }}</router-link>
               <router-link to="" class="text-blue-800 hover:font-bold">{{ $t('navbar-link-2') }}</router-link>
               <router-link to="" class="text-blue-800 hover:font-bold">{{ $t('navbar-link-3') }}</router-link>
            </ul>

            <div class='socials flex gap-4 mt-10'> 
               <a href="https://t.me/Kelajak_school_qarshi" class="text-brand-blue hover:text-blue-500">
               <i class="fa-brands fa-telegram"></i>
               </a>
 
            <a href="https://www.instagram.com/kelajak.school/" class="text-brand-blue hover:text-blue-500">
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
 
 <script>
 export default {
   data() {
      return {
         isMenuOpen: false,
         dropdownOpen: false,
         dropMenu: false,
      }
   },
   computed: {
     currentLocale() {
       return this.$i18n.locale;
     }
   },
   methods: {
      toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleDropdown() {
       this.dropdownOpen = !this.dropdownOpen;
    },
    toggleDropdownMenu() {
       this.dropMenu = !this.dropMenu;
    },
     changeLocale(locale) {
       this.$i18n.locale = locale;
       this.dropdownOpen = false;  // Close the dropdown after selecting an option
     },
     changeLocaleMenu(locale) {
       this.$i18n.locale = locale
       this.dropMenu = false
     },
    checkWindowWidth() {
      window.addEventListener("resize", () => {
        let windowWidth = window.innerWidth
        if (windowWidth > 640) {
          this.isMenuOpen = false
        }
      })
    }
   },
   mounted() {
      this.checkWindowWidth()
   },
 }
 </script>
 
 <style scoped>
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
   display: inline-block;
 }
 
 .dropdown-toggle {
   cursor: pointer;
   outline: none;
   border: none;
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
 
 </style>