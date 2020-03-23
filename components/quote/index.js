Component({
  data: {
    content: ''
  },
  lifetimes: {
    attached: function() {
      //this.getQuote()
    }
  },
  methods: {
    getQuote() {
      wx.request({
        url: 'http://api.tianapi.com/txapi/dujitang/index',
        data: {
          key: '581c3e8dc9c3a7c8bd070d2ba13ea450'
        },
        header: {
          'content-type': 'application/json'
        },
        success: res => {
          this.setData({ content: res.data.newslist[0].content })
        }
      })
    }
  }
})
