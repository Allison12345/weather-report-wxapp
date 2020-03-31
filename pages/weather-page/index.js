const weatherIcons = require('../../config.js')
Page({
  data: {
    city: '',
    currentCity: '',
    cityInfo: {},
    isInfoShown: false,
    hourList: [],
    img:
      'https://6d79-mywxapp-q4z0b-1301425530.tcb.qcloud.la/pin-outline.svg?sign=d294216ec6cdfaf581514650f28dc43a&t=1585037342'
  },
  onLoad: function(query) {
    const { city } = query
    this.setData({ city, currentCity: city })
    this.cutString(city)
  },
  onInfoShow() {
    this.setData({ isInfoShown: true })
  },
  onInfoClose() {
    this.setData({ isInfoShown: false })
  },
  cutString(city) {
    const newCity = city.slice(0, 2)
    this.onWeatherChange(newCity)
  },
  cityInfoChange(cityInfo){
    const newCityInfo = cityInfo.data[0].map(item =>({
      ...item,
      weaImg:weatherIcons[wea]
    }))
    this.setData({cityInfo:newCityInfo})
  },
  hourListChange(cityInfo) {
    if (cityInfo && cityInfo.data && cityInfo.data[0]) {
      const newHourList=[...cityInfo.data[0].hours,...cityInfo.data[1].hours]
      const hourList = newHourList.map(item => ({
        ...item,
        img:weatherIcons[item.wea],
        day: item.day.slice(-3)
      }))
      this.setData({ hourList })
      console.log(hourList)
    }
  },
  onCityChange() {
    wx.navigateTo({
      url: `/pages/weather-search/index?currentCity=${this.data.currentCity}`
    })
  },
  onWeatherChange(city) {
    wx.request({
      url: 'https://tianqiapi.com/api',
      data: {
        appid: 49573231,
        appsecret: '1BGFuQlj',
        version: 'v1',
        city
      },
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        const cityInfo = res.data
        this.setData({ cityInfo })
        this.hourListChange(cityInfo)
      }
    })
  }
})
