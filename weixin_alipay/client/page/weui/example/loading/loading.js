import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
import CustomPage from "../../base/CustomPage";
CustomPage({
    onShareAppMessage:function(){
        return {
            title:'loading',
            path:'page/weui/example/loading/loading'
        };
    },
    data:{
        tips:'请稍后',
        show:true,
        animated:true
    },
    onShow:function(){
        this.timer = setInterval(()=>{
            this.setData({
                show:!this.data.show
            });
        },2000);
    },
    close:function(){
        this.setData({
            animated:!this.data.animated
        });
    },
    onUnload:function(){
        clearInterval(this.timer);
    }
});
