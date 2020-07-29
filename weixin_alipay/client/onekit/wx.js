
import CanvasContext from "./api/CanvasContext";
import VideoContext from "./api/VideoContext";

import Context from "./api/Context";

import wx_cloud from "./wx.cloud";
import onekit from "./onekit";
export default class wx {
  // ///////////////// animation //////////////////////////
  static createAnimation(object) {
    return my.createAnimation(object);
  }
  //////////////////onKeyboardHeightChange//////////////////
  static onKeyboardHeightChange(object){
    return
  }
  // /////////////// basic ////////////////////////////////
  static canIUse(object) { return true; }
  static _getSystemInfo(result) {
    result.SDKVersion = "2.7.0";
    my.openBluetoothAdapter({
      success: (res) => {
        // result.bluetoothEnabled = true;
        my.closeBluetoothAdapter();
      },
      fail: (res) => {
        // result.bluetoothEnabled = false;
        my.closeBluetoothAdapter();
      }
    });
    my.getNetworkType({
      success: (res) => {
        // result.wifiEnabled = (res.networkType === "WIFI");
      },
      fail: (res) => {
        // result.wifiEnabled = false;
      }
    });
    my.getSetting({
      success: (res) => {
        result.locationAuthorized = (res.authSetting.location === true);
        result.cameraAuthorized = (res.authSetting.camera === true);
        result.microphoneAuthorized = (res.authSetting.audioRecord === true);
        result.albumAuthorized = (res.authSetting.album === true);
      },
    });
    return result;
  }
  static getSystemInfo(object) {
    var object2 = {};
    object2.success = function (res) {
      var result = {
        errMsg: "getSystemInfo:ok",
        SDKVersion: "2.4.2",
        brand: res.brand,
        fontSizeSetting: res.fontSizeSetting,
        language: res.language,
        model: res.model,
        // notificationAuthorized: notificationAuthorized,
        pixelRatio: res.pixelRatio,
        platform: res.platform,
        safeArea: { height: res.screenHeight, width: res.screenWidth, bottom: res.screenHeight, top: 0, left: 0, right: res.screenWidth },
        screenHeight: res.screenHeight,
        screenWidth: res.screenWidth,
        statusBarHeight: res.statusBarHeight,
        system: res.system,
        version: res.version,
        windowHeight: res.windowWidth,
        windowWidth: res.windowHeight,
      };

      result = wx._getSystemInfo(result);
      if (object.success) { object.success(result); }
      if (object.fail) { object.fail(result); }
    };
    object2.fail = function (res) {
      if (object.fail) {
        object.fail(res);
      }
      if (object.complete) {
        objec.complete(res);
      }
    };

    return my.getSystemInfo(object2);
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
  static getUpdateManager(object) { return my.getUpdateManager(object); }
  static getLaunchOptionsSync(object) { return my.getLaunchOptionsSync(object); }
  static offPageNotFound(object) { return my.offPageNotFound(object); }
  static onPageNotFound(object) { return my.onPageNotFound(object); }
  static offError(object) { return my.offError(object); }
  static onError(object) { return my.onError(object); }
  static offAppShow(object) { return my.offAppShow(object); }
  static onAppShow(object) { return my.onAppShow(object); }
  static offAppHide(object) { return my.offAppHide(object); }
  static onAppHide(object) { return my.onAppHide(object); }
  static setEnableDebug(object) { return my.setEnableDebug(object); }
  static getLogManager(object) { return my.getLogManager(object); }
  // ///////////////// Canvas ///////////////////
  static drawCanvas(object) {
    var canvasId = object.canvasId;
    var actions = object.actions;
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
          canvasContext.setFillStyle(onekit.color.array2str(data[1]));
          break;
        case "setStrokeStyle":
          canvasContext.setStrokeStyle(onekit.color.array2str(data[1]));
          break;
        case "setFontSize":
          canvasContext.setFontSize(data[0]);
          break;
        case "setGlobalAlpha":
          canvasContext.setGlobalAlpha(data[0]);
          break;
        case "setShadow":
          var dat = data[3];
          canvasContext.setShadow(data[0], data[1], data[2], onekit.color.array2str(data[3]));
          break;
        case "setStrokeStyle":
          canvasContext.setStrokeStyle(onekit.color.array2str(data));
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
  static canvasToTempFilePath(object) {
    var object2 = {
      canvasId: object.canvasId
    };
    object2.success = function (res) {
      var result = {
        errMsg: "canvasToTempFilePath:ok",
        tempFilePath: res.apFilePath
      };
      if (object.success) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    };
    object2.fail = function (res) {
      if (object.fail) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    };
    return my.canvasToTempFilePath(object2);
  }
  static canvasPutImageData(object) { return my.canvasPutImageData(object); }
  static canvasGetImageData(object) { return my.canvasGetImageData(object); }
  // //////////// Device //////////////////
  static onBeaconServiceChange(object) { return my.onBeaconServiceChange(object); }
  static onBeaconUpdate(object) { return my.onBeaconUpdate(object); }
  static getBeacons(object) { return my.getBeacons(object); }
  static stopBeaconDiscovery(object) { return my.stopBeaconDiscovery(object); }
  static startBeaconDiscovery(object) { return my.startBeaconDiscovery(object); }
  static stopWifi(object) { return my.stopWifi(object); }
  static startWifi(object) { return my.startWifi(object); }
  static setWifiList(object) { return my.setWifiList(object); }
  static onWifiConnected(object) { return my.onWifiConnected(object); }
  static onGetWifiList(object) { return my.onGetWifiList(object); }
  static getWifiList(object) { return my.getWifiList(object); }
  static getConnectedWifi(object) { return my.getConnectedWifi(object); }
  static connectWifi(object) { return my.connectWifi(object); }
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
        wx_token:wx_token,
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
      success(res) {
        console.log(res.data)
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
    my.onAccelerometerChange(function (res) {
      if (wx._stopAccelerometer) {
        return;
      }
      callback(res);
    });
  }
  static stopAccelerometer(object) {
    wx._stopAccelerometer = true;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  }
  static startAccelerometer(object) {
    wx._stopAccelerometer = false;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  }
  static getBatteryInfoSync(object) { return my.getBatteryInfoSync(object); }
  static _getBatteryInfo(result) {
    my.getSystemInfo({
      success: (res) => {
        var percent = res.currentBattery;
        function toPoint(percent) {
          var str = percent.replace("%", "");
          str = str / 100;
          return str;
        }
        toPoint(percent);
        var results = toPoint(percent);
        result.level = results;
      }
    });
    return result;
  }
  static getBatteryInfo(object) {
    var object2 = {};
    object2.success = function (res) {
      var result = {
        errMsg: "getBatteryInfo:ok",
        isCharging: false,
      };
      result = wx._getBatteryInfo(result);
      if (object.success) { object.success(result); }
      if (object.fail) { object.fail(result); }
    };
    object2.fail = function (res) {
      if (object.success) { object.success(res); }
      if (object.fail) { object.fail(res); }
    };
    return my.getSystemInfo(object2);
  }
  //
  static getClipboardData(object) {
    var object2 = {};
    if (object) {
      object2.success = function (res) {
        var result = { data: res.text };
        if (object.success) { object.success(result); }
        if (object.fail) { object.fail(result); }
      };
      object2.fail = function (res) {
        if (object.success) { object.success(res); }
        if (object.fail) { object.fail(res); }
      };
    }
    return my.getClipboard(object2);
  }
  static setClipboardData(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "data":
            object2.text = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    return my.setClipboard(object2);
  }
  static onCompassChange(callback) {
    my.onCompassChange(function (res) {
      if (wx._stopCompass) {
        return;
      }
      callback(res);
    });
  }
  static stopCompass(object) {
    wx._stopCompass = true;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  }
  static startCompass(object) {
    wx._stopCompass = false;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  }
  static addPhoneContact(object) {
    var object2 = {};
    var errMsg;
    var result = {
      errMsg: errMsg
    };
    object2.success = function (res) {
      result.errMsg = "addPhoneContact:ok";
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    object2.fail = function (res) {
      result.errMsg = "addPhoneContact:fail cancel";
      if (object.fail) {
        object.fail(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    return my.addPhoneContact(object2);
  }
  static onGyroscopeChange(callback) {
    my.onGyroscopeChange(function (res) {
      if (wx._stopGyroscope) {
        return;
      }
      callback(res);
    });
  }
  static stopGyroscope(object) {
    wx._stopGyroscope = true;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  }
  static startGyroscope(object) {
    wx._startGyroscope = false;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  }
  //
  static onDeviceMotionChange(object) { return my.onDeviceMotionChange(object); }
  static stopDeviceMotionListening(object) { return my.stopDeviceMotionListening(object); }
  static startDeviceMotionListening(object) { return my.startDeviceMotionListening(object); }
  //
  static getNetworkType(object) {
    var object2 = {};
    for (var key in object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    object2.success = function (res) {
      var result = { networkType: wx._network(res).networkType };
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    object2.fail = function (res) {
      if (object.fail) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    };

    return my.getNetworkType(object2);
  }
  static _network(res) {
    var networkType;
    if (res.networkAvailable) {
      switch (res.networkType) {
        case "WWAN":
          networkType = "WIFI";
          break;
        default:
          networkType = res.networkType;
          break;
      }
    } else {
      networkType = "NONE";
    }
    return { isConnected: res.networkAvailable, networkType: networkType.toLowerCase() };
  }
  static onNetworkStatusChange(callack) {
    my.onNetworkStatusChange(function (res) {
      callack(wx._network(res));
    });
  }


  //
  static makePhoneCall(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "phoneNumber":
            object2.number = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }

      return my.makePhoneCall(object2);
    }
  }

  static scanCode(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "onlyFromCamera":
            object2.hideAlbum = object[key];
            break;
          case "scanType":
            object2.type = object[key];
            break;
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
      object2.success = function (res) {
        console.log(res)
        var result = {};
        if (res.code) {
          result.charSet = "UTF-8";
          result.result = res.code;
          if (res.qrCode) {
            result.scanType = "QR_CODE";
          } else if (res.barCode) {
            result.scanType = "EAN_8";
          }
        }
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      };
      object2.fail = function (res) {
        console.log(res)
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      };
    }
    return my.scan(object2);
  }
  //
  static vibrateLong(object) {
    var object2 = {};
    object2.success = function (res) {
      var result = {
        errMsg: "vibrateLong:ok"
      };
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    return my.vibrateLong(object2);
  }
  static vibrateShort(object) {
    var object2 = {};
    object2.success = function (res) {
      var result = {
        errMsg: "vibrateShort:ok"
      };
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    return my.vibrateShort(object2);
  }
  //
  static onMemoryWarning(object) { return my.onMemoryWarning(object); }
  //
  static writeBLECharacteristicValue(object) { return my.writeBLECharacteristicValue(object); }
  static readBLECharacteristicValue(object) { return my.readBLECharacteristicValue(object); }
  static onBLEConnectionStateChange(object) { return my.onBLEConnectionStateChange(object); }
  static onBLECharacteristicValueChange(object) { return my.onBLECharacteristicValueChange(object); }
  static notifyBLECharacteristicValueChange(object) { return my.notifyBLECharacteristicValueChange(object); }
  static getBLEDeviceServices(object) { return my.getBLEDeviceServices(object); }
  static getBLEDeviceCharacteristics(object) { return my.getBLEDeviceCharacteristics(object); }
  static createBLEConnection(object) { return my.createBLEConnection(object); }
  static closeBLEConnection(object) { return my.closeBLEConnection(object); }
  //
  static stopBluetoothDevicesDiscovery(object) {
    var object2 = {};
    for (var key in object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    return my.stopBluetoothDevicesDiscovery(object2);
  }
  static startBluetoothDevicesDiscovery(object) {
    wx.openBluetoothAdapter(object);
    return my.startBluetoothDevicesDiscovery(object);
  }
  static openBluetoothAdapter(object) {
    var object2 = {};
    object2.success = function (res) {
      var result = { errMsg: "openBluetoothAdapter:ok" };
      if (object.success) { object.success(result); }
      if (object.complete) { object.complete(result); }
    };
    object2.fail = function (res) {
      if (object.success) { object.success(res); }
      if (object.complete) { object.complete(res); }
    };
    return my.openBluetoothAdapter(object2);
  }
  static onBluetoothDeviceFound(object) { return my.onBluetoothDeviceFound(object); }
  static onBluetoothAdapterStateChange(object) { return my.onBluetoothAdapterStateChange(object); }
  static getConnectedBluetoothDevices(object) { return my.getConnectedBluetoothDevices(object); }
  static getBluetoothDevices(object) {
    var object2 = {};
    object2.success = function (res) {
      my.getBluetoothDevices({
        success: (res) => {
          // console.log("000", res)
          // console.log("000", res.devices)
          result.devices = res.devices;
        }
      });
      var result = {
        errMsg: "closeBluetoothAdapter:ok"
      };
      if (object.success) { object.success(result); }
      if (object.complete) { object.complete(result); }
    };
    object2.fail = function (res) {
      if (object.success) { object.success(res); }
      if (object.complete) { object.complete(res); }
    };
    return my.getBluetoothDevices(object2);
  }
  static getBluetoothAdapterState(object) { return my.getBluetoothAdapterState(object); }
  static closeBluetoothAdapter(object) { return my.closeBluetoothAdapter(object); }
  //
  static stopHCE(object) { return my.stopHCE(object); }
  static startHCE(object) { return my.startHCE(object); }
  static sendHCEMessage(object) { return my.sendHCEMessage(object); }
  static onHCEMessage(object) { return my.onHCEMessage(object); }
  static getHCEState(object) { return my.getHCEState(object); }
  //
  static setScreenBrightness(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "value":
            object2.brightness = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    return my.setScreenBrightness(object2);
  }
  static setKeepScreenOn(object) { return my.setKeepScreenOn(object); }
  static onUserCaptureScreen(object) { return my.onUserCaptureScreen(object); }

  static getScreenBrightness(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function (res) {
      var result = { value: res.brightness };
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    object2.fail = function (res) {
      if (object.fail) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    };
    return my.getScreenBrightness(object2);
  }
  // ///////////////// Ext //////////////
  static getExtConfigSync(object) { return my.getExtConfigSync(object); }
  static getExtConfig(object) { return my.getExtConfig(object); }
  // ////////////////// File //////////
  static getFileSystemManager(object) { return my.getFileSystemManager(object); }
  static getFileInfo(object) { return my.getFileInfo(object); }
  static removeSavedFile(object) { return my.removeSavedFile(object); }
  static getSavedFileInfo(object) { return my.getSavedFileInfo(object); }
  static getSavedFileList(object) { return my.getSavedFileList(object); }
  static openDocument(object) { return my.openDocument(object); }
  static saveFile(object) {
    my.saveFile({
      apFilePath: object.tempFilePath,
      success(res) {
        var result = { savedFilePath: res.apFilePath };
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      }, fail(res) {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    });
  }
  // ////////// Location ///////////////
  static openLocation(object) { return my.openLocation(object); }
  static getLocation(object) { return my.getLocation(object); }
  static chooseLocation(object) { return my.chooseLocation(object); }
  // //////// Media ////////////////////
  static createMapContext(object) { return my.createMapContext(object); }
  static compressImage(object) { return my.compressImage(object); }
  static saveImageToPhotosAlbum(object) { return my.saveImageToPhotosAlbum(object); }
  static getImageInfo(object) { return my.getImageInfo(object); }
  static previewImage(object) { return my.previewImage(object); }
  static chooseImage(object) {
    if (!object.count) {
      object.count = 0;
    }
    my.chooseImage({
      conut: object.count,
      sizeType: object.sizeType,
      sourceType: object.scourceType,
      success: (res) => {
        var tempFilePaths = [];
        var tempFiles = [];
        for (var path of res.apFilePaths) {
          tempFilePaths.push(path);
          tempFiles.push({ path: path, size: 1000000 });
        }
        var result = {
          tempFilePaths: tempFilePaths,
          tempFiles: tempFiles
        };
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(complete);
        }
      },
      fail: (res) => {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    });
  }
  static saveVideoToPhotosAlbum(object) { return my.saveVideoToPhotosAlbum(object); }
  static chooseVideo(object) { return my.chooseVideo(object); }
  static createVideoContext(videoId, ui) { return new VideoContext(my.createVideoContext(videoId)); }
  static stopVoice(object) { return my.stopVoice(object); }
  static pauseVoice(object) { return my.pauseVoice(object); }
  static playVoice(object) { return my.playVoice(object); }
  static setInnerAudioOption(object) { return my.setInnerAudioOption(object); }
  static getAvailableAudioSources(object) { return my.getAvailableAudioSources(object); }
  static createInnerAudioContext(object) { return my.createInnerAudioContext(object); }
  static createAudioContext(object) { return my.createAudioContext(object); }
  static onBackgroundAudioStop(object) { return my.onBackgroundAudioStop(object); }
  static onBackgroundAudioPause(object) { return my.onBackgroundAudioPause(object); }
  static onBackgroundAudioPlay(object) { return my.onBackgroundAudioPlay(object); }
  static stopBackgroundAudio(object) { return my.stopBackgroundAudio(object); }
  static seekBackgroundAudio(object) { return my.seekBackgroundAudio(object); }
  static pauseBackgroundAudio(object) { return my.pauseBackgroundAudio(object); }
  static playBackgroundAudio(object) { return my.playBackgroundAudio(object); }
  static getBackgroundAudioPlayerState(object) { return my.getBackgroundAudioPlayerState(object); }
  static getBackgroundAudioManager(object) { return my.getBackgroundAudioManager(object); }
  static createLivePusherContext(object) { return my.createLivePusherContext(object); }
  static startRecord(object) { return my.startRecord(object); }
  static stopRecord(object) { return my.stopRecord(object); }
  static getRecorderManager(object) { return my.getRecorderManager(object); }
  // ////////////// Network ///////////////
  static request(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "header":
            object2.headers = object[key];
            break;
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
      object2.success = function (res) {
        var result = {
          header: res.headers
        };
        for (var key in object) {
          switch (key) {
            case "status":
              result.statusCode = res[key];
              break;
            case "header":
              result.headers = res[key];
              break;
            default:
              result[key] = res[key];
              break;
          }
        }
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      };
      object2.fail = function (res) {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      };
    }
    return my.httpRequest(object2);
  }
  static downloadFile(object) { return my.downloadFile(object); }
  static uploadFile(object) {
    my.uploadFile({
      url: object.url,
      filePath: object.filePath,
      fileName: object.name,
      fileType: "image",
      header: object.header,
      formData: object.formData,
      success: object.success,
      fail: object.fail,
      complete: object.complete
    });
  }
  //
  static connectSocket(object) { return my.connectSocket(object); }
  static onSocketError(object) { return my.onSocketError(object); }
  static onSocketMessage(object) { return my.onSocketMessage(object); }
  static onSocketClose(object) { return my.onSocketClose(object); }
  static onSocketOpen(object) { return my.onSocketOpen(object); }
  static sendSocketMessage(object) { return my.sendSocketMessage(object); }
  static closeSocket(object) { return my.closeSocket(object); }
  static offLocalServiceResolveFail(callbck) { return my.offLocalServiceResolveFail(callbck); }
  static onLocalServiceResolveFail(callbck) { return my.onLocalServiceResolveFail(callbck); }
  static onLocalServiceDiscoveryStop(callbck) { return my.onLocalServiceDiscoveryStop(callbck); }
  static offLocalServiceLost(callbck) { return my.offLocalServiceLost(callbck); }
  static onLocalServiceLost(callbck) { return my.onLocalServiceLost(callbck); }
  static offLocalServiceFound(callbck) { return my.offLocalServiceFound(callbck); }
  static onLocalServiceFound(callbck) { return my.onLocalServiceFound(callbck); }
  static stopLocalServiceDiscovery(object) { return my.stopLocalServiceDiscovery(object); }
  static startLocalServiceDiscovery(object) { return my.startLocalServiceDiscovery(object); }

  // /////// Open Interface //////////
  static _checkSession() {
    var now = new Date().getTime();
    return getApp().onekitwx._jscode && getApp().onekitwx._login && now <= getApp().onekitwx._login + 1000 * 60 * 60 * 24 * 3;
  }
  static checkSession(object) {
    if (this._checkSession()) {
      if (object.success) {
        object.success();
      }
      if (object.complete) {
        object.complete();
      }

    } else {
      if (object.fail) {
        object.fail();
      }
      if (object.complete) {
        object.complete();
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
               nickname: res.nickName,
               avatarUrl: res.avatar,
               js_code: jscode
             },
             success(res) {
               if (object.success) {
                 object.success(res.data);
               }
               if (object.complete) {
                 object.complete(res.data);
               }
             }, fail(res) {
               console.log(res.data);
             }
           });
     }*/

  }

  static login = function (object) {
    var that = this;
    if (!object) {
      return my.getAuthCode(object);
    }
    var object2 = {
      scopes: "auth_user"
    };
    object2.success = function (res) {
      getApp().onekitwx._jscode = res.authCode;
      getApp().onekitwx._login = new Date().getTime();
      var result = { code: res.authCode };
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(complete);
      }
    }
    object2.fail = function (res) {
      if (object.fail) {
        object.fail(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    }
    if (wx._checkSession()) {
      object2.success({ authCode: getApp().onekitwx._jscode });
    } else {
      my.getAuthCode(object2);
    }
  };
  static getUserInfo(object) {


    wx.login({
      success: (res) => {
        var jscode = res.code;
        var withCredentials = object.withCredentials;
        my.getAuthUserInfo({
          success(res) {
            console.log(res);
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
              success(res) {
                console.log(res.data);
                if (object.success) {
                  object.success(res.data);
                }
                if (object.complete) {
                  object.complete(res.data);
                }
              }, fail(res) {
                console.log(res.data);
              }
            });
          }
        });
      }
    });
  }
  static getOpenData(object) {

    if (!getApp().onekit._opendataCallbacks) {
      getApp().onekit._opendataCallbacks = [];
    }
    function success(res) {
      var opendata = res.userInfo;
      getApp().onekit._opendata = opendata;
      for (var cb = 0; cb < getApp().onekit._opendataCallbacks.length; cb++) {
        getApp().onekit._opendataCallbacks[cb](opendata);
      }
      if (object.success) {
        object.success(opendata);
      }
      if (object.complete) {
        object.complete(opendata);
      }
    }
    var opendata = getApp().onekit._opendata;
    if (opendata) {
      if (Object.keys(opendata) > 0) {
        object.success(opendata);
      } else {
        if (object.success) {
          getApp().onekit._opendataCallbacks.push(object.success);
        }
      }
      return;
    }
    getApp().onekit._opendata = {};
    wx.login({
      success(res) {
        var jscode = res.code;
        my.getAuthUserInfo({
          success(res) {
            var url = getApp().onekit.server + "opendata";
            my.httpRequest({
              url: url,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: "POST",
              data: {
                nickname: res.nickName,
                avatarUrl: res.avatar,
                js_code: jscode
              },
              success(res) {
                success(res.data);
              }, fail(res) {
                console.log(res);
              }
            });
          }
        });
      }
    });

  }
  static getPhoneNumber(object) {

    wx.login({
      success: (res) => {
        var jscode = res.code;
        console.log("ssss" + jscode);
        my.getPhoneNumber({
          success(res) {
            // var response = {
            // response:
            // "ZOELfBOrmRHNNiiVR4FmNrvV7Dmog5w/KFaNrfLugkDqdkPzlxBCzmfLBrtQlPptWix+1f9I07p5xNfwGgTgVA==",
            // sign:
            // "fD6CyFQeJTTgtM1uviy5uAm4YWiN3s0crGtD1v5XdXuDzFEBPTRYqGODcfzskAMFWNXJAK5Zx0/kk+6e9tn/N3U9RcrTgc6VLw7HM9fPTcz8CzVl1+b6fjsi0wWsADF53vKTurFn6HTSTEJvzbMMD5M2lgazni72tZHCNJSkeG1W+kjX/Mj5tfJXNkn6nlrtu1N6BxgsZdgDdkMQfIrWv2TOFlpx043LMBmk4CxXLpGvRfRcHLjixs5wEO1dfqENn6oj9hAQbPA8itYW4TvGlo5qhnzT+ya1rWcKrjn4zh7uvnr0hB0oPiqLu17txS5uIQIF0DJ2cC0k6kuOQLVwTQ=="
            // }
            // JSON.parse(res.response);
            var response = JSON.parse(res.response);
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
              success(res) {
                var data = res.data;
                if (object.success) {
                  object.success(data);
                }
                if (object.complete) {
                  object.complete(data);
                }
              }, fail(res) {
                console.log(res.data);
              }
            });
          }
        });
      },
    });

  }
  static navigateToMiniProgram(object) { return my.navigateToMiniProgram(object); }
  static navigateBackMiniProgram(object) { return my.navigateBackMiniProgram(object); }
  static getAccountInfoSync(object) { return my.getAccountInfoSync(object); }

  static reportMonitor(object) { return my.reportMonitor(object); }
  static reportAnalytics(object) { return my.reportAnalytics(object); }
  static requestPayment(object) {
    var tradeNO = object.package.split("=")[1];
    console.log(tradeNO);
    var object2 = {
      tradeNO: tradeNO,
      success: object.success,
      fail: object.fail,
      complete: object.complete
    };
    return my.tradePay(object2);
  }
  static authorize(object) { return my.authorize(object); }
  static openSetting(object) { return my.openSetting(object); }
  static getSetting(object) { return my.getSetting(object); }
  static chooseAddress(object) { return my.chooseAddress(object); }
  static openCard(object) {
    my.openCardList();
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  }
  static addCard(object) {
    var url = getApp().onekit.server + "addcard";
    my.httpRequest({
      url: url,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      data: {
        cardList: JSON.stringify(object.cardList),
        js_code: object.jscode
      },
      success(res) {
        var data = res.data;
        if (object.success) {
          object.success(data);
        }
        if (object.complete) {
          object.complete(data);
        }
      }, fail(res) {
        console.log(res.data);
      }
    });
  }
  static chooseInvoiceTitle(object) { return my.chooseInvoiceTitle(object); }
  static chooseInvoice(object) { return my.chooseInvoice(object); }
  static startSoterAuthentication(object) { return my.startSoterAuthentication(object); }
  static checkIsSupportSoterAuthentication(object) { return my.checkIsSupportSoterAuthentication(object); }
  static checkIsSoterEnrolledInDevice(object) { return my.checkIsSoterEnrolledInDevice(object); }
  static getWeRunData(object) { return my.getWeRunData(object); }

  // //////// Router //////////////
  static navigateBack(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
      object2.success = function (res) {
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      };
      object2.fail = function (res) {
        if (object.fail) {
          object.success(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      };
    }
    return my.navigateBack(object2);
  }
  static switchTab(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function (res) {
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    object2.fail = function (res) {
      if (object.fail) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    };
    return my.switchTab(object2);
  }
  static navigateTo(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function (res) {
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    object2.fail = function (res) {
      if (object.fail) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    };
    return my.navigateTo(object2);
  }
  static reLaunch(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function (res) {
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    object2.fail = function (res) {
      if (object.fail) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    };
    return my.reLaunch(object2);
  }
  static redirectTo(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function (res) {
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    object2.fail = function (res) {
      if (object.fail) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    };
    return my.redirectTo(object2);
  }
  // /////////// Share /////////////
  static updateShareMenu(object) { return my.updateShareMenu(object); }
  static showShareMenu(object) {
    my.navigateTo({
      url: "/wx/page/share/share"
    });
  }
  static hideShareMenu(object) { return my.hideShareMenu(object); }
  static getShareInfo(object) { return my.getShareInfo(object); }
  // ///////////// Storage //////////////
  static getStorageInfoSync(object) { return my.getStorageInfoSync(object); }
  static getStorageInfo(object) { return my.getStorageInfo(object); }
  static clearStorageSync(object) { return my.clearStorageSync(object); }
  static clearStorage(object) { return my.clearStorage(object); }
  static removeStorageSync(object) { return my.removeStorageSync(object); }
  static removeStorage(object) { return my.removeStorage(object); }
  static setStorageSync(key, value) { return my.setStorageSync({ key: key, data: value }); }
  static setStorage(object) { return my.setStorage(object); }
  static getStorageSync(key) {
    var result = my.getStorageSync({ key: key });
    if (!result) {
      return "";
    } else if (result.data) {
      return result.data;
    } else if (result.APDataStorage) {
      return result.APDataStorage;
    } else {
      return "";
    }
  }
  static getStorage(object) { return my.getStorage(object); }
  // //////////// UI ////////////////
  static showActionSheet(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "itemList":
            object2.items = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
      object2.success = function (res) {
        var result = { tapIndex: res.index };
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      };
    }
    return my.showActionSheet(object2);
  }
  // static redirectTo(object) { return my.redirectTo(object); }
  // static redirectTo(object) { return my.redirectTo(object); }
  static hideLoading(object) { return my.hideLoading(object); }
  static showLoading(object) {
    var object2;
    if (object) {
      if (!object.icon) {
        object.icon = "success";
      }
      //
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "title":
            object2.content = object[key];
            break;
          case "icon":
            object2.type = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    return my.showLoading(object2);
  }
  static hideToast(object) {
    var object2 = {};
    for (var key in object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    return my.hideToast(object2);
  }
  static showToast(object) {
    var object2;
    if (object) {
      if (!object.icon) {
        object.icon = "success";
        object2 = {};
        for (var key in object) {
          switch (key) {
            case "title":
              object2.content = object[key];
              break;
            case "icon":
              object2.type = object[key];
              break;
            default:
              object2[key] = object[key];
              break;
          }
        }
      }
    }
    return my.showToast(object2);
  }
  static showModal(object2) {
    if (object2 === null) {
      return my.confirm();
    }
    var object = {};
    var key;
    if (object2.showCancel === null || object2.showCancel) {
      for (key in object2) {
        switch (key) {
          case "cancelText":
            object.cancelButtonText = object2[key];
            break;
          case "confirmText":
            object.confirmButtonText = object2[key];
            break;
          default:
            object[key] = object2[key];
            break;
        }
      }

      return my.confirm(object);
    } else {
      for (key in object2) {
        switch (key) {
          default:
            object[key] = object2[key];
            break;
        }
      }

      return my.alert(object);
    }
  }
  static setNavigationBarColor(object) { return my.setNavigationBarColor(object); }
  static hideNavigationBarLoading(object) {
    var object2 = {};
    for (var key in object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    return my.hideNavigationBarLoading(object2);
  }
  static showNavigationBarLoading(object) {
    var object2 = {};
    for (var key in object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    return my.showNavigationBarLoading(object2);
  }
  static setNaivgationBarTitle(object) { return my.setNavigationBar(object); }
  static setBackgroundTextStyle(object) { return my.setBackgroundTextStyle(object); }

  static setBackgroundColor(object) { return my.setBackgroundColor(object); }
  static setTabBarItem(object) { return my.setTabBarItem(object); }
  static setTabBarStyle(object) { return my.setTabBarStyle(object); }
  static hideTabBar(object) { return my.hideTabBar(object); }
  static showTabBar(object) { return my.showTabBar(object); }
  static hideTabBarRedDot(object) { return my.hideTabBarRedDot(object); }
  static showTabBarRedDot(object) { return my.showTabBarRedDot(object); }
  static removeTabBarBadge(object) { return my.removeTabBarBadge(object); }
  static setTabBarBadge(object) { return my.setTabBarBadge(object); }

  static loadFontFace(object) { return my.loadFontFace(object); }

  static stopPullDownRefresh(object) {
    var object2 = {};
    if (object) {
      object2.success = function (res) {
        if (object.success) {
          object.success(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      };
      object2.fail = function (res) {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      };
    }
    return my.stopPullDownRefresh(object2);
  }
  static startPullDownRefresh(object) {
    var object2 = {};
    if (object) {
      object2.success = function (res) {
        if (object.success) {
          object.success(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      };
      object2.fail = function (res) {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      };
    }
    return my.startPullDownRefresh(object2);
  }
  static pageScrollTo(object) { return my.pageScrollTo(object); }
  static setTopBarText(object) { return my.setTopBarText(object); }
  static nextTick(object) { return my.nextTick(object); }
  static getMenuButtonBoundingClientRect(object) { return my.getMenuButtonBoundingClientRect(object); }
  static offWindowResize(object) { return my.offWindowResize(object); }
  static onWindowResize(object) { return my.onWindowResize(object); }
  // //////////// Worker ///////////////
  static createWorker(object) { return my.createWorker(object); }
  // //////////// WXML ///////////////
  static createSelectorQuery(object) { return my.createSelectorQuery(object); }
  static createIntersectionObserver(object) { return my.createIntersectionObserver(object); }
  // ///////////////////////////////////
  static hideKeyboard(object) { return my.hideKeyboard(object); }
  // /////////// cloud ////////////////
  static get cloud() {
    return new wx_cloud();
  }
}