Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
    img: String,
    title: String,
    desc: String,
    local: Boolean
  },
  methods: {
    onTap() {
      if (this.properties.local) {
        this.getCurrentLoaction()
      } else {
        wx.navigateTo({ url: '/pages/weather-search/index' })
      }
    },
    getCurrentLoaction() {}
  }
})
