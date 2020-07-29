import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
var base64 = require("../images/base64");
import CustomPage from "../../base/CustomPage";
CustomPage({
    onShareAppMessage:function(){
        return {
            title:'cell',
            path:'page/weui/example/cell/cell'
        };
    },
    onLoad:function(){
        this.setData({
            icon:base64.icon20,
            slideButtons:[
                {
                    text:'普通',
                    src:global.isDemo?'/page/weui/example/cell/icon_love.svg':'/example/cell/icon_love.svg'
                },
                {
                    text:'普通',
                    extClass:'test',
                    src:global.isDemo?'/page/weui/example/cell/icon_star.svg':'/example/cell/icon_star.svg'
                },
                {
                    type:'warn',
                    text:'警示',
                    extClass:'test',
                    src:global.isDemo?'/page/weui/example/cell/icon_del.svg':'/example/cell/icon_del.svg'
                }
            ]
        });
    },
    slideButtonTap:function(e){
        console.log('slide button tap',e.detail);
    }
});
