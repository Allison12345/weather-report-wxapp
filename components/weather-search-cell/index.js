Component({
  properties: {
    title:String,
    placeLists:Array
  },
  methods: {
    onCityChoose(item){
      this.triggerEvent('onCityChoose',item)
    }
  }
})
