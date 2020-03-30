Page({
  data: {
    city: '',
    currentCity: '',
    cityInfo: '11111',
    isInfoShown: false,
    img:
      "https://6d79-mywxapp-q4z0b-1301425530.tcb.qcloud.la/pin-outline.svg?sign=d294216ec6cdfaf581514650f28dc43a&t=1585037342"
  },
  onLoad: function (query) {
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
    var newCity = "";
    for (var i = 0; i < city.length-1; i++) {
      newCity += city.charAt(i);
    }
    this.onWeatherChange(newCity)
  },
  onCityChange() {
    wx.navigateTo({
      url: `/pages/weather-search/index?currentCity=${this.data.currentCity}`
    })
  },
  onWeatherChange(city) {
    wx.request({
      url: "https://tianqiapi.com/api",
      data: {
        appid: 49573231,
        appsecret: "1BGFuQlj",
        version: "v1",
        city
      },
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        console.log(res, '2')
        this.setData({ cityInfo: res.data })
        console.log(this.data.cityInfo, 3)
      }
    })
  }
})