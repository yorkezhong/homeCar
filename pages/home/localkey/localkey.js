import { findKeyList} from "../../../pages/request.js"
Page({

  data: {
    
  },
  onLoad(){
    this.findKeyList("10001")
  },
  findKeyList(storeId){
    findKeyList({ storeId}).then((res)=>{
         console.log(res)
    })
  }

})