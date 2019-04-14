<template lang="html">
  <div class="article">
      <div class="header">
        <h3><span class="top" v-show='authorActicle.top||authorActicle.good'>
          {{authorActicle.good?"精华":''||authorActicle.top?"置顶":''}}</span>{{authorActicle.title}}</h3>
          <div class="articleInfo">
            <span class="info">发布于&nbsp{{changeTime(authorActicle.create_at)}}&nbsp|作者
              &nbsp<router-link :to="{ name: '', params: {} }">{{authorActicle.author&&authorActicle.author.loginname}}</router-link>
              |{{authorActicle.visit_count}}&nbsp次浏览|来自&nbsp{{type[authorActicle.tab]}}</span>
          </div>
          <button type="button" class="collect" name="button" @click="collect()" :style={} :class="{showCollect:isCollect}">{{isCollect?"取消收藏":"收藏"}}</button>
      </div>
      <div class="articleContent" v-html='authorActicle.content'>
      </div>
      <div class="allReply">
        <div class="replyCount">
          {{authorActicle.reply_count}}&nbsp回复
        </div>
        <div class="replyInfo" v-for="(item,index) in authorActicle.replies" @mouseenter="isShowUp=index" @mouseleave="isShowUp!=index" :class="indexId">
          <img :src="item.author.avatar_url" alt="">
          <div class="infoBlock">
            <span class="authorName">{{item.author&&item.author.loginname}}</span>
            <router-link :to="{ name: '', params: {} }">
              <span class="floor">{{index+1}}楼|{{changeTime(item.create_at)}}</span>
            </router-link>
              <span class="isAuthor" v-show="item.author.loginname==authorActicle.author.loginname">作者</span>
              <div class="upCount">
                <span v-show='isShowUp===index' @click='item.ups.length++' class="up">点赞&nbsp{{item.ups.length}}&nbsp</span>
                <span class="myReply" @click='currentIndex=index'>回复</span>
              </div>
          </div>
            <div class="replyContent" v-html="item.content"></div>
            <div class="slot" v-show='currentIndex===index'>
              <editorReply></editorReply>
            </div>
        </div>
        <div class="replyFoot">
          <div class="addReply">
            添加回复
          </div>
          <editorReply></editorReply>
        </div>
      </div>
  </div>
</template>

<script>
import editorReply from "../common/editorReply.vue"
export default {
  name:'contentArticle',
  data(){
    return{
      authorActicle:[],
      id:this.$route.params.id,
      isShowUp:false,
      isShowReply:false,
      indexId:false,
      type:{
        good:"精华",
        share:"分享",
        top:"置顶",
        ask:"问答"
      },
      isCollect:false,
      currentIndex:null
    }
  },
  components:{
    editorReply
  },
  methods:{
    collect(){
      if(!this.ak){
        alert("请登录账号！");
        return 
      }
      this.axios.post('https://cnodejs.org/api/v1/topic_collect/collect',{
        accesstoken:this.ak,
        topic_id:this.id
      }).then((result)=>{})

    },
    articleInfo(id){
      this.axios.get(' https://cnodejs.org/api/v1/topic/'+id)
                .then((result)=>this.authorActicle=result.data.data)
    }
  },
  computed:{
    lgindex(){
      if(index<=3)
      return this.indexId=true;
    }
  },
  created(){
  this.articleInfo(this.id)
  console.log(this.id)
  }
}
</script>

<style lang="scss">
  .article{
    width:100%;
    overflow:hidden;
    height:100%;
    border:1px solid #e5e5e5;
    padding: 10px 0px 20px 0px;
    text-indent:10px

  }
  .header{
    border-bottom:1px solid #e5e5e5;
    height:80px;
    position: relative;
        .collect{
            width:50px;
            height:30px;
            font-size:14px;
            background:#80bd01;
            position: absolute;
            border-radius:3px;
            border:none;
            color:white;
            text-align:center;
            line-height: 30px;
            right:10px;
            bottom:10px
  }
}
  .showCollect{
    background:#e5e5e5 !important;
    width:100px!important;
    color:black!important;
  }
  h3{
    font-size:22px;
    font-weight: 770px;
    margin:10px 0 15px 0px;
  }
  .header h3 .top{
    font-size:10px;
    background:#80bd01;
    color:white;
    border-radius:3px;
    display: inline-block;
    text-align:center
  }
  .articleInfo .info{
    font-size:13px;
    opacity: .8

  }
  .articleContent{
    padding-left:10px;
    img{
        max-width:100%;
        height:auto;
        vertical-align: middle;
        display:block
      }
    }
  .articleContent p,img,h2{
    line-height:30px;
    margin-top:10px;
      a{
         color:blue
      }
  }
  
  .articleContent  strong{
    word-wrap:break-word;
    word-break: break-word
  }
  .allReply{
    width:100%;
    height:auto;
    padding:5px 0px 5px 0px;
    margin-top:40px;
    text-indent:10px;
    border:1px solid #ccc;
  }
  .replyCount{
    height:40px;
    border-bottom:1px solid #f0f0f0;
    line-height:40px
  }
  .replyInfo{
    border-bottom:1px solid #f0f0f0;
    height:auto;
    /* padding:0 10px; */
    font-size:14px;
    position: relative;
      img{
        width:30px;
        height:30px;
      }
  }
  .lgindex{
    background:#f4fcf0
  }
  .infoBlock{
    font-size:10px;
    position: absolute;
    top:15px;
    left:50px;
    width:100%;
  }
  .authorName{
  font-weight:700;
  font-size:14px;
}
  .floor{
  color:blue;
  cursor:pointer
}
  .replyContent{
    margin:5px 0 10px 35px;
    line-height:20px;
      a{
        color:blue
      }
      img{
        max-width:100%!important;
        width:auto;
        height:auto!important;
        vertical-align:middle;
        line-height:1.7em
      }
  }

  .isAuthor,.myReply{
    background:#6ba44e;
    color:#fff;
    font-size:12px;
    padding:2px;
    cursor:pointer
  }
  .upCount{
    position:absolute;
    top:0px;
    right:70px
  }
  .replyFoot{
    margin-top:40px
  }
  .addReply{
    height: 40px;
    width:100%;
    line-height:40px;
    border-top:1px solid #d9dcdf;
    padding-left:20px;
    background:#f6f6f6;
  }
</style>
