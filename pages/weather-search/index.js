const placeList = require('./config')
Page({
  data: {
    placeList,
    currentPlaceList: [],
    historyPlaceList: []
  },
  onLoad(query) {
    const { currentCity } = query
    console.log(currentCity)
  },
  onCityChoose(item) {
    const newHistoryList = this.data.historyPlaceList
    if(newHistoryList.indexOf(item.detail) > -1){
      return
    }
    newHistoryList.push(item.detail)
    this.setData({ historyPlaceList: newHistoryList })
  },
  onDelete(){
    this.setData({historyPlaceList:[]})
  }
})
