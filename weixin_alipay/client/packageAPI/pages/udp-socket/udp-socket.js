import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
const AB2String = (arrayBuffer)=>{
    var unit8Arr = new Uint8Array(arrayBuffer);
    var encodedString = String.fromCharCode.apply(null,unit8Arr),decodedString = decodeURIComponent(escape(encodedString));
    return decodedString;
};
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'UDPSocket',
            path:'packageAPI/pages/udp-socket/udp-socket'
        };
    },
    data:{
        port:undefined,
        remote_port:undefined,
        startUDP:false,
        mode:'local',
        address:'localhost',
        canIUse:true
    },
    onLoad:function(){
        const canIUse = wx.canIUse('createUDPSocket');
        if(!canIUse){
            wx.showModal({
                title:'微信版本过低，暂不支持本功能'
            });
            this.setData({
                canIUse:canIUse
            });
        }
    },
    handleCreateUDPTap:function(){
        this.UDPSocket = wx.createUDPSocket();
        this.remoteUDPSocket = wx.createUDPSocket();
        this.port = this.UDPSocket.bind();
        this.remote_port = this.remoteUDPSocket.bind();
        this.setData({
            port:this.port,
            remote_port:this.remote_port,
            startUDP:true
        });
        this.remoteUDPSocket.onMessage((res)=>{
            const {remoteInfo} = res;
            console.log(res);
            wx.showModal({
                title:`IP:${remoteInfo.address}发来的信息`,
                content:AB2String(res.message)
            });
        });
    },
    handleCloseUDPTap:function(){
        this.setData({
            startUDP:false,
            mode:'local'
        });
        console.log(this.data);
        this.UDPSocket.close();
        this.remoteUDPSocket.close();
    },
    handleSendRemoteMessage:function(){
        this.UDPSocket.send({
            address:this.data.address || 'localhost',
            port:this.remote_port,
            message:`port[${this.port}] 向 remote-port[${this.remote_port}] 发送信息: Hello Wechat!`
        });
    },
    changeMode:function(){
        this.setData({
            mode:'remote'
        });
    },
    handleInputChange:function(e){
        this.setData({
            address:e.detail.value
        });
    },
    handleSendMessage:function(){
        this.UDPSocket.send({
            address:'localhost',
            port:this.remote_port,
            message:`port[${this.port}] 向 remote-port[${this.remote_port}] 发送信息: Hello Wechat!`
        });
    }
});
