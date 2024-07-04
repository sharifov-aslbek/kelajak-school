<template>
      <div class="container">
         <section class="aboutTime w-full max-w-full mt-[70px] flex-col items-center l:flex-row flex justify-around active">
         <div class="left flex items-center justify-center flex-col" v-motion-slide-visible-bottom>
            <div id="clock" class="mb-[40px] l:mb-[0px]"> 
               <div id="clockInner">
                  <div class="marking marking-one"></div>
                  <div class="marking marking-two"></div>
                  <div class="marking marking-three"></div>
                  <div class="marking marking-four"></div>
         
                  <div class="clockFace">
         
                  </div>
         
                  <div id="inner"></div>
         
                  <div id="hour" :style="{transform: `rotate(${hour}deg)`}"></div>
                  <div id="minute" :style="{transform: `rotate(${minute}deg)`}"></div>
                  <div id="second" :style="{transform: `rotate(${second}deg)`}"></div>
               </div>
      
            </div>
   
      
         </div>
   
         
   
         <div class="rightBlock text-center l:text-start" v-motion-slide-visible-bottom>
            <h2 class="text-[30px] sm:text-[40px] text-brand-blue font-semibold">Vaqt bu - Eng oliy ne'mat</h2>
            <p class="text-[#088395] my-5">Kelajak School bilan uni to'gri yo'lga sarflang</p>
            <button class="border-2 border-[#37B7C3] hover:bg-[#37B7C3] hover:text-white text-[14px] py-2 px-5">{{ $t('link-hero') }}</button>
         </div>
      </section>
      </div>
   
</template>


<script>
export default {
   data() {
      return {
       hour: '',
       minute: '',
       second: '',
      }
   },
   methods: {
      timeRunning() {
         setInterval(() => {
        const d = new Date();
        const hr = d.getHours();
        const min = d.getMinutes();
        const sec = d.getSeconds();
        const hr_rotation = 30 * hr + min / 2;
        const min_rotation = 6 * min;
         const  sec_rotation = 6 * sec;
   
   this.hour = hr_rotation
   this.minute = min_rotation
   this.second = sec_rotation
}, 1000);
      }
   },
   mounted() {
      this.timeRunning()
   },
}
</script>

<style>

#clock {
   /* position: relative; */
   height: 280px;
   width: 300px;
   border: 10px solid #213653;
   box-shadow: inset 1px 1px 5px #000, 1px 1px 5px #000;
   border-radius: 50%;
   padding: 1rem;
   display: flex;
   align-items: center;
   justify-content: center;
}

@media (max-width:380px) {
   #clock {
      height: 240px;
      width: 260px;
   }
}



.aboutTime .rightBlock button {
   animation: buttonRadius 3s infinite;
}

@keyframes buttonRadius {
   0% {
      border-radius: 30px 0px 30px 0px;
   }
   50% {
    border-radius: 15px 30px 15px 30px;  
   }
   100% {
      border-radius: 30px 0px 30px 0px;
   }
}



#clockInner {
   position: relative;
   background: #282828;
   overflow: hidden;
   width: 100%;
   height: 100%;
   border-radius: 100%;
}

#clockInner::after {
   -webkit-transform: rotate(90deg);
   -moz-transform: rotate(90deg);
   transform: rotate(90deg);
}


#clockInner::after, #clockInner::before, #clockInner .marking {
   content: "";
   position: absolute;
   width: 5px;
   height: 100%;
   background: #aaaaaa;
   z-index: 0;
   left: 49%;
   top: 0%;
}

#clockInner .marking {
   background: rgb(43, 103, 255);
   width: 3px;
}

#clockInner .marking.marking-one {
   -webkit-transform: rotate(30deg);
   -moz-transform: rotate(30deg);
   transform: rotate(30deg);
}

#clockInner .marking.marking-two {
   -webkit-transform: rotate(60deg);
   -moz-transform: rotate(60deg);
   transform: rotate(60deg);
}

#clockInner .marking.marking-three {
   -webkit-transform: rotate(120deg);
   -moz-transform: rotate(120deg);
   transform: rotate(120deg);
}

#clockInner .marking.marking-four {
   -webkit-transform: rotate(150deg);
   -moz-transform: rotate(150deg);
   transform: rotate(150deg);
}

.clockFace {
   position: absolute;
   top: 10%;
   left: 10%;
   width: 80%;
   height: 80%;
   background: #282828;
   -webkit-border-radius: 100%;
   -moz-border-radius: 100%;
   border-radius: 100%;
   z-index: 1;
}

#hour, #minute, #second {
   position: absolute;
   border-radius: 10px;
   transform-origin: bottom;
   z-index: 5;
}

#hour {
   background: #e0e0e0;
   width: 2.4%;
   height: 25%;
   top: 26%;
   left: 48.85%;
   opacity: 0.8;
}

#minute {
   background: #088395;
   width: 2%;
   height: 30%;
   top: 20%;
   left: 48.9%;
   opacity: 0.8;
}

#second {
   background: #64aaff;
   width: 1.6%;
   height: 40%;
   top: 10%;
   left: 49.25%;
   opacity: 0.8;
}



</style>