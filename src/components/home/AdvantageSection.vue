<template>
   <section class="advantage px-5">
      <div class="container flex flex-col items-center gap-6 lg:gap-0 lg:flex-row justify-around">
         <div class="text-content  w-full max-w-[450px] order-2 lg:order-1">
            <h2 class="text-brand-blue font-bold text-[30px]">{{ $t('afzallik') }}:</h2>
            <p class="w-full max-w-[400px] text-[#4e6fa0] my-6">{{ $t('afzallik-text') }}</p>
            <p class="w-full max-w-[460px] text-[#4e6fa0]">{{ $t('lesson-text') }}</p>
         </div>

         <div class="img-content order-1 lg:order-2">
            <img class="w-full max-w-[350px] lg:w-[400px]" src="@/assets/images/slide-img2.jpg" alt="">
         </div>
      </div>
   </section>
   
</template>

<script>
export default {
   
}
</script>

<style scoped>
.advantage .container .img-content img {
   animation: dropShadowAnimation 3s infinite;
   transition: filter 2s;
   border-radius: 5px;
}


@keyframes dropShadowAnimation {
            0% {
                filter: drop-shadow(20px -15px 7px #4e6fa0);
            }
            25% {
                filter: drop-shadow(20px -15px 7px #89abff);
            }
            100% {
                filter: drop-shadow(20px -15px 7px #4e6fa0);
            }
}

</style>