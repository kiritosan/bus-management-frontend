<template>
  <el-card shadow="hover">
    <el-row>
      <div>查询某名司机在某个时间段内的违章详细信息</div>
    </el-row>
    
    <el-form ref="formDriver" :model="form" label-width="80px">
      <el-form-item  label="身份证号">
        <el-input v-model="form.idCard" placeholder="请输入司机身份证号"></el-input>
      </el-form-item>
      <!-- <el-form-item>
        <el-input v-model="form.begin" placeholder="请输入开始时间"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.end" placeholder="请输入结束时间"></el-input>
      </el-form-item> -->
      <el-form-item label="检索范围">
        <!-- value-format="yyyyMMdd"以保证可以正常查询时间段内数据 -->
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
    name: 'GetDriverBR',
    data() {
      return {
        form: {
          idCard: '',
          range: '',
          begin: '',
          end: ''
        }
      }
    },
    watch: {
      // 字符串形式监听对象内部数据
      'form.range': {
        handler(newVal, oldVal) {
          this.form.begin = this.form.range[0]
          this.form.end = this.form.range[1]
        },
        // range是一个数组，所以如果数组内部改变需要开启深度监听
        // 但是这里每次选择新的时间范围都会返回一个新的数组 所以不需要开启深度监听
        // deep: true
      } 
    },
    methods: {
      onSubmit() {
        selectBRinfoAtsometimebyDriver(this.form)
      }
    }
  }
</script>

<style>

</style>