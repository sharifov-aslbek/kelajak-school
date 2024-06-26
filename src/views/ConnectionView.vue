<template>
   <section class="connect my-12">
      <div class="container flex flex-col gap-7">
        <h2 class="text-[24px] s:text-[30px] m:text-[45px] text-brand-blue font-bold">{{ $t('connect-title') }}</h2>
        <div class="numbers flex flex-col xr:flex-row items-start xr:items-center gap-5">
           <h3 class="text-[20px] s:text-[25px] m:text-[35px] text-brand-blue font-bold">{{ $t('footer-aloqa') }}:</h3>
           <h4 class="text-[17px] s:text-[25px] text-blue-700 hover:text-blue-500">+998 91 463 33 22</h4>
           <h4 class="text-[17px] s:text-[25px] text-blue-700  hover:text-blue-500">+998 93 363 33 22</h4>
        </div>
        <div class="socials flex items-center gap-5">
           <h3 class="text-[19px] s:text-[25px] m:text-[35px] text-brand-blue font-bold">{{ $t('connect-sahifa') }}:</h3>
           <a href="https://t.me/Kelajak_school_qarshi" class="hover:text-blue-500 text-[30px]">
               <i class="fa-brands fa-telegram"></i>
            </a>
 
            <a href="https://www.instagram.com/kelajak.school/" class="hover:text-blue-500 text-[30px]">
               <i class="fa-brands fa-instagram"></i>
            </a>
        </div>

        <div class="email flex flex-col gap-5">
         <h3 class="text-[20px] s:text-[25px] m:text-[30px] w-full max-w-[250px] xsmax:max-w-full text-brand-blue font-bold">{{ $t('email-addres') }}:</h3>
         <div class="inbox flex items-center gap-3">
            <i class="fa-solid fa-envelope"></i>
            <p class="text-brand-blue text-[16px] xsmax:text-[20px]">aslbeksharifov@gmail.com</p>
         </div>
        </div>

           <h3 class="text-[14px] s:text-[22px] text-brand-blue font-bold">{{ $t('connect-qabul') }}</h3>
           <router-link class="text-blue-500" to="">{{ $t('link-hero') }}</router-link>
         <p class="text-[13px]"><i class="fa-solid fa-arrow-up"></i> {{ $t('sovet-hero') }}</p>
      <p class="text-brand-blue font-bold w-full max-w-[600px] text-[14px] s:text-[22px] dm:max-w-full">{{ $t('footer-subtitle') }}</p>
      </div>
   </section>
</template>

<script>
export default {
   
}
</script>

<style>

</style>