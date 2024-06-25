<template>
   <div class='flex justify-around items-center flex-col gap-5 xr:gap-0 xr:flex-row'>
      <div class="text">
         <h3 class="w-full max-w-[431px] font-semibold text-black text-[24px]  s:text-[32px] leading-10">{{ title }}</h3>
         <p class="w-full max-w-[430px] font-normal text-[16px] leading-6 mt-4">{{ subtitle }}</p>
      </div>

      <div class="img">
         <img :src="img" alt="#" class="w-full rounded-full max-w-[415px]">
      </div>
   </div>
</template>

<script>
export default {
   name: 'CardLeft',
   props: {
      title: [String],
      subtitle: [String],
      img: [String]
   }
}
</script>

<style></style>