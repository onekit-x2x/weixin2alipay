import {OnekitPage} from '../weixin2alipay/index';
import {wx} from '../weixin2alipay/index';
global = {};
// OnekitPage({
//     onShareAppMessage:function(){
//         return {
//         title:'cover-view',
//         path:'weixin2alipay/ui/cover-view/cover-view'
//     };
//     },
//     data:{
//         latitude:23.099994,
//         longitude:113.32452
//     }
// });

const order = [
    'demo1',
    'demo2',
    'demo3'
];
OnekitPage({
    onShareAppMessage:function(){
        return {
        title:'scroll-view',
        path:'page/component/pages/scroll-view/scroll-view'
    };
    },
    data:{
        toView:'green',
        counter:0
    },
    add:function(){
        var counter = this.data.counter;
        counter++;
        this.setData({
        counter:counter
    });
    },
    div:function(){
        var counter = this.data.counter;
        counter--;
        this.setData({
        counter:counter
    });
    },
    refresherrefresh:function(e){
        console.log(e);
    },
    refresherpulling:function(e){
        console.log(e);
    },
    refresherrestore:function(e){
        console.log(e);
    },
    refresherabort:function(e){
        console.log(e);
    },
    upper:function(e){
        console.log(e);
    },
    lower:function(e){
        console.log(e);
    },
    scroll:function(e){
        console.log(e);
    },
    scrollToTop:function(){
        this.setAction({
        scrollTop:0
    });
    },
    tap:function(){
        for(var i = 0;(i < order.length);++i){
        if((order[i] === this.data.toView)){
            this.setData({
                toView:order[(i + 1)],
                scrollTop:(((i + 1)) * 200)
            });
            break;
        }
    };
    },
    tapMove:function(){
        this.setData({
        scrollTop:(this.data.scrollTop + 10)
    });
    },
    onReady:function(){
        setTimeout(()=>{this.setData({
        triggered:true
    })},1000);
    }
});
