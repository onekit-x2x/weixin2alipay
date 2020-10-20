/* eslint-disable camelcase */
export default function OnekitPage(object) {
  const alipay_object = object
  alipay_object.animate = function () {

  }
  alipay_object.selectComponent = function (selector) {
    // selector = selector.replace(".","$");
    // selector = selector.replace("-","_");
    for (const key of Object.keys(this)) {
      if (key.indexOf(selector) >= 0) {
        return this[key]
      }
    }
    return null
  }
  alipay_object.selectAllComponents = function (selector) {
  //  selector = selector.replace(".","$");
    //   selector = selector.replace("-","_");
    for (const key of Object.keys(this)) {
      if (key.indexOf(selector) >= 0) {
        return [this[key]]
      }
    }
    return []
  }
  return Page(alipay_object)
}
