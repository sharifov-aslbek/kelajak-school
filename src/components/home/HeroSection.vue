    <template>
      <div class="relative w-full min-h-screen overflow-hidden">
        <!-- Snow container -->
        <div class="absolute inset-0 pointer-events-none">
          <div
            v-for="i in snowflakeCount"
            :key="i"
            class="snowflake absolute z-50 text-blue-50 opacity-70"
            :style="{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              fontSize: `${Math.random() * 20 + 10}px`
            }"
          >
          </div>
        </div>
        
        <!-- Your content goes here -->
        <div class="relative z-10">
          <!-- <section class="hero">
        <div class="hero-swiper swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="text-content text-white text-center">
                <h3 class="uptitle text-[13px] font-bold xs:text-[20px] lg:text-2xl">
                  {{ $t('title-home') }}
                </h3>
                <h1 class="title text-xl s:text-3xl sm:text-5xl lg:text-6xl mt-3 mb-14 w-[75%] mx-auto">{{ $t('subtitle-home') }}</h1>
                <router-link to="support" class="border-2 text-[14px] sm:text-[20px] border-white p-2 rounded-lg">{{ $t('link-hero') }}</router-link>
                <p class="sovet text-[12px] mt-5 w-[200px] mx-auto xs:w-auto">{{ $t('sovet-hero') }} <i class="fa-solid fa-arrow-up"></i></p>
              </div>
            </div>
          </div>
        </div>
      </section> -->

      <section class="new-hero relative h-[87vh] py-7 s:h-[90vh]">
      <div class="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50 z-0"></div>
      <div class="container mx-auto px-4 h-full flex items-center relative z-1">
        <div class="max-w-2xl text-white">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">{{ $t('title-home') }}</h2>
          <p class="text-lg md:text-xl mb-8">{{ $t('subtitle-home') }}</p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="https://online-qabulga-yozilish.netlify.app/" class="px-6 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors">
              {{ $t('link-hero') }}
            </a>
            <RouterLink to="/about-school" class="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors">
              {{ $t('navbar-link-3') }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
        </div>
      </div>
    </template>

    <script setup>
    import { ref, computed, watch, onMounted } from 'vue';
    import { useI18n } from 'vue-i18n';
// import { RouterLink } from 'vue-router';

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
    const snowflakeCount = ref(50) // Adjust number of snowflakes
    </script>

    <style scoped>
    .snowflake {
      @apply will-change-transform;
      animation: fall linear infinite;
    }

    @keyframes fall {
      0% {
        transform: translateY(-10vh) rotate(0deg);
      }
      100% {
        transform: translateY(100vh) rotate(360deg);
      }
    }

    
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

    .new-hero {
      background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
        url('https://i.pinimg.com/736x/4f/98/d7/4f98d7895a2a35ef5930d4f6e36107e0.jpg') no-repeat top / cover;
    }

    /* desktop */
    /* https://i.pinimg.com/736x/4f/98/d7/4f98d7895a2a35ef5930d4f6e36107e0.jpg */

    /* mobile */
    /* https://i.pinimg.com/736x/51/7e/66/517e666dae665db64c9a5dd67b5379d9.jpg */
    </style>
