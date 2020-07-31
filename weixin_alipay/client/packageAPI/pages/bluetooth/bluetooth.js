import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
function inArray(arr,key,val){
    for(var i = 0;i < arr.length;i++){
        if(arr[i][key] === val){
            return i;
        }
    };
    return -1;
};
function ab2hex(buffer){
    const hexArr = Array.prototype.map.call(new Uint8Array(buffer),function(bit){
        return ('00' + bit.toString(16)).slice(-2);
    });
    return hexArr.join('');
};
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'蓝牙',
            path:'packageAPI/pages/bluetooth/bluetooth'
        };
    },
    data:{
        devices:[
        ],
        connected:false,
        chs:[
        ]
    },
    onUnload:function(){
        this.closeBluetoothAdapter();
    },
    openBluetoothAdapter:function(){
        wx.openBluetoothAdapter({
            success:(res)=>{
                console.log('openBluetoothAdapter success',res);
                this.startBluetoothDevicesDiscovery();
            },
            fail:(res)=>{if(res.errCode === 10001){
                wx.showModal({
                    title:'错误',
                    content:'未找到蓝牙设备, 请打开蓝牙后重试。',
                    showCancel:false
                });
                wx.onBluetoothAdapterStateChange(function(res){
                    if(res && res.available){
                        this.startBluetoothDevicesDiscovery();
                    }
                });
            }}
        });
    },
    getBluetoothAdapterState:function(){
        wx.getBluetoothAdapterState({
            success:(res)=>{
                console.log('getBluetoothAdapterState',res);
                if(res.discovering){
                    this.onBluetoothDeviceFound();
                } else if(res.available){
                    this.startBluetoothDevicesDiscovery();
                }
            }
        });
    },
    startBluetoothDevicesDiscovery:function(){
        if(this._discoveryStarted){
            return;
        }
        this._discoveryStarted = true;
        wx.startBluetoothDevicesDiscovery({
            allowDuplicatesKey:true,
            success:(res)=>{
                console.log('startBluetoothDevicesDiscovery success',res);
                this.onBluetoothDeviceFound();
            }
        });
    },
    stopBluetoothDevicesDiscovery:function(){
        wx.stopBluetoothDevicesDiscovery({
            complete:()=>{this._discoveryStarted = false}
        });
    },
    onBluetoothDeviceFound:function(){
        wx.onBluetoothDeviceFound((res)=>{res.devices.forEach((device)=>{
            if(!device.name && !device.localName){
                return;
            }
            const foundDevices = this.data.devices;
            const idx = inArray(foundDevices,'deviceId',device.deviceId);
            const data = {};
            if(idx === -1){
                data[`devices[${foundDevices.length}]`] = device;
            } else {
                data[`devices[${idx}]`] = device;
            }
            this.setData(data);
        })});
    },
    createBLEConnection:function(e){
        const ds = e.currentTarget.dataset;
        const deviceId = ds.deviceId;
        const name = ds.name;
        wx.showLoading();
        wx.createBLEConnection({
            deviceId:deviceId,
            success:()=>{
                this.setData({
                    connected:true,
                    name:name,
                    deviceId:deviceId
                });
                this.getBLEDeviceServices(deviceId);
            },
            complete:function(){
                wx.hideLoading();
            }
        });
        this.stopBluetoothDevicesDiscovery();
    },
    closeBLEConnection:function(){
        wx.closeBLEConnection({
            deviceId:this.data.deviceId
        });
        this.setData({
            connected:false,
            chs:[
            ],
            canWrite:false
        });
    },
    changeMode:function(){
        wx.navigateTo({
            url:'./slave/slave'
        });
    },
    getBLEDeviceServices:function(deviceId){
        wx.getBLEDeviceServices({
            deviceId:deviceId,
            success:(res)=>{for(var i = 0;i < res.services.length;i++){
                if(res.services[i].isPrimary){
                    this.getBLEDeviceCharacteristics(deviceId,res.services[i].uuid);
                    return;
                }
            }}
        });
    },
    getBLEDeviceCharacteristics:function(deviceId,serviceId){
        wx.getBLEDeviceCharacteristics({
            deviceId:deviceId,
            serviceId:serviceId,
            success:(res)=>{
                console.log('getBLEDeviceCharacteristics success',res.characteristics);
                for(var i = 0;i < res.characteristics.length;i++){
                    const item = res.characteristics[i];
                    if(item.properties.read){
                        wx.readBLECharacteristicValue({
                            deviceId:deviceId,
                            serviceId:serviceId,
                            characteristicId:item.uuid
                        });
                    }
                    if(item.properties.write){
                        this.setData({
                            canWrite:true
                        });
                        this._deviceId = deviceId;
                        this._serviceId = serviceId;
                        this._characteristicId = item.uuid;
                        console.log('write');
                        this.writeBLECharacteristicValue();
                    }
                    if(item.properties.notify || item.properties.indicate){
                        wx.notifyBLECharacteristicValueChange({
                            deviceId:deviceId,
                            serviceId:serviceId,
                            characteristicId:item.uuid,
                            state:true
                        });
                    }
                };
            },
            fail:function(res){
                console.error('getBLEDeviceCharacteristics',res);
            }
        });
        wx.onBLECharacteristicValueChange((characteristic)=>{
            const idx = inArray(this.data.chs,'uuid',characteristic.characteristicId);
            const data = {};
            if(idx === -1){
                data[`chs[${this.data.chs.length}]`] = {
                    uuid:characteristic.characteristicId,
                    value:ab2hex(characteristic.value)
                };
            } else {
                data[`chs[${idx}]`] = {
                    uuid:characteristic.characteristicId,
                    value:ab2hex(characteristic.value)
                };
            }
            wx.showToast({
                title:'收到从机数据'
            });
            this.setData(data);
        });
    },
    writeBLECharacteristicValue:function(){
        const buffer = new ArrayBuffer(1);
        const dataView = new DataView(buffer);
        dataView.setUint8(0,(Math.random() * 19) | 0);
        wx.writeBLECharacteristicValue({
            deviceId:this._deviceId,
            serviceId:this._serviceId,
            characteristicId:this._characteristicId,
            value:buffer,
            success:function(){
                console.log('writeBLECharacteristicValue: 成功');
            },
            fail:function(){
                console.log('writeBLECharacteristicValue: 失败');
            },
            complete:function(){
                console.log('writeBLECharacteristicValue: 结束');
            }
        });
    },
    closeBluetoothAdapter:function(){
        wx.closeBluetoothAdapter();
        this._discoveryStarted = false;
    }
});
