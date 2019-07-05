import { findKeyList} from "../../../pages/request.js"
Page({

  data: {
    keyList:[]
  },
  onLoad(){
    let storeid = wx.getStorageSync("currtshop").id;
    this.findKeyList(storeid)
  },
  findKeyList(storeId){
    findKeyList({ storeId}).then((res)=>{
        keyList:res.data
    })
  }

})