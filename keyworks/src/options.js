import Vue from 'vue'
import Options from './components/Option'

vue.config.productionTip = false

new Vue({
  el: '#root',
  components: { Options },
  template: '<Options />'
})

