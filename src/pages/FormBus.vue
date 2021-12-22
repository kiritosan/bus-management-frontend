<template>
  <el-card shadow="hover">
    <el-row>
      <div>公交信息录入</div>
    </el-row>
    <el-row>
      <el-form ref="formBus" :model="form" label-width="80px">
        <el-form-item label="座位数量">
          <el-input v-model="form.seats" placeholder="请输入公交车座位数量"></el-input>
        </el-form-item>
        <el-form-item label="品牌">
          <el-input v-model="form.brand" placeholder="请输入公交车品牌"></el-input>
        </el-form-item>
        <el-form-item label="车龄">
          <el-input v-model="form.age" placeholder="请输入公交车车龄"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </el-card>
</template>

<script>
import {insertDriverInfo, insertBusInfo, selectDriverInfoinsomeMotercade, insertBRInfo, selectBRinfoAtsometimebyDriver, selectBRInfoAtsometimebyMotercade} from '../api/request'

export default {
    name: 'FormBus',
    data() {
      return {
        form: {
          seats: '',
          brand: '',
          age: '',
        }
      }
    },
    methods: {
      onSubmit() {
        insertBusInfo(this.form)
      }
    }
  }
</script>

<style>

</style>