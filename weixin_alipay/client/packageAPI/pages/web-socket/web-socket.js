import {OnekitApp,OnekitPage} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
function showModal(title,content){
    wx.showModal({
        title:title,
        content:content,
        showCancel:false
    });
};
function showSuccess(title){
    wx.showToast({
        title:title,
        icon:'success',
        duration:1000
    });
};
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'Web Socket',
            path:'packageAPI/pages/web-socket/web-socket'
        };
    },
    data:{
        socketStatus:'closed'
    },
    onLoad:function(){
        const self = this;
        self.setData({
            hasLogin:true
        });
    },
    onUnload:function(){
        this.closeSocket();
    },
    toggleSocket:function(e){
        const turnedOn = e.detail.value;
        if(turnedOn && this.data.socketStatus === 'closed'){
            this.openSocket();
        } else if(!turnedOn && this.data.socketStatus === 'connected'){
            const showSuccess = true;
            this.closeSocket(showSuccess);
        }
    },
    openSocket:function(){
        wx.onSocketOpen(()=>{
            console.log('WebSocket 已连接');
            showSuccess('Socket已连接');
            this.setData({
                socketStatus:'connected',
                waitingResponse:false
            });
        });
        wx.onSocketClose(()=>{
            console.log('WebSocket 已断开');
            this.setData({
                socketStatus:'closed'
            });
        });
        wx.onSocketError((error)=>{
            showModal('发生错误',JSON.stringify(error));
            console.error('socket error:',error);
            this.setData({
                loading:false
            });
        });
        wx.onSocketMessage((message)=>{
            showSuccess('收到信道消息');
            console.log('socket message:',message);
            this.setData({
                loading:false
            });
        });
        wx.connectSocket({
            url:'wss://echo.websocket.org'
        });
    },
    closeSocket:function(){
        if(this.data.socketStatus === 'connected'){
            wx.closeSocket({
                success:()=>{
                    showSuccess('Socket已断开');
                    this.setData({
                        socketStatus:'closed'
                    });
                }
            });
        }
    },
    sendMessage:function(){
        if(this.data.socketStatus === 'connected'){
            wx.sendSocketMessage({
                data:'Hello, Miniprogram!'
            });
        }
    }
});
