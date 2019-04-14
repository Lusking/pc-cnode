<template lang="html">
    <div class="getAPI">
      <div class="APIhome">
        <div class="home">
          <router-link to="/">主页</router-link>/API
        </div>

      </div>
      <div class="APIcontent">
          <span>以下 api 路径均以<a href='https://cnodejs.org/api/v1 '>https://cnodejs.org/api/v1 </a>为前缀</span>
        <div class="contentBlock">
            <h1>主题</h1>
            <div class="contentInfo">
              <h4>get /topics 主题首页</h4>
              <span>接收 get 参数</span>
              <ul>
                <li>page Number 页数</li>
                <li>tab String 主题分类。目前有 ask share job good</li>
                <li>limit Number 每一页的主题数量</li>
                <li>mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
              </ul>
              <span>示例:<a href='https://cnodejs.org/api/v1/topics'>/api/v1/topics</a></span>
            </div>
        </div>
        <div class="contentInfo">
          <h4>get /topic/:id 主题详情</h4>
          <span>接收 get 参数</span>
          <ul>
            <li>mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
            <li>accesstoken String 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 is_collect 以及 replies 列表中的 is_uped 值。</li>
          </ul>
          <span>示例:<a href='https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312'>/api/v1/topic/5433d5e4e737cbe96dcef312</a></span>
        </div>
        <div class="contentInfo">
          <h4>post /topics 新建主题</h4>
          <span>接收 post 参数</span>
          <ul>
            <li>accesstoken String 用户的 accessToken</li>
            <li>title String 标题</li>
            <li>tab String 目前有 ask share job dev。开发新客户端的同学，请务必将你们的测试帖发在 dev 专区，以免污染日常的版面，否则会进行封号一周处理</li>
            <li>content String 主体内容</li>
          </ul>
          <span>返回值示例:</br>

              {success: <span class="blueColor">true</span>, topic_id: <span class="greenColor">'5433d5e4e737cbe96dcef312'</span>}</span>
        </div>
        <div class="contentInfo">
          <h4>post /topics/update 编辑主题</h4>
          <span>接收 post 参数</span>
          <ul>
            <li>accesstoken String 用户的 accessToken</li>
            <li>topic_id String 主题id </li>
            <li>title String 标题</li>
            <li>tab String 目前有 ask share job</li>
            <li>content String 主体内容</li>
          </ul>
          <span>返回值示例:</br>
              {success: <span class="blueColor">true</span>, topic_id: '<span class="greenColor">'5433d5e4e737cbe96dcef312'</span>'}</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
    .getAPI{
      line-height:45px;
      width:100%;
      border:1px solid #f6f6f6;

    }
    .getAPI a{
      color:#08c;
    }
    .getAPI h4{
      font-size:20px;
      font-weight:700
    }
    .APIhome .home a{
      color:green
    }
    .APIcontent{
      padding-left: 40px
    }
    .blueColor{
      color:#000088;
      font-size:14px
    }
    .greenColor{
      color:#008800;
      font-size:14px
    }
    .APIhome .home{
      height:40px;
      width:100%;
      line-height:40px;
      border-bottom:1px solid #f6f6f6;
      background:#f6f6f6;
      font-size:16px;
      opacity: .7;
      text-indent:10px
    }
</style>
