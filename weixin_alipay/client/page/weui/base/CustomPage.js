import {OnekitApp,OnekitPage} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
import themeMixin from "./behaviors/theme";
const CustomPage = function(options){
    return OnekitPage(Object.assign({},options,{
        behaviors:[
    themeMixin
].concat(options.behaviors || [
]),
        onLoad:function(query){
            const app = getApp();
            if(this.themeChanged){
                this.themeChanged(app.globalData.theme);
                app.watchThemeChange && app.watchThemeChange(this.themeChanged);
                options.onLoad && options.onLoad.call(this,query);
            }
        },
        onUnload:function(){
            const app = getApp();
            if(this.themeChanged){
                app.unWatchThemeChange && app.unWatchThemeChange(this.themeChanged);
                options.onUnload && options.onUnload.call(this);
            }
        }
    }));
};
export default CustomPage;
