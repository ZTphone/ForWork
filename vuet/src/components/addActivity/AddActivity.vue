<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="活动名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="活动地点">
      <el-input v-model="form.address"></el-input>
    </el-form-item>
    <el-form-item label="开始时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.startTimePre" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker placeholder="选择时间" v-model="form.startTimeSuf" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>

    <el-form-item label="结束时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.endTimePre" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker placeholder="选择时间" v-model="form.endTimeSuf" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>

    <el-form-item label="活动内容">
      <el-input type="textarea" v-model="form.content"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "AddActivity",
data() {
  return {
    form: {
      name: '',
      address: '',
      startTimePre: '',
      startTimeSuf: '',
      endTimePre: '',
      endTimeSuf: '',
      content: ''
    }
  }
},
methods: {
  onSubmit() {
    console.log('submit!');
  }
}
}
</script>

<style scoped>

</style>
