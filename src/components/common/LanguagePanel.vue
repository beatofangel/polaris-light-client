<template>
  <div>
    <span>{{ $t('message.greeting', { name: username || 'guest' }) }}</span>
    <el-dropdown @command="changeLanguage" :trigger="trigger || 'click'" placement="bottom">
      <span class="el-dropdown-link">
        <span :class="[showFlag(currentLanguage)]"></span><i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item, index) in languages" :command="index" :key="index" :disabled="currentLanguage == index" >
          <span :class="[showFlag(index)]"></span>&nbsp;<span>{{ showLanguage(index) }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'language-panel',
  props: ['trigger', 'username'],
  data () {
    // localStorage.clear() // for debug
    this.$i18n.locale = localStorage.getItem('locale') || 'zh'
    this.setLanguage({ language: this.$i18n.locale })
    return {
      currentLanguage: this.$i18n.locale,
      languages: {
        'zh': { icon: 'cn', name: '中文' },
        'en': { icon: 'us', name: 'English' },
        'ja': { icon: 'jp', name: '日本語' }
      }
    }
  },
  methods: {
    changeLanguage (lang) {
      localStorage.setItem('locale', this.$i18n.locale = this.currentLanguage = lang)
      this.setLanguage({ language: this.$i18n.locale })
    },
    showLanguage (lang) {
      return this.$t('message.language', lang)
    },
    showFlag (lang) {
      return 'flag-icon flag-icon-' + this.languages[lang].icon
    },
    ...mapActions({
      'setLanguage': 'setLanguage'
    })
  }
}
</script>
<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.flag-icon {
  border: 1px solid gray;
  border-radius: 4px;
  height: 15px;
  width: 20px;
}
</style>
