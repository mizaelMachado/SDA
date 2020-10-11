import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDirections, faLongArrowAltDown, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueGeolocation from 'vue-browser-geolocation' 
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'; 
import 'leaflet/dist/leaflet.css';
import { faMandalorian } from '@fortawesome/free-brands-svg-icons'

Vue.component('l-map', LMap); 
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

library.add(faUserSecret) 
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
 
Vue.config.productionTip = false

Vue.prototype.axios = axios

Vue.use(VueGeolocation) 


new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
