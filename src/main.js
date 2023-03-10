import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
  Vue.use(Vuesax)

Vue.config.productionTip = false

Vue.use(ElementUI);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
