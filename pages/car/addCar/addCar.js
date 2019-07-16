import {
  addCars
} from "../../../pages/request.js"
Page({
  data: {
    selectIndex: 0,
    showKeyboard: false,
    plateNumber: '',
    more: false,
    carBrand: "必填",
    carImg: "",
    currtCar: null,
    frameNo: "",
    displacement: "",
    intakeForm: "",
    fuelType: "",
    issueYear: "",
    dischargeStandard: "",
    vehicleGrade: "",
    oilLift: "",
    gear: "",
    frontTire: "",
    backTire: "",
    domestic: 0,
    engineNo: "",
    travelNumber: "",
    maintainNumber: "",
    insuranceExpireDate: '2018-12-25',
    annualReviewExpireDate: '2018-12-25',
    greenLabelExpireDate: '2018-12-25'

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
  },
  addCars(number, status, brandId, brandName, carModel, frameNo, displacement, intakeForm, fuelType, issueYear, dischargeStandard, vehicleGrade, oilLift, gear, frontTire, backTire, domestic, engineNo, travelNumber, maintainNumber, insuranceExpireDate, annualReviewExpireDate, greenLabelExpireDate) {
    addCars({
      number,
      status,
      brandId,
      brandName,
      carModel,
      frameNo,
      displacement,
      intakeForm,
      fuelType,
      issueYear,
      dischargeStandard,
      vehicleGrade,
      oilLift,
      gear,
      frontTire,
      backTire,
      domestic,
      engineNo,
      travelNumber,
      maintainNumber,
      insuranceExpireDate,
      annualReviewExpireDate,
      greenLabelExpireDate
    }).then((res) => {
      if (res.code == 200) {
        wx.showToast({
          title: '新增车辆成功',
        })
        setTimeout(() => {
          wx.navigateBack({
            delta: 4,
          })
        }, 2000)
      } else {
        wx.showToast({
          title: '新增车辆失败',
          icon: "none"
        })
      }
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
    let {
      currtCar,
      plateNumber,
      carBrand,
      frameNo,
      displacement,
      intakeForm,
      fuelType,
      issueYear,
      dischargeStandard,
      vehicleGrade,
      oilLift,
      gear,
      frontTire,
      backTire,
      domestic,
      engineNo,
      travelNumber,
      maintainNumber,
      insuranceExpireDate,
      annualReviewExpireDate,
      greenLabelExpireDate
    } = this.data;
    if (currtCar == null || plateNumber == "") {
      wx.showModal({
        title: '提示',
        content: '请填写必填信息，车牌和品牌型号',
      })
    } else {
      this.addCars(plateNumber, 1, currtCar.id, currtCar.name, currtCar.type, frameNo, displacement, intakeForm, fuelType, issueYear, dischargeStandard, vehicleGrade, oilLift, gear, frontTire, backTire, domestic, engineNo, travelNumber, maintainNumber, insuranceExpireDate, annualReviewExpireDate, greenLabelExpireDate)
    }
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
  },
  frameNo(e) {
    this.setData({
      frameNo: e.detail.value
    })
  },
  displacement(e) {
    this.setData({
      displacement: e.detail.value
    })
  },
  intakeForm(e) {
    this.setData({
      intakeForm: e.detail.value
    })
  },
  fuelType(e) {
    this.setData({
      fuelType: e.detail.value
    })
  },
  issueYear(e) {
    this.setData({
      issueYear: e.detail.value
    })
  },
  dischargeStandard(e) {
    this.setData({
      dischargeStandard: e.detail.value
    })
  },
  vehicleGrade(e) {
    this.setData({
      vehicleGrade: e.detail.value
    })
  },
  oilLift(e) {
    this.setData({
      oilLift: e.detail.value
    })
  },
  gear(e) {
    this.setData({
      gear: e.detail.value
    })
  },
  frontTire(e) {
    this.setData({
      frontTire: e.detail.value
    })
  },
  backTire(e) {
    this.setData({
      backTire: e.detail.value
    })
  },
  domestic(e) {
    let flag = 0;
    if (e.detail.value == false) {
      flag = 1
    }
    this.setData({
      domestic: flag
    })
  },
  engineNo(e) {
    this.setData({
      engineNo: e.detail.value
    })
  },
  travelNumber(e) {
    this.setData({
      travelNumber: e.detail.value
    })
  },
  maintainNumber(e) {
    this.setData({
      maintainNumber: e.detail.value
    })
  },

  insuranceExpireDate(e) {
    this.setData({
      insuranceExpireDate: e.detail.value
    })
  },
  annualReviewExpireDate(e) {
    this.setData({
      annualReviewExpireDate: e.detail.value
    })
  },
  greenLabelExpireDate(e) {
    this.setData({
      greenLabelExpireDate: e.detail.value
    })
  },

})