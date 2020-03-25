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
  data: {
    city: ''
  },
  methods: {
    onTap() {
      if (this.properties.local) {
        this.getCurrentLoaction()
      } else {
        wx.navigateTo({ url: '/pages/weather-search/index' })
      }
    },
    getCurrentLoaction() {
      wx.getLocation({
        success: res => {
          //this.getCity(res.latitude, res.longitude)
          wx.navigateTo({ url: '/pages/weather-page/index' }),
          console.log('local')
        }
      })
    },
    getCity(lat, lon) {
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
          const { province, city, district } = res.data.result.address_component
          this.setData({ city: province + city + district })
          wx.navigateTo({
            url: `/pages/weather-page/index?city=${this.data.city}`
          })
        }
      })
    }
  }
})
