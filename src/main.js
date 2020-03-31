import '@babel/polyfill'

import './plugins'

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
Vue.config.productionTip = false

initApp()

async function initApp() {
	new Vue({
        vuetify,
        render: h => h(App)
    }).$mount('#app')
}
