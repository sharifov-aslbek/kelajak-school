import { createI18n } from 'vue-i18n'
import EN from './locale/en.json'
import UZ from './locale/uz.json'
import RU from './locale/ru.json'
function loadLocalMessages() {
   const locale = [{EN: EN} , {UZ: UZ} , {RU: RU}]
   const messages = {}
   locale.forEach(lang => {
      const key = Object.keys(lang)
      messages[key] = lang[key]
   })
   return messages
}


export default createI18n({
   locale: 'UZ',
   fallbackLocale: 'UZ',
   messages: loadLocalMessages()
})