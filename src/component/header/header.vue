<template lang="html">
  <div class="header">
    <div class="header-left">
      <img href="#" src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="logo">
      <transition name="searchFade">
      <input type="text" name="search" placeholder='搜索' v-on:fucus='isFocus=true' v-bind:class='{active:isFocus}'>
      </transition>
    </div>
    <div class="header-right" v-if='loginname==""'>
      <ul>
        <li><router-link  to="/">首页</router-link></li>
        <li><router-link  to="/getstart">新手入门</router-link></li>
        <li><router-link to="/getAPI">API</router-link></li>
        <li><router-link to="/getabout">关于</router-link></li>
        <li><a href="https://github.com/login?client_id=0625d398dd9166a196e9&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D0625d398dd9166a196e9%26redirect_uri%3Dhttps%253A%252F%252Fcnodejs.org%252Fauth%252Fgithub%252Fcallback%26response_type%3Dcode">
          注册</a></li>
        <li><router-link to="/signin">登录</router-link></li>
      </ul>
    </div>
    <div class="header-right" v-else>
      <ul>
        <li><router-link :to="{ name: 'home', params: {} }">首页</router-link></li>
        <li><router-link :to="{ name: 'messages', params: {} }">未读信息</router-link></li>
        <li><router-link :to="{ name: 'getstart', params: {} }">新手入门</router-link></li>
        <li><router-link :to="{ name: 'api', params: {} }">API</router-link></li>
        <li><router-link :to="{ name: 'about', params: {} }">关于</router-link></li>
        <li><router-link :to="{ name: 'setting', params: {} }">设置</router-link></li>
        <li><router-link :to="{ name: 'loginout', params: {} }">退出</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      loginname:'',
      isFocus:false
    }
  }
}
</script>

<style scoped lang="scss">
.header{
  margin:0;
  width:100%;
  height: 50px;
  border:1px solid #888;
  background: #444444;
  position: relative;
  float: left;
  overflow:hidden
}
.header-left{
  width:400px;
  height:100%;
  margin-left:5%;
  float:left
}
.header-left img{
  width:120px;
  height:28px;
  cursor:pointer;
  float:left;
  margin-top:5px
}
.header-left input{
  display: inline-block;
  border-radius:15px;
  background:#888888;
  border:none;
  font-size: 13px;
  width:50%;
  height:25px;
  color:white;
  text-decoration:none;
  margin-top:10px;
  outline:none;
  text-indent:10px

}
.header-left input:hover,.active{
  background:white;
  color:black
}
.header-right{
  float: right;
  width:600px;
  height:100%;
  margin-right: 10%;
}
.header-right ul{
  float:right;
  padding-top:15px
}
.header-right ul li{
  float:left;
  margin-right:40px;
  opacity:0.8;
  font-size:14px;
  list-style:none;
  cursor: pointer;
}
.header-right ul li a{
  color:white;
}
.header-right ul li:nth-child(5) a{
  text-decoration:none;
  color:white;
  opacity:1;
}
.header-right ul li:hover{
  opacity:1;
}
</style>
