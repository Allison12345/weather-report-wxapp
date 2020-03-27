const airDict = require('./config')
//const computedBehavior = require('../../node_modules/miniprogram-computed/miniprogram_dist/index.js')
Component({
  //behaviors: [computedBehavior],
  properties: {
    air: String,
    air_level: String
  },
  data:{
    color:'1'
  },
  lifetimes: {
    attached() {
      this.setData({color: airDict[this.properties.air_level] || 'green'})
      console.log(this.data.color,this.properties.air_level)
    }
  },
  computed: {
    cptColor() {
      return airDict[this.properties.air_level] || 'green'
    }
  },
  methods:{
    onInfoShow(){
      this.triggerEvent("onInfoShow")
    }
  }
})
