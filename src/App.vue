<template lang="html">
<div class="app">
<vheader></vheader>
    <div class="appcontent">
      <vcontentLeft></vcontentLeft>
      <vcontentRight></vcontentRight>
    </div>

</div>
</template>

<script>
import vheader from './component/header/header.vue';
import vcontentLeft from './component/content/contentleft.vue';
import vcontentRight from './component/content/contentright.vue';
export default {
  components:{
    vheader,
     vcontentLeft,
     vcontentRight
  }
}
</script>

<style>

.app{
  background:#e1e1e1;
  width:100%;
}
*{
  margin:0;
  padding:0
}
 .appcontent{
  width:80%;
  height:100%;
  margin:0px auto;
  background:#e1e1e1;

}
</style>
