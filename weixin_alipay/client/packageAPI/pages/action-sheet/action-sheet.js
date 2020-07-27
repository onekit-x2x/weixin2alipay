import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'操作菜单',
            path:'packageAPI/pages/action-sheet/action-sheet'
        };
    },
    actionSheetTap:function(){
        wx.showActionSheet({
            itemList:[
                'item1',
                'item2',
                'item3',
                'item4'
            ],
            success:function(e){
                console.log(e.tapIndex);
            }
        });
    }
});
