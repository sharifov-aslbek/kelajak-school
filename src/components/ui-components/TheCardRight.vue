<template>
   <div class="flex justify-around items-center flex-col gap-5 xr:gap-0 xr:flex-row" v-motion-pop-visible>
      <div class="img order-2 xr:order-1">
         <img :src="img" alt="#" class="w-full max-w-[415px]">
      </div>

      <div class="text order-1 xr:order-2">
         <h3 class="w-full max-w-[420px] font-semibold text-black text-[24px] s:text-[32px] leading-10">{{ title }}</h3>
         <p class="w-full max-w-[411px] font-normal text-[16px] leading-6 mt-4">{{ subtitle }}</p>
      </div>
   </div>
</template>

<script>
export default {
   name: 'CardRight',
   props: {
      title: [String],
      subtitle: [String],
      img: [String]
   }
}
</script>

<style></style>