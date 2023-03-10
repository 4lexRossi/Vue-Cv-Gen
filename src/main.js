import Vue from 'vue'
import App from './App.vue'
import pdf from 'vue-pdf'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  pdf,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
