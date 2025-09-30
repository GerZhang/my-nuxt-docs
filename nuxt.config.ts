export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
    }, {
      code: 'fr',
      name: 'Français',
    }],
  },
  // 如果使用 nuxt-llms，添加域名配置
  llms: {
    domain: 'localhost:3000' // 或者你的实际域名
  }
})
