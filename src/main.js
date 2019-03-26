// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

Vue.prototype.$http = Axios
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.filter("typemsg", function (data) {
  if (data.top === true) {
    return '置顶'
  } else if (data.good === true){
    return '精华'
  } else if (data.tab === 'share'){
    return '分享'
  } else if (data.tab === 'ask') {
    return '问答'
  } else if (data.tab === 'job') {
    return '招聘'
  }
})

Vue.filter('seetime', function (str) {
  if (!str) return ''
  let time = new Date().getTime() -  new Date(str).getTime()  //当前与最后回帖的毫秒数
  if (time/1000 < 30) {          // 少于30s时
    return '刚刚'
  } else if (time/1000 < 60){   //  在30s~1分钟之间
    return parseInt(time/1000 ) + '秒前'
  } else if (time/6000 < 60 ) {  // 在1min~60min之间
    return parseInt(time/6000 ) + '分钟前'
  } else if (time/360000 < 24 ) {  // 在1h~24h之间
    return parseInt(time/360000) + '小时前'
  } else if (time/86400000 < 31 ) {  // 在1天~31天之间
    return parseInt(time/86400000) + '天前'
  } else if (time/2592000000 < 12 ) {  // 在1个月~12月之间
    return parseInt(time/2592000000) + '月前'
  } else  {                            // 大于1年的秒数
    return parseInt(time/31536000000) + '年前'
  }

})
