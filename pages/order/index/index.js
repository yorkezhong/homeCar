import { orderList, cancelOrder, commentOrder} from "../../../pages/request.js";
Page({
  data: {
    TabCur: 0,
    scrollLeft: 0,
    empty:false
  },
  onLoad(){
    this.orderList(1000001,"000346a382484b97bb422a689794a768",1,1,10);
    this.commentOrder("16127b31e8c94f038e479a39e347f1c8",4,"好","很好","http://baidu.com")
    this.cancelOrder("b1113dd9d19d417c83f49030e68c0929", "cancelTags","cancelTags")
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  orderList(storeId, userId, status, currentPage, pageSize){
    orderList({ storeId, userId, status, currentPage, pageSize}).then((res)=>{
           console.log(res)
    })
  },
  cancelOrder(orderId, cancelTags, reason){
    cancelOrder({ orderId, cancelTags, reason}).then((res)=>{
          console.log(res)
    })
  },
  commentOrder(orderId, starLevel, tags, comment, picUrls){
    commentOrder({ orderId, starLevel, tags, comment, picUrls}).then((res)=>{
          console.log(res)
    })
  }
 
})