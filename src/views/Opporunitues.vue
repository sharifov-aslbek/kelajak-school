<template>
  <MyNavbar class="bg-brand-blue" />
  <section class="about-school my-10">
    <div class="container">
      <h2 class="s:text-center text-brand-blue text-[30px] text-start s:text-[35px] m:text-[50px] font-bold my-5">{{ $t('qulaylik') }}</h2>
      <div class="opporunitues flex flex-col gap-8">
        <CardLeft :title="$t('qulaylik-1-title')"
        :subtitle="$t('qulaylik-card-1-subtitle')"
        :img="appImg1" />

      <CardRight :title="$t('qulaylik-2-title')"
        :subtitle="$t('qulaylik-card-2-subtitle')"
        :img="appImg2" />

      <CardLeft :title="$t('qulaylik-3-title')"
        :subtitle="$t('qulaylik-card-3-subtitle')"
        :img="appImg3" />

      <CardRight :title="$t('qulaylik-4-title')"
        :subtitle="$t('qulaylik-4-subtitle')"
        :img="appImg4" />

      <CardLeft :title="$t('qulaylik-5-title')"
        :subtitle="$t('qulaylik-5-subtitle')"
        :img="appImg5" />

      <CardRight :title="$t('qulaylik-6-title')"
        :subtitle="$t('qulaylik-6-subtitle')"
        :img="appImg6" />
      </div>
    </div>
  </section>
</template>


<script>
import MyNavbar from '@/components/MyNavbar.vue'
import appImg1 from '@/assets/images/brain-img1.jfif'
import appImg2 from '@/assets/images/brain-img3.jfif'
import appImg3 from '@/assets/images/brain-img2.jfif'
import appImg4 from '@/assets/images/brain-img4.jfif'
import appImg5 from '@/assets/images/bus-img.jfif'
import appImg6 from '@/assets/images/brain-img6.jfif'
export default {
  data() {
    return {
      appImg1,
      appImg2,
      appImg3,
      appImg4,
      appImg5,
      appImg6
    }
  },
  components: {MyNavbar},
}
</script>
