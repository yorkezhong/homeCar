// pages/order/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starnum: 0,
    tag1: false,
    tag1: false,
    commentinfo: "",
    limitNum:0,
    imgList: [],

  },

  onLoad: function(options) {

  },
  changestar(e) {
    const index = e.detail.index;
    this.setData({
      starnum: index
    })
  },
  selected(e) {
    var tagid = e.target.dataset.id;
    if (tagid == 0) {
      this.setData({
        tag1: !this.data.tag1
      })
    } else {
      this.setData({
        tag2: !this.data.tag2
      })
    }

  },
  textareaAInput(e) {
    this.setData({
      commentinfo: e.detail.value,
      limitNum:e.detail.cursor
    })
    
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '提示',
      content: '确定删除这张照片吗？',
      cancelText: '取消',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  sumbitComment(){
    wx.navigateTo({
      url: './success/success',
    })
  }

})