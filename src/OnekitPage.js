/* eslint-disable no-console */
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
  if (wx_object.behaviors) {
    for (const behavior of wx_object.behaviors) {
      for (const behavior_key of Object.keys(behavior)) {
        const behavior_value = behavior[behavior_key]
        switch (behavior_key) {
          case 'methods':
            for (const method_key of Object.keys(behavior_value)) {
              const method = behavior_value[method_key]
              my_object[method_key] = method
            }
            break
          default:
            my_object[behavior_key] = behavior_value
            break
        }
      }
    }
  }
  for (const key of Object.keys(wx_object)) {
    const value = wx_object[key]
    switch (key) {
      case 'behaviors':
        break
      default:
        my_object[key] = value
        break
    }
  }
  wx_object = null
  return Page(my_object)
}
