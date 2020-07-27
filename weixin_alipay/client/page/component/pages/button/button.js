import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
const types = [
    'default',
    'primary',
    'warn'
];
const pageObject = {
    data:{
        defaultSize:'default',
        primarySize:'default',
        warnSize:'default',
        disabled:false,
        plain:false,
        loading:false
    },
    onShareAppMessage:function(){
        return {
            title:'button',
            path:'page/component/pages/button/button'
        };
    },
    setDisabled:function(){
        this.setData({
            disabled:!this.data.disabled
        });
    },
    setPlain:function(){
        this.setData({
            plain:!this.data.plain
        });
    },
    setLoading:function(){
        this.setData({
            loading:!this.data.loading
        });
    },
    handleContact:function(e){
        console.log(e.detail);
    },
    handleGetPhoneNumber:function(e){
        console.log(e.detail);
    },
    handleGetUserInfo:function(e){
        console.log(e.detail);
    },
    handleOpenSetting:function(e){
        console.log(e.detail.authSetting);
    },
    handleGetUserInfo:function(e){
        console.log(e.detail.userInfo);
    }
};
for(var i = 0;i < types.length;++i){
    (function(type){
        pageObject[type] = function(){
            const key = type + 'Size';
            const changedData = {};
            changedData[key] = this.data[key] === 'default'?'mini':'default';
            this.setData(changedData);
        };
    }(types[i]));
};
OnekitPage(pageObject);
