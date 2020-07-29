import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitComponent({
    options:{
        addGlobalClass:true
    },
    properties:{
        extClass:{
            type:String,
            value:''
        },
        content:{
            type:String,
            value:''
        }
    }
});
