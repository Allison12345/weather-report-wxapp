const placeLists = require("./config")
Page({
  data: {
    placeLists:placeLists,
    currentPlaceLists:[],
    historyPlaceLists:[]
  },
  onLoad(query){
    const {currentCity} = query
    console.log(currentCity)
  },
  onCityChoose(e){
    console.log(e)
  }
})