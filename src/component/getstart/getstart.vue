<template lang="html">
  <div class="getstart"  >
      <div class="goback">
        <span class="home"><router-link to="/">主页</router-link></span>/Node.js 新手入门
      </div>
      <div class="content">
        <h1>Node.js 入门</h1>
        <p>
          <h4>《快速搭建 Node.js 开发环境以及加速 npm》</h4>
          <a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a>


          <h4>《Node.js 包教不包会》</h4>
          <a href="https://github.com/alsotang/node-lessons">https://github.com/alsotang/node-lessons</a>


         <h4>《ECMAScript 6入门》dadasd</h4>
        <a href="http://es6.ruanyifeng.com/">http://es6.ruanyifeng.com/</a>


          <h4>《七天学会NodeJS》</h4>
          <a href="https://github.com/nqdeng/7-days-nodejs">https://github.com/nqdeng/7-days-nodejs</a>

        </p>
        <h1>Node.js 资源</h1>
        <p>
          <h4>《前端资源教程》</h4>
          <a href="https://cnodejs.org/topic/56ef3edd532839c33a99d00e">https://cnodejs.org/topic/56ef3edd532839c33a99d00e</a>


            <h4>《国内的 npm 镜像源》</h4>
            <a href="http://cnpmjs.org/">http://cnpmjs.org/</a>


            <h4>《node weekly》</h4>
            <a href="http://nodeweekly.com/issues">http://nodeweekly.com/issues</a>


            <h4>《node123-node.js中文资料导航》</h4>
            <a href="https://github.com/youyudehexie/node123">https://github.com/youyudehexie/node123</a>


            <h4>《A curated list of delightful Node.js packages and resources》</h4>
            <a href="https://github.com/sindresorhus/awesome-nodejs">https://github.com/sindresorhus/awesome-nodejs</a>


            <h4>《Node.js Books》</h4>
            <a href="https://github.com/pana/node-books">https://github.com/pana/node-books</a>

        </p>
        <h1>Node.js 名人</h1>
        <p>
          <h4>《名人堂》</h4>
          <a href="https://github.com/cnodejs/nodeclub/wiki/名人堂">https://github.com/cnodejs/nodeclub/wiki/名人堂</a>

        </p>
        <h1>Node.js 服务器</h1>
        新手搭建 Node.js 服务器，推荐使用无需备案的 DigitalOcean(<a href="https://www.digitalocean.com/">https://www.digitalocean.com/</a>)

      </div>
  </div>
</template>

<script>
export default {
  name:"getstart",
  data(){
    return{

    }
  },
  methods:{

  }
}

</script>

<style lang="css">
.getstart{
  margin-left:10px;
  line-height:45px;
  width:100%;
  border:1px solid #f6f6f6
}
.getstart .goback{
  height:40px;
  width:100%;
  line-height:40px;
  border-bottom:1px solid #f6f6f6;
  background:#f6f6f6;
  font-size:16px;
  opacity: .7;
  text-indent:10px
}
.goback span a{
  color:green
}
.content{
  padding:20px
}
.getstart .content a{
  color:#08c;
}
h1{
  width:70%;
  border-bottom:1px solid #f6f6f6;
}
h4{
  font-weight:700;
  font-size:16px
}
</style>
