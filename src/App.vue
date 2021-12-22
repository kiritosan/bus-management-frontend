<template>
  <div id="app">
    <!-- 功能区一 -->
    <el-card  class="el-row">
      <el-row>
        展示区
      </el-row>
      <el-row :gutter="5" type="flex">
        <el-col>
          <router-link to="/er">
            <el-button type="primary">展示E-R图</el-button>
          </router-link>
        </el-col>
        <el-col :pull="9">
          <router-link to="/relational-model">
            <el-button type="primary">展示关系模型图</el-button>
          </router-link>
        </el-col>
      </el-row>
    </el-card>
    <!-- 功能区二 -->
    <!-- todo 按钮大小不一致怎么用flex按钮间间距相同的问题 -->
    <el-card class="el-row">
      <el-row>
        功能区
      </el-row>
      <el-row :gutter="5" type="flex">
        <el-col >
          <router-link to="/formdriver">
            <el-button type="primary">司机信息录入</el-button>
          </router-link>
        </el-col>
        <el-col >
          <router-link to="/formbus">
            <el-button type="primary">公交信息录入</el-button>
          </router-link>
        </el-col>
        <el-col >
          <router-link to="/formbr">
            <el-button type="primary">违章信息录入</el-button>
          </router-link>
        </el-col>
        <el-col >
          <router-link to="/getdriverinfo">
            <el-button type="primary">查询某车队司机信息</el-button>
          </router-link>
        </el-col>
        <el-col >
          <router-link to="/getdriverbr">
            <el-button type="primary">查询某司机某时间段违章信息</el-button>
          </router-link>
        </el-col>
        <el-col >
          <router-link to="/getmotorcadebr">
            <el-button type="primary">查询某车队某时间段违章统计信息</el-button>
          </router-link>
        </el-col>
      </el-row>
    </el-card>
    <!-- 路由组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
import {insertDriverInfo, insertBusInfo, selectDriverInfoinsomeMotercade, insertBRInfo, selectBRinfoAtsometimebyDriver, selectBRInfoAtsometimebyMotercade} from './api/request'

export default {
  name: 'App',
  components: {}
}
</script>

<style lang='less'>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
