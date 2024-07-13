<template>
  <section class="hero">
    <div class="hero-swiper swiper-container">
      <div class="swiper-wrapper">
         <div class="swiper-slide">
           <div class="text-content text-white text-center">
             <h3 class="uptitle text-[13px] font-bold xs:text-[20px] lg:text-2xl">
              {{ text }}
            </h3>
            <h1 class="title text-xl s:text-3xl sm:text-5xl lg:text-6xl mt-3 mb-14 w-[75%] mx-auto">{{ $t('subtitle-home') }}</h1>
            <router-link to="support" class="border-2 text-[14px] sm:text-[20px] border-white p-2 rounded-lg">{{ $t('link-hero') }}</router-link>
            <p class="sovet text-[12px] mt-5 w-[200px] mx-auto xs:w-auto">{{ $t('sovet-hero') }} <i class="fa-solid fa-arrow-up"></i></p>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
 
<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const wordIndex = ref(0);
const charIndex = ref(0);
const isDeleting = ref(false);
const words = ref(["", ""]);
const text = ref('');

const translatedWord = computed(() => {
  return t('title-home');
});

const updatedWords = computed(() => {
  const updated = [...words.value];
  updated[0] = translatedWord.value;
  return updated;
});

watch(translatedWord, () => {
  words.value = updatedWords.value;
});

const typeEffect = () => {
  const currentWord = words.value[wordIndex.value];
  const currentChar = currentWord.substring(0, charIndex.value);
  text.value = currentChar;

  if (!isDeleting.value && charIndex.value < currentWord.length) {
    charIndex.value++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting.value && charIndex.value > 0) {
    charIndex.value--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting.value = !isDeleting.value;
    wordIndex.value = !isDeleting.value ? (wordIndex.value + 1) % words.value.length : wordIndex.value;
    setTimeout(typeEffect, 200);
  }
};

onMounted(() => {
  words.value = updatedWords.value;
  typeEffect();
});
</script>


<style scoped>
 
 .hero .swiper-container {
   overflow-x: hidden;
   display: flex;
   align-items: center;
   /* position: absolute; */
   z-index: 1;
   /* top: 0; */
   /* left: 0; */
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


 .swiper-wrapper .swiper-slide {
   height: 90vh;
   background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
     url('@/assets/images/2.jfif') no-repeat top / cover;
 }


 </style>