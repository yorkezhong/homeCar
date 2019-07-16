
Component({
 
  properties: {
     orderingList:{
       type:Array,
       value:[]
     }
  },

  data: {

  },

  methods: {
    backPay(){
      wx.navigateTo({
        url: '../refund/refund',
      })
    }
  },
  
})
