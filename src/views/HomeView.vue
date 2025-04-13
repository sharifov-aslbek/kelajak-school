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
import Modal from '@/components/home/Modal.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import LocationSection from '@/components/home/LocationSection.vue'
import AdvantageSection from '@/components/home/AdvantageSection.vue'
import TimeSection from '@/components/home/TimeSection.vue'
import Video from '@/components/home/Video.vue'
import Banner from '@/components/home/Banner.vue'
export default {
   components: {HeroSection , AboutSection , LocationSection , AdvantageSection , TimeSection , Video , Modal}
}
</script>


<style>

</style>