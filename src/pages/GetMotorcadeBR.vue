<template>
  <el-card shadow="hover">
    <el-row>
      <div>查询某个车队在某个时间段内的违章详细信息</div>
    </el-row>
    <el-form ref="formDriver" :model="form" label-width="80px">
      <el-form-item label="车队编号">
        <el-input v-model="form.motorcadeID" placeholder="请输入车队编号"></el-input>
      </el-form-item>
      <!-- <el-form-item>
        <el-input v-model="form.begin" placeholder="请输入开始时间"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.end" placeholder="请输入结束时间"></el-input>
      </el-form-item> -->
      <el-form-item label="检索范围">
        <el-date-picker
          v-model="form.range"
          type="daterange"
          value-format="yyyyMMdd"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import {insertDriverInfo, insertBusInfo, selectDriverInfoinsomeMotercade, insertBRInfo, selectBRinfoAtsometimebyDriver, selectBRInfoAtsometimebyMotercade} from '../api/request'

export default {
    name: 'GetDriverMotorcadeBr',
    data() {
      return {
        form: {
          motorcadeID: '',
          range: '',
          begin: '',
          end: ''
        }
      }
    },
    watch: {
      'form.range': {
        handler(newVal, oldVal) {
          this.form.begin = this.form.range[0]
          this.form.end = this.form.range[1]
        }
      }
    },
    methods: {
      onSubmit() {
        selectBRInfoAtsometimebyMotercade(this.form)
      }
    }
  }
</script>

<style>

</style>