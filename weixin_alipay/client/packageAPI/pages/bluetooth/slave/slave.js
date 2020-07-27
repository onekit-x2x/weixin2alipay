import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
const uuid3 = '0C76801A-62EB-45E5-96A8-37C8882ABB2B';
const serviceId = 'D0611E78-BBB4-4591-A5F8-487910AE4366';
const characteristicId = '8667556C-9A37-4C91-84ED-54EE27D90049';
function ab2hex(buffer){
    var hexArr = Array.prototype.map.call(new Uint8Array(buffer),function(bit){
        return ('00' + bit.toString(16)).slice(-2);
    });
    return hexArr.join('');
};
function inArray(arr,key,val){
    for(var i = 0;i < arr.length;i++){
        if(arr[i][key] === val){
            return i;
        }
    };
    return -1;
};
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'蓝牙',
            path:'packageAPI/pages/slave/slave'
        };
    },
    data:{
        connects:[
        ],
        servers:[
        ]
    },
    onLoad:function(options){
        wx.onBLEPeripheralConnectionStateChanged((res)=>{
            console.log('connect');
            const connects = this.data.connects;
            const idx = inArray(connects,'deviceId',res.deviceId);
            if(idx >= 0){
                connects[idx] = res;
            } else {
                connects.push(res);
            }
            this.setData({
                connects:connects
            });
        });
    },
    openBluetoothAdapter:function(){
        wx.openBluetoothAdapter({
            mode:'peripheral',
            success:(res)=>{
                console.log('openBluetoothAdapter success',res);
                this.createBLEPeripheralServer();
            },
            fail:(res)=>{
                console.log(res);
                wx.showToast({
                    title:`创建失败 错误码: ${res.errCode}`,
                    icon:'none'
                });
                if(res.errCode === 10001){
                    wx.onBluetoothAdapterStateChange(function(res){
                        console.log('onBluetoothAdapterStateChange',res);
                        if(res.available){
                            this.createBLEPeripheralServer();
                        }
                    });
                }
            }
        });
    },
    createBLEPeripheralServer:function(){
        wx.createBLEPeripheralServer().then((res)=>{
            console.log('createBLEPeripheralServer',res);
            this.data.servers.push(res.server);
            this.server = res.server;
            this.setData({
                serverId:this.server.serverId
            });
            wx.showToast({
                title:'创建 server '
            });
            this.server.onCharacteristicReadRequest((res)=>{
                const {serviceId,characteristicId,callbackId} = res;
                const buffer = new ArrayBuffer(1);
                const dataView = new DataView(buffer);
                const newValue = Math.ceil(Math.random() * 10);
                dataView.setUint8(0,newValue);
                console.log('onCharacteristicReadRequest',res,newValue);
                this.server.writeCharacteristicValue({
                    serviceId:serviceId,
                    characteristicId:characteristicId,
                    value:buffer,
                    needNotify:true,
                    callbackId:callbackId
                });
            });
            this.server.onCharacteristicWriteRequest((res)=>{
                console.log('onCharacteristicWriteRequest',res);
                const {serviceId,characteristicId,value,callbackId} = res;
                wx.showToast({
                    title:'收到主机数据'
                });
                this.server.writeCharacteristicValue({
                    serviceId:serviceId,
                    characteristicId:characteristicId,
                    value:value,
                    needNotify:true,
                    callbackId:callbackId
                });
            });
        });
    },
    closeServer:function(){
        this.server.close();
        wx.showToast({
            title:'关闭 server'
        });
    },
    chaneMode:function(){
        wx.navigateBack();
    },
    onConfirm:function(e){
        console.log('onConfirm');
        const n = e.detail.value * 1;
        const buffer = new ArrayBuffer(1);
        const dataView = new DataView(buffer);
        dataView.setUint8(0,n);
        this.server.writeCharacteristicValue({
            serviceId:serviceId,
            characteristicId:characteristicId,
            value:buffer,
            needNotify:true
        });
        wx.showModal({
            title:'写入成功',
            content:'请在主机查看'
        });
    },
    showInput:function(){
        this.setData({
            input:!this.data.input
        });
    },
    addService:function(){
        const buffer = new ArrayBuffer(1);
        const dataView = new DataView(buffer);
        dataView.setUint8(0,2);
        const descriptorBuffer = new ArrayBuffer(1);
        const dataView2 = new DataView(descriptorBuffer);
        dataView2.setInt8(0,3);
        const service = {
            uuid:serviceId,
            characteristics:[
                {
                    uuid:characteristicId,
                    properties:{
                        write:true,
                        read:true,
                        notify:true,
                        indicate:true
                    },
                    permission:{
                        readable:true,
                        writeable:true,
                        readEncryptionRequired:true,
                        writeEncryptionRequired:true
                    },
                    value:buffer,
                    descriptors:[
                        {
                            uuid:uuid3,
                            permission:{
                                write:true,
                                read:true
                            },
                            value:descriptorBuffer
                        }
                    ]
                }
            ]
        };
        this.server.addService({
    service:service
}).then((res)=>{
            console.log('add Service',res);
            wx.showToast({
                title:'创建服务'
            });
        },(rej)=>{
            console.log(rej);
            if(rej.errCode === 10001){
                wx.showToast({
                    title:'请打开蓝牙'
                });
            } else {
                wx.showModal({
                    title:'创建失败',
                    content:`错误码: ${rej.errCode}`
                });
            }
        });
    },
    removeService:function(){
        this.server.removeService({
    serviceId:serviceId
}).then((res)=>{
            wx.showToast({
                title:'关闭服务'
            });
            console.log('removeService',res);
        });
    },
    startAdvertising:function(){
        const buffer = new ArrayBuffer(1);
        const dataView = new DataView(buffer);
        dataView.setInt8(0,4);
        this.server.startAdvertising({
    advertiseRequest:{
        connectable:true,
        deviceName:'sanford',
        serviceUuids:[
            serviceId
        ],
        manufacturerData:[
            {
                manufacturerId:'sanfordsun-pc0',
                manufacturerSpecificData:buffer
            }
        ]
    },
    powerLevel:'medium'
}).then((res)=>{
            console.log('startAdvertising',res);
            wx.showToast({
                title:'开启广播'
            });
        });
    },
    stopAdvertising:function(){
        this.server.stopAdvertising();
        wx.showToast({
            title:'关闭广播'
        });
    },
    closeBluetoothAdapter:function(){
        wx.showToast({
            title:'结束流程'
        });
        wx.closeBluetoothAdapter();
    },
    onUnload:function(){
        this.data.servers.forEach((server)=>{
        });
    }
});
