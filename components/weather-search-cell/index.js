Component({
  properties: {
    title: String,
    placeList: Array,
    isNeedDelete:Boolean
  },
  methods: {
    onCityChoose(e) {
      const { item } = e.currentTarget.dataset
      this.triggerEvent('onCityChoose', item)
    },
    onDelete(){
      this.triggerEvent('onDelete')
    }
  }
})
