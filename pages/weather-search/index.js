const placeLists = require("./config")
Page({
  data: {
    placeLists:placeLists,
    currentPlaceLists:[],
    historyPlaceLists:[]
  },
  onLoad:function(query){
    const {currentCity} = query
    console.log(currentCity)
  }
})