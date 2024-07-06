<template>
  <Navbar />
  <RouterView />
  <Footer />
  <TheTop />
</template>

<script>
import { RouterLink , RouterView } from 'vue-router';
import Navbar from '@/components/MyNavbar.vue'
import TheTop from '@/components/TheTop.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
   Footer , TheTop , Navbar
  },
  data() {
    return {
      
    }
  },

}
</script>

<style>

</style>