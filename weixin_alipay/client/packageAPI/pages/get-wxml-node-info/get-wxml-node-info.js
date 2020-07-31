import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'获取WXML节点信息',
            path:'packageAPI/pages/get-wxml-node-info/get-wxml-node-info'
        };
    },
    data:{
        metrics:[
        ]
    },
    onReady:function(){
        this.getNodeInfo();
    },
    getNodeInfo:function(){
        const $ = wx.createSelectorQuery();
        const target = $.select('.target');
        target.boundingClientRect();
        $.exec((res)=>{
            const rect = res[0];
            if(rect){
                const metrics = [
                ];
                for(const key in rect){
                        if((key !== 'id') && (key !== 'dataset')){
                            const val = rect[key];
                            metrics.push({
                                key:key,
                                val:val
                            });
                        }
                    };
                this.setData({
                    metrics:metrics
                });
            }
        });
    }
});
