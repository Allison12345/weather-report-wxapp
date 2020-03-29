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
        this.getCurrentLoaction(res => {
          const { province, city, district } = res
          wx.navigateTo({
            url: `/pages/weather-page/index?city=${province + city + district}`
          })
        })
      } else {
        this.getCurrentLoaction(res => {
          const { city, district } = res
          wx.navigateTo({
            url: `/pages/weather-search/index?currentCity=${district || city}`
          })
        })
      }
    },
    getCurrentLoaction(cb) {
      wx.getLocation({
        success: res => {
          this.getCity(res.latitude, res.longitude, cb)
          // wx.navigateTo({ url: '/pages/weather-page/index' })
        }
      })
    },
    getCity(lat, lon, cb) {
      wx.request({
        url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${lat},${lon}`,
        data: {
          key: 'QGIBZ-PBXKV-DLQPX-UXX53-RYIS6-FCF2W',
          get_poi: 1
        },
        header: {
          'content-type': 'application/json'
        },
        success: res => {
          cb(res.data.result.address_component)
        }
      })
    }
  }
})
