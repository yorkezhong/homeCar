import ajax from "../utils/ajax.js"
//查找所有的门店
export function storeList(data, token) {
  return new Promise((resolve, reject) => {
    ajax.request("storeList", "POST", data, token, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//当前门店
export function storeInfo(data) {
  let token = wx.getStorageSync("userAuth").token;
  return new Promise((resolve, reject) => {
    ajax.request("storeInfo", "POST", data, token, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//轮播图
export function banner(data) {
  data = data || {}
  let token = wx.getStorageSync("userAuth").token;

  return new Promise((resolve, reject) => {
    ajax.request("banner", "POST", data, "", function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//排队人数
export function lineNum(data, token) {
  data = data || {}
  return new Promise((resolve, reject) => {
    ajax.request("order/findNormarQueue", "GET", data, token, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//线上下单
export function saveOrder(data) {
  data = data || {}
  let token = wx.getStorageSync("userAuth").token;
  return new Promise((resolve, reject) => {
    ajax.request("order/saveOrder", "POST", data, token, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}
//查询订单信息
export function orderList(data) {
  data = data || {}
  let token = wx.getStorageSync("userAuth").token;
  return new Promise((resolve, reject) => {
    ajax.request("order/list", "GET", data, token, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}
//取消订单
export function cancelOrder(data) {
  data = data || {}
  let token = wx.getStorageSync("userAuth").token;
  return new Promise((resolve, reject) => {
    ajax.request("order/cancelOrder", "POST", data, token, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}
//订单评论
export function commentOrder(data) {
  data = data || {}
  let token = wx.getStorageSync("userAuth").token;

  return new Promise((resolve, reject) => {
    ajax.request("order/commentOrder", "POST", data, token, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//查询门店服务列表
export function serviceList(data) {
  data = data || {}
  let token = wx.getStorageSync("userAuth").token;

  return new Promise((resolve, reject) => {
    ajax.request("store/service/list", "GET", data, token, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//获取门店技师列表
export function staffList(data) {
  data = data || {}
  let token = wx.getStorageSync("userAuth").token;

  return new Promise((resolve, reject) => {
    ajax.request("staff/list", "GET", data, token, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//获取门店技师详情
export function staffDetail(data) {
  data = data || {}
  let token = wx.getStorageSync("userAuth").token;

  return new Promise((resolve, reject) => {
    ajax.request("staff/detail", "GET", data, token, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//汽车品牌
export function getCarBands(data) {
  data = data || {}
  let token = wx.getStorageSync("userAuth").token;

  return new Promise((resolve, reject) => {
    ajax.request("car/brand/list", "GET", data, token, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//增加我的车辆
export function addCars(data) {
  data = data || {}
  let token = wx.getStorageSync("userAuth").token;

  return new Promise((resolve, reject) => {
    ajax.request("car/save", "POST", data, token, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//我的车辆
export function myCars(data) {
  data = data || {}
  let token = wx.getStorageSync("userAuth").token;

  return new Promise((resolve, reject) => {
    ajax.request("car/userCarList", "GET", data, token, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}
//  根据车辆品牌id查询车辆列表
export function getCarById(data) {
  data = data || {}
  let token = wx.getStorageSync("userAuth").token;

  return new Promise((resolve, reject) => {
    ajax.request("car/brand/findListByBrandId", "GET", data, token, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}


//获取车辆所有规格
export function getDisplacement(data) {
  data = data || {}
  let token = wx.getStorageSync("userAuth").token;

  return new Promise((resolve, reject) => {
    ajax.request("getDisplacement", "POST", data, token, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//删除我的车辆
export function deleteCar(data) {
  data = data || {}
  let token = wx.getStorageSync("userAuth").token;
  return new Promise((resolve, reject) => {
    ajax.request("car/deleteUserCar", "POST", data, token, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}



//查询钥匙柜位置
export function findKeyList(data) {
  data = data || {}
  let token = wx.getStorageSync("userAuth").token;
  return new Promise((resolve, reject) => {
    ajax.request("store/key/list", "GET", data, token, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}


//查询用户套餐卡列表
export function userCardList(data) {
  data = data || {}
  let token = wx.getStorageSync("userAuth").token;
  return new Promise((resolve, reject) => {
    ajax.request("card/userCardList", "GET", data, token, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}


//查询用户优惠券信息
export function userCouponList(data) {
  data = data || {}
  let token = wx.getStorageSync("userAuth").token;
  return new Promise((resolve, reject) => {
    ajax.request("coupon/userCouponList", "POST", data, token, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}
