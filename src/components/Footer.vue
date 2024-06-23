<template>
   <footer class="foot bg-brand-blue py-4">
      <div class="container">
         <div class="content flex justify-start mx:justify-between flex-wrap gap-10 text-white">
            <div class="text-content text-white">
            <h3>Kelajak School</h3>
            <p class="w-full max-w-[370px] my-3">{{ $t('footer-subtitle') }}</p>
            <p class="w-full max-w-[350px] my-3">{{ $t('footer-subtitle-2') }}</p>

            <div class="socials flex gap-3">
               <a href="" class="hover:text-gray-200">
               <i class="fa-brands fa-telegram"></i>
            </a>
 
            <a href="" class="hover:text-gray-200">
               <i class="fa-brands fa-instagram"></i>
            </a>
            </div>
         </div>

         <div class="quick-links flex flex-col gap-5">
            <router-link to="" class="hover:font-bold">{{ $t('navbar-link') }}</router-link>
            <router-link to="" class="hover:font-bold">{{ $t('navbar-link-2') }}</router-link>
            <router-link to="" class="hover:font-bold">{{ $t('navbar-link-3') }}</router-link>
         </div>

         <div class="phone flex flex-col gap-2 sm:gap-5">
            <h3>Aloqa uchun raqamlar:</h3>
            <h4>+998 91 463 33 22</h4>
            <h4>+998 93 363 33 22</h4>
         </div>

         <div class="location flex flex-col gap-2 sm:gap-5">
            <h3>Bizning manzilimiz:</h3>
            <h4>Qarshi Shahar, Mustaqillik ko'chasi 5-uy</h4>

            <h3>Mo'ljal:</h3>
            <h4>Nasaf Markaziy Stadioni yonida</h4>
         </div>
         </div>
         
         <div class="line border w-full max-w-full my-4 mx-auto border-gray-500"></div>
         <div class="developed mx:text-center text-white">Kelajak School || 2023-2024</div>
      </div>
   </footer>
</template>

<script>
export default {
   
}
</script>

<style>

</style>