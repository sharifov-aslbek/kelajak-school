<template>
   <section class="advantage mt-[70px] px-[20px]">
      <div class="container text-center mcs:text-start">
         <div class="desktop hidden mcs:block">
            <MotionGroup preset="slideVisibleLeft" :duration="1000">
               <h2 class="text-[25px] w-full max-w-[350px] mx-auto sm:max-w-full sm:text-[40px] text-brand-blue">{{ $t('nima-uchun') }}</h2>
            </MotionGroup>
         </div>
         
         <div class="mobile block mcs:hidden" v-motion-roll-visible-bottom>
               <h2 class="text-[25px] w-full max-w-[350px] mx-auto sm:max-w-full sm:text-[40px] text-brand-blue">{{ $t('nima-uchun') }}</h2>
         </div>

         <div class="motions overflow-x-hidden hidden mcs:flex gap-[70px] mt-[30px]">
            <div class="motion-left">
               <MotionGroup preset="slideVisibleLeft" :duration="1000">
                  <div class="card w-full max-w-[400px] h-[200px] bg-gray-200 py-[20px] px-[30px] rounded-xl my-[20px]">
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><rect width="48" height="48" fill="#7CC069" rx="24"></rect><path fill="#fff" d="M34.974 22.771a1 1 0 0 0-.625-.707l-7.201-2.701 1.832-9.167a1 1 0 0 0-1.711-.875l-14 15a1 1 0 0 0 .375 1.625l7.204 2.701-1.828 9.157a1 1 0 0 0 1.711.875l14-15a1 1 0 0 0 .243-.908M21.67 34.75l1.309-6.547a1 1 0 0 0-.625-1.133l-6.605-2.481 10.578-11.333-1.308 6.548a1 1 0 0 0 .625 1.132l6.6 2.475z"></path></svg>
                     <h3 class="text-brand-blue font-semibold my-[10px]">{{ $t('talim') }}</h3>
                     <p class="w-full max-w-[400px] text-gray-500">{{ $t('talim-text') }}</p>
                  </div>
                  <div class="card w-full max-w-[400px] h-[200px] bg-gray-200 py-[20px] px-[30px] rounded-xl">
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><rect width="48" height="48" fill="#C5A75A" rx="24"></rect><path fill="#fff" d="M35 34h-6v-3h.5a8.51 8.51 0 0 0 8.5-8.5 3.5 3.5 0 1 0-7 0 1.5 1.5 0 0 1-1.5 1.5H29v-9a5 5 0 1 0-10 0v4h-.5a1.5 1.5 0 0 1-1.5-1.5 3.5 3.5 0 1 0-7 0 8.51 8.51 0 0 0 8.5 8.5h.5v8h-6a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2M20 24h-1.5a6.507 6.507 0 0 1-6.5-6.5 1.5 1.5 0 1 1 3 0 3.5 3.5 0 0 0 3.5 3.5H20a1 1 0 0 0 1-1v-5a3 3 0 0 1 6 0v10a1 1 0 0 0 1 1h1.5a3.5 3.5 0 0 0 3.5-3.5 1.5 1.5 0 1 1 3 0 6.507 6.507 0 0 1-6.5 6.5H28a1 1 0 0 0-1 1v4h-6v-9a1 1 0 0 0-1-1"></path></svg>
                     <h3 class="my-[10px] text-brand-blue font-semibold">{{ $t('four-language') }}</h3>
                     <p class="w-full max-w-[400px] text-gray-500">{{ $t('language-subtitle') }}</p>
                  </div>
               </MotionGroup>
            </div>
            
            <div class="motion-right" v-motion-slide-visible-bottom>
                  <div class="card w-full max-w-[400px] h-[200px] bg-gray-200 py-[20px] px-[30px] rounded-xl my-[20px]">
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><rect width="48" height="48" fill="#3CA8B8" rx="24"></rect><path fill="#fff" d="m36.688 22.125-7.93-2.875-2.883-7.937a2 2 0 0 0-3.75 0L19.25 19.24l-7.937 2.884a2 2 0 0 0 0 3.75l7.928 2.875 2.884 7.938a2 2 0 0 0 3.75 0l2.884-7.93 7.929-2.883a2 2 0 0 0 0-3.75m-8.617 4.75a2 2 0 0 0-1.192 1.192L24 35.988l-2.875-7.916a2 2 0 0 0-1.196-1.196L12.013 24l7.916-2.875a2 2 0 0 0 1.196-1.196L24 12.013l2.875 7.916a2 2 0 0 0 1.192 1.192l7.917 2.875z"></path></svg> 
                     <h3 class="text-brand-blue font-semibold my-[10px]">{{ $t('qulaylik-1-title') }}</h3>
                     <p class="w-full max-w-[400px] text-gray-500">{{ $t('kuchli-dars-sub') }}</p>
                  </div>
                  <div class="card w-full max-w-[400px] h-[200px] bg-gray-200 py-[20px] px-[30px] rounded-xl">
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><rect width="48" height="48" fill="#789FD6" rx="24"></rect><path fill="#fff" d="M39 24a7 7 0 1 0-12 4.892V36a1 1 0 0 0 1.448.895L32 35.117l3.553 1.778A1 1 0 0 0 37 36v-7.108A6.98 6.98 0 0 0 39 24m-7-5a5 5 0 1 1 0 10 5 5 0 0 1 0-10m.447 14.105a1 1 0 0 0-.895 0L29 34.383v-4.06a7 7 0 0 0 6 0v4.06zM25 32a1 1 0 0 1-1 1H13a2 2 0 0 1-2-2V15a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2 1 1 0 0 1-2 0H13v16h11a1 1 0 0 1 1 1m-2-7a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1m0-4a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1"></path></svg>
                     <h3 class="my-[10px] text-brand-blue font-semibold ">{{ $t('miya-charxlovchi') }}</h3>
                     <p class="w-full max-w-[400px] text-gray-500">{{ $t('charxlovchi-subtitle') }}</p>
                  </div>

            </div>


            <div class="motion-left">
               <MotionGroup preset="slideVisibleRight" :duration="1000">
                  <div class="card w-full max-w-[400px] h-[200px] bg-gray-200 py-[20px] px-[30px] rounded-xl my-[20px]">
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><rect width="48" height="48" fill="#D38A51" rx="24"></rect><path fill="#fff" d="M38.639 15.585c-.957-1.649-3.48-2.02-7.313-1.083A11.991 11.991 0 0 0 12 24q0 .773.098 1.539c-3.462 3.586-3.412 5.711-2.736 6.876C10 33.52 11.33 34 13.08 34a15.5 15.5 0 0 0 3.599-.5 11.992 11.992 0 0 0 19.225-11.031c1.562-1.625 2.602-3.169 2.956-4.49.244-.915.17-1.72-.221-2.394M24 14a10.014 10.014 0 0 1 9.75 7.775c-2.133 2.008-5.019 4.066-7.759 5.641-3.443 1.976-6.431 3.209-8.814 3.884A9.993 9.993 0 0 1 24 14M11.093 31.411c-.183-.314-.082-.905.277-1.625a10 10 0 0 1 1.286-1.881 12 12 0 0 0 2.25 3.915c-2.156.362-3.501.131-3.814-.409M24 34a9.93 9.93 0 0 1-4.82-1.242 46.3 46.3 0 0 0 7.804-3.608c2.697-1.549 5.085-3.227 7.008-4.885A10.01 10.01 0 0 1 24 34m12.928-16.539c-.213.789-.774 1.692-1.58 2.642a12 12 0 0 0-2.25-3.92c1.777-.293 3.422-.27 3.813.406.113.196.119.49.017.872"></path></svg>
                     <h3 class="my-[10px] text-brand-blue font-semibold">{{ $t('qulaylik-4-title') }}</h3>
                     <p class="w-full text-gray-500">{{ $t('shugullanish-sub') }}</p>
                  </div>
                  <div class="card w-full max-w-[400px] h-[200px] bg-gray-200 py-[20px] px-[30px] rounded-xl">
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><rect width="48" height="48" fill="#7CC069" rx="24"></rect><path fill="#fff" d="M34.974 22.771a1 1 0 0 0-.625-.707l-7.201-2.701 1.832-9.167a1 1 0 0 0-1.711-.875l-14 15a1 1 0 0 0 .375 1.625l7.204 2.701-1.828 9.157a1 1 0 0 0 1.711.875l14-15a1 1 0 0 0 .243-.908M21.67 34.75l1.309-6.547a1 1 0 0 0-.625-1.133l-6.605-2.481 10.578-11.333-1.308 6.548a1 1 0 0 0 .625 1.132l6.6 2.475z"></path></svg>
                     <h3 class="my-[10px] text-brand-blue font-semibold">{{ $t('qulaylik-2-title') }}</h3>
                     <p class="w-full max-w-[400px] text-gray-500">{{ $t('darslar-title') }}</p>
                  </div>
               </MotionGroup>
            </div>
            
         </div>

         <div class="motions-mobile mcs:hidden overflow-x-hidden gap-[20px] flex flex-wrap items-center justify-center text-start">

                  <div class="card w-full max-w-[400px] s:h-[200px] bg-gray-200 py-[20px] px-[30px] rounded-xl my-[20px]" v-motion-pop-visible>
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><rect width="48" height="48" fill="#7CC069" rx="24"></rect><path fill="#fff" d="M34.974 22.771a1 1 0 0 0-.625-.707l-7.201-2.701 1.832-9.167a1 1 0 0 0-1.711-.875l-14 15a1 1 0 0 0 .375 1.625l7.204 2.701-1.828 9.157a1 1 0 0 0 1.711.875l14-15a1 1 0 0 0 .243-.908M21.67 34.75l1.309-6.547a1 1 0 0 0-.625-1.133l-6.605-2.481 10.578-11.333-1.308 6.548a1 1 0 0 0 .625 1.132l6.6 2.475z"></path></svg>
                     <h3 class="text-brand-blue font-semibold my-[10px]">{{ $t('talim') }}</h3>
                     <p class="w-full max-w-[400px] text-gray-500">{{ $t('talim-text') }}</p>
                  </div>
                  <div class="card w-full max-w-[400px] s:h-[200px] bg-gray-200 py-[20px] px-[30px] rounded-xl" v-motion-pop-visible>
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><rect width="48" height="48" fill="#C5A75A" rx="24"></rect><path fill="#fff" d="M35 34h-6v-3h.5a8.51 8.51 0 0 0 8.5-8.5 3.5 3.5 0 1 0-7 0 1.5 1.5 0 0 1-1.5 1.5H29v-9a5 5 0 1 0-10 0v4h-.5a1.5 1.5 0 0 1-1.5-1.5 3.5 3.5 0 1 0-7 0 8.51 8.51 0 0 0 8.5 8.5h.5v8h-6a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2M20 24h-1.5a6.507 6.507 0 0 1-6.5-6.5 1.5 1.5 0 1 1 3 0 3.5 3.5 0 0 0 3.5 3.5H20a1 1 0 0 0 1-1v-5a3 3 0 0 1 6 0v10a1 1 0 0 0 1 1h1.5a3.5 3.5 0 0 0 3.5-3.5 1.5 1.5 0 1 1 3 0 6.507 6.507 0 0 1-6.5 6.5H28a1 1 0 0 0-1 1v4h-6v-9a1 1 0 0 0-1-1"></path></svg>
                     <h3 class="my-[10px] text-brand-blue font-semibold">{{ $t('four-language') }}</h3>
                     <p class="w-full max-w-[400px] text-gray-500">{{ $t('language-subtitle') }}</p>
                  </div>
                  <div class="card w-full max-w-[400px] s:h-[200px] bg-gray-200 py-[20px] px-[30px] rounded-xl my-[20px]" v-motion-pop-visible>
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><rect width="48" height="48" fill="#3CA8B8" rx="24"></rect><path fill="#fff" d="m36.688 22.125-7.93-2.875-2.883-7.937a2 2 0 0 0-3.75 0L19.25 19.24l-7.937 2.884a2 2 0 0 0 0 3.75l7.928 2.875 2.884 7.938a2 2 0 0 0 3.75 0l2.884-7.93 7.929-2.883a2 2 0 0 0 0-3.75m-8.617 4.75a2 2 0 0 0-1.192 1.192L24 35.988l-2.875-7.916a2 2 0 0 0-1.196-1.196L12.013 24l7.916-2.875a2 2 0 0 0 1.196-1.196L24 12.013l2.875 7.916a2 2 0 0 0 1.192 1.192l7.917 2.875z"></path></svg> 
                     <h3 class="text-brand-blue font-semibold my-[10px]">{{ $t('qulaylik-1-title') }}</h3>
                     <p class="w-full max-w-[400px] text-gray-500">{{ $t('kuchli-dars-sub') }}</p>
                  </div>
                  <div class="card w-full max-w-[400px] s:h-[200px] bg-gray-200 py-[20px] px-[30px] rounded-xl" v-motion-pop-visible>
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><rect width="48" height="48" fill="#789FD6" rx="24"></rect><path fill="#fff" d="M39 24a7 7 0 1 0-12 4.892V36a1 1 0 0 0 1.448.895L32 35.117l3.553 1.778A1 1 0 0 0 37 36v-7.108A6.98 6.98 0 0 0 39 24m-7-5a5 5 0 1 1 0 10 5 5 0 0 1 0-10m.447 14.105a1 1 0 0 0-.895 0L29 34.383v-4.06a7 7 0 0 0 6 0v4.06zM25 32a1 1 0 0 1-1 1H13a2 2 0 0 1-2-2V15a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2 1 1 0 0 1-2 0H13v16h11a1 1 0 0 1 1 1m-2-7a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1m0-4a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1"></path></svg>
                     <h3 class="my-[10px] text-brand-blue font-semibold ">{{ $t('miya-charxlovchi') }}</h3>
                     <p class="w-full max-w-[400px] text-gray-500">{{ $t('charxlovchi-subtitle') }}</p>
                  </div>
                  <div class="card w-full max-w-[400px] s:h-[200px] bg-gray-200 py-[20px] px-[30px] rounded-xl my-[20px]" v-motion-pop-visible>
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><rect width="48" height="48" fill="#D38A51" rx="24"></rect><path fill="#fff" d="M38.639 15.585c-.957-1.649-3.48-2.02-7.313-1.083A11.991 11.991 0 0 0 12 24q0 .773.098 1.539c-3.462 3.586-3.412 5.711-2.736 6.876C10 33.52 11.33 34 13.08 34a15.5 15.5 0 0 0 3.599-.5 11.992 11.992 0 0 0 19.225-11.031c1.562-1.625 2.602-3.169 2.956-4.49.244-.915.17-1.72-.221-2.394M24 14a10.014 10.014 0 0 1 9.75 7.775c-2.133 2.008-5.019 4.066-7.759 5.641-3.443 1.976-6.431 3.209-8.814 3.884A9.993 9.993 0 0 1 24 14M11.093 31.411c-.183-.314-.082-.905.277-1.625a10 10 0 0 1 1.286-1.881 12 12 0 0 0 2.25 3.915c-2.156.362-3.501.131-3.814-.409M24 34a9.93 9.93 0 0 1-4.82-1.242 46.3 46.3 0 0 0 7.804-3.608c2.697-1.549 5.085-3.227 7.008-4.885A10.01 10.01 0 0 1 24 34m12.928-16.539c-.213.789-.774 1.692-1.58 2.642a12 12 0 0 0-2.25-3.92c1.777-.293 3.422-.27 3.813.406.113.196.119.49.017.872"></path></svg>
                     <h3 class="my-[10px] text-brand-blue font-semibold">{{ $t('qulaylik-4-title') }}</h3>
                     <p class="w-full text-gray-500">{{ $t('shugullanish-sub') }}</p>
                  </div>
                  <div class="card w-full max-w-[400px] s:h-[200px] bg-gray-200 py-[20px] px-[30px] rounded-xl" v-motion-pop-visible>
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><rect width="48" height="48" fill="#7CC069" rx="24"></rect><path fill="#fff" d="M34.974 22.771a1 1 0 0 0-.625-.707l-7.201-2.701 1.832-9.167a1 1 0 0 0-1.711-.875l-14 15a1 1 0 0 0 .375 1.625l7.204 2.701-1.828 9.157a1 1 0 0 0 1.711.875l14-15a1 1 0 0 0 .243-.908M21.67 34.75l1.309-6.547a1 1 0 0 0-.625-1.133l-6.605-2.481 10.578-11.333-1.308 6.548a1 1 0 0 0 .625 1.132l6.6 2.475z"></path></svg>
                     <h3 class="my-[10px] text-brand-blue font-semibold">{{ $t('qulaylik-2-title') }}</h3>
                     <p class="w-full max-w-[400px] text-gray-500">{{ $t('darslar-title') }}</p>
                  </div>          
         </div>
         
      </div>
   </section>
</template>

<script>
 import { ref } from 'vue';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';
  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
export default {
   components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const progressCircle = ref(null);
      const progressContent = ref(null);
      const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.value.style.setProperty('--progress', 1 - progress);
        progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
      };
      return {
        onAutoplayTimeLeft,
        progressCircle,
        progressContent,
        modules: [Autoplay, Pagination, Navigation],
      };
    },
}
</script>

<style scoped>
* {
   overflow-x: hidden;
   overflow-y: hidden;
}

</style>