<template>
  <el-card shadow="hover">
    <el-row type="flex" justify="center">
      <el-image
      :src="url"
      :fit="contain"></el-image>
    </el-row>
  </el-card>
</template>

<script>

export default {
    name: 'FormBR',
    data() {
      return {
        url: require('@/assets/RelationalModel.jpg')
      }
    }
  }
</script>

<style>

</style>