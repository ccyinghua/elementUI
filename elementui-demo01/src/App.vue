<template>
  <div id="app">
    <el-button type="primary">主要按钮</el-button>
    <el-button type="danger">主要按钮</el-button>
    <el-button type="info" icon="edit">主要按钮</el-button>
    <el-button type="success" icon="search">主要按钮</el-button>
    <hr>
    <span class="el-icon-delete"></span>
    <span class="el-icon-loading"></span>

    <el-row>
      <el-col :span="12">
        <div class="my-gird">
          <Date></Date>     <!-- 组件的位置 -->
        </div>
      </el-col>
      <el-col :span="12">
        <div class="my-gird"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="my-gird"></div>
      </el-col>
      <el-col :span="8">
        <div class="my-gird"></div>
      </el-col>
      <el-col :span="8">
        <div class="my-gird"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Date from './components/Date.vue'
export default {
  name:'app',
  data(){
    return {
      msg:'Welcome to Your Vue.js App'
    }
  },
  components:{
    Date
  }
}
</script>
<style scoped lang="less">
  @import './assets/style/index.less';
  /* @color:blue;

  .height(@h){
      height:@h;
  } */

  .my-gird{
    .height(40px);
    border:1px solid @color;
  }
</style>

