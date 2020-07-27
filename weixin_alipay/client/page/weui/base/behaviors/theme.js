import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
module.exports = Behavior({
    data:{
        theme:'light'
    },
    methods:{
        themeChanged:function(theme){
            this.setData({
                theme:theme
            });
        }
    }
});
