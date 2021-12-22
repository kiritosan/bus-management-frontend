<template>
  <el-card shadow="hover">
    <el-row>
      <div>司机信息录入</div>
    </el-row>
    <el-form ref="formDriver" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.sex" placeholder="请选择性别">
          <el-option label="男" value="male"></el-option>
          <el-option label="女" value="female"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
      </el-form-item>
      <el-form-item label="户籍地">
        <el-input v-model="form.native_place" placeholder="请输入户籍地"></el-input>
      </el-form-item>
      <!-- <el-form-item label="入队时间">
        <el-input v-model="form.enqueue_time"></el-input>
      </el-form-item> -->
      <el-form-item label="入队时间">
        <el-date-picker
          v-model="form.enqueue_time"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.tel" placeholder="请输入电话"></el-input>
      </el-form-item>
      <el-form-item label="身份证号">
        <el-input v-model="form.idCard" placeholder="请输入身份证号"></el-input>
      </el-form-item>
      <el-form-item label="职位">
        <el-input v-model="form.position" placeholder="请输入职位"></el-input>
      </el-form-item>
      <el-form-item label="车队编号">
        <el-input v-model="form.motorcadeID" placeholder="请输入车队编号"></el-input>
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
    name: 'FormDriver',
    data() {
      return {
        form: {
          name: '',
          sex: '',
          age: '',
          native_place: '',
          enqueue_time: '',
          tel: '',
          idCard: '',
          position: '',
          motorcadeID: ''
        }
      }
    },
    methods: {
      onSubmit() {
        insertDriverInfo(this.form)
      }
    }
  }
</script>

<style>

</style>