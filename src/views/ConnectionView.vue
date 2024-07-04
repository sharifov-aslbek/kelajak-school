<template>
   <section class="connect my-12">
      <div class="container flex flex-col gap-7"  v-motion-fade-visible>
         <div class="top-titles flex items-center gap-5">
            <h2 class="text-[24px] s:text-[30px] m:text-[45px] text-brand-blue font-bold">{{ $t('connect-title') }}</h2>
            <div class="loader">
             <div class="circle circle-1"></div>
             <div class="circle circle-2"></div>
             <div class="circle circle-3"></div>
             <div class="circle circle-4"></div>
             </div>
         </div>

         <div class="numbers flex flex-col xr:flex-row items-start xr:items-center gap-5">
           <div class="shine">{{ $t('footer-aloqa') }}</div>
           <h4 class="text-[17px] s:text-[25px] text-blue-700 hover:text-blue-500"><i class="fa-solid fa-phone-volume icon mr-[10px]"></i> +998 91 463 33 22</h4>
           <h4 class="text-[17px] s:text-[25px] text-blue-700  hover:text-blue-500"><i class="fa-solid fa-phone-volume icon mr-[10px]"></i> +998 93 363 33 22</h4>
        </div>
        <div class="socials flex items-center gap-5">
           <h3 class="shine text-[19px] s:text-[25px] m:text-[35px] text-brand-blue font-bold">{{ $t('connect-sahifa') }}:</h3>
           <a href="https://t.me/Kelajak_school_qarshi" class="hover:text-blue-500 text-[30px]">
               <i class="fa-brands fa-telegram"></i>
            </a>
 
            <a href="https://www.instagram.com/kelajak.school/" class="hover:text-blue-500 text-[30px]">
               <i class="fa-brands fa-instagram"></i>
            </a>
        </div>

        <div class="email flex flex-col gap-5">
         <h3 class="shine text-[20px] s:text-[25px] m:text-[30px] w-full max-w-[250px] xsmax:max-w-full text-brand-blue font-bold">{{ $t('email-addres') }}:</h3>
         <div class="inbox flex items-center gap-3">
            <i class="fa-solid fa-envelope"></i>
            <p class="text-brand-blue text-[16px] xsmax:text-[20px]">kelajak.school.qarshi@gmail.com</p>
         </div>
        </div>

           <h3 class="text-[14px] w-full max-w-[360px] s:text-[16px] font-bold">{{ $t('connect-qabul') }}</h3>
           <router-link class="text-blue-500" to="support">{{ $t('link-hero') }}</router-link>
         <p class="text-[13px]"><i class="fa-solid fa-arrow-up"></i> {{ $t('sovet-hero') }}</p>
      <p class="text-brand-blue font-bold w-full max-w-[360px] text-[14px] s:text-[16px]">{{ $t('footer-subtitle') }}</p>
      </div>
   </section>
</template>

<script>
import MyNavbar from '@/components/MyNavbar.vue';
export default {
   components: {MyNavbar}
}
</script>

<style>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
}

.circle {
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 10px;
  box-shadow: inset 0 0 0 2px #fff;
  transform-origin: center;
  animation: fill 1.5s ease-in-out infinite;
}

.circle-1 {
  animation-delay: 0s;
}

.circle-2 {
  animation-delay: -0.4s;
}

.circle-3 {
  animation-delay: -0.8s;
}

.circle-4 {
  animation-delay: -1.2s;
}

@keyframes fill {
  0% {
    transform: scale(1);
  }

  50% {
    box-shadow: inset 0 0 0 2px #fff, inset 0 0 0 6px #1c1c1e;
    transform: scale(1.5);
  }

  100% {
    box-shadow: inset 0 0 0 2px #fff, inset 0 0 0 6px #fff;
    transform: scale(1);
  }
}

.icon {
   transition: transform 1s;
   animation: iconCall 1s infinite;
}

@keyframes iconCall {
   0% {
      transform: scale(1);
   }
   100% {
      transform: scale(1.2);
   }
}

.shine {
  font-size: 25px;
  font-weight: 900;
  color: #ffffff4d;
  background: #222 -webkit-gradient(
      linear,
      left top,
      right top,
      from(#222),
      to(#222),
      color-stop(0.5, #fff)
    ) 0 0 no-repeat;
  background-image: -webkit-linear-gradient(
    -40deg,
    transparent 0%,
    transparent 40%,
    #fff 50%,
    transparent 60%,
    transparent 100%
  );
  background-clip: text;
  background-size: 50px;
  /* -webkit-background-clip: text; */
  /* -webkit-background-size: 50px; */
  animation: zezzz 5s infinite;
  /* -webkit-animation-duration: 5s; */
  /* -webkit-animation-iteration-count: infinite; */
}
@keyframes zezzz {
  0%,
  10% {
    background-position: -200px;
  }
  20% {
    background-position: top left;
  }
  100% {
    background-position: 350px;
  }
}


</style>