import { staffDetail} from "../../../pages/request.js"
Page({
  data: {
    stafinfo:{}
  },
  onLoad(option){
    let stafinfo = option.detailstaff;
    stafinfo = JSON.parse(stafinfo);
    let staffId = stafinfo.id;
    staffDetail({ staffId}).then((res)=>{
        this.setData({
          stafinfo:res.data
        })
    })

  }

 
})