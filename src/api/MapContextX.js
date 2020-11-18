module.exports = {
  methods: {
    addGroundOverlay(data) {
      const visible = this.data.visible
      const opacity = this.data.opacity
      data.src = this.data.image
      data.bounds = this.data.includePoints
      visible.push(data)
      opacity.push(data)
      this.setData({visible, opacity})
    }
  }
}
