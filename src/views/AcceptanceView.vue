<template>
   <section class="support">
     <div class="container flex items-center justify-center flex-col w-full max-w-[846px]">
       <div class="btns w-full max-w-[846px]">
         <h2 class="text-brand-blue border-b-brand-blue border-b-2">{{ $t('support-title') }}</h2>
       </div>
 
       <form class="flex flex-col form-big w-full max-w-[846px]" @submit.prevent="sendData">
         <div class="top-inputs flex flex-col mm:flex-row justify-between gap-5 xc:gap-0 mt-6">
           <div class="email flex flex-col w-full max-w-full mm:max-w-[411px]">
             <label for="email">{{ $t('name-label') }} <span class="text-red-500">*</span></label>
             <input type="text" id="email" :placeholder="$t('placeholder-name')" v-model="supportData.name"
               :class="{ 'error': !supportData.name.match(stringRegex) && isEmpty }">
              <p class="mt-2 text-red-500" v-if="!supportData.name.match(stringRegex) && isEmpty">
               {{ $t('err-input') }}
             </p>
           </div>
 
           <div class="subject flex flex-col w-full max-w-full mm:max-w-[411px]">
             <label for="subject">{{ $t('surname-label') }} <span class="text-red-500">*</span></label>
             <input type="text" id="subject" :placeholder="$t('surname-placeholder')" v-model="supportData.surname"
               :class="{ 'error': !supportData.surname.match(stringRegex) && isEmpty }">
             <p class="mt-2 text-red-500" v-if="!supportData.surname.match(stringRegex) && isEmpty">
              {{ $t('err-input') }}
             </p>
           </div>
 
         </div>

         <div class="bottom-inputs flex flex-wrap  justify-between w-full max-w-[846px]">
           <div class="form-row">
             <label for="sharif">{{ $t('sharif-label') }} <span class="text-red-500">*</span></label>
             <input type="text" id="sharif" :placeholder="$t('placeholder-sharif')" v-model="supportData.sharifi" 
             :class="{ 'error': !supportData.sharifi.match(stringRegex) && isEmpty }">
             <p class="mt-2 text-red-500" v-if="!supportData.sharifi.match(stringRegex) && isEmpty">
              {{ $t('err-input') }}
             </p>
           </div>
           <div class="form-row">
             <label for="birthday">{{ $t('data-birthday') }} <span class="text-red-500">*</span></label>
             <input type="date" id="productModel" min="2006-01-01" max="2024-12-31" v-model="supportData.birthday" 
             :class="{ 'error': !supportData.birthday && isEmpty }">
             <p class="mt-2 text-red-500" v-if="!supportData.birthday && isEmpty">
              {{ $t('err-input') }}
             </p>
           </div>
           <div class="form-row">
             <label for="enter-class">{{ $t('number-class') }} <span class="text-red-500">*</span></label>
            <p class="my-2 text-red-500"  v-if="supportData.numberClass !== '' && (supportData.numberClass < 1 || supportData.numberClass > 11)">{{ $t('min-max-number') }}</p>
             <input type="number" id="enter-class" :placeholder="$t('type-here')" v-model="supportData.numberClass"
             :class="{ 'error': !supportData.numberClass && isEmpty }">
             <p class="mt-2 text-red-500" v-if="!supportData.numberClass && isEmpty">
              {{ $t('err-input') }}
             </p>
           </div>
           <div class="form-row gap-5">
             <label for="">{{ $t('enter-class') }} <span class="text-red-500">*</span></label>
             <div class="cheks flex gap-5">
              <label>
                <input type="radio" v-model="supportData.enterClass" value="uzb" name="language"> Uzbek
              </label>
              <label>
                <input type="radio" v-model="supportData.enterClass" value="rus" name="language"> Rus
              </label>
            </div>
            <p class="text-red-500" v-if="!supportData.enterClass && isEmpty">Bo'sh qolishi mumkin emas 1tasini tanlang</p>
           </div>
           <div class="form-row">
             <label for="phone">{{ $t('number-contact') }} <span class="text-red-500">*</span></label>
             <input type="text" id="phone" v-model="supportData.phoneNumber" @input="formatPhoneNumber" maxlength="17"
             :class="{ 'error': !supportData.birthday && isEmpty }"/>
             <p class="mt-2 text-red-500" v-if="supportData.phoneNumber > 4 && isEmpty">
              {{ $t('err-input') }}
             </p>
           </div>
           
           <div class="form-row">
             <label for="message">{{ $t('message-label') }}</label>
             <input type="text" id="message" :placeholder="$t('type-here')" v-model="supportData.message"/>
           </div>
 
         </div>
         
         <div class="btn flex items-end justify-end">
           <button type="submit"
             class="flex my-5 px-8 py-2 rounded-md hover:bg-brand-blue hover:text-white border-2 border-brand-blue">{{ $t('sender-support') }}</button>
         </div> 
         <div class="sended flex items-center gap-3" v-if="isInfoSent">
           <i class="fa-solid fa-check text-green-600 text-[20px]"></i>
           <h2>{{ $t('sent-success') }}</h2>
         </div>
       </form>
 
     </div>
   </section>
 </template>
 
 <script>
 
 export default {
   data() {
     return {
       supportData: {
         name: '',
         surname: '',
         birthday: '',
         sharifi: '',
         message: '',
         phoneNumber: '+998',
         numberClass: '',
         enterClass: '',
       },
       isEmpty: false,
       isInfoSent: false,
       stringRegex: /^(?!\s*$)[^\d]*$/,
      //  subjectRegEx: /^[a-zA-Z\s]+$/,
     }
   },
   methods: {
      formatPhoneNumber() {
      let cleaned = this.supportData.phoneNumber.replace(/\D/g, '');
      if (cleaned.startsWith('998')) {
        cleaned = cleaned.slice(3);  // "+998" qismini olib tashlash
      }
      if (cleaned.length > 9) {
        cleaned = cleaned.slice(0, 9);  // 9 ta raqamdan oshmasligi uchun
      }

      let formatted = '+998';
      if (cleaned.length > 0) {
        formatted += ' ' + cleaned.slice(0, 2);
      }
      if (cleaned.length > 2) {
        formatted += ' ' + cleaned.slice(2, 5);
      }
      if (cleaned.length > 5) {
        formatted += ' ' + cleaned.slice(5, 7);
      }
      if (cleaned.length > 7) {
        formatted += ' ' + cleaned.slice(7, 9);
      }

      this.supportData.phoneNumber = formatted;
    },
     async sendData() { 
       if (!this.supportData.name.match(this.stringRegex) || !this.supportData.surname.match(this.stringRegex) || !this.supportData.sharifi.match(this.stringRegex) || !this.supportData.birthday || !this.supportData.numberClass || !this.supportData.enterClass || this.supportData.phoneNumber < 3) {
         this.isEmpty = true
       } else {
          console.log(this.supportData)
         this.isEmpty = false
         const chatId = -1002150211504;
         await this.sendMessageToTelegram(chatId);
         this.isInfoSent = true
         this.clearValues(this.supportData)
       }
     },
     async sendMessageToTelegram(chatId) {
       const token = '7428093019:AAGsswL9Ai8ZmZLeFg6HC9LkemZZVKLRuEA';
       // const chatId = -1002032391529
       const dataTime = new Date()
       const timeFormat = dataTime.getHours() + ':' + dataTime.getMinutes().toString().padStart(2, '0')
       const format = dataTime.getDate() + '.' + dataTime.getMonth() + '.' + dataTime.getFullYear()
       const message =
         `**Qabul uchun yozilgan o'quvchi ma'lumotlari:**\nIsmi: **${this.supportData.name}**\nFamilyasi: **${this.supportData.surname}**\nSharifi: **${this.supportData.sharifi}**\nTug'ilgan yil / oy / kun: **${this.supportData.birthday}**\nQaysi sinfda o'qimoqchi: **${this.supportData.numberClass}**\nQanaqa sinfda o'qimoqchi: **${this.supportData.enterClass}**\nXabari: **${this.supportData.message}**\nJo'natilgan kun 🕐: **${format}**\nJo'natilgan vaqt: **${timeFormat}`;
       const url = `https://api.telegram.org/bot${token}/sendMessage`;
       try {
         const response = await fetch(url, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json'
           },
           body: JSON.stringify({
             chat_id: chatId,
             text: message,
             parse_mode: 'Markdown'
           })
         });
         const data = await response.json();
       } catch (error) {
         console.error('Error sending message:', error);
       }
     },    
     clearValues(obj) {
       obj.name = ''
       obj.surname = ''
       obj.birthday = ''
       obj.sharifi = ''
       obj.message = ''
       obj.phoneNumber = '+998'
       obj.numberClass = ''
       obj.enterClass = ''
     }
   }
 }
 </script>
 
 <style scoped>
 .none {
   display: none;
 }
 
 .support .container {
   margin-bottom: 80px;
 }
 
 .support .container .form-big .top-inputs input.error, .support .container .form-big .bottom-inputs input.error {
   border: 3px solid rgb(255, 63, 63);
 }
 
 .support .container .form-big .top-inputs input {
   padding: 12px 16px;
   outline: none;
   border: 1px solid #E4E5E8;
   border-radius: 4px;
   margin-top: 8px;
 }
 
 .support .container .article .actions input.error {
   border: 3px solid rgb(255, 63, 63);
 }
 
 .support .container .btns h2 {
   /* color: #767F8C; */
   font-weight: 500;
   /* border-bottom: 3px solid #767F8C; */
   padding: 15px 0px;
   width: 100%;
   max-width: 100%;
   transition: 0.4s;
   text-align: start;
   font-size: 24px;
 }
 
 .support .container button.active {
   color: #0A65CC;
   padding-bottom: 10px;
   border-bottom: 3px solid #0A65CC;
 }
 
 
 .support .container form .bottom-inputs .form-row input {
   padding: 12px 16px;
   outline: none;
   border: 1px solid #E4E5E8;
   border-radius: 4px;
   margin-top: 8px;
 
 }
 
 .support .container form .bottom-inputs .form-row {
   display: flex;
   flex-direction: column;
   margin-top: 32px;
   width: 411px;
 }
 
 .support .container form label {
   font-weight: 500;
   color: black;
   font-size: 16px;
 }
 
 @media (max-width:880px) {
   .support .container form .bottom-inputs .form-row {
     width: 100%;
   }
 
 }
 
 @media (max-width:430px) {
   .support .container .btns h2 {
     font-size: 19px;
   }
 }
 </style>
 