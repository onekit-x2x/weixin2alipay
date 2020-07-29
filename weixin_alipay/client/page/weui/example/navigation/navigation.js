import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
import CustomPage from "../../base/CustomPage";
CustomPage({
    onShareAppMessage:function(){
        return {
            title:'navigation',
            path:'page/weui/example/navigation/navigation'
        };
    },
    data:{
        loading:false,
        color:'#000',
        background:'#f8f8f8',
        show:true,
        animated:false
    },
    toggleLoading:function(){
        this.setData({
            loading:!this.data.loading
        });
    },
    changeColor:function(){
        this.setData({
            color:'#07C160'
        });
    },
    changeBgColor:function(){
        this.setData({
            background:'#ededed'
        });
    },
    toggleShow:function(){
        this.setData({
            show:!this.data.show
        });
    },
    toggleAnimated:function(){
        this.setData({
            animated:!this.data.animated,
            show:!this.data.show
        });
    }
});
