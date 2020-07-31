import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
var serviceList = [
];
var resolveFailList = [
];
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'mdns',
            path:'packageAPI/pages/mdns/mdns'
        };
    },
    daga:{
        serviceList:[
        ],
        resolveFailList:[
        ]
    },
    onShow:function(){
        this.onLocalService();
    },
    startDiscovery:function(){
        wx.startLocalServiceDiscovery({
            serviceType:'_http._tcp.',
            success:function(res){
                console.log(res);
                wx.showToast({
                    title:'开启成功',
                    icon:'none',
                    duration:2000
                });
            },
            fail:(err)=>{
                wx.showToast({
                    title:'开启失败',
                    icon:'none',
                    duration:2000
                });
                console.log(err);
            },
            complete:()=>{console.log('startDiscovery: complete')}
        });
    },
    stopDiscovery:function(){
        const that = this;
        wx.stopLocalServiceDiscovery({
            success:(res)=>{
                wx.showToast({
                    title:'关闭成功',
                    icon:'none',
                    duration:2000
                });
                serviceList = [
                ];
                resolveFailList = [
                ];
                that.setData({
                    serviceList:[
                    ],
                    resolveFailList:[
                    ]
                });
            },
            fail:()=>{
                console.log('stopDiscovery: fail');
                wx.showToast({
                    title:'关闭失败',
                    icon:'none',
                    duration:2000
                });
            },
            complete:()=>{console.log('stopDIscovery: complete')}
        });
    },
    onLocalService:function(){
        var that = this;
        wx.onLocalServiceFound(function(obj){
            console.log(obj);
            serviceList.push(obj);
            that.setData({
                serviceList:serviceList
            });
        });
        wx.onLocalServiceResolveFail(function(obj){
            console.log(obj);
            resolveFailList.push(obj);
            that.setData({
                resolveFailList:resolveFailList
            });
        });
        wx.onLocalServiceLost(function(obj){
            console.log(obj);
        });
        wx.onLocalServiceDiscoveryStop(function(obj){
            console.log('监听到搜索停止事件');
        });
    },
    offLocalService:function(){
        console.log('是否执行此部分数据');
        wx.offLocalServiceFound(function(){
            console.log('取消监听服务发现事件 成功');
        });
        wx.offLocalServiceResolveFail(function(){
            console.log('取消监听 mDNS 服务解析失败的事件 成功');
        });
        wx.offLocalServiceLost(function(){
            console.log('取消监听服务离开事件 成功');
        });
        wx.offLocalServiceDiscoveryStop(function(){
            console.log('取消监听 mDNS 服务停止搜索的事件 成功');
        });
    }
});
