<template>
  <RouterView />
  <Footer />
</template>

<script>
import { RouterLink , RouterView } from 'vue-router';
// import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
   Footer
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