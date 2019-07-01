import {
  storeList, storeInfo, banner, lineNum, getCarBands
} from "../../../pages/request.js"
Page({
  data: {
    city: "深圳市",
    weather: "",
    mask: false,
    currtshop: null,
    banner:[],
    lineNum:0
  },
  storeInfo(uid){
    storeInfo({uid}).then((res)=>{
     console.log(res)
    })
  },
  lineNum(storeId){
    lineNum({ storeId }).then((res)=>{
   this.setData({
     lineNum:res.data.sort
   })
    })
  },
  onShow(){
    let that = this;
    let latitude = wx.getStorageSync("latitude");
    let longitude = wx.getStorageSync("longitude");
    let currtshop = wx.getStorageSync("currtshop");
    console.log(wx.getStorageSync("userinfo"))
    if (Boolean(currtshop)==true) {
      this.setData({
        currtshop: currtshop
      })
      this.storeInfo(currtshop.id)
      this.lineNum(currtshop.id)
    }else{
      storeList({
        lng: longitude,
        lat: latitude,
        page: 1,
        limit: 10
      }).then((res) => {
        this.setData({
          currtshop: res.data.list[0]
        })
        this.storeInfo(this.data.currtshop.id);
        this.lineNum(this.data.currtshop.id)
      })
    }
    that.getCity(latitude, longitude);
  },
  onLoad(){
    let that=this;
    //轮播图
    banner().then((res)=>{
      that.setData({
       banner:res.data
     })
    })
    getCarBands().then((res)=>{
          console.log(res)
    })
  },
  showMask() {
    this.setData({
      mask: true
    })
    wx.hideTabBar();
  },
  closeMask() {
    this.setData({
      mask: false
    })
    wx.showTabBar();
  },
  getCity(longitude, latitude) {
    let that = this;
    var url = "https://api.map.baidu.com/telematics/v3/weather?location=" + latitude + "," + longitude + "&output=json&ak=EkvUn6X877ah3xNrtnKMu2Gxaiy8rPN7"; //接口请求和参数传递
    wx.request({
      url: url,
      success(res) {
        let city = res.data.results[0].currentCity;
        let weather = res.data.results[0].weather_data[0].weather;
        let temp = parseInt(res.data.results[0].weather_data[0].temperature);
        that.setData({
          city: city,
          weather: weather + " " + temp + "°"
        })
      }
    });
  },

  selectCity() {
    wx.navigateTo({
      url: '../../city/city',
    })
  },
  goKey() {
    wx.navigateTo({
      url: '../localkey/localkey',
    })
  },
  goWashCar() {
    wx.navigateTo({
      url: '../../car/washCar/washCar',
    })
  },
  goRecharge() {
    wx.navigateTo({
      url: '../../my/recharge/recharge',
    })
  },
  goPackage() {
    wx.navigateTo({
      url: '../../my/buyPackage/buyPackage',
    })
  },
  switchShop(){
    wx.navigateTo({
      url: '../switchShop/switchShop',
    })
  }


})