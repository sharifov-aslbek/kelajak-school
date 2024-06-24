<template>
<HeroSection />
<AboutSection />
<AdvantageSection />
<LocationSection />
</template>

<script>
import HeroSection from '@/components/home/HeroSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import LocationSection from '@/components/home/LocationSection.vue'
import AdvantageSection from '@/components/home/AdvantageSection.vue'
export default {
   components: {HeroSection , AboutSection , LocationSection , AdvantageSection}
}
</script>


<style>

</style>