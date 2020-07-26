import {OnekitApp,OnekitPage} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'动态加载字体',
            path:'packageAPI/pages/load-font-face/load-font-face'
        };
    },
    data:{
        fontFamily:'Bitstream Vera Serif Bold',
        loaded:false
    },
    onLoad:function(){
        this.setData({
            loaded:false
        });
    },
    loadFontFace:function(){
        const self = this;
        wx.loadFontFace({
            family:this.data.fontFamily,
            source:'url("https://sungd.github.io/Pacifico.ttf")',
            success:function(res){
                console.log(res.status);
                self.setData({
                    loaded:true
                });
            },
            fail:function(res){
                console.log(res.status);
            },
            complete:function(res){
                console.log(res.status);
            }
        });
    },
    clear:function(){
        this.setData({
            loaded:false
        });
    }
});
