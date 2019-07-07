
Component({

  properties: {
    orderedList:{
      type:Array,
      value:[]
      
    }
  },
  data: {

  },

  methods: {
    againOrder(){
      wx.navigateTo({
        url: '../../car/washCar/washCar',
      })
    }
  }
})
