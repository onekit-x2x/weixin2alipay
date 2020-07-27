import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'设置页面标题',
            path:'packageAPI/pages/set-navigation-bar-title/set-navigation-bar-title'
        };
    },
    setNaivgationBarTitle:function(e){
        const title = e.detail.value.title;
        console.log(title);
        wx.setNavigationBarTitle({
            title:title,
            success:function(){
                console.log('setNavigationBarTitle success');
            },
            fail:function(err){
                console.log('setNavigationBarTitle fail, err is',err);
            }
        });
        return false;
    }
});
