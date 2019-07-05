import {
  getCarById
} from "../../../pages/request.js"
Page({
  data: {
    typeList: [],
    car: {},
    inputValue: "",
    originData: [],
  },
  onLoad(option) {
    let carinfo = JSON.parse(option.carinfo)
    carinfo.name = carinfo.name.split("-")[1];
    this.getCarById(carinfo.id);
    this.setData({
      car: carinfo
    })
  },
  getCarById(brandId) {
    getCarById({
      brandId
    }).then((res) => {
      this.setData({
        typeList: res.data,
        originData: res.data
      })
    })
  },
  inputsearch(e) {
    let inputvalue = e.detail.value;
    this.setData({
      inputValue: inputvalue
    })
    this.seach(this.data.inputValue)
  },
  clear() {
    this.setData({
      inputValue: ""
    })
    this.seach(this.data.inputValue)
  },
  seach(value) {
    value = value.toUpperCase()
    let newData = [];
    let typeData = this.data.originData;

    for (let i = 0; i < typeData.length; i++) {
      if (typeData[i].indexOf(value) > -1) {
        newData.push(typeData[i]);
      }
    }
    if (value == "") {
      this.setData({
        typeList: this.data.originData
      })
    }  else {
      this.setData({
        typeList: newData
      })
    }

  },
  goBack() {
    wx.navigateBack({
      delta: 1
    })
  },
  selectType(e) {
    let type = e.currentTarget.dataset.type;
    let carinfo = this.data.car;
    carinfo["type"] = type;
    carinfo = JSON.stringify(carinfo)
    wx.navigateTo({
      url: '../addCar/addCar?carinfo='+carinfo,
    })
  }
})