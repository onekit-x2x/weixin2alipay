import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const util = {};
Date.prototype.Format = function(fmt){
    var o = {
        "M+":this.getMonth() + 1,
        "d+":this.getDate(),
        "h+":this.getHours(),
        "m+":this.getMinutes(),
        "s+":this.getSeconds(),
        "q+":Math.floor((this.getMonth() + 3) / 3),
        "S":this.getMilliseconds()
    };
    if(new RegExp("(y+)","").test(fmt))fmt = fmt.replace(RegExp.$1,(this.getFullYear() + "").substr(4 - RegExp.$1.length))
    for(var k in o){
            if(new RegExp(("(" + k) + ")").test(fmt)){
                fmt = fmt.replace(RegExp.$1,RegExp.$1.length == 1?o[k]:("00" + o[k]).substr(("" + o[k]).length));
            }
        };
    return fmt;
};
util.renderName = (name)=>{switch(name){
    case 'appLaunch':
        return '小程序启动';
        break;
    case 'firstRender':
        return '页面首次渲染';
        break;
    case 'route':
        return '路由性能';
        break;
    case 'evaluateScript':
        return '注入脚本';
        break;
}};
util.renderEntryType = (entryType)=>{switch(entryType){
    case 'navigation':
        return '路由';
        break;
    case 'render':
        return '渲染';
        break;
    case 'script':
        return '脚本';
        break;
}};
util.renderDuration = (duration)=>{return duration?duration + 'ms':''};
util.renderStartTime = (startTime)=>{
    if(!startTime)return ''
    const date = new Date(startTime);
    return date.Format("yyyy-MM-dd hh:mm:ss");
};
module.exports = util;
