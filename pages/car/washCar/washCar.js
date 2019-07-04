import {
  serviceList,
  staffList,
  myCars,
  saveOrder,
  userCardList,
  userCouponList
} from "../../../pages/request.js"
Page({
  data: {
    carIndex: null,
    serverIndex: 0,
    detailItem: 0,
    timeIndex: 0,
    detailid: 0,
    mask: false,
    shopServerList: [],
    detailServerList: [],
    currStaff: [],
    currtshop: {}
  },

  onLoad() {
    let currtshop = wx.getStorageSync("currtshop");
    this.saveOrder(1, "宝马", "869856a083064c2db95957435643526d", 1, 1000001, "a5f0e1218bd744aeb5d63d3e52d3096a", "刘德华", "13579607815", "多加辣少汤", "179", "i116", "粤B63675",[{ storeServiceId: "000346a382484b97bb422a689700a011", serviceTime: 20, price:188}],0)
    this.userCardList(0, 1000001, "粤B56675","3b36f991e4f948a1b14afbb5ac5901da");
    this.userCouponList("粤B98675", 1000001)
    this.setData({
      currtshop: currtshop
    })
    let storeId = currtshop.id;
    let detailServerList = [];
    serviceList({
      storeId
    }).then((res) => {
      this.setData({
        shopServerList: Object.keys(res.data)
      })
      let keyArry = Object.keys(res.data)
      for (var i = 0; i < keyArry.length; i++) {
        detailServerList.push(res.data[keyArry[i]])
      }
      this.setData({
        detailServerList: detailServerList
      })
    });
    staffList({
      storeId
    }).then((res) => {
      if (Boolean(wx.getStorageSync("currtindex")) == true) {
        this.setData({
          currStaff: res.data[wx.getStorageSync("currtindex")]
        })
        console.log(wx.getStorageSync("currtindex"))
      } else {
        this.setData({
          currStaff: res.data[0]
        })
      }
    })
  },
  saveOrder(orderSource, carBrandName, conStaffId, orderType, storeId, userId
    , userName, mobile, remark, carBrandId, carModel, carNumber, detail, hasCard) {
    saveOrder({
      orderSource, carBrandName, conStaffId, orderType, storeId, userId
      , userName, mobile, remark, carBrandId, carModel, carNumber, detail, hasCard
    }).then((res) => {
      console.log(res)

    })
  },
  userCardList(type, storeId, carNumber, serviceId){
    userCardList({ type, storeId, carNumber, serviceId}).then((res)=>{
               console.log(res)
    })
  },
  userCouponList(carNumber, storeId){
    userCouponList({ carNumber, storeId}).then((res)=>{
        console.log(res)
    })
  },
  selectCar(e) {
    this.setData({
      carIndex: e.currentTarget.dataset.id
    })
  },
  selectServer(e) {
    this.setData({
      serverIndex: e.currentTarget.dataset.serverindex
    })
  },
  selectDetail(e) {
    this.setData({
      detailItem: e.currentTarget.dataset.detailindex

    })
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
    wx.showModal({
      title: '移除提示',
      content: '你确定要移除本辆爱车吗？',
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.log(err)
      }
    })

  }
})