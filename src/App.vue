<template>
  <RouterView />
  <Footer />
  <TheTop />
</template>

<script>
import { RouterLink , RouterView } from 'vue-router';
// import Navbar from '@/components/Navbar.vue'
import TheTop from '@/components/TheTop.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
   Footer , TheTop
  },
  data() {
    return {
      showHeader: true,
    }
  },

}
</script>

<style>

</style>