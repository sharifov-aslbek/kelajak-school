<template>
   <section class="about-school bg-gray-300 pb-[30px]">
      <div class="container">
         <h2 class="text-brand-blue text-[30px]  sm:text-[40px] font-bold py-[20px]">{{ $t('maktab-haqida-title') }}</h2>
         <div class="about-box lg:items-center flex flex-col lg:flex-row gap-[20px] lg:gap-[0px] p-[20px] rounded-3xl bg-white w-full max-w-full" v-motion-pop-visible>
            <img class="rounded-3xl mr-[120px] w-full max-w-[500px]" src="../assets/images/kelajak-schoolimg.jpg" alt="#">
            <div class="text w-full max-w-[550px]">
               <h3 class="text-[25px] font-bold text-[#0065ad]">{{ $t('maktab-haqida-sub') }}</h3>
               <p class="font-semibold my-[10px]">{{ $t('maktab-haqida-up') }}</p>
               <p class="font-semibold">{{ $t('maktab-haqida-up-2') }}</p>
               <p class="font-semibold my-[10px]">{{ $t('maktab-haqida-up-3') }}</p>
               <p class="font-semibold">{{ $t('maktab-maqsadi') }}</p>
            </div>
         </div>

         <div class="maqsad mt-[20px] flex p-[20px] flex-col bg-white w-full max-w-full rounded-3xl" v-motion-pop-visible>
            <div class="top">
               <h3 class="text-[23px] font-bold text-[#0065ad] ">{{ $t('maqsad') }}</h3>

               <div class="cards">
                  <div class="card" v-motion-pop-visible>
                     <h4>{{ $t('maqsad-sub') }}</h4>
                  </div>

                  <div class="card" v-motion-pop-visible>
                     <h4>{{ $t('maqsad-sub-2') }}</h4>
                  </div>
               </div>
            </div>

            <div class="bottom">
               <h3 class="text-[23px] font-bold text-[#0065ad] ">{{ $t('qadriyat') }}</h3>
               <div class="cards">
                  <div class="card">
                     <h4>{{ $t('qadriyat-text') }}</h4>
                  </div>
                  <div class="card">
                     <h4>{{ $t('qadriyat-text-2') }}</h4>
                  </div>
                  <div class="card">
                     <h4>{{ $t('qadriyat-text-3') }}</h4>
                  </div>
                  <div class="card">
                     <h4>{{ $t('qadriyat-text-4') }}</h4>
                  </div>
                  <div class="card">
                     <h4>{{ $t('qadriyat-text-5') }}</h4>
                  </div>
                  <div class="card">
                     <h4>{{ $t('qadriyat-text-6') }}</h4>
                  </div>
               </div>
            </div>
         </div>
         
               <div class="sharoit flex flex-col gap-[30px] bg-white w-full max-w-full rounded-3xl mt-[20px] p-[20px]">
                  <h3 class="text-[23px] font-bold mb-[20px] text-[#0065ad] ">{{ $t('sharoit-title') }}</h3>
         
                  <div class="content flex flex-col lg:flex-row gap-[20px] lg:justify-between lg:items-center" v-motion-pop-visible>
                     <img class="rounded-3xl w-full max-w-[500px]" src="@/assets/images/sinfxona.jpg" alt="">
                     <div class="text">
                        <h4 class="text-[25px] font-bold text-[#0065ad] mb-[15px]">{{ $t('sharoit-subtitle') }}</h4>
                        <p class="text-[17px] font-semibold w-full max-w-[650px]">{{ $t('sharoit-uptitle') }}</p>
                     </div>
                  </div>

                  <div class="content-sport flex flex-col lg:flex-row gap-[20px] lg:justify-between lg:items-center" v-motion-pop-visible>
                     <div class="text order-2 lg:order-1">
                        <h4 class="text-[#0065ad] font-bold text-[25px] mb-[15px]">{{ $t('sport-title') }}</h4>
                        <p class="text-[17px] font-semibold w-full max-w-[650px]">{{ $t('sport-subtitle') }}</p>
   
                     </div>

                     <img class="order-1 lg:order-2 rounded-3xl w-full max-w-[500px]" src="@/assets/images/sport-img.jpg" alt="#">
                  </div>

                  <div class="content-zal flex flex-col lg:flex-row gap-[20px] lg:justify-between lg:items-center" v-motion-pop-visible>
                     <img class="w-full max-w-[500px] rounded-3xl" src="@/assets/images/sportzal.jpg" alt="err">

                     <div class="text">
                        <h4 class="text-[#0065ad] font-bold text-[25px] mb-[15px]">{{ $t('sportzal-title') }}</h4>
                        <p class="text-[17px] font-semibold w-full max-w-[650px]">{{ $t('sportzal-subtitle') }}</p>
                     </div>
                  </div>
               
                  <div class="content-sport flex flex-col lg:flex-row gap-[20px] lg:justify-between lg:items-center" v-motion-pop-visible>
                     <div class="text order-2 lg:order-1">
                        <h4 class="text-[#0065ad] font-bold text-[25px] mb-[15px]">Sinflarimiz ko'rinishi</h4>
                        <p class="text-[17px] font-semibold w-full max-w-[650px]">Sinfda barcha sharoitlar mavjud va farzandingiz o'qishi uchun qulayliklar yaratilgan</p>
   
                     </div>

                     <img class="order-1 lg:order-2 rounded-3xl w-full max-w-[500px]" src="@/assets/images/sinfxona-2.jpg" alt="#">
                  </div>

                  <div class="flex" v-motion-pop-visible>
                     <img class="order-1 lg:order-2 rounded-3xl w-full max-w-[500px]" src="@/assets/images/sinfxona.jpg" alt="#">
                  </div>
                  <div class="flex justify-end" v-motion-pop-visible>
                     <img class="order-1 lg:order-2 rounded-3xl w-full max-w-[500px]" src="@/assets/images/sinfxona-3.jpg" alt="#">
                  </div>

                  
               </div>
               



               <div class="xizmatlar mb-[20px] flex flex-col gap-[30px] bg-white w-full max-w-full rounded-3xl mt-[20px] p-[20px]">
                  <h3 class="text-[23px] font-bold mb-[20px] text-[#0065ad] ">{{ $t('maktab-xizmat') }}</h3>
         
                  <div class="content-xizmat flex flex-col lg:flex-row gap-[20px] lg:justify-between lg:items-center" v-motion-pop-visible>
                     <div class="text">
                        <h4 class="text-[#0065ad] font-bold text-[25px] mb-[15px]">{{ $t('oshxona-title') }}</h4>
                        <p class="text-[17px] font-semibold w-full max-w-[650px]">{{ $t('oshxona-subtitle') }}</p>
   
                     </div>

                     <img class="rounded-3xl w-full max-w-[500px]" src="@/assets/images/kitchen.jpg" alt="#">
                  </div>

                  <div class="content-olimpidies flex flex-col lg:flex-row gap-[20px] lg:justify-between lg:items-center" v-motion-pop-visible>
                     <img class="rounded-3xl w-full max-w-[500px]" src="@/assets/images/olimpiada.jpg" alt="">
                     <div class="text">
                        <h4 class="text-[25px] font-bold text-[#0065ad] mb-[15px]">{{ $t('olimpiadas-title') }}</h4>
                        <p class="text-[17px] font-semibold w-full max-w-[650px]">{{ $t('olimpiadas-sub') }}</p>
                     </div>
                  </div>
               </div>

               <div class="ariza flex flex-col lg:flex-row gap-[20px] lg:gap-[0px] lg:items-center justify-around p-[20px] rounded-3xl text-white" v-motion-pop-visible>
                  <h3 class="text-[20px] lg:text-[30px] w-full max-w-[700px]">{{ $t('ariza-text') }}</h3>
                  <button class="bg-green-500 px-3 py-2 rounded-xl" @click="$router.push('support')">{{ $t('ariza-sub') }}</button>
               </div>
      </div>
   </section>
</template>

<script>
export default {
   
}
</script>


<style>
.about-school .container .maqsad .top .cards .card {
   width: 100%;
   max-width: 450px;
   padding: 40px;
   border-radius: 20px;
   background: #EAF6FF;
}

.about-school .container .maqsad .top .cards {
   display: flex;
   flex-wrap: wrap;
   gap: 40px;
   margin: 20px 0px;
}

.about-school .container .maqsad .bottom .cards {
   display: flex;
   flex-wrap: wrap;
   gap: 40px;
   margin: 20px 0px;
}

.about-school .container .maqsad .bottom .cards .card {
   background: #EAF6FF;
   padding: 20px;
   border-radius: 20px;
}

.ariza {
   background-color: transparent;
    background-image: linear-gradient(75deg, #0065AD 0%, #0080DB 100%);
}
</style>