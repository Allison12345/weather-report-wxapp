const cityInfo = require('./cityInfo.js')
Page({
  data: {
    city: '贵州省安顺市平坝区',
    cityInfo,
    isInfoShown:false,
    img:
      "https://6d79-mywxapp-q4z0b-1301425530.tcb.qcloud.la/pin-outline.svg?sign=d294216ec6cdfaf581514650f28dc43a&t=1585037342"
  },
  // onLoad: function(query) {
  //   const { city } = query
  //   this.setData({ city })
  // }
  onInfoShow(){
    this.setData({isInfoShown:true})
  },
  onInfoClose(){
    this.setData({isInfoShown:false})
  }
})
