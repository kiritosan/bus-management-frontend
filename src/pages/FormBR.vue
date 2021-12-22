<template>
  <el-card shadow="hover">
    <el-row>
      <el-col>
        <div>违章信息录入</div>
      </el-col>
    </el-row>
    
    <el-row>
      <el-form ref="formBr" :model="form" label-width="80px">
        <el-form-item label="司机号">
          <el-input v-model="form.dID" placeholder="请输入违章司机号"></el-input>
        </el-form-item>
        <el-form-item label="违章名">
          <el-input v-model="form.brName" placeholder="请输入违章名"></el-input>
        </el-form-item>
        <!-- <el-form-item label="违章时间">
          <el-input v-model="form.brTime"></el-input>
        </el-form-item> -->
        <el-form-item label="违章时间">
          <el-date-picker
            v-model="form.brTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="违章地点">
          <el-input v-model="form.brLocation" placeholder="请输入违章地点"></el-input>
        </el-form-item>
        <el-form-item label="车辆ID">
          <el-input v-model="form.carID" placeholder="请输入车辆ID"></el-input>
        </el-form-item>
        <el-form-item label="记录人">
          <el-input v-model="form.recorder" placeholder="请输入记录人"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </el-card>
</template>

<script>
import {insertDriverInfo, insertBusInfo, insertBRInfo, selectDriverInfoinsomeMotercade, selectBRinfoAtsometimebyDriver, selectBRInfoAtsometimebyMotercade} from '../api/request'

export default {
    name: 'FormBR',
    data() {
      return {
        form: {
          dID: '',
          brName: '',
          brTime: '',
          brLocation: '',
          carID: '',
          recorder: ''
        }
      }
    },
    methods: {
      onSubmit() {
        insertBRInfo(this.form)
      }
    }
  }
</script>

<style>

</style>