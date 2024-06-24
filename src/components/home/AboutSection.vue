<template>
   <section class="about my-10 pt-10">
      <div class="container flex justify-around items-center">
         <div class="img-content">
            <img class="w-[300px]" src="@/assets/images/slide-img1.jpg" alt="#">
         </div>

         <div class="text-content">
            <h2 class="text-blue-500 font-bold">Biz haqimizda</h2>
            <h2 class="w-full max-w-[400px] text-[22px] my-5"><span class="text-brand-blue font-bold text-[27px]">Kelajak School</span>da farzandingiz o'qishi uchun barcha sharoitlar mavjud</h2>
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
   filter: drop-shadow(-40px -15px 7px #4e6fa0);
   border-radius: 5px;
}
</style>