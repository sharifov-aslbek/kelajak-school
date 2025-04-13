<template>
  <div>
    <Banner class="hidden sm:flex" />
    <Navbar v-if="!hideNavbar" />
    <RouterView />
    <Footer v-if="!hideNavbar" />
    <TheTop />
  </div>
</template>

<script>
import Banner from '@/components/home/Banner.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import Navbar from '@/components/MyNavbar.vue';
import TheTop from '@/components/TheTop.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer,
    TheTop,
    Navbar,
    Banner
  },
  setup() {
    const route = useRoute();

    // Navbar ko'rinishini tekshirish
    const hideNavbar = computed(() => route.path === '/login');

    return {
      hideNavbar
    };
  }
};
</script>

<style>
</style>
