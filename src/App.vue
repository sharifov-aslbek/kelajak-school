<template>
  <div>
    <Navbar v-if="!hideNavbar" />
    <RouterView />
    <Footer v-if="!hideNavbar" />
    <TheTop />
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import Navbar from '@/components/MyNavbar.vue';
import TheTop from '@/components/TheTop.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer,
    TheTop,
    Navbar
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
