import Vue from 'vue';
import App from './App.vue';
import router from './router'

import "./scss/_reset.scss";
import "./scss/_global.scss"

Vue.config.productionTip = false;

new Vue({
	name: 'Root',
  router,
	render: h => h(App),
}).$mount('#app');
