import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'振动',
            path:'packageAPI/pages/vibrate/vibrate'
        };
    },
    vibrateShort:function(){
        wx.vibrateShort({
            success:function(res){
                console.log(res);
            },
            fail:function(err){
                console.error(err);
            },
            complete:function(){
                console.log('completed');
            }
        });
    },
    vibrateLong:function(){
        wx.vibrateLong({
            success:function(res){
                console.log(res);
            },
            fail:function(err){
                console.error(err);
            },
            complete:function(){
                console.log('completed');
            }
        });
    }
});
