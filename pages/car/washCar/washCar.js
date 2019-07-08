import {
  serviceList,
  staffList,
  myCars,
  saveOrder,
  deleteCar,
  userCardList,
  userCouponList
} from "../../../pages/request.js"
Page({
  data: {
    carIndex: null,
    userCarList: [],
    serverIndex: 0,
    detailItem: 0,
    timeIndex: 0,
    detailid: 0,
    mask: false,
    shopServerList: [],
    detailServerList: [],
    currStaff: [],
    currtshop: {},
    selectCarInfo: {},
    userName: "",
    mobile: "",
    remark: "",
    cuurtDetail: {},
    sumMoreny: 0,
    userCardList: [],
    userCouponList: [],
    rechargeCarList: [],
    userId:""
  },

  onLoad() {
    let currtshop = wx.getStorageSync("currtshop");
    this.findAllCar();
    this.setData({
      currtshop: currtshop
    })
    let storeId = currtshop.id;
    let detailServerList = [];
    serviceList({
      storeId
    }).then((res) => {
      if (JSON.stringify(res.data) == "{}") {
        console.log("没有服务数据")
      } else {
        this.setData({
          shopServerList: Object.keys(res.data)
        })
        let keyArry = Object.keys(res.data);
        for (var i = 0; i < keyArry.length; i++) {
          detailServerList.push(res.data[keyArry[i]])
        }
        this.setData({
          detailServerList: detailServerList,
          detailItem: res.data[keyArry[0]][0].id,
          cuurtDetail: res.data[keyArry[0]][0],
          sumMoreny: res.data[keyArry[0]][0].price

        })
      }

    });
    staffList({
      storeId
    }).then((res) => {
      if (Boolean(wx.getStorageSync("currtindex")) == true) {
        this.setData({
          currStaff: res.data[wx.getStorageSync("currtindex")]
        })
        console.log(wx.getStorageSync("currtindex"))
      } else if (res.data.length == 0) {
        console.log("没有员工数据")
      } else {
        this.setData({
          currStaff: res.data[0]
        })
      }
    })
  },
  deleteCar(carIds) {
    console.log(carIds)
    deleteCar({
      carIds
    }).then((res) => {
      if (res.code == 200) {
        wx.showToast({
          title: '移除成功',
        })
        this.findAllCar();
      } else {
        wx.showToast({
          title: '移除失败',
          icon: "none"
        })
      }
    })
  },
  saveOrder(orderSource, carBrandName, conStaffId, orderType, storeId, userId,userName, mobile, remark, carBrandId, carModel, carNumber, detail, hasCard) {
    saveOrder({
      orderSource,
      carBrandName,
      conStaffId,
      orderType,
      storeId,
      userId,
      userName,
      mobile,
      remark,
      carBrandId,
      carModel,
      carNumber,
      detail,
      hasCard,
      detail
    }).then((res) => {
      if (res.code == 200) {
        wx.showToast({
          title: '保存订单成功',
        })
      } else if(res.code==500){
        wx.showToast({
          title: res.msg,
          icon:"none"
        })
      }else{
        wx.showToast({
          title: '保存订单失败',
          icon: 'none'
        })
      }
    })
  },
  findAllCar() {
    myCars().then((res) => {
      this.setData({
        userCarList: res.data,
        carIndex: res.data[0].id,
        selectCarInfo:res.data[0],
        userId: res.data[0].userId
      })
    })
  },
  userCardList(type, storeId, carNumber, serviceId) {
    userCardList({
      type,
      storeId,
      carNumber,
      serviceId
    }).then((res) => {
      if (type == 0) {
        this.setData({
          rechargeCarList: res.data
        })
      } else {
        this.setData({
          userCardList: res.data
        })
      }
    })
  },
  userCouponList(carNumber, storeId) {
    userCouponList({
      carNumber,
      storeId
    }).then((res) => {
      this.setData({
        userCouponList: res.data
      })
    })
  },
  //保存订单
  submitApply() {
    let {
      shopServerList,
      detailServerList,
      currStaff,
      currtshop,
      selectCarInfo,
      userName,
      mobile,
      remark,
      timeIndex,
      cuurtDetail,
      userId
    } = this.data;
    let that = this;
    if (userName == "" || mobile == "") {
      wx.showModal({
        title: '提示',
        content: '请填写姓名或手机号',
      })
    } else {
      that.saveOrder(2, selectCarInfo.brandName, currStaff.id, timeIndex, currtshop.id, userId,userName, mobile, remark, selectCarInfo.brandId, selectCarInfo.carModel, selectCarInfo.number, [{
        storeServiceId: cuurtDetail.id,
        serviceTime: cuurtDetail.serviceTime,
        price: cuurtDetail.price
      }], 0)
    }
  },
  selectCar(e) {
    let {
      currtshop,
      cuurtDetail
    } = this.data
    this.setData({
      carIndex: e.currentTarget.dataset.id.id,
      selectCarInfo: e.currentTarget.dataset.id
    })
    this.userCouponList(e.currentTarget.dataset.id.id, currtshop.id);
    this.userCardList(1, currtshop.id, e.currentTarget.dataset.id.number, cuurtDetail.id)
    this.userCardList(0, currtshop.id, e.currentTarget.dataset.id.number, cuurtDetail.id)

  },
  selectServer(e) {
    this.setData({
      serverIndex: e.currentTarget.dataset.serverindex
    })
  },
  selectDetail(e) {
    let {
      currtshop,
      selectCarInfo
    } = this.data
    this.setData({
      detailItem: e.currentTarget.dataset.detailindex.id,
      cuurtDetail: e.currentTarget.dataset.detailindex,
      sumMoreny: e.currentTarget.dataset.detailindex.price
    })

    this.userCardList(1, currtshop.id, selectCarInfo.number, e.currentTarget.dataset.detailindex.id)
    this.userCardList(0, currtshop.id, selectCarInfo.number, e.currentTarget.dataset.detailindex.id)



  },
  selectTime(e) {
    this.setData({
      timeIndex: e.currentTarget.dataset.selecttime

    })
  },
  closeMask() {
    this.setData({
      mask: false
    })
  },
  goDetail(e) {
    this.setData({
      mask: true,
      detailid: e.currentTarget.dataset.detailid
    })

  },
  switchWorker() {
    wx.navigateTo({
      url: '../../worker/cutoverWorker/cutoverWorker',
    })
  },
  addNewCar() {
    wx.navigateTo({
      url: '../addCar/addCar',
    })
  },
  goPackage() {
    wx.navigateTo({
      url: '../../my/buyPackage/buyPackage',
    })
  },
  goRecharge() {
    wx.navigateTo({
      url: '../../my/recharge/recharge',
    })
  },
  goCoupon() {
    wx.navigateTo({
      url: '../../my/coupon/coupon',
    })
  },
  switchHome() {
    wx.navigateTo({
      url: '../../home/switchShop/switchShop',
    })
  },
  delCar() {
    let {
      selectCarInfo
    } = this.data;
    let that=this;
    console.log(selectCarInfo)
    wx.showModal({
      title: '移除提示',
      content: '你确定要移除本辆爱车吗？',
      success(res) {
        that.deleteCar(selectCarInfo.id)
      },
      fail(err) {
        console.log(err)
      }
    })

  },
  userName(e) {
    this.setData({
      userName: e.detail.value
    })
  },
  mobile(e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  remark(e) {
    this.setData({
      remark: e.detail.value
    })
  },
})