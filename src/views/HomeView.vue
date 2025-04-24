<template>
   <Modal class="block sm:hidden" />
   <HeroSection />
   <AboutSection />
   <Video />
   <AdvantageSection />
   <TimeSection />
   <LocationSection />
 </template>
 
 <script>
 import { useHead } from '@vueuse/head'
 import Modal from '@/components/home/Modal.vue'
 import HeroSection from '@/components/home/HeroSection.vue'
 import AboutSection from '@/components/home/AboutSection.vue'
 import LocationSection from '@/components/home/LocationSection.vue'
 import AdvantageSection from '@/components/home/AdvantageSection.vue'
 import TimeSection from '@/components/home/TimeSection.vue'
 import Video from '@/components/home/Video.vue'
 
 export default {
   components: {
     HeroSection,
     AboutSection,
     LocationSection,
     AdvantageSection,
     TimeSection,
     Video,
     Modal
   },
   setup() {
      useHead({
  title: 'Kelajak School Qarshi – Xususiy Maktab',
  meta: [
    {
      name: 'description',
      content: 'Kelajak School Qarshi – zamonaviy va innovatsion taʼlim metodlariga asoslangan Qarshidagi xususiy maktab. Farzandingizning kelajagi biz bilan yorqin bo‘ladi!'
    },
    {
      name: 'keywords',
      content: 'Kelajak School, Qarshi xususiy maktab, taʼlim, maktab, zamonaviy maktab, innovatsion taʼlim, xususiy maktab Qarshi, boshlang‘ich maktab, o‘rta maktab, zamonaviy o‘qituvchilar, taʼlim texnologiyalari, maktabda STEM, ingliz tili, IT fanlari'
    },
    {
      property: 'og:title',
      content: 'Kelajak School Qarshi – Xususiy Maktab'
    },
    {
      property: 'og:description',
      content: 'Qarshidagi eng zamonaviy va innovatsion yondashuvga ega xususiy maktab. Kelajak avlodni tarbiyalaymiz.'
    },
    {
      property: 'og:image',
      content: 'https://kelajakschoolqarshi.uz/og-image.jpg' // Rasm bo‘lsa shu yerga joylashtiring
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Kelajak School Qarshi – Xususiy Maktab'
    },
    {
      name: 'twitter:description',
      content: 'Innovatsion taʼlim, zamonaviy maktab va iqtidorli yoshlar uchun imkoniyat – Kelajak School Qarshi.'
    },
    {
      name: 'twitter:image',
      content: 'https://kelajakschoolqarshi.uz/og-image.jpg'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://kelajakschoolqarshi.uz/'
    }
  ]
})
   }
 }
 </script>
 
 <style>
 /* style if needed */
 </style>
 