const weatherIcons = require('../../config.js')
const anotherInfoConfig = require('./another')
Page({
  data: {
    city: '',
    currentCity: '',
    anotherInfo: [],
    cityInfo: {},
    isInfoShown: false,
    zwx:'',
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
    this.onAnotherInfo(newCity)
  },
  cityInfoChange(info) {
    const zwx = info.data[0].index[0].level
    const cityInfo = info.data.map(item => ({
      ...item,
      img: weatherIcons[item.wea]
    }))
    this.setData({ cityInfo,zwx })
  },
  hourListChange(cityInfo) {
    if (cityInfo && cityInfo.data && cityInfo.data[0]) {
      const newHourList = [...cityInfo.data[0].hours, ...cityInfo.data[1].hours]
      const hourList = newHourList.map(item => ({
        ...item,
        img: weatherIcons[item.wea],
        day: item.day.slice(-3)
      }))
      this.setData({ hourList })
    }
  },
  onCityChange() {
    wx.navigateTo({
      url: `/pages/weather-search/index?currentCity=${this.data.currentCity}`
    })
  },
  anotherInfoChange(info) {
    const anotherInfo = anotherInfoConfig.map(row =>
      row.map(([label, prop]) => ({
        label,
        value: typeof prop === 'function' ? prop(info): info[prop]
      }))
    )
    this.setData({anotherInfo})
  },
  onAnotherInfo(city) {
    wx.request({
      url: 'https://tianqiapi.com/api',
      data: {
        appid: 49573231,
        appsecret: '1BGFuQlj',
        version: 'v6',
        city
      },
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        const anotherInfo = res.data
        anotherInfo.level = this.data.zwx
        this.anotherInfoChange(anotherInfo)
      }
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
        this.cityInfoChange(cityInfo)
        this.hourListChange(cityInfo)
      }
    })
  }
})
