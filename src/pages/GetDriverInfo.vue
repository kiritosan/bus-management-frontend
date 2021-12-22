<template>
  <el-card shadow="hover">
    <el-row>
      <div>查询某个车队下的司机信息</div>
    </el-row>
    <el-form ref="formDriver" :model="form" label-width="80px">
      <el-form-item label = "车队编号">
        <el-input v-model="motorcadeID" placeholder="请输入车队编号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import {insertDriverInfo, insertBusInfo, insertBRInfo, selectDriverInfoinsomeMotercade, selectBRinfoAtsometimebyDriver, selectBRInfoAtsometimebyMotercade} from '../api/request'

export default {
    name: 'GetDriverInfo',
    data() {
      return {
        motorcadeID: ''
      }
    },
    methods: {
      onSubmit() {
        selectDriverInfoinsomeMotercade(this.motorcadeID)
      }
    }
  }
</script>

<style>

</style>