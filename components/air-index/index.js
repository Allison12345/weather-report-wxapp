const airDict = require("./config");
Component({
  properties: {
    air: String,
    air_level: String
  },
  data: {
    color: ""
  },
  lifetimes: {
    attached() {
      this.setData({ color: airDict[this.properties.air_level] || "green" });
      console.log(this.data.color, this.properties.air_level);
    }
  },
  methods: {
    onInfoShow() {
      this.triggerEvent("onInfoShow");
    }
  }
});
