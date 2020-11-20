/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-console */

// import {PROMISE} from 'oneutil'
// import wx from '../wx'
// import MapContextX from './MapContextX'

export default class MapContext {
  constructor(alipayMapContext, id) {
    this.alipayMapContext = alipayMapContext
    this.id = id
    // this.map = this.onekit_nodes[id]
  }

  addGroundOverlay(data) {
    // 支付宝组件ground-overlays
    const map = this.onekit_nodes[this.id]
    map.addGroundOverlay(data)
  }

  static addMarkers(wx_object) {
    console.log(wx_object)
    /* if (!wx_object) {
      return
    }
    const wx_markers = wx_object.markers || []
    const wx_clear = wx_object.clear || false
    const wx_success = wx_object.success
    const wx_fail = wx_object.fail
    const wx_complete = wx_object.complete
    wx_object = null
    // //////////
    PROMISE((SUCCESS, FAIL) => {
      const my_object = {
        markers: wx_markers,
        clear: wx_clear,
        success(my_res) {
          const wx_res = {
            errMsg: my_res.errMsg
          }
          SUCCESS(wx_res)
        },
        fail(my_res) {
          const wx_res = {
            errMsg: my_res.errMsg
          }
          FAIL(wx_res)
        }
      }
      // if(){
      //   my_object.XXX = YYY;
      // }
    }, wx_success, wx_fail, wx_complete) */
  }

  static fromScreenLocation(wx_object) {
    console.log(wx_object)
    /* if (!wx_object) {
      return
    }
    const wx_success = wx_object.success
    const wx_fail = wx_object.fail
    const wx_complete = wx_object.complete
    wx_object = null
    // //////////
    PROMISE((SUCCESS, FAIL) => {
      const my_object = {
        success(my_res) {
          const wx_res = {
            latitude: my_res.latitude,
            longitude: my_res.longitude,
            errMsg: my_res.errMsg
          }
          SUCCESS(wx_res)
        },
        fail(my_res) {
          const wx_res = {
            errMsg: my_res.errMsg
          }
          FAIL(wx_res)
        }
      }
      // if(){
      //   my_object.XXX = YYY;
      // }
    }, wx_success, wx_fail, wx_complete) */
  }

  getCenterLocation(object) {
    return this.alipayMapContext.getCenterLocation(object)
  }

  getRegion(object) {
    return this.alipayMapContext.getRegion(object)
  }

  static getRotate(wx_object) {
    console.log(wx_object)
    // if (!wx_object) {
    //   return
    // }
    // const wx_success = wx_object.success
    // const wx_fail = wx_object.fail
    // const wx_complete = wx_object.complete
    // wx_object = null
    // // //////////
    // PROMISE((SUCCESS, FAIL) => {
    //   const my_object = {
    //     success(my_res) {
    //       const wx_res = {
    //         rotate: my_res.rotate,
    //         errMsg: my_res.errMsg
    //       }
    //       SUCCESS(wx_res)
    //     },
    //     fail(my_res) {
    //       const wx_res = {
    //         errMsg: my_res.errMsg
    //       }
    //       FAIL(wx_res)
    //     }
    //   }
    //   // if(){
    //   //   my_object.XXX = YYY;
    //   // }
    //   my.getCenterLocation(my_object)
    // }, wx_success, wx_fail, wx_complete)
  }

  static getScale(wx_object) {
    console.log(wx_object)
    // if (!wx_object) {
    //   return
    // }
    // const wx_success = wx_object.success
    // const wx_fail = wx_object.fail
    // const wx_complete = wx_object.complete
    // wx_object = null
    // // //////////
    // PROMISE((SUCCESS, FAIL) => {
    //   const my_object = {
    //     success(my_res) {
    //       const wx_res = {
    //         scale: my_res.scale,
    //         errMsg: my_res.errMsg
    //       }
    //       SUCCESS(wx_res)
    //     },
    //     fail(my_res) {
    //       const wx_res = {
    //         errMsg: my_res.errMsg
    //       }
    //       FAIL(wx_res)
    //     }
    //   }
    //   // if(){
    //   //   my_object.XXX = YYY;
    //   // }
    //   my.getScale(my_object)
    // }, wx_success, wx_fail, wx_complete)
  }

  static getSkew(wx_object) {
    console.log(wx_object)
    // if (!wx_object) {
    //   return
    // }
    // const wx_success = wx_object.success
    // const wx_fail = wx_object.fail
    // const wx_complete = wx_object.complete
    // wx_object = null
    // // //////////
    // PROMISE((SUCCESS, FAIL) => {
    //   const my_object = {
    //     success(my_res) {
    //       const wx_res = {
    //         skew: my_res.skew,
    //         errMsg: my_res.errMsg
    //       }
    //       SUCCESS(wx_res)
    //     },
    //     fail(my_res) {
    //       const wx_res = {
    //         errMsg: my_res.errMsg
    //       }
    //       FAIL(wx_res)
    //     }
    //   }
    //   // if(){
    //   //   my_object.XXX = YYY;
    //   // }
    //   my.getSkew(my_object)
    // }, wx_success, wx_fail, wx_complete)
  }

  static includePoints(wx_object) {
    console.log(wx_object)
    // if (!wx_object) {
    //   return
    // }
    // const wx_points = wx_object.points
    // const wx_padding = wx_object.padding
    // const wx_success = wx_object.success
    // const wx_fail = wx_object.fail
    // const wx_complete = wx_object.complete
    // wx_object = null
    // // //////////
    // PROMISE((SUCCESS, FAIL) => {
    //   const my_object = {
    //     points: {
    //       longitude: wx_points.longitude,
    //       latitude: wx_points.latitude,
    //     },
    //     padding: wx_padding,
    //     success(my_res) {
    //       const wx_res = {
    //         errMsg: my_res.errMsg
    //       }
    //       SUCCESS(wx_res)
    //     },
    //     fail(my_res) {
    //       const wx_res = {
    //         errMsg: my_res.errMsg
    //       }
    //       FAIL(wx_res)
    //     }
    //   }
    //   // if(){
    //   //   my_object.XXX = YYY;
    //   // }
    //   my.includePoints(my_object)
    // }, wx_success, wx_fail, wx_complete)
  }

  static initMarkerCluster(wx_object) {
    console.log(wx_object)
    // if (!wx_object) {
    //   return
    // }
    // const wx_enableDefaultStyle = wx_object.enableDefaultStyle
    // const wx_zoomOnClick = wx_object.zoomOnClick
    // const wx_gridSize = wx_object.gridSize
    // const wx_success = wx_object.success
    // const wx_fail = wx_object.fail
    // const wx_complete = wx_object.complete
    // wx_object = null
    // // //////////
    // PROMISE((SUCCESS, FAIL) => {
    //   const my_object = {
    //     enableDefaultStyle: wx_enableDefaultStyle,
    //     zoomOnClick: wx_zoomOnClick,
    //     gridSize: wx_gridSize,
    //     success(my_res) {
    //       const wx_res = {
    //         skew: my_res.skew,
    //         errMsg: my_res.errMsg
    //       }
    //       SUCCESS(wx_res)
    //     },
    //     fail(my_res) {
    //       const wx_res = {
    //         errMsg: my_res.errMsg
    //       }
    //       FAIL(wx_res)
    //     }
    //   }
    //   // if(){
    //   //   my_object.XXX = YYY;
    //   // }
    //   my.initMarkerCluster(my_object)
    // }, wx_success, wx_fail, wx_complete)
  }

  static moveAlong(wx_object) {
    console.log(wx_object)
    // if (!wx_object) {
    //   return
    // }
    // const wx_markerId = wx_object.markerId
    // const wx_path = wx_object.path
    // const wx_autoRotate = wx_object.autoRotate
    // const wx_duration = wx_object.duration
    // const wx_success = wx_object.success
    // const wx_fail = wx_object.fail
    // const wx_complete = wx_object.complete
    // wx_object = null
    // // //////////
    // PROMISE((SUCCESS, FAIL) => {
    //   const my_object = {
    //     markerId: wx_markerId,
    //     path: wx_path,
    //     autoRotate: wx_autoRotate,
    //     duration: wx_duration,
    //     success(my_res) {
    //       const wx_res = {
    //         skew: my_res.skew,
    //         errMsg: my_res.errMsg
    //       }
    //       SUCCESS(wx_res)
    //     },
    //     fail(my_res) {
    //       const wx_res = {
    //         errMsg: my_res.errMsg
    //       }
    //       FAIL(wx_res)
    //     }
    //   }
    //   // if(){
    //   //   my_object.XXX = YYY;
    //   // }
    //   my.moveAlong(my_object)
    // }, wx_success, wx_fail, wx_complete)
  }

  static moveToLocation(wx_object) {
    console.log(wx_object)
    // if (!wx_object) {
    //   return
    // }
    // const wx_longitude = wx_object.longitude
    // const wx_latitude = wx_object.latitude
    // const wx_success = wx_object.success
    // const wx_fail = wx_object.fail
    // const wx_complete = wx_object.complete
    // wx_object = null

    // PROMISE((SUCCESS, FAIL) => {
    //   const my_object = {
    //     longitude: wx_longitude,
    //     latitude: wx_latitude,
    //     success(my_res) {
    //       const wx_res = {
    //         errMsg: my_res.errMsg
    //       }
    //       SUCCESS(wx_res)
    //     },
    //     fail(my_res) {
    //       const wx_res = {
    //         errMsg: my_res.errMsg
    //       }
    //       FAIL(wx_res)
    //     }
    //   }
    //   my.moveToLocation(my_object)
    // }, wx_success, wx_fail, wx_complete)
  }

  on(eventName, handlers) {
    const map = this.onekit_nodes[this.id]
    map.on(eventName, handlers)
  }

  static openMapApp(object) {
    console.log(object)
  }

  static removeGroundOverlay(object) {
    console.log(object)
  }

  static removeMarkers(object) {
    console.log(object)
  }

  static setCenterOffset(object) {
    console.log(object)
  }

  static toScreenLocation(object) {
    console.log(object)
  }

  static translateMarker(object) {
    return this.alipayMapContext.translateMarker(object)
  }

  static updateGroundOverlay(object) {
    console.log(object)
  }
}
