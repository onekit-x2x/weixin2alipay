import {OnekitApp,OnekitPage} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const util = {};
Date.prototype.Format = function(fmt){
    var o = {
        "M+":this.getMonth() + 1,
        "d+":this.getDate(),
        "h+":this.getHours(),
        "m+":this.getMinutes(),
        "s+":this.getSeconds(),
        "q+":Math.floor(this.getMonth() + 3 / 3),
        "S":this.getMilliseconds()
    };
    if(new RegExp("(y+)","").test(fmt))fmt = fmt.replace(RegExp.$1,this.getFullYear() + "".substr(4 - RegExp.$1.length))
    for(var k in o){
            if(new RegExp("(" + k + ")").test(fmt)){
                fmt = fmt.replace(RegExp.$1,RegExp.$1.length == 1?o[k]:"00" + o[k].substr("" + o[k].length));
            }
        };
    return fmt;
};
util.renderName = (name)=>{
    ;
};
util.renderEntryType = (entryType)=>{
    ;
};
util.renderDuration = (duration)=>{
    return duration?duration + 'ms':'';
};
util.renderStartTime = (startTime)=>{
    if(!startTime)return ''
    const date = new Date(startTime);
    return date.Format("yyyy-MM-dd hh:mm:ss");
};
module.exports = util;
