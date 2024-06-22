<template>
  <header class="head bg-blue-800 py-3">
     <div class="container flex items-center justify-between">
        <div class="logo flex items-center">
           <router-link to="/">
              <img class="w-[100px]" src="../assets/images/kelajak-schoollogo.jpg" alt="">
           </router-link>
        </div>

        <div class="menu hidden items-center w-full max-w-[600px] justify-center gap-7 dm:gap-0 dm:justify-around text-white sm:flex">
           <router-link to="/" class="hover:text-gray-200">{{ $t('navbar-link') }}</router-link>
           <router-link to="about" class="hover:text-gray-200">Bog'lanish</router-link>
           <router-link to="search" class="hover:text-gray-200">Imkoniyatlar</router-link>
        </div>

        <div class="actions hidden sm:flex items-center text-white gap-3">
           <a href="" class="hover:text-gray-200">
              <i class="fa-brands fa-telegram"></i>
           </a>

           <a href="" class="hover:text-gray-200">
              <i class="fa-brands fa-instagram"></i>
           </a>

           <select v-model="$i18n.locale" class="outline-none bg-blue-700 hover:bg-blue-600 cursor-pointer py-1 text-white">
              <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale" class="border-white outline-none">
                 {{ locale }}
              </option>
           </select>

        </div>

        <div class="burger block sm:hidden text-white text-[25px] cursor-pointer" @click="isMenuOpen = true">
           <i class="fa-solid fa-bars-staggered"></i>
        </div>
        <Transition>
         <div v-if="isMenuOpen" class="bg-black/60 for-bg w-full max-w-full h-screen fixed top-0 left-0">
         <div
           class="mobile-menu bg-white w-[80%] fixed left-0 top-0 flex flex-col items-start h-screen justify-start p-4">
           <div class="logo flex justify-between items-center w-full">
             <img src="../assets/images/logo-2.jpg" class=" w-[60px] sm:w-[100px] rounded-full" alt="Logo">
             <i @click="toggleMenu" class="fa-solid fa-xmark text-2xl text-grey-500 cursor-pointer"></i>
           </div>
           <select v-model="$i18n.locale" class="outline-none bg-blue-700 hover:bg-blue-600 cursor-pointer text-[14px] py-1 mt-10 text-white">
              <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale" class="border-white outline-none">
                 {{ locale }}
              </option>
           </select>
           <ul class="menu-mini flex flex-col justify-start items-start gap-6 pt-10">
              <router-link to="/" class="hover:text-gray-500">{{ $t('navbar-link') }}</router-link>
              <router-link to="" class="hover:text-gray-500">Bog'lanish</router-link>
              <router-link to="" class="hover:text-gray-500">Imkoniyatlar</router-link>
           </ul>
           <div class="number flex flex-col items-start mt-5 pt-8 gap-3">
              <i class="fa-solid fa-phone"></i>
             <h3 class="font-medium text-black text-[16px]">+998 91 463 33 22</h3>
             <h3 class="font-medium text-black text-[16px]">+998 93 363 33 22</h3>
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
     }
  },
  methods: {
     toggleMenu() {
     this.isMenuOpen = !this.isMenuOpen;
   },
  //  checkWindowWidth() {
  //    window.addEventListener("resize", () => {
  //      let windowWidth = window.innerWidth
  //      if (windowWidth > 1023) {
  //        this.isMenuOpen = false
  //      }
  //    })
  //  }
  },
  // mounted() {
  //    this.checkWindowWidth()
  // },
}
</script>

<style scoped>
.head .container .menu a.router-link-exact-active {
  color: rgb(209, 213, 219); 
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

</style>