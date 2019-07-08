import {
  orderList,
  cancelOrder,
  commentOrder
} from "../../../pages/request.js";
let currtPage = 1;
Page({
  data: {
    TabCur: 0,
    scrollLeft: 0,
    empty: false,
    nopayList: [],
    storeId: "",
    orderingList: [],
    orderedList: [],
    commentList: [],
    afterList: [],
    commentedList:[]
  },
  onLoad() {
    let storeId = wx.getStorageSync("currtshop").id;
    let {TabCur}=this.data;
    this.setData({
      storeId: storeId
    })
    if (TabCur == 0) {
      this.orderList(storeId, 0, 1, 5);
    }
  },
  tabSelect(e) {
    currtPage = 1;
    let {storeId}=this.data;
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
    let that = this;
    let TabCur = e.currentTarget.dataset.id
    if (TabCur == 0) {
      that.orderList(storeId, 0, currtPage, 5)
    } else if (TabCur == 1) {
      that.orderList(storeId, 1, currtPage, 5)
    } else if (TabCur == 2) {
      that.orderList(storeId, 2, currtPage, 5)
    } else if (TabCur == 3) {
      that.orderList(storeId, 3, currtPage, 5)
      that.orderList(storeId, 4, currtPage, 5)
    } else if (TabCur == 4) {
      that.orderList(storeId, 5, currtPage, 5)
    }
  },
  orderList(storeId, status, currentPage, pageSize) {
    let that = this;
    let { nopayList, orderingList, orderedList, commentList, afterList, commentedList}=this.data;
    orderList({
      storeId,
      status,
      currentPage,
      pageSize
    }).then((res) => {
      if (status == 0) {
        that.setData({
          nopayList: nopayList.concat(res.data.page.records)
        })
      } else if (status == 1) {
        that.setData({
          orderingList: orderingList.concat(res.data.page.records)
        })
      } else if (status == 2) {
        that.setData({
          orderedList: orderedList.concat(res.data.page.records)
        })

      } else if (status == 3 || status == 4) {
        that.setData({
          commentList: commentList.concat(res.data.page.records),
          commentedList: commentedList.concat(res.data.page.records)
        })
      } else if (status == 5) {
        that.setData({
          afterList: afterList.concat(res.data.page.records)
        })
      }
    })
  },
  cancelOrder(orderId, cancelTags, reason) {
    cancelOrder({
      orderId,
      cancelTags,
      reason
    }).then((res) => {
      console.log(res)
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
      console.log(res)
    })
  },
  onReachBottom() {
    let {
      storeId,
      TabCur
    } = this.data
    currtPage += currtPage;
    let that = this;
    if (TabCur == 0) {
      that.orderList(storeId, 0, currtPage, 5)
    } else if (TabCur == 1) {
      that.orderList(storeId, 1, currtPage, 5)

    } else if (TabCur == 2) {
      that.orderList(storeId, 2, currtPage, 5)

    } else if (TabCur == 3) {
      that.orderList(storeId, 3, currtPage, 5)
      that.orderList(storeId, 4, currtPage, 5)
    } else if (TabCur == 4) {
      that.orderList(storeId, 5, currtPage, 5)
    }

  }

})