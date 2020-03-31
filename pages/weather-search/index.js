const placeList = require('./config')
Page({
  data: {
    placeList,
    currentCity: '',
    historyPlaceList: []
  },
  onLoad(query) {
    const { currentCity = '' } = query
    this.setData({currentCity})
  },
  onCityChoose(item) {
    const newHistoryList = this.data.historyPlaceList
    if(newHistoryList.indexOf(item.detail) > -1){
      return
    }
    newHistoryList.push(item.detail)
    this.setData({ historyPlaceList: newHistoryList })
    wx.navigateTo({url:`/pages/weather-page/index?city=${item.detail}`})
  },
  onDelete(){
    this.setData({historyPlaceList:[]})
  }
})
