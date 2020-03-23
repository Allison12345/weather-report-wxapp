const airDict = require('./config')
const computedBehavior = require('../../node_modules/miniprogram-computed')
Component({
  behaviors: [computedBehavior],
  properties: {
    air: String,
    air_level: String
  },
  lifetimes: {
    attached() {
      console.log(this.properties)
    }
  },
  computed: {
    cptColor() {
      return airDict[this.properties.air_level] || 'green'
    }
  }
})
