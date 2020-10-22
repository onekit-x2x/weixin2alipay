/* eslint-disable camelcase */
export default function OnekitPage(wx_object) {
  const my_object = {
    animate() {
    },
    selectComponent(selector) {
    // selector = selector.replace(".","$");
    // selector = selector.replace("-","_");
      for (const key of Object.keys(this)) {
        if (key.indexOf(selector) >= 0) {
          return this[key]
        }
      }
      return null
    },
    selectAllComponents(selector) {
      //  selector = selector.replace(".","$");
    //   selector = selector.replace("-","_");
      for (const key of Object.keys(this)) {
        if (key.indexOf(selector) >= 0) {
          return [this[key]]
        }
      }
      return []
    }
  }
  for (const key of Object.keys(wx_object)) {
    const value = wx_object[key]
    switch (key) {
      case 'behaviors':
        my_object.mixins = value
        break
      default:
        my_object[key] = value
        break
    }
  }
  return Page(my_object)
}
