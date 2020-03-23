Component({
  properties: {
    city: String
  },
  methods: {
    onTap() {
      wx.navigateTo({ url: '/pages/weather-search/index' })
    }
  }
})
