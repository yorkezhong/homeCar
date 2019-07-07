
Component({
 
  properties: {
    commentList:{
      type:Array,
      value:[]
    },
    commentedList:{
      type:Array,
      value:[]
    }
  },

  data: {
    tabCur: 0,
    starnum:4
  },

  methods: {
    tabselect(e) {
      this.setData({
        tabCur: e.target.dataset.id
      })
    },
    Gocomment(e){
  let goinfo=e.currentTarget.dataset.staff;
  goinfo=JSON.stringify(goinfo);
      wx.navigateTo({
        url: '../../order/comment/comment?orderinfo='+goinfo,
      })
    }
    
  }
})
