import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitComponent({
    options:{
        addGlobalClass:true,
        multipleSlots:true
    },
    properties:{
        tabIndex:{
            type:Number,
            value:0
        }
    },
    relations:{
        '../vtabs/vtabs':{
            type:'parent'
        }
    },
    lifetimes:{
        attached:function(){
        }
    },
    methods:{
        calcHeight:function(callback){
            var query = this.createSelectorQuery();
            query.select('.weui-vtabs-content__item').boundingClientRect(function(rect){
    callback && callback(rect);
}).exec();
        }
    }
});
