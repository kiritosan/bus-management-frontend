import axios from 'axios'
import { Notification, MessageBox } from 'element-ui';

const request = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
});

export function insertDriverInfo(form) {
  // 此處邏輯有問題 不應該在錯誤處理裏面寫 而應當在返回數據狀態不是200的時候寫,也就是説儅查詢失敗的時候也應該返回信息(錯誤的)
  request({
    method: 'post',
    url: '/insertdriverinfo',
    data: form
  })
  .then(res => {
    console.log(res);
    let options = null;
    if (res.data.code === 200) {
      options = {
        title: '成功',
        message: '上传司机数据成功',
        type: 'success'
      }
    } else {
      options = {
        title: '失败',
        message: '上传司机数据失败, 请检查数据源格式以及车队号是否存在',
        type: 'error'
      }
    }
    Notification(options);
    return res;
  })
  .catch(err => {
    console.log(err);
    Notification({
      title: '超时',
      message: '服务器未响应',
      type: 'error'
    });
  })
  return err;
}

export function insertBusInfo(form) {
  request({
    method: 'post',
    url: 'insertbusinfo',
    data: form
  })
  .then(res => {
    console.log(res);
    let options = null;
    if (res.data.code === 200) {
      options = {
        title: '成功',
        message: '上传公交车数据成功',
        type: 'success'
      }
    } else {
      options = {
        title: '失败',
        message: '上传公交车数据失败, 请检查数据源格式',
        type: 'error'
      }
    }
    Notification(options);
    return res;
  })
  .catch(err => {
    console.log(err);
    Notification({
      title: '超时',
      message: '服务器未响应',
      type: 'error'
    });
    return err;
  })
}

export function insertBRInfo(form) {
  request({
    method: 'post',
    url: '/insertbrinfo',
    data: form
  })
  .then(res => {
    console.log(res);
    let options = null;
    if (res.data.code === 200) {
      options = {
        title: '成功',
        message: '上传违章数据成功',
        type: 'success'
      }
    } else {
      options = {
        title: '失败',
        message: '上传违章数据失败, 请检查数据源格式以及司机号车辆ID是否存在',
        type: 'error'
      }
    }
    Notification(options);
    return res;
  })
  .catch(err => {
    console.log(err);
    Notification({
      title: '超时',
      message: '服务器未响应',
      type: 'error'
    });
    return err;
  })
}
// 给motorcadeID加一个默认值，防止没有传值的时候导致访问的错误的链接触发express自己的默认错误
// 值设为'error' 不传值则传一个错误格式的数据 引发接口的error从而返回错误的数据对象
export function selectDriverInfoinsomeMotercade(motorcadeID) {
  // 空值转换为格式错误的值 触发自定义的错误 防止访问到错误的接口
  if (motorcadeID === '') {
    motorcadeID = 'error'
  }
  request({
    method: 'get',
    url: `/selectdriverinfoinsomemotercade/${motorcadeID}`,
  })
  .then(res => {
    if (res.data.code === 200) {
      console.log(res);
      MessageBox.alert(res.data.data, '车队司机数据')
    } else {
      MessageBox.alert('请检查数据格式', '查询车队司机数据失败')
    }
    return res;
  })
  .catch(err => {
    console.log(err);
    Notification({
      title: '超时',
      message: '服务器未响应',
      type: 'error'
    });
    return err;
  })
}

export function selectBRinfoAtsometimebyDriver(form) {
  request({
    method: 'post',
    url: '/selectbrinfoatsometimebydriver',
    data: form
  })
  .then(res => {
    if (res.data.code === 200) {
      console.log(res);
      MessageBox.alert(res.data.data, '某时间段某司机违章数据')
    } else {
      MessageBox.alert('请检查数据格式', '查询某时间段某司机违章数据失败')
    }
    return res;
  })
  .catch(err => {
    console.log(err);
    Notification({
      title: '超时',
      message: '服务器未响应',
      type: 'error'
    });
    return err;
  })
}

export function selectBRInfoAtsometimebyMotercade(form) {
  request({
    method: 'post',
    url: '/selectbrinfoatsometimebymotercade',
    data: form
  })
  .then(res => {
    if (res.data.code === 200) {
      console.log(res);
      MessageBox.alert(res.data.data, '某时间段某车队违章情况统计')
    } else {
      MessageBox.alert('请检查数据格式', '查询某时间段某车队违章情况统计数据失败')
    }
    return res;
  })
  .catch(err => {
    console.log(err);
    Notification({
      title: '超时',
      message: '服务器未响应',
      // message: '查询某时间段违章数据失败',
      type: 'error'
    });
    return err;
  })
}