<template>
   <div class="totop fixed bottom-[10px] z-50 right-[10px]">
      <button class="button" v-show="scrolledPast" @click="scrolToTop">
  <svg class="svgIcon" viewBox="0 0 384 512">
    <path
      d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
    ></path>
  </svg>
</button>

   </div>
</template>

<script>
export default {
  data() {
    return {
      scrolledPast: false,
    }
  },
   methods: {
      scrolToTop() {
         window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
      },
      handleScroll() {
      this.scrolledPast = window.scrollY > 250;
    },
   },
   mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style>
.button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 0px 4px rgba(180, 160, 255, 0.253);
  cursor: pointer;
  transition: box-shadow 1s;
  animation: boxshadower 2s infinite;
  transition-duration: 0.3s;
  overflow: hidden;
  position: relative;
}

@keyframes boxshadower {
   0% {
      box-shadow: 0px 0px 0px 4px rgba(180, 160, 255, 0.253);
   }
   100% {
      box-shadow: 0px 0px 0px 8px rgba(180, 160, 255, 0.253);
   }
}

.svgIcon {
  width: 12px;
  transition-duration: 0.3s;
}

.svgIcon path {
  fill: white;
}

.button:hover {
  width: 140px;
  border-radius: 50px;
  transition-duration: 0.3s;
  background-color: rgb(7, 45, 181);
  align-items: center;
}

.button:hover .svgIcon {
  /* width: 20px; */
  transition-duration: 0.3s;
  transform: translateY(-200%);
}

.button::before {
  position: absolute;
  bottom: -20px;
  content: "Tepaga qaytish";
  color: white;
  /* transition-duration: .3s; */
  font-size: 0px;
}

.button:hover::before {
  font-size: 13px;
  opacity: 1;
  bottom: unset;
  /* transform: translateY(-30px); */
  transition-duration: 0.3s;
}

</style>