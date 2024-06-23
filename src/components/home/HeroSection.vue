<template>
   <section class="hero mb-[600px] lg:mb-[600px]">
     <!-- <TheHeader /> -->
     <TheHeader class="relative z-10" />
     <div class="hero-swiper swiper-container">
       <div class="swiper-wrapper">
         <!-- slide -->
         <div class="swiper-slide">
           <div class="text-content text-white text-center">
             <h3 class="uptitle text-[17px] xs:text-xl lg:text-2xl">
               Kelajak School Xususiy Maktabi
             </h3>
             <h1 class="title text-xl s:text-3xl sm:text-5xl lg:text-6xl mt-3 mb-14 w-[75%] mx-auto">Farzandingiz kelajakini biz bilan quring</h1>
           </div>
         </div>
         <!-- slide -->
         <div class="swiper-slide">
           <div class="text-content text-white text-center">
            <h3 class="uptitle text-[17px] xs:text-xl lg:text-2xl">
               Kelajak School Xususiy Maktabi
             </h3>
             <h1 class="title text-xl s:text-3xl sm:text-5xl lg:text-6xl mt-3 mb-14 w-[75%] mx-auto">Farzandingiz kelajakini biz bilan quring</h1>
           </div>
         </div>
         <!-- slide -->
         <div class="swiper-slide">
           <div class="text-content text-white text-center">
            <h3 class="uptitle text-[17px] xs:text-xl lg:text-2xl">
               Kelajak School Xususiy Maktabi
             </h3>
             <h1 class="title text-xl s:text-3xl sm:text-5xl lg:text-6xl mt-3 mb-14 w-[75%] mx-auto">Farzandingiz kelajakini biz bilan quring</h1>
           </div>
         </div>
       </div>
     </div>
   </section>
 </template>
 
 <script>
 import { register } from 'swiper/element/bundle';
 register();
 import Swiper from 'swiper';
 
 export default {
   components: {
     Swiper,
   },
   mounted() {
     new Swiper('.hero-swiper', {
       autoplay: {
         delay: 2000,
         disableOnInteraction: false,
       },
       slidesPerView: 1,
       effect: 'fade',
       // initialSlide: 0,
     });
   },
 }
 </script>
 
 <style scoped>
 .hero {
   position: relative;
 }
 
 .hero .swiper-container {
   overflow-x: hidden;
   display: flex;
   align-items: center;
   position: absolute;
   top: 0;
   left: 0;
   /* z-index: -2 !important; */
   width: 100%;
 }
 
 .hero .swiper-container .swiper-wrapper {
   display: flex;
   align-items: center;
 }
 
 .hero .swiper-container .swiper-wrapper .swiper-slide {
   display: flex;
   align-items: center;
   justify-content: center;
 }
 
 .swiper-wrapper .swiper-slide:first-child {
   height: 100vh;
   background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
     url('@/assets/images/school1.jfif') no-repeat top / cover;
 }
 
 .swiper-wrapper .swiper-slide:nth-child(2) {
   height: 100vh;
   background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
     url('@/assets/images/school2.jfif') no-repeat center / cover;
 }
 
 .swiper-wrapper .swiper-slide:nth-child(3) {
   height: 100vh;
   background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
     url('@/assets/images/school3.jfif') no-repeat center / cover;
 }
 </style>