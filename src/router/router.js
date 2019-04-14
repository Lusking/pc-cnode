import article from '../component/article/article.vue'
import contentleft from '../component/content/contentleft.vue'
import vueRouter from 'vue-router'
import getstart from '../component/getstart/getstart.vue'
import getAPI from '../component/getAPI/getAPI.vue'
import getAbout from '../component/getabout/getabout.vue'
import signin from '../component/signin/signin.vue'
import  Vue from 'vue'
Vue.use(vueRouter)



const route= new vueRouter({
  routes:[
    {path:'/signin',name:'signin',component:signin},
    {path:'/getabout',name:'getAPI',component:getAbout},
    {path:'/getAPI',name:'getAPI',component:getAPI},
    {path:'/getstart',name:'getstart',component:getstart},
    {path:'/',name:'contentleft',component:contentleft},
    {path:'/article/:id',name:'article',component:article}
  ]
})
export default route;
