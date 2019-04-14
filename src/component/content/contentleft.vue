<template lang="html">
    <div class="contentleft">
      <div class="view" v-show='!isShow'>
          <router-view></router-view>
      </div>
      <div class="show" v-show='isShow'>
      <div class="headerleft">
        <ul>
            <li @click='backHome()'><router-link to="/">全部</router-link></li>
            <li @click='changeTab("good")'><router-link to="/">精华</router-link></li>
            <li @click='changeTab("share")'><router-link to="/">分享</router-link></li>
            <li @click='changeTab("job")'><router-link to="/">招聘</router-link></li>
            <li @click='changeTab("ask")'><router-link to="/">问答</router-link></li>
        </ul>
      </div>
      <div class="listitem">
        <ul>
          <li v-for='item in mydata'>
            <div class="msg">
              <img :src="item.author.avatar_url" alt="">
              <div class="count">
                {{item.reply_count}}/{{item.visit_count}}
              </div>
              <div class="type"  :class="{special:item.top||item.good}">
                {{item.top?'置顶':''||item.good?'精华':''||types[item.tab]}}
              </div>
              <router-link :to="{ name: 'article', params: {id:item.id} }">
                <div class="title" @click='isShow=false'>
                  {{item.title|titleFilter}}
                </div>
              </router-link>

            </div>
            <div class="time">
              {{changeTime(item.last_reply_at)}}
            </div>
          </li>
        </ul>
      </div>

      <div class="bottom" id="bottom">
        <ul>
          <li @click='back()'><<</li>
          <li @click='toPage(forTab,count+1)'><router-link to=''>{{count+1}}</router-link></li>
          <li @click='toPage(forTab,count+2)'>{{count+2}}</li>
          <li @click='toPage(forTab,count+3)'>{{count+3}}</li>
          <li @click='toPage(forTab,count+4)'>{{count+4}}</li>
          <li @click='toPage(forTab,count+5)'>{{count+5}}</li>
          <li><router-link :to="{ name: '', params: {} }"></router-link>...</li>
          <li @click='forward()'>>></li>
        </ul>
      </div>

    </div>
    </div>
</template>

<script>
export default {
  name:'cententleft',
  data(){
    return{
        isShow:true,
        count:0,
        forTab:'',
        types:{
          ask:'问答',
          job:'招聘',
          share:'分享',
          good:'精华'
        },
        mydata:[]
    }
  },
    methods:{
      toPage(Tab,page){
          this.axios.get('https://cnodejs.org/api/v1/topics?tab='+Tab+'&page='+page)
                    .then((result)=>this.mydata=result.data.data);

      },
      changeTab(aTab){
      this.axios.get('https://cnodejs.org/api/v1/topics?tab='+aTab)
                .then((result)=>this.mydata=result.data.data)
                .then(this.forTab=aTab)
    },
    backHome(){
      this.axios.get('https://cnodejs.org/api/v1/topics')
                .then((result)=>this.mydata=result.data.data)
    }
  },
    created(){
       this.backHome(),
       this.$router.push('/')

  }
}
</script>

<style lang="css">
.contentleft{
  width:875px;
  height:auto;
  float:left;
  position:relative;
  background:white;
  margin-top:10px;

}
.contentleft .headerleft{
  width:100%;
  height:40px;
  background:#f6f6f6;
  border-bottom:1px solid #f6f6f6;
}
.headerleft ul{
  float:left;
  margin-left:10px;
}
.headerleft ul li{
  list-style:none;
  float:left;
  height:100%;
  text-align:center;
  line-height:40px;
  width:60px;
  font-size:15px
}
.headerleft ul li:last-child{
  width:80px
}
.headerleft ul li a{
  color:#80bd01;
}
.headerleft ul li:hover{
  color:blue;
  cursor:pointer
}
.listitem{
  float:left;
  width:100%;
  height:100%;
  background:white;
}
.listitem ul{
  float:left;
  overflow:hidden;
}
.listitem ul li{
  float:left;
  height:50px;
  width:100%;
  list-style: none;
  background:white;
  line-height:45px;
  border-bottom:1px solid #f0f0f0;
}
.listitem ul li:hover{
  background:#f6f6f6
}
.listitem ul li img{
  width:30px;
  height:30px;
  margin:8px 0 0 10px;
  float:left
}
.listitem ul li .count,.type,.title{
  float:left;
  width:30px;
  height:16px;
  font-size:15px;
  /* margin:15px 0 0 10px */
}
.listitem ul li .count{
  font-size:13px;
  opacity:0.6;
  margin-left:10px
}
.special {
  background:#80bd01 !important;
  color:white!important;
}
.listitem ul li .type{
  background:#e5e5e5;
  text-align:center;
  border-radius:4px;
  margin:15px 10px 0 25px;
  line-height:16px;
  color:#999999;
  font-size:10px
}

.listitem ul li .title{
  width:auto
}
.listitem ul li .title:hover{
  text-decoration:underline;
  cursor:pointer
}
.listitem ul li .time{
  width:100px;
  font-size:13px;
  height:100%;
  float:right;
  margin-right:10px
}

.bottom{
  width:auto;
  position:absolute;
  left:35%;
  height:30px;
  bottom:-30px;
  border:1px solid #dddddd;
  float:left;
  border-radius:3px;
}
.bottom ul{
  float:left;
}
a{
  text-decoration:none;
  color:black;
}
.bottom ul li{
  list-style:none;
  text-align:center;
  float:left;
  line-height:30px;


  width:32px;
  height:30px;
  border-right:1px solid #dddddd;
  cursor:pointer
}
.bottom ul li router-link-active{
  color:green;
}
.bottom ul li:last-child{
  border:none
}
.bottom ul li:hover{
  background:#e5e5e5
}
</style>
