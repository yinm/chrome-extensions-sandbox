import Vue from 'vue'
import Options from './components/Option'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { Options },
  template: '<Options />'
})

