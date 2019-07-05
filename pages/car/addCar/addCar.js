import {
  addCars,
  getCarBands,
  getCarById
} from "../../../pages/request.js"
Page({
  data: {
    selectIndex: 0,
    showKeyboard: false,
    plateNumber: '',
    date: '2018-12-25',
    more: false,
    carBrand: "必填",
    carImg: "",
    currtCar: {}
  },
  onLoad(option) {
    if (Boolean(option.carinfo) == true) {
      let carinfo = JSON.parse(option.carinfo);
      this.setData({
        carBrand: carinfo.name + "" + carinfo.type,
        carImg: carinfo.remoteLogo,
        currtCar: carinfo
      })
    }
    this.addCars("粤BK85464", 1, 197, "宝马", "116i");

    this.getCarBands();
    this.getCarById(197);
  },
  getCarById(brandId) {
    getCarById({
      brandId
    }).then((res) => {
      console.log(res)
    })
  },
  addCars(carNumber, status, brandId, brandName, carModel) {
    addCars({
      carNumber,
      status,
      brandId,
      brandName,
      carModel
    }).then((res) => {
      console.log(res)
    })
  },
  getCarBands() {
    getCarBands().then((res) => {
      console.log(res)
    })
  },
  selectType(e) {
    let index = e.target.dataset.id;
    this.setData({
      selectIndex: index,
      plateNumber: ""
    })
  },
  setNumber(e) {
    this.setData({
      plateNumber: e.detail.value
    })
  },
  handleFocus(e) {
    this.setData({
      showKeyboard: true
    });
    wx.createSelectorQuery().select('#j_page').boundingClientRect(function(rect) {

      wx.pageScrollTo({
        scrollTop: rect.height + 400
      })
    }).exec()

  },
  submitAdd() {
    wx.showToast({
      title: '新增车辆成功',
    })
    setTimeout(() => {
      wx.navigateBack({
        delta: 1
      })
    }, 2000)
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  moreInput() {
    this.setData({
      more: !this.data.more,
      showKeyboard: false
    })
  },
  goselectCar() {
    wx.navigateTo({
      url: '../carList/carList',
    })
  }
})