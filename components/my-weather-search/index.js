Component({
  data: {
    img:
      'https://6d79-mywxapp-q4z0b-1301425530.tcb.qcloud.la/search-outline.png?sign=5fd5c85d0e4b46858a35d07b2726fcde&t=1584787271',
    city: ''
  },
  methods: {
    onCancel() {
      this.setData({ city: '' })
    },
    onChange(e) {
      this.setData({ city: e.detail.value })
    },
    onComfirm(e) {
      this.getCityInfo(e.detail.value)
    },
    getCityInfo(address) {
      wx.request({
        url: `https://apis.map.qq.com/ws/geocoder/v1/?address=${address}`,
        data: {
          key: 'QGIBZ-PBXKV-DLQPX-UXX53-RYIS6-FCF2W'
        },
        header: {
          'content-type': 'application/json'
        },
        success: res => {
          const { status, message, result } = res.data
          if (status === 0) {
            const { province, city, district } = result.address_components
            wx.navigateTo({
              url: `/pages/weather-page/index?city=${province +
                city +
                district}`
            })
            return
          }
          wx.showToast({ title: message, icon: 'none' })
        },
        fail: res => {
          wx.showToast({ title: res.message, icon: 'none' })
        }
      })
    }
  }
})
