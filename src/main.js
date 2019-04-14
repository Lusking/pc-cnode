import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import vueaxios from 'vue-axios'
import moment from 'moment'
import router from './router/router.js'
// import editorReply from './comment/editorReply.vue'
Vue.prototype.axios = axios;
Vue.prototype.changeTime= time => moment(time).startOf('minute').fromNow().replace(/hours?/, '小时').replace('ago', '前')
 .replace(/days?/, '天').replace(/minutes?/, '分钟').replace(/\ban?/, '1').
 replace(/months?/, '个月').replace(/\byears?/, '年').replace(/\s/g, '').replace('fewseconds','分钟');
 Vue.filter('titleFilter',function(value){
   var aValue=''
   if(value.length>=30){
     value=value.substring(0,30);
     aValue=value.concat('......')
   }else{
     aValue=value;
   }
   return aValue;
 })


new Vue({
  el: '#app',
  router,
  // components:{
  //   editorReply
  // },
  render: h => h(App)
})
