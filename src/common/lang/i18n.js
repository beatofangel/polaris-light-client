import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import jaLocale from 'element-ui/lib/locale/lang/ja'

Vue.use(VueI18n)

const messages = {
  'en': Object.assign(require('./en'), enLocale),
  'zh': Object.assign(require('./zh'), zhLocale),
  'ja': Object.assign(require('./ja'), jaLocale)
}

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh',
  messages
})

locale.i18n((key, value) => i18n.t(key, value))

export default i18n
