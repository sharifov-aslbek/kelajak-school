<template>
   <section class="about py-32 lg:py-16 px-5 lg:px-0">
      <div class="container flex flex-col gap-10 lg:gap-0 lg:flex-row justify-around items-center">
         <div class="img-content">
            <img class="w-full max-w-[350px] lg:w-[400px]" src="@/assets/images/slide-img1.jpg" alt="#">
         </div>

         <div class="text-content">
            <h2 class="our text-blue-500  font-bold">{{ $t('our') }}</h2>
            <h2 class="w-full max-w-[400px] text-[18px] xs:text-[22px] my-5"><span class="text-brand-blue font-bold text-[23px] xs:text-[27px]">Kelajak School</span>da farzandingiz o'qishi uchun barcha sharoitlar mavjud</h2>
            <p class="text-[#4e6fa0] font-semibold my-5">Darslar kuchli tajribali ustozlar tomonidan olib boriladi</p>
            <div class="batafsil flex items-center gap-2">
               <h3 class="text-[#4e6fa0] font-semibold text-[14px]">Maktab haqida batafsil bilish uchun ustiga bosing <i class="fa-solid fa-arrow-right text-[12px]"></i></h3>
               <router-link class="text-[#4e6fa0] border-2 border-[#4e6fa0] rounded-md py-1 text-[13px] px-4 hover:bg-[#4e6fa0] hover:text-white" to="">Batafsil</router-link>
            </div>
         </div>
      </div>
   </section>
</template>


<script>
export default {
   
}
</script>

<style scoped>
.about .container .img-content img {
   animation: dropShadowAnimation 3s infinite;
   transition: filter 2s;
   border-radius: 5px;
}

@keyframes dropShadowAnimation {
            0% {
                filter: drop-shadow(-20px -15px 7px #4e6fa0);
            }
            25% {
                filter: drop-shadow(-20px -15px 7px #89abff);
            }
            100% {
                filter: drop-shadow(-20px -15px 7px #4e6fa0);
            }
}



@media (max-width:560px) {
   .about .container .img-content img {
   filter: drop-shadow(-20px -10px 7px #4e6fa0);
}  
}
</style>