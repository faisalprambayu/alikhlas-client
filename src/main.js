import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCardCarousel from 'vue-card-carousel'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import SassLoader from 'sass-loader'

import AOS from 'aos'
import 'aos/dist/aos.css'



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted() {
    AOS.init()
  },
}).$mount('#app')

Vue.use(VueCardCarousel)

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.use(SassLoader)


