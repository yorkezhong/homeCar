import {
  commentOrder
} from "../../request.js"
Page({
  data: {
    starnum: 0,
    tag1: false,
    tag2: false,

    commentinfo: "",
    limitNum: 0,
    imgList: [],
    orderinfo: {}
  },

  onLoad(options) {
    let orderinfo = JSON.parse(options.orderinfo);
    this.setData({
      orderinfo: orderinfo
    })
  },
  commentOrder(orderId, starLevel, tags, comment, picUrls) {
    commentOrder({
      orderId,
      starLevel,
      tags,
      comment,
      picUrls
    }).then((res) => {
      if (res.code == 200) {
        wx.showToast({
          title: '评论成功',
        })
        setTimeout(() => {
          wx.navigateTo({
            url: './success/success',
          })
        }, 2000)

      } else {
        wx.showToast({
          title: '评论失败',
          icon: "none"
        })
      }
    })
  },
  changestar(e) {
    const index = e.detail.index;
    this.setData({
      starnum: index
    })
  },
  selected(e) {
    var tagid = e.currentTarget.dataset.id;
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
      limitNum: e.detail.cursor
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
      count: 1, //默认9
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'], //从相册选择
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
  sumbitComment() {
    let {
      orderinfo,
      imgList,
      commentinfo,
      tag1,
      tag2,
      starnum
    } = this.data;
    let tags = "服务态度好"
    if (tag1 == true && tag2 == true) {
      tags = "专业细心、服务态度好"
    } else if (tag2 == true) {
      tags = "专业细心"
    }
    this.commentOrder(orderinfo.id, starnum, tags, commentinfo, imgList[imgList.length - 1]);
  }
})