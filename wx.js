
import CanvasContext from "./api/CanvasContext";
import VideoContext from "./api/VideoContext";
import SelectorQuery from "./api/SelectorQuery";
import Context from "./api/Context";
import wx_cloud from "./wx.cloud";
export default class wx {
  // ///////////////// animation //////////////////////////
  static createAnimation(wx_object) {
    return my.createAnimation(wx_object);
  }
  //////////////////onKeyboardHeightChange//////////////////
  static onKeyboardHeightChange(wx_object) {
    return
  }
  // /////////////// basic ////////////////////////////////
  static canIUse(wx_object) { return true; }
  static _getSystemInfo(wx_res) {
    wx_res.SDKVersion = "2.7.0";
    my.openBluetoothAdapter({
      success: (my_res) => {
        // wx_res.bluetoothEnabled = true;
        my.closeBluetoothAdapter();
      },
      fail: (my_res) => {
        // wx_res.bluetoothEnabled = false;
        my.closeBluetoothAdapter();
      }
    });
    my.getNetworkType({
      success: (my_res) => {
        // wx_res.wifiEnabled = (my_res.networkType === "WIFI");
      },
      fail: (my_res) => {
        // wx_res.wifiEnabled = false;
      }
    });
    my.getSetting({
      success: (my_res) => {
        wx_res.locationAuthorized = (my_res.authSetting.location === true);
        wx_res.cameraAuthorized = (my_res.authSetting.camera === true);
        wx_res.microphoneAuthorized = (my_res.authSetting.audioRecord === true);
        wx_res.albumAuthorized = (my_res.authSetting.album === true);
      },
    });
    return wx_res;
  }
  static getSystemInfo(wx_object) {
    var my_object = {};
    my_object.success = function (my_res) {
      var wx_res = {
        errMsg: "getSystemInfo:ok",
        SDKVersion: "2.4.2",
        brand: my_res.brand,
        fontSizeSetting: my_res.fontSizeSetting,
        language: my_res.language,
        model: my_res.model,
        // notificationAuthorized: notificationAuthorized,
        pixelRatio: my_res.pixelRatio,
        platform: my_res.platform,
        safeArea: { height: my_res.screenHeight, width: my_res.screenWidth, bottom: my_res.screenHeight, top: 0, left: 0, right: my_res.screenWidth },
        screenHeight: my_res.screenHeight,
        screenWidth: my_res.screenWidth,
        statusBarHeight: my_res.statusBarHeight,
        system: my_res.system,
        version: my_res.version,
        windowHeight: my_res.windowWidth,
        windowWidth: my_res.windowHeight,
      };

      wx_res = wx._getSystemInfo(wx_res);
      if (wx_object.success) { wx_object.success(wx_res); }
      if (wx_object.fail) { wx_object.fail(wx_res); }
    };
    my_object.fail = function (my_res) {
      if (wx_object.fail) {
        wx_object.fail(my_res);
      }
      if (wx_object.complete) {
        objec.complete(my_res);
      }
    };

    return my.getSystemInfo(my_object);
  }
  static getSystemInfoSync() {
    return wx._getSystemInfo(my.getSystemInfoSync());
  }
  static base64ToArrayBuffer(base64) {
    base64 = base64.replace(/\s/g, '+');
    let commonContent = Buffer.from(base64, 'base64');
    return commonContent;
  }
  static arrayBufferToBase64(arrayBuffer) {
    let base64Content = Buffer.from(arrayBuffer).toString('base64');
    return base64Content;
  }
  static getUpdateManager(wx_object) { return my.getUpdateManager(wx_object); }
  static getLaunchOptionsSync(wx_object) { return my.getLaunchOptionsSync(wx_object); }
  static offPageNotFound(wx_object) { return my.offPageNotFound(wx_object); }
  static onPageNotFound(wx_object) { return my.onPageNotFound(wx_object); }
  static offError(wx_object) { return my.offError(wx_object); }
  static onError(wx_object) { return my.onError(wx_object); }
  static offAppShow(wx_object) { return my.offAppShow(wx_object); }
  static onAppShow(wx_object) { return my.onAppShow(wx_object); }
  static offAppHide(wx_object) { return my.offAppHide(wx_object); }
  static onAppHide(wx_object) { return my.onAppHide(wx_object); }
  static setEnableDebug(wx_object) { return my.setEnableDebug(wx_object); }
  static getLogManager(wx_object) { return my.getLogManager(wx_object); }
  // ///////////////// Canvas ///////////////////
  static drawCanvas(wx_object) {
    var canvasId = wx_object.canvasId;
    var actions = wx_object.actions;
    var canvasContext = my.createCanvasContext(canvasId);
    var dt;
    for (const action of actions) {
      var data = action.data;
      switch (action.method) {
        case "save":
          canvasContext.save();
          break;
        case "restore":
          canvasContext.restore();
          break;
        case "setFillStyle":
          canvasContext.setFillStyle({ wx, OnekitPage }.array2str(data[1]));
          break;
        case "setStrokeStyle":
          canvasContext.setStrokeStyle({ wx, OnekitPage }.array2str(data[1]));
          break;
        case "setFontSize":
          canvasContext.setFontSize(data[0]);
          break;
        case "setGlobalAlpha":
          canvasContext.setGlobalAlpha(data[0]);
          break;
        case "setShadow":
          var dat = data[3];
          canvasContext.setShadow(data[0], data[1], data[2], { wx, OnekitPage }.array2str(data[3]));
          break;
        case "setStrokeStyle":
          canvasContext.setStrokeStyle({ wx, OnekitPage }.array2str(data));
          break;
        case "drawImage":
          canvasContext.drawImage.apply(canvasContext, data);
          break;
        case "fillText":
          canvasContext.fillText.apply(canvasContext, data);
          break;
        case "setLineCap": canvasContext.setLineCap(data[0]); break;
        case "setLineJoin": canvasContext.setLineJoin(data[0]); break;
        case "setLineWidth": canvasContext.setLineWidth(data[0]); break;
        case "setMiterLimit": canvasContext.setMiterLimit(data[0]); break;
        case "rotate": canvasContext.rotate(data[0]); break;
        case "scale": canvasContext.scale(data[0], data[1]); break;
        case "translate": canvasContext.translate(data[0], data[1]); break;
        case "strokePath":
          canvasContext.beginPath();
          for (dat of data) {
            dt = dat.data;
            switch (dat.method) {
              case "rect": canvasContext.strokeRect(dt[0], dt[1], dt[2], dt[3]); break;
              case "moveTo": canvasContext.moveTo(dt[0], dt[1]); break;
              case "lineTo": canvasContext.lineTo(dt[0], dt[1]); break;
              case "closePath": canvasContext.closePath(); break;
              case "arc": canvasContext.arc.apply(canvasContext, dt); break;
              case "quadraticCurveTo": canvasContext.quadraticCurveTo.apply(canvasContext, dt); break;
              case "bezierCurveTo": canvasContext.bezierCurveTo.apply(canvasContext, dt); break;

              default:
                console.log("[drawCanvas-strokePath]", dat.method);
                break;
            }
          }
          canvasContext.stroke();
          break;
        case "fillPath":
          for (dat of data) {
            dt = dat.data;
            switch (dat.method) {
              case "rect": canvasContext.fillRect(dt[0], dt[1], dt[2], dt[3]); break;
              case "arc": canvasContext.arc.apply(canvasContext, dt); break;
              default:
                console.log("[drawCanvas-fillPath]", dat.method);
                break;
            }
          }
          canvasContext.fill();
          break;
        case "clearRect": canvasContext.clearRect(data[0], data[1], data[2], data[3]); break;
        default:
          console.log("[drawCanvas]", action.method);
          break;
      }
    }
    canvasContext.draw();
  }
  static createContext() {
    var context = new Context();
    return context;
  }
  static createCanvasContext(canvasId) {
    return new CanvasContext(my.createCanvasContext(canvasId));
  }
  static createVideoContext(videoId, ui) {
    return new VideoContext(my.createVideoContext(videoId));
  }
  // //////////// WXML ///////////////
  static createSelectorQuery() {
    return new SelectorQuery(my.createSelectorQuery());
  }
  static canvasToTempFilePath(wx_object) {
    var my_object = {
      canvasId: wx_object.canvasId
    };
    my_object.success = function (my_res) {
      var wx_res = {
        errMsg: "canvasToTempFilePath:ok",
        tempFilePath: my_res.apFilePath
      };
      if (wx_object.success) {
        wx_object.success(my_res);
      }
      if (wx_object.complete) {
        wx_object.complete(my_res);
      }
    };
    my_object.fail = function (my_res) {
      if (wx_object.fail) {
        wx_object.success(my_res);
      }
      if (wx_object.complete) {
        wx_object.complete(my_res);
      }
    };
    return my.canvasToTempFilePath(my_object);
  }
  static canvasPutImageData(wx_object) { return my.canvasPutImageData(wx_object); }
  static canvasGetImageData(wx_object) { return my.canvasGetImageData(wx_object); }
  // //////////// Device //////////////////
  static onBeaconServiceChange(wx_object) { return my.onBeaconServiceChange(wx_object); }
  static onBeaconUpdate(wx_object) { return my.onBeaconUpdate(wx_object); }
  static getBeacons(wx_object) { return my.getBeacons(wx_object); }
  static stopBeaconDiscovery(wx_object) { return my.stopBeaconDiscovery(wx_object); }
  static startBeaconDiscovery(wx_object) { return my.startBeaconDiscovery(wx_object); }
  static stopWifi(wx_object) { return my.stopWifi(wx_object); }
  static startWifi(wx_object) { return my.startWifi(wx_object); }
  static setWifiList(wx_object) { return my.setWifiList(wx_object); }
  static onWifiConnected(wx_object) { return my.onWifiConnected(wx_object); }
  static onGetWifiList(wx_object) { return my.onGetWifiList(wx_object); }
  static getWifiList(wx_object) { return my.getWifiList(wx_object); }
  static getConnectedWifi(wx_object) { return my.getConnectedWifi(wx_object); }
  static connectWifi(wx_object) { return my.connectWifi(wx_object); }
  // ///////////////////////////////////////////
  static setBackgroundFetchToken(my_object) {
    var wx_token = my_object.token;
    var wx_success = my_object.success;
    var wx_fail = my_object.fail;
    var wx_complete = my_object.complete;
    /////////////////
    my.setStorage({
      key: "wx_token",
      data: {
        wx_token: wx_token,
      },
    })
    my_object.success = function (wx_res) {
      var wx_res = {
        errMsg: "setBackgroundFetchToken:ok"
      };
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_success) {
        wx_complete(wx_res);
      }
    };
  };
  static getBackgroundFetchToken(my_object) {
    var quick_success = my_object.success;
    var quick_fail = my_object.fail;
    var quick_complete = my_object.complete;
    console.log(quick_success)
    my.getStorage({
      key: 'wx_token',
      success(my_res) {
        console.log(my_res.data)
      }
    })
    my_object.success = function (wx_res) {
      var wx_res = {
        errMsg: "getBackgroundFetchToken:ok"
      };
      console.log("", wx_res)

      if (wx_success) {
        quick_success(wx_res);
      }
      if (wx_success) {
        quick_complete(wx_res);
      }
    };
  };
  static onBackgroundFetchData(callback) {

  }

  static onAccelerometerChange(callback) {
    my.onAccelerometerChange(function (my_res) {
      if (wx._stopAccelerometer) {
        return;
      }
      callback(my_res);
    });
  }
  static stopAccelerometer(wx_object) {
    wx._stopAccelerometer = true;
    if (wx_object.success) {
      wx_object.success();
    }
    if (wx_object.complete) {
      wx_object.complete();
    }
  }
  static startAccelerometer(wx_object) {
    wx._stopAccelerometer = false;
    if (wx_object.success) {
      wx_object.success();
    }
    if (wx_object.complete) {
      wx_object.complete();
    }
  }
  static getBatteryInfoSync(wx_object) { return my.getBatteryInfoSync(wx_object); }
  static _getBatteryInfo(wx_res) {
    my.getSystemInfo({
      success: (my_res) => {
        var percent = my_res.currentBattery;
        function toPoint(percent) {
          var str = percent.replace("%", "");
          str = str / 100;
          return str;
        }
        toPoint(percent);
        var results = toPoint(percent);
        wx_res.level = results;
      }
    });
    return wx_res;
  }
  static getBatteryInfo(wx_object) {
    var my_object = {};
    my_object.success = function (my_res) {
      var wx_res = {
        errMsg: "getBatteryInfo:ok",
        isCharging: false,
      };
      wx_res = wx._getBatteryInfo(wx_res);
      if (wx_object.success) { wx_object.success(wx_res); }
      if (wx_object.fail) { wx_object.fail(wx_res); }
    };
    my_object.fail = function (my_res) {
      if (wx_object.success) { wx_object.success(my_res); }
      if (wx_object.fail) { wx_object.fail(my_res); }
    };
    return my.getSystemInfo(my_object);
  }
  //
  static getClipboardData(wx_object) {
    var my_object = {};
    if (wx_object) {
      my_object.success = function (my_res) {
        var wx_res = { data: my_res.text };
        if (wx_object.success) { wx_object.success(wx_res); }
        if (wx_object.fail) { wx_object.fail(wx_res); }
      };
      my_object.fail = function (my_res) {
        if (wx_object.success) { wx_object.success(my_res); }
        if (wx_object.fail) { wx_object.fail(my_res); }
      };
    }
    return my.getClipboard(my_object);
  }
  static setClipboardData(wx_object) {
    var my_object;
    if (wx_object) {
      my_object = {};
      for (var key in wx_object) {
        switch (key) {
          case "data":
            my_object.text = wx_object[key];
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
    }
    return my.setClipboard(my_object);
  }
  static onCompassChange(callback) {
    my.onCompassChange(function (my_res) {
      if (wx._stopCompass) {
        return;
      }
      callback(my_res);
    });
  }
  static stopCompass(wx_object) {
    wx._stopCompass = true;
    if (wx_object.success) {
      wx_object.success();
    }
    if (wx_object.complete) {
      wx_object.complete();
    }
  }
  static startCompass(wx_object) {
    wx._stopCompass = false;
    if (wx_object.success) {
      wx_object.success();
    }
    if (wx_object.complete) {
      wx_object.complete();
    }
  }
  static addPhoneContact(wx_object) {
    var my_object = {};
    var errMsg;
    var wx_res = {
      errMsg: errMsg
    };
    my_object.success = function (my_res) {
      wx_res.errMsg = "addPhoneContact:ok";
      if (wx_object.success) {
        wx_object.success(wx_res);
      }
      if (wx_object.complete) {
        wx_object.complete(wx_res);
      }
    };
    my_object.fail = function (my_res) {
      wx_res.errMsg = "addPhoneContact:fail cancel";
      if (wx_object.fail) {
        wx_object.fail(wx_res);
      }
      if (wx_object.complete) {
        wx_object.complete(wx_res);
      }
    };
    return my.addPhoneContact(my_object);
  }
  static onGyroscopeChange(callback) {
    my.onGyroscopeChange(function (my_res) {
      if (wx._stopGyroscope) {
        return;
      }
      callback(my_res);
    });
  }
  static stopGyroscope(wx_object) {
    wx._stopGyroscope = true;
    if (wx_object.success) {
      wx_object.success();
    }
    if (wx_object.complete) {
      wx_object.complete();
    }
  }
  static startGyroscope(wx_object) {
    wx._startGyroscope = false;
    if (wx_object.success) {
      wx_object.success();
    }
    if (wx_object.complete) {
      wx_object.complete();
    }
  }
  //
  static onDeviceMotionChange(wx_object) { return my.onDeviceMotionChange(wx_object); }
  static stopDeviceMotionListening(wx_object) { return my.stopDeviceMotionListening(wx_object); }
  static startDeviceMotionListening(wx_object) { return my.startDeviceMotionListening(wx_object); }
  //
  static getNetworkType(wx_object) {
    var my_object = {};
    for (var key in wx_object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          my_object[key] = wx_object[key];
          break;
      }
    }
    my_object.success = function (my_res) {
      var wx_res = { networkType: wx._network(my_res).networkType };
      if (wx_object.success) {
        wx_object.success(wx_res);
      }
      if (wx_object.complete) {
        wx_object.complete(wx_res);
      }
    };
    my_object.fail = function (my_res) {
      if (wx_object.fail) {
        wx_object.success(my_res);
      }
      if (wx_object.complete) {
        wx_object.complete(my_res);
      }
    };

    return my.getNetworkType(my_object);
  }
  static _network(my_res) {
    var networkType;
    if (my_res.networkAvailable) {
      switch (my_res.networkType) {
        case "WWAN":
          networkType = "WIFI";
          break;
        default:
          networkType = my_res.networkType;
          break;
      }
    } else {
      networkType = "NONE";
    }
    return { isConnected: my_res.networkAvailable, networkType: networkType.toLowerCase() };
  }
  static onNetworkStatusChange(callack) {
    my.onNetworkStatusChange(function (my_res) {
      callack(wx._network(my_res));
    });
  }


  //
  static makePhoneCall(wx_object) {
    var my_object;
    if (wx_object) {
      my_object = {};
      for (var key in wx_object) {
        switch (key) {
          case "phoneNumber":
            my_object.number = wx_object[key];
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }

      return my.makePhoneCall(my_object);
    }
  }

  static scanCode(wx_object) {
    var my_object;
    if (wx_object) {
      my_object = {};
      for (var key in wx_object) {
        switch (key) {
          case "onlyFromCamera":
            my_object.hideAlbum = wx_object[key];
            break;
          case "scanType":
            my_object.type = wx_object[key];
            break;
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
      my_object.success = function (my_res) {
        console.log(my_res)
        var wx_res = {};
        if (my_res.code) {
          wx_res.charSet = "UTF-8";
          wx_res.wx_res = my_res.code;
          if (my_res.qrCode) {
            wx_res.scanType = "QR_CODE";
          } else if (my_res.barCode) {
            wx_res.scanType = "EAN_8";
          }
        }
        if (wx_object.success) {
          wx_object.success(wx_res);
        }
        if (wx_object.complete) {
          wx_object.complete(wx_res);
        }
      };
      my_object.fail = function (my_res) {
        console.log(my_res)
        if (wx_object.fail) {
          wx_object.fail(my_res);
        }
        if (wx_object.complete) {
          wx_object.complete(my_res);
        }
      };
    }
    return my.scan(my_object);
  }
  //
  static vibrateLong(wx_object) {
    var my_object = {};
    my_object.success = function (my_res) {
      var wx_res = {
        errMsg: "vibrateLong:ok"
      };
      if (wx_object.success) {
        wx_object.success(wx_res);
      }
      if (wx_object.complete) {
        wx_object.complete(wx_res);
      }
    };
    return my.vibrateLong(my_object);
  }
  static vibrateShort(wx_object) {
    var my_object = {};
    my_object.success = function (my_res) {
      var wx_res = {
        errMsg: "vibrateShort:ok"
      };
      if (wx_object.success) {
        wx_object.success(wx_res);
      }
      if (wx_object.complete) {
        wx_object.complete(wx_res);
      }
    };
    return my.vibrateShort(my_object);
  }
  //
  static onMemoryWarning(wx_object) { return my.onMemoryWarning(wx_object); }
  //
  static writeBLECharacteristicValue(wx_object) { return my.writeBLECharacteristicValue(wx_object); }
  static readBLECharacteristicValue(wx_object) { return my.readBLECharacteristicValue(wx_object); }
  static onBLEConnectionStateChange(wx_object) { return my.onBLEConnectionStateChange(wx_object); }
  static onBLECharacteristicValueChange(wx_object) { return my.onBLECharacteristicValueChange(wx_object); }
  static notifyBLECharacteristicValueChange(wx_object) { return my.notifyBLECharacteristicValueChange(wx_object); }
  static getBLEDeviceServices(wx_object) { return my.getBLEDeviceServices(wx_object); }
  static getBLEDeviceCharacteristics(wx_object) { return my.getBLEDeviceCharacteristics(wx_object); }
  static createBLEConnection(wx_object) { return my.createBLEConnection(wx_object); }
  static closeBLEConnection(wx_object) { return my.closeBLEConnection(wx_object); }
  //
  static stopBluetoothDevicesDiscovery(wx_object) {
    var my_object = {};
    for (var key in wx_object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          my_object[key] = wx_object[key];
          break;
      }
    }
    return my.stopBluetoothDevicesDiscovery(my_object);
  }
  static startBluetoothDevicesDiscovery(wx_object) {
    wx.openBluetoothAdapter(wx_object);
    return my.startBluetoothDevicesDiscovery(wx_object);
  }
  static openBluetoothAdapter(wx_object) {
    var my_object = {};
    my_object.success = function (my_res) {
      var wx_res = { errMsg: "openBluetoothAdapter:ok" };
      if (wx_object.success) { wx_object.success(wx_res); }
      if (wx_object.complete) { wx_object.complete(wx_res); }
    };
    my_object.fail = function (my_res) {
      if (wx_object.success) { wx_object.success(my_res); }
      if (wx_object.complete) { wx_object.complete(my_res); }
    };
    return my.openBluetoothAdapter(my_object);
  }
  static onBluetoothDeviceFound(wx_object) { return my.onBluetoothDeviceFound(wx_object); }
  static onBluetoothAdapterStateChange(wx_object) { return my.onBluetoothAdapterStateChange(wx_object); }
  static getConnectedBluetoothDevices(wx_object) { return my.getConnectedBluetoothDevices(wx_object); }
  static getBluetoothDevices(wx_object) {
    var my_object = {};
    my_object.success = function (my_res) {
      my.getBluetoothDevices({
        success: (my_res) => {
          // console.log("000", my_res)
          // console.log("000", my_res.devices)
          wx_res.devices = my_res.devices;
        }
      });
      var wx_res = {
        errMsg: "closeBluetoothAdapter:ok"
      };
      if (wx_object.success) { wx_object.success(wx_res); }
      if (wx_object.complete) { wx_object.complete(wx_res); }
    };
    my_object.fail = function (my_res) {
      if (wx_object.success) { wx_object.success(my_res); }
      if (wx_object.complete) { wx_object.complete(my_res); }
    };
    return my.getBluetoothDevices(my_object);
  }
  static getBluetoothAdapterState(wx_object) { return my.getBluetoothAdapterState(wx_object); }
  static closeBluetoothAdapter(wx_object) { return my.closeBluetoothAdapter(wx_object); }
  //
  static stopHCE(wx_object) { return my.stopHCE(wx_object); }
  static startHCE(wx_object) { return my.startHCE(wx_object); }
  static sendHCEMessage(wx_object) { return my.sendHCEMessage(wx_object); }
  static onHCEMessage(wx_object) { return my.onHCEMessage(wx_object); }
  static getHCEState(wx_object) { return my.getHCEState(wx_object); }
  //
  static setScreenBrightness(wx_object) {
    var my_object;
    if (wx_object) {
      my_object = {};
      for (var key in wx_object) {
        switch (key) {
          case "value":
            my_object.brightness = wx_object[key];
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
    }
    return my.setScreenBrightness(my_object);
  }
  static setKeepScreenOn(wx_object) { return my.setKeepScreenOn(wx_object); }
  static onUserCaptureScreen(wx_object) { return my.onUserCaptureScreen(wx_object); }

  static getScreenBrightness(wx_object) {
    var my_object;
    if (wx_object) {
      my_object = {};
      for (var key in wx_object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
    }
    my_object.success = function (my_res) {
      var wx_res = { value: my_res.brightness };
      if (wx_object.success) {
        wx_object.success(wx_res);
      }
      if (wx_object.complete) {
        wx_object.complete(wx_res);
      }
    };
    my_object.fail = function (my_res) {
      if (wx_object.fail) {
        wx_object.success(my_res);
      }
      if (wx_object.complete) {
        wx_object.complete(my_res);
      }
    };
    return my.getScreenBrightness(my_object);
  }
  // ///////////////// Ext //////////////
  static getExtConfigSync(wx_object) { return my.getExtConfigSync(wx_object); }
  static getExtConfig(wx_object) { return my.getExtConfig(wx_object); }
  // ////////////////// File //////////
  static getFileSystemManager(wx_object) { return my.getFileSystemManager(wx_object); }
  static getFileInfo(wx_object) { return my.getFileInfo(wx_object); }
  static removeSavedFile(wx_object) { return my.removeSavedFile(wx_object); }
  static getSavedFileInfo(wx_object) { return my.getSavedFileInfo(wx_object); }
  static getSavedFileList(wx_object) { return my.getSavedFileList(wx_object); }
  static openDocument(wx_object) { return my.openDocument(wx_object); }
  static saveFile(wx_object) {
    my.saveFile({
      apFilePath: wx_object.tempFilePath,
      success(my_res) {
        var wx_res = { savedFilePath: my_res.apFilePath };
        if (wx_object.success) {
          wx_object.success(wx_res);
        }
        if (wx_object.complete) {
          wx_object.complete(wx_res);
        }
      }, fail(my_res) {
        if (wx_object.fail) {
          wx_object.fail(my_res);
        }
        if (wx_object.complete) {
          wx_object.complete(my_res);
        }
      }
    });
  }
  // ////////// Location ///////////////
  static openLocation(wx_object) { return my.openLocation(wx_object); }
  static getLocation(wx_object) { return my.getLocation(wx_object); }
  static chooseLocation(wx_object) { return my.chooseLocation(wx_object); }
  // //////// Media ////////////////////
  static createMapContext(wx_object) { return my.createMapContext(wx_object); }
  static compressImage(wx_object) { return my.compressImage(wx_object); }
  static saveImageToPhotosAlbum(wx_object) { return my.saveImageToPhotosAlbum(wx_object); }
  static getImageInfo(wx_object) { return my.getImageInfo(wx_object); }
  static previewImage(wx_object) { return my.previewImage(wx_object); }
  static chooseImage(wx_object) {
    if (!wx_object.count) {
      wx_object.count = 0;
    }
    my.chooseImage({
      conut: wx_object.count,
      sizeType: wx_object.sizeType,
      sourceType: wx_object.scourceType,
      success: (my_res) => {
        var tempFilePaths = [];
        var tempFiles = [];
        for (var path of my_res.apFilePaths) {
          tempFilePaths.push(path);
          tempFiles.push({ path: path, size: 1000000 });
        }
        var wx_res = {
          tempFilePaths: tempFilePaths,
          tempFiles: tempFiles
        };
        if (wx_object.success) {
          wx_object.success(wx_res);
        }
        if (wx_object.complete) {
          wx_object.complete(complete);
        }
      },
      fail: (my_res) => {
        if (wx_object.fail) {
          wx_object.fail(my_res);
        }
        if (wx_object.complete) {
          wx_object.complete(my_res);
        }
      }
    });
  }
  static saveVideoToPhotosAlbum(wx_object) { return my.saveVideoToPhotosAlbum(wx_object); }
  static chooseVideo(wx_object) { return my.chooseVideo(wx_object); }
  static createVideoContext(videoId, ui) { return new VideoContext(my.createVideoContext(videoId)); }
  static stopVoice(wx_object) { return my.stopVoice(wx_object); }
  static pauseVoice(wx_object) { return my.pauseVoice(wx_object); }
  static playVoice(wx_object) { return my.playVoice(wx_object); }
  static setInnerAudioOption(wx_object) { return my.setInnerAudioOption(wx_object); }
  static getAvailableAudioSources(wx_object) { return my.getAvailableAudioSources(wx_object); }
  static createInnerAudioContext(wx_object) { return my.createInnerAudioContext(wx_object); }
  static createAudioContext(wx_object) { return my.createAudioContext(wx_object); }
  static onBackgroundAudioStop(wx_object) { return my.onBackgroundAudioStop(wx_object); }
  static onBackgroundAudioPause(wx_object) { return my.onBackgroundAudioPause(wx_object); }
  static onBackgroundAudioPlay(wx_object) { return my.onBackgroundAudioPlay(wx_object); }
  static stopBackgroundAudio(wx_object) { return my.stopBackgroundAudio(wx_object); }
  static seekBackgroundAudio(wx_object) { return my.seekBackgroundAudio(wx_object); }
  static pauseBackgroundAudio(wx_object) { return my.pauseBackgroundAudio(wx_object); }
  static playBackgroundAudio(wx_object) { return my.playBackgroundAudio(wx_object); }
  static getBackgroundAudioPlayerState(wx_object) { return my.getBackgroundAudioPlayerState(wx_object); }
  static getBackgroundAudioManager(wx_object) { return my.getBackgroundAudioManager(wx_object); }
  static createLivePusherContext(wx_object) { return my.createLivePusherContext(wx_object); }
  static startRecord(wx_object) { return my.startRecord(wx_object); }
  static stopRecord(wx_object) { return my.stopRecord(wx_object); }
  static getRecorderManager(wx_object) { return my.getRecorderManager(wx_object); }
  // ////////////// Network ///////////////
  static request(wx_object) {

    if (!wx_object) {
      return;
    }
    const wx_url = object.url;
    const wx_data = object.data;
    const wx_method = object.method || "GET";
    const wx_success = object.success;
    const wx_fail = object.fail;
    const wx_complete = object.complete;
    //
    var my_object = {};
    //
   if (uni_data) {
      my_object.data = wx_data;
    }
    //
    my_object.success = function (my_res) {
      var wx_res = {
        data: my_res.data,
        statusCode: my_res.status,
        header: my_res.headers
      };
      if (wx_object.success) {
        wx_object.success(wx_res);
      }
      if (wx_object.complete) {
        wx_object.complete(wx_res);
      }
    };
    my_object.fail = function (my_res) {
     var wx_res = {

      };
      if (wx_object.fail) {
        wx_object.fail(wx_res);
      }
      if (wx_object.complete) {
        wx_object.complete(wx_res);
      }
    };

    const my_result =  my.httpRequest(my_object);
    const wx_result = {};
    /**/
    return wx_result;
  }
  //////////////////////////////////////////////////////////////
  static downloadFile(wx_object) { return my.downloadFile(wx_object); }
  static uploadFile(wx_object) {
    my.uploadFile({
      url: wx_object.url,
      filePath: wx_object.filePath,
      fileName: wx_object.name,
      fileType: "image",
      header: wx_object.header,
      formData: wx_object.formData,
      success: wx_object.success,
      fail: wx_object.fail,
      complete: wx_object.complete
    });
  }
  //
  static connectSocket(wx_object) { return my.connectSocket(wx_object); }
  static onSocketError(wx_object) { return my.onSocketError(wx_object); }
  static onSocketMessage(wx_object) { return my.onSocketMessage(wx_object); }
  static onSocketClose(wx_object) { return my.onSocketClose(wx_object); }
  static onSocketOpen(wx_object) { return my.onSocketOpen(wx_object); }
  static sendSocketMessage(wx_object) { return my.sendSocketMessage(wx_object); }
  static closeSocket(wx_object) { return my.closeSocket(wx_object); }
  static offLocalServiceResolveFail(callbck) { return my.offLocalServiceResolveFail(callbck); }
  static onLocalServiceResolveFail(callbck) { return my.onLocalServiceResolveFail(callbck); }
  static onLocalServiceDiscoveryStop(callbck) { return my.onLocalServiceDiscoveryStop(callbck); }
  static offLocalServiceLost(callbck) { return my.offLocalServiceLost(callbck); }
  static onLocalServiceLost(callbck) { return my.onLocalServiceLost(callbck); }
  static offLocalServiceFound(callbck) { return my.offLocalServiceFound(callbck); }
  static onLocalServiceFound(callbck) { return my.onLocalServiceFound(callbck); }
  static stopLocalServiceDiscovery(wx_object) { return my.stopLocalServiceDiscovery(wx_object); }
  static startLocalServiceDiscovery(wx_object) { return my.startLocalServiceDiscovery(wx_object); }

  // /////// Open Interface //////////
  static _checkSession() {
    var now = new Date().getTime();
    return getApp().onekitwx._jscode && getApp().onekitwx._login && now <= getApp().onekitwx._login + 1000 * 60 * 60 * 24 * 3;
  }
  static checkSession(wx_object) {
    if (this._checkSession()) {
      if (wx_object.success) {
        wx_object.success();
      }
      if (wx_object.complete) {
        wx_object.complete();
      }

    } else {
      if (wx_object.fail) {
        wx_object.fail();
      }
      if (wx_object.complete) {
        wx_object.complete();
      }
    }

    /*
       var url = getApp().onekitwx.server + "userinfo";
       my.httpRequest({
             url: url,
             header: {
               'Content-Type': 'application/x-www-form-urlencoded'
             },
             method: "POST",
             data: {
               nickname: my_res.nickName,
               avatarUrl: my_res.avatar,
               js_code: jscode
             },
             success(my_res) {
               if (wx_object.success) {
                 wx_object.success(my_res.data);
               }
               if (wx_object.complete) {
                 wx_object.complete(my_res.data);
               }
             }, fail(my_res) {
               console.log(my_res.data);
             }
           });
     }*/

  }

  static login(wx_object) {
    var that = this;
    if (!wx_object) {
      return my.getAuthCode(wx_object);
    }
    var my_object = {
      scopes: "auth_user"
    };
    my_object.success = function (my_res) {
      getApp().onekitwx._jscode = my_res.authCode;
      getApp().onekitwx._login = new Date().getTime();
      var wx_res = { code: my_res.authCode };
      if (wx_object.success) {
        wx_object.success(wx_res);
      }
      if (wx_object.complete) {
        wx_object.complete(complete);
      }
    }
    my_object.fail = function (my_res) {
      if (wx_object.fail) {
        wx_object.fail(my_res);
      }
      if (wx_object.complete) {
        wx_object.complete(my_res);
      }
    }
    if (wx._checkSession()) {
      my_object.success({ authCode: getApp().onekitwx._jscode });
    } else {
      my.getAuthCode(my_object);
    }
  };
  static getUserInfo(wx_object) {


    wx.login({
      success: (my_res) => {
        var jscode = my_res.code;
        var withCredentials = wx_object.withCredentials;
        my.getAuthUserInfo({
          success(my_res) {
            console.log(my_res);
            var url = getApp().onekit.server + "api/userinfo";
            console.log(url);
            my.httpRequest({
              url: url,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: "POST",
              data: {
                withCredentials: withCredentials === true,
                js_code: jscode
              },
              success(my_res) {
                console.log(my_res.data);
                if (wx_object.success) {
                  wx_object.success(my_res.data);
                }
                if (wx_object.complete) {
                  wx_object.complete(my_res.data);
                }
              }, fail(my_res) {
                console.log(my_res.data);
              }
            });
          }
        });
      }
    });
  }
  static getOpenData(wx_object) {

    if (!getApp().onekit._opendataCallbacks) {
      getApp().onekit._opendataCallbacks = [];
    }
    function success(my_res) {
      var opendata = my_res.userInfo;
      getApp().onekit._opendata = opendata;
      for (var cb = 0; cb < getApp().onekit._opendataCallbacks.length; cb++) {
        getApp().onekit._opendataCallbacks[cb](opendata);
      }
      if (wx_object.success) {
        wx_object.success(opendata);
      }
      if (wx_object.complete) {
        wx_object.complete(opendata);
      }
    }
    var opendata = getApp().onekit._opendata;
    if (opendata) {
      if (Object.keys(opendata) > 0) {
        wx_object.success(opendata);
      } else {
        if (wx_object.success) {
          getApp().onekit._opendataCallbacks.push(wx_object.success);
        }
      }
      return;
    }
    getApp().onekit._opendata = {};
    wx.login({
      success(my_res) {
        var jscode = my_res.code;
        my.getAuthUserInfo({
          success(my_res) {
            var url = getApp().onekit.server + "opendata";
            my.httpRequest({
              url: url,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: "POST",
              data: {
                nickname: my_res.nickName,
                avatarUrl: my_res.avatar,
                js_code: jscode
              },
              success(my_res) {
                success(my_res.data);
              }, fail(my_res) {
                console.log(my_res);
              }
            });
          }
        });
      }
    });

  }
  static getPhoneNumber(wx_object) {

    wx.login({
      success: (my_res) => {
        var jscode = my_res.code;
        console.log("ssss" + jscode);
        my.getPhoneNumber({
          success(my_res) {
            // var response = {
            // response:
            // "ZOELfBOrmRHNNiiVR4FmNrvV7Dmog5w/KFaNrfLugkDqdkPzlxBCzmfLBrtQlPptWix+1f9I07p5xNfwGgTgVA==",
            // sign:
            // "fD6CyFQeJTTgtM1uviy5uAm4YWiN3s0crGtD1v5XdXuDzFEBPTRYqGODcfzskAMFWNXJAK5Zx0/kk+6e9tn/N3U9RcrTgc6VLw7HM9fPTcz8CzVl1+b6fjsi0wWsADF53vKTurFn6HTSTEJvzbMMD5M2lgazni72tZHCNJSkeG1W+kjX/Mj5tfJXNkn6nlrtu1N6BxgsZdgDdkMQfIrWv2TOFlpx043LMBmk4CxXLpGvRfRcHLjixs5wEO1dfqENn6oj9hAQbPA8itYW4TvGlo5qhnzT+ya1rWcKrjn4zh7uvnr0hB0oPiqLu17txS5uIQIF0DJ2cC0k6kuOQLVwTQ=="
            // }
            // JSON.parse(my_res.response);
            var response = JSON.parse(my_res.response);
            console.log(response);
            var url = getApp().onekit.server + "phonenumber";
            my.httpRequest({
              url: url,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: "POST",
              data: {
                response: response.response,
                sign: response.sign,
                js_code: jscode
              },
              success(my_res) {
                var data = my_res.data;
                if (wx_object.success) {
                  wx_object.success(data);
                }
                if (wx_object.complete) {
                  wx_object.complete(data);
                }
              }, fail(my_res) {
                console.log(my_res.data);
              }
            });
          }
        });
      },
    });

  }
  static navigateToMiniProgram(wx_object) { return my.navigateToMiniProgram(wx_object); }
  static navigateBackMiniProgram(wx_object) { return my.navigateBackMiniProgram(wx_object); }
  static getAccountInfoSync(wx_object) { return my.getAccountInfoSync(wx_object); }

  static reportMonitor(wx_object) { return my.reportMonitor(wx_object); }
  static reportAnalytics(wx_object) { return my.reportAnalytics(wx_object); }
  static requestPayment(wx_object) {
    var tradeNO = wx_object.package.split("=")[1];
    console.log(tradeNO);
    var my_object = {
      tradeNO: tradeNO,
      success: wx_object.success,
      fail: wx_object.fail,
      complete: wx_object.complete
    };
    return my.tradePay(my_object);
  }
  static authorize(wx_object) { return my.authorize(wx_object); }
  static openSetting(wx_object) { return my.openSetting(wx_object); }
  static getSetting(wx_object) { return my.getSetting(wx_object); }
  static chooseAddress(wx_object) { return my.chooseAddress(wx_object); }
  static openCard(wx_object) {
    my.openCardList();
    if (wx_object.success) {
      wx_object.success();
    }
    if (wx_object.complete) {
      wx_object.complete();
    }
  }
  static addCard(wx_object) {
    var url = getApp().onekit.server + "addcard";
    my.httpRequest({
      url: url,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      data: {
        cardList: JSON.stringify(wx_object.cardList),
        js_code: wx_object.jscode
      },
      success(my_res) {
        var data = my_res.data;
        if (wx_object.success) {
          wx_object.success(data);
        }
        if (wx_object.complete) {
          wx_object.complete(data);
        }
      }, fail(my_res) {
        console.log(my_res.data);
      }
    });
  }
  static chooseInvoiceTitle(wx_object) { return my.chooseInvoiceTitle(wx_object); }
  static chooseInvoice(wx_object) { return my.chooseInvoice(wx_object); }
  static startSoterAuthentication(wx_object) { return my.startSoterAuthentication(wx_object); }
  static checkIsSupportSoterAuthentication(wx_object) { return my.checkIsSupportSoterAuthentication(wx_object); }
  static checkIsSoterEnrolledInDevice(wx_object) { return my.checkIsSoterEnrolledInDevice(wx_object); }
  static getWeRunData(wx_object) { return my.getWeRunData(wx_object); }

  // //////// Router //////////////
  static navigateBack(wx_object) {
    var my_object;
    if (wx_object) {
      my_object = {};
      for (var key in wx_object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
      my_object.success = function (my_res) {
        if (wx_object.success) {
          wx_object.success(wx_res);
        }
        if (wx_object.complete) {
          wx_object.complete(wx_res);
        }
      };
      my_object.fail = function (my_res) {
        if (wx_object.fail) {
          wx_object.success(my_res);
        }
        if (wx_object.complete) {
          wx_object.complete(my_res);
        }
      };
    }
    return my.navigateBack(my_object);
  }
  static switchTab(wx_object) {
    var my_object;
    if (wx_object) {
      my_object = {};
      for (var key in wx_object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
    }
    my_object.success = function (my_res) {
      if (wx_object.success) {
        wx_object.success(wx_res);
      }
      if (wx_object.complete) {
        wx_object.complete(wx_res);
      }
    };
    my_object.fail = function (my_res) {
      if (wx_object.fail) {
        wx_object.success(my_res);
      }
      if (wx_object.complete) {
        wx_object.complete(my_res);
      }
    };
    return my.switchTab(my_object);
  }
  static navigateTo(wx_object) {
    var my_object;
    if (wx_object) {
      my_object = {};
      for (var key in wx_object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
    }
    my_object.success = function (my_res) {
      if (wx_object.success) {
        wx_object.success(wx_res);
      }
      if (wx_object.complete) {
        wx_object.complete(wx_res);
      }
    };
    my_object.fail = function (my_res) {
      if (wx_object.fail) {
        wx_object.success(my_res);
      }
      if (wx_object.complete) {
        wx_object.complete(my_res);
      }
    };
    return my.navigateTo(my_object);
  }
  static reLaunch(wx_object) {
    var my_object;
    if (wx_object) {
      my_object = {};
      for (var key in wx_object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
    }
    my_object.success = function (my_res) {
      if (wx_object.success) {
        wx_object.success(wx_res);
      }
      if (wx_object.complete) {
        wx_object.complete(wx_res);
      }
    };
    my_object.fail = function (my_res) {
      if (wx_object.fail) {
        wx_object.success(my_res);
      }
      if (wx_object.complete) {
        wx_object.complete(my_res);
      }
    };
    return my.reLaunch(my_object);
  }
  static redirectTo(wx_object) {
    var my_object;
    if (wx_object) {
      my_object = {};
      for (var key in wx_object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
    }
    my_object.success = function (my_res) {
      if (wx_object.success) {
        wx_object.success(wx_res);
      }
      if (wx_object.complete) {
        wx_object.complete(wx_res);
      }
    };
    my_object.fail = function (my_res) {
      if (wx_object.fail) {
        wx_object.success(my_res);
      }
      if (wx_object.complete) {
        wx_object.complete(my_res);
      }
    };
    return my.redirectTo(my_object);
  }
  // /////////// Share /////////////
  static updateShareMenu(wx_object) { return my.updateShareMenu(wx_object); }
  static showShareMenu(wx_object) {
    my.navigateTo({
      url: "/wx/page/share/share"
    });
  }
  static hideShareMenu(wx_object) { return my.hideShareMenu(wx_object); }
  static getShareInfo(wx_object) { return my.getShareInfo(wx_object); }
  // ///////////// Storage //////////////
  static getStorageInfoSync(wx_object) { return my.getStorageInfoSync(wx_object); }
  static getStorageInfo(wx_object) { return my.getStorageInfo(wx_object); }
  static clearStorageSync(wx_object) { return my.clearStorageSync(wx_object); }
  static clearStorage(wx_object) { return my.clearStorage(wx_object); }
  static removeStorageSync(wx_object) { return my.removeStorageSync(wx_object); }
  static removeStorage(wx_object) { return my.removeStorage(wx_object); }
  static setStorageSync(key, value) { return my.setStorageSync({ key: key, data: value }); }
  static setStorage(wx_object) { return my.setStorage(wx_object); }
  static getStorageSync(key) {
    var wx_res = my.getStorageSync({ key: key });
    if (!wx_res) {
      return "";
    } else if (wx_res.data) {
      return wx_res.data;
    } else if (wx_res.APDataStorage) {
      return wx_res.APDataStorage;
    } else {
      return "";
    }
  }
  static getStorage(wx_object) { return my.getStorage(wx_object); }
  // //////////// UI ////////////////
  static showActionSheet(wx_object) {
    var my_object;
    if (wx_object) {
      my_object = {};
      for (var key in wx_object) {
        switch (key) {
          case "itemList":
            my_object.items = wx_object[key];
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
      my_object.success = function (my_res) {
        var wx_res = { tapIndex: my_res.index };
        if (wx_object.success) {
          wx_object.success(wx_res);
        }
        if (wx_object.complete) {
          wx_object.complete(wx_res);
        }
      };
    }
    return my.showActionSheet(my_object);
  }
  // static redirectTo(wx_object) { return my.redirectTo(wx_object); }
  // static redirectTo(wx_object) { return my.redirectTo(wx_object); }
  static hideLoading(wx_object) { return my.hideLoading(wx_object); }
  static showLoading(wx_object) {
    var my_object;
    if (wx_object) {
      if (!wx_object.icon) {
        wx_object.icon = "success";
      }
      //
      my_object = {};
      for (var key in wx_object) {
        switch (key) {
          case "title":
            my_object.content = wx_object[key];
            break;
          case "icon":
            my_object.type = wx_object[key];
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
    }
    return my.showLoading(my_object);
  }
  static hideToast(wx_object) {
    var my_object = {};
    for (var key in wx_object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          my_object[key] = wx_object[key];
          break;
      }
    }
    return my.hideToast(my_object);
  }
  static showToast(wx_object) {
    if (!wx_object) {
      return
    }
    let wx_title = wx_object.title;   // 必填项 现实的文本
    let wx_icon = wx_object.icon || 'success';  // 图片
    let wx_image = wx_object.image;
    let wx_duration = wx_object.duration || 1500 // 间隔时长
    let wx_mask = wx_object.mask;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    wx_object = null;
    let my_object = {}
    if (wx_title) {
      my_object.content = wx_title
    }
    if (wx_icon) {
      my_object.type = wx_icon
    }
    if (wx_duration) {
      my_object.duration = wx_duration
    }
    //////////////
    my_object.success = function (my_res) {
      if (wx_success) {
        wx_success(my_res);
      }
      if (wx_complete) {
        wx_complete(my_res);
      }
    };
    my_object.fail = function (my_res) {
      if (wx_fail) {
        wx_fail(my_res);
      }
      if (wx_complete) {
        wx_complete(my_res);
      }
    };
    return my.showToast(my_object);
  }
  static showModal(my_object) {
    if (my_object === null) {
      return my.confirm();
    }
    var wx_object = {};
    var key;
    if (my_object.showCancel === null || my_object.showCancel) {
      for (key in my_object) {
        switch (key) {
          case "cancelText":
            wx_object.cancelButtonText = my_object[key];
            break;
          case "confirmText":
            wx_object.confirmButtonText = my_object[key];
            break;
          default:
            wx_object[key] = my_object[key];
            break;
        }
      }

      return my.confirm(wx_object);
    } else {
      for (key in my_object) {
        switch (key) {
          default:
            wx_object[key] = my_object[key];
            break;
        }
      }

      return my.alert(wx_object);
    }
  }
  static setNavigationBarColor(wx_object) { return my.setNavigationBarColor(wx_object); }
  static hideNavigationBarLoading(wx_object) {
    var my_object = {};
    for (var key in wx_object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          my_object[key] = wx_object[key];
          break;
      }
    }
    return my.hideNavigationBarLoading(my_object);
  }
  static showNavigationBarLoading(wx_object) {
    var my_object = {};
    for (var key in wx_object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          my_object[key] = wx_object[key];
          break;
      }
    }
    return my.showNavigationBarLoading(my_object);
  }
  static setNaivgationBarTitle(wx_object) { return my.setNavigationBar(wx_object); }
  static setBackgroundTextStyle(wx_object) { return my.setBackgroundTextStyle(wx_object); }

  static setBackgroundColor(wx_object) { return my.setBackgroundColor(wx_object); }
  static setTabBarItem(wx_object) { return my.setTabBarItem(wx_object); }
  static setTabBarStyle(wx_object) { return my.setTabBarStyle(wx_object); }
  static hideTabBar(wx_object) { return my.hideTabBar(wx_object); }
  static showTabBar(wx_object) { return my.showTabBar(wx_object); }
  static hideTabBarRedDot(wx_object) { return my.hideTabBarRedDot(wx_object); }
  static showTabBarRedDot(wx_object) { return my.showTabBarRedDot(wx_object); }
  static removeTabBarBadge(wx_object) { return my.removeTabBarBadge(wx_object); }
  static setTabBarBadge(wx_object) { return my.setTabBarBadge(wx_object); }

  static loadFontFace(wx_object) { return my.loadFontFace(wx_object); }

  static stopPullDownRefresh(wx_object) {
    var my_object = {};
    if (wx_object) {
      my_object.success = function (my_res) {
        if (wx_object.success) {
          wx_object.success(my_res);
        }
        if (wx_object.complete) {
          wx_object.complete(my_res);
        }
      };
      my_object.fail = function (my_res) {
        if (wx_object.fail) {
          wx_object.fail(my_res);
        }
        if (wx_object.complete) {
          wx_object.complete(my_res);
        }
      };
    }
    return my.stopPullDownRefresh(my_object);
  }
  static startPullDownRefresh(wx_object) {
    var my_object = {};
    if (wx_object) {
      my_object.success = function (my_res) {
        if (wx_object.success) {
          wx_object.success(my_res);
        }
        if (wx_object.complete) {
          wx_object.complete(my_res);
        }
      };
      my_object.fail = function (my_res) {
        if (wx_object.fail) {
          wx_object.fail(my_res);
        }
        if (wx_object.complete) {
          wx_object.complete(my_res);
        }
      };
    }
    return my.startPullDownRefresh(my_object);
  }
  static pageScrollTo(wx_object) { return my.pageScrollTo(wx_object); }
  static setTopBarText(wx_object) { return my.setTopBarText(wx_object); }
  static nextTick(wx_object) { return my.nextTick(wx_object); }
  static getMenuButtonBoundingClientRect(wx_object) { return my.getMenuButtonBoundingClientRect(wx_object); }
  static offWindowResize(wx_object) { return my.offWindowResize(wx_object); }
  static onWindowResize(wx_object) { return my.onWindowResize(wx_object); }
  // //////////// Worker ///////////////
  static createWorker(wx_object) { return my.createWorker(wx_object); }

  static createIntersectionObserver(wx_object) { return my.createIntersectionObserver(wx_object); }
  // ///////////////////////////////////
  static hideKeyboard(wx_object) { return my.hideKeyboard(wx_object); }
  // /////////// cloud ////////////////
  static get cloud() {
    return new wx_cloud();
  }
}