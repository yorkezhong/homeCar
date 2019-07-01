import { serviceList} from "../../../pages/request.js"
Page({
  data: {
    carIndex:null,
    serverIndex:0,
    detailItem:0,
    timeIndex:0,
    detailid:0,
    mask:false,
    shopServerList:[],
    detailServerList:[]
  },
  onLoad(){
    let storeId = wx.getStorageSync("currtshop").id;
    let detailServerList=[];
    serviceList({ storeId}).then((res)=>{
      this.setData({
        shopServerList:Object.keys(res.data)
      })
      let keyArry=Object.keys(res.data)
      for (var i = 0; i < keyArry.length;i++){
        detailServerList.push(res.data[keyArry[i]])
      }
      this.setData({
        detailServerList:detailServerList
      })
    })
  },
  selectCar(e){
  this.setData({
    carIndex: e.currentTarget.dataset.id
  })
  },
  selectServer(e){
    this.setData({
      serverIndex: e.currentTarget.dataset.serverindex
    })
  },
  selectDetail(e){
    this.setData({
      detailItem: e.currentTarget.dataset.detailindex

    })
  },
  selectTime(e){
    this.setData({
      timeIndex: e.currentTarget.dataset.selecttime

    })
  },
  closeMask(){
    this.setData({
      mask:false
    })
  },
  goDetail(e){
    this.setData({
      mask: true,
      detailid: e.currentTarget.dataset.detailid
    })
    
  },
  switchWorker(){
    wx.navigateTo({
      url: '../../worker/cutoverWorker/cutoverWorker',
    })
  },
  addNewCar(){
    wx.navigateTo({
      url: '../addCar/addCar',
    })
  },
  goPackage(){
    wx.navigateTo({
      url: '../../my/buyPackage/buyPackage',
    })
  },
  goRecharge(){
    wx.navigateTo({
      url: '../../my/recharge/recharge',
    })
  },
  goCoupon(){
    wx.navigateTo({
      url: '../../my/coupon/coupon',
    })
  },
  switchHome(){
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