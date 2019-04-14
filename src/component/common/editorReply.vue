<template lang="html">
  <div class="editorReply">
    <div class="toolBar">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
      </ul>
      <span class="fullScreen">10</span>
    </div>
    <div class="replyArea">
      <textarea name="name" rows="13" cols="120"></textarea>
    </div>
    <div class="replySubmit">
      回复
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" >
.editorReply{
  width:884px;
  height:254px;
}
.toolBar{
  height:48px;
  width:100%;
  border:1px solid #d9dcdf;
  float:left;
  position: relative;
  
}
.toolBar ul{
  float:left;
}
.toolBar .fullScreen,.toolBar ul li{
  float:left;
  width:26px;
  height:26px;
  text-align:center;
  list-style:none;
  padding:3px;
  margin-left:5px;
  line-height:38px;
  cursor:pointer;
}
.toolBar .fullScreen{
  float:right;
  margin-right:40px
}
.toolBar::after{
  content:'';
  height:0px;
  clear:both;
  overflow: hidden;

}
.editorReply .replyArea{
  width:100%;
  height:190px;
  overflow:auto;
}
.replyArea textarea{
  width:98%;
  height:97%;
  border:none;
  font-size:20px;
  resize:none;
  outline:none;
  text-indent:14px
}
.editorReply .replySubmit{
    width:52px;
    height:34px;
    line-height:34px;
    border-radius:5px;
    background:#0088cc;
    color:white;
    position: absolute;
    left:20px;
    cursor:pointer;
    bottom:34px

}
</style>
