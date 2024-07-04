<template>
   <section class="about-school bg-gray-300 pb-[30px]">
      <div class="container">
         <h2 class="text-brand-blue text-[30px]  sm:text-[40px] font-bold py-[20px]">Kelajak School xususiy maktabi haqida</h2>
         <div class="about-box lg:items-center flex flex-col lg:flex-row gap-[20px] lg:gap-[0px] p-[20px] rounded-3xl bg-white w-full max-w-full" v-motion-pop-visible>
            <img class="rounded-3xl mr-[120px] w-full max-w-[500px]" src="../assets/images/kelajak-schoolimg.jpg" alt="#">
            <div class="text w-full max-w-[550px]">
               <h3 class="text-[25px] font-bold text-[#0065ad]">Kelajak school ta'lim loyihasi</h3>
               <p class="font-semibold my-[10px]">1.Kelajak School maktabi 2024-2025 o'z faoliyatini boshlaydi</p>
               <p class="font-semibold">2.Maktabimizda bilim berish bo'yicha ustozlarni tajribasi kuchli bo'lib sizning farzadingizni natijaga chiqarmaguncha qo'ymaydi</p>
               <p class="font-semibold my-[10px]">3. Kelajak Schoolda farzandingiz o'qishi uchun barcha sharoitlar mavjud</p>
               <p class="font-semibold">Asosiy maqsad - O'zbekistonda eng yaxshi avlodlarni tayyorlash</p>
            </div>
         </div>

         <div class="maqsad mt-[20px] flex p-[20px] flex-col bg-white w-full max-w-full rounded-3xl" v-motion-pop-visible>
            <div class="top">
               <h3 class="text-[23px] font-bold text-[#0065ad] ">Maqsadlar:</h3>

               <div class="cards">
                  <div class="card" v-motion-pop-visible>
                     <h4>– O‘quvchilarga o‘z yo‘nalishi bo‘yicha sifatli ta’lim
                        berish va bu natijaga asoslangan bo‘lishi;</h4>
                  </div>

                  <div class="card" v-motion-pop-visible>
                     <h4>– Kelajak School o‘quvchilari sharqona ta’lim asosida tarbiyalanadilar. Oilasiga, vataniga, jamiyatiga xizmat qiladigan yetuk insonlar bo‘lishadi;</h4>
                  </div>
               </div>
            </div>

            <div class="bottom">
               <h3 class="text-[23px] font-bold text-[#0065ad] ">Qadriyatlar:</h3>
               <div class="cards">
                  <div class="card">
                     <h4>Qiziquvchanlik</h4>
                  </div>
                  <div class="card">
                     <h4>Natijaviylik</h4>
                  </div>
                  <div class="card">
                     <h4>Mas’uliyat</h4>
                  </div>
                  <div class="card">
                     <h4>Keng dunyoqarash</h4>
                  </div>
                  <div class="card">
                     <h4>Jamoaviylik</h4>
                  </div>
                  <div class="card">
                     <h4>Milliy qadriyatlar</h4>
                  </div>
               </div>
            </div>
         </div>
         
               <div class="sharoit flex flex-col gap-[30px] bg-white w-full max-w-full rounded-3xl mt-[20px] p-[20px]">
                  <h3 class="text-[23px] font-bold mb-[20px] text-[#0065ad] ">Sharoit va imkoniyatlar</h3>
         
                  <div class="content flex flex-col lg:flex-row gap-[20px] lg:justify-between lg:items-center" v-motion-pop-visible>
                     <img class="rounded-3xl w-full max-w-[500px]" src="@/assets/images/sinfxona.jpg" alt="">
                     <div class="text">
                        <h4 class="text-[25px] font-bold text-[#0065ad] mb-[15px]">Sinfxonalar , jihozlar</h4>
                        <p class="text-[17px] font-semibold w-full max-w-[650px]">Sinfda maksimal 15 nafar o‘quvchi bo‘lib, sinf xonada elektron doska, sifatli standartga ko‘ra yasalgan stol-stullar mavjud. Har bir o‘quvchi kitob va kiyimlarini joylash uchun shaxsiy javonlar o‘rnatilgan.</p>
                     </div>
                  </div>

                  <div class="content-sport flex flex-col lg:flex-row gap-[20px] lg:justify-between lg:items-center" v-motion-pop-visible>
                     <div class="text order-2 lg:order-1">
                        <h4 class="text-[#0065ad] font-bold text-[25px] mb-[15px]">Sport va fan to'garaklari</h4>
                        <p class="text-[17px] font-semibold w-full max-w-[650px]">Soat 15:00 dan keyin o‘quvchilar uchun alohida to‘garak soatlari tashkillashtiriladi. Bolalarning jismonan sog‘lom bo‘lishi uchun gimnastika va taekvondo sport to‘garaklari o‘tiladi.</p>
   
                     </div>

                     <img class="order-1 lg:order-2 rounded-3xl w-full max-w-[500px]" src="@/assets/images/sport-img.jpg" alt="#">
                  </div>

                  <div class="content-zal flex flex-col lg:flex-row gap-[20px] lg:justify-between lg:items-center" v-motion-pop-visible>
                     <img class="w-full max-w-[500px] rounded-3xl" src="@/assets/images/sportzal.jpg" alt="err">

                     <div class="text">
                        <h4 class="text-[#0065ad] font-bold text-[25px] mb-[15px]">Sportzallar</h4>
                        <p class="text-[17px] font-semibold w-full max-w-[650px]">Maktabda ochiq va yopiq sport maydoni mavjud bo‘lib, maktab binosi ichida sportzal va tashqarida futbol, voleybol o‘yingohilari mavjud</p>
                     </div>
                  </div>
               </div>


               <div class="xizmatlar mb-[20px] flex flex-col gap-[30px] bg-white w-full max-w-full rounded-3xl mt-[20px] p-[20px]">
                  <h3 class="text-[23px] font-bold mb-[20px] text-[#0065ad] ">Maktab xizmatlari</h3>
         
                  <div class="content-xizmat flex flex-col lg:flex-row gap-[20px] lg:justify-between lg:items-center" v-motion-pop-visible>
                     <div class="text">
                        <h4 class="text-[#0065ad] font-bold text-[25px] mb-[15px]">Oshxona</h4>
                        <p class="text-[17px] font-semibold w-full max-w-[650px]">Maktabda ovqatlar diyetolog tomonidan tasdiqlangan taomnoma asosida tayyorlanadi. Bir kunda 3 mahal taom berilib, ular tongi nonushta, obed, va kechki tushlikdan iborat. Bolalar to‘g‘ri vaqtda va me’yorida ovqatlanishi ta’minlanadi. Boshlang‘ich sinf o‘quvchilari ovqatlanishini qo‘shimcha ustozlar nazorat qiladi.</p>
   
                     </div>

                     <img class="rounded-3xl w-full max-w-[500px]" src="@/assets/images/kitchen.jpg" alt="#">
                  </div>

                  <div class="content-olimpidies flex flex-col lg:flex-row gap-[20px] lg:justify-between lg:items-center" v-motion-pop-visible>
                     <img class="rounded-3xl w-full max-w-[500px]" src="@/assets/images/olimpiada.jpg" alt="">
                     <div class="text">
                        <h4 class="text-[25px] font-bold text-[#0065ad] mb-[15px]">Ichki olimpiadalar</h4>
                        <p class="text-[17px] font-semibold w-full max-w-[650px]">Maktab o‘quvchilar o‘rtasida ta’lim muhitini shakllantirish uchun turli fanlardan ichki olimpiadalar o‘tkaziladi. Ingliz tili, matematika, fizika, tarix, ona tilli, rus tili, arab tili, kimyo va biologiya fanlaridan yilda ikki marta umumiy olimpiada o‘tkaziladi.</p>
                     </div>
                  </div>
               </div>

               <div class="ariza flex flex-col lg:flex-row gap-[20px] lg:gap-[0px] lg:items-center justify-around p-[20px] rounded-3xl text-white" v-motion-pop-visible>
                  <h3 class="text-[20px] lg:text-[30px] w-full max-w-[700px]">Ariza qoldiring. Biz siz bilan bog'lanib batafsil ma'lumot beramiz</h3>
                  <button class="bg-green-500 px-3 py-2 rounded-xl" @click="$router.push('support')">Ariza Yuborish</button>
               </div>
      </div>
   </section>
</template>

<script>
export default {
   
}
</script>


<style>
.about-school .container .maqsad .top .cards .card {
   width: 100%;
   max-width: 450px;
   padding: 40px;
   border-radius: 20px;
   background: #EAF6FF;
}

.about-school .container .maqsad .top .cards {
   display: flex;
   flex-wrap: wrap;
   gap: 40px;
   margin: 20px 0px;
}

.about-school .container .maqsad .bottom .cards {
   display: flex;
   flex-wrap: wrap;
   gap: 40px;
   margin: 20px 0px;
}

.about-school .container .maqsad .bottom .cards .card {
   background: #EAF6FF;
   padding: 20px;
   border-radius: 20px;
}

.ariza {
   background-color: transparent;
    background-image: linear-gradient(75deg, #0065AD 0%, #0080DB 100%);
}
</style>