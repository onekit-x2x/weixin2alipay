import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'iBeacon',
            path:'packageAPI/pages/ibeacon/ibeacon'
        };
    },
    data:{
        uuid:'',
        beacons:[
        ]
    },
    onUnload:function(){
        this.stopSearch();
    },
    enterUuid:function(e){
        this.setData({
            uuid:e.detail.value
        });
    },
    startSearch:function(){
        if(this._searching)return
        this._searching = true;
        wx.startBeaconDiscovery({
            uuids:[
                this.data.uuid
            ],
            success:(res)=>{
                console.log(res);
                wx.onBeaconUpdate(({beacons})=>{this.setData({
                    beacons:beacons
                })});
            },
            fail:(err)=>{console.error(err)}
        });
    },
    stopSearch:function(){
        this._searching = false;
        wx.stopBeaconDiscovery();
    }
});
