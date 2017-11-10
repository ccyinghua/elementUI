import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import '!style-loader!css-loader!less-loader!./assets/style/index.less'   // 全局引入less文件

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
