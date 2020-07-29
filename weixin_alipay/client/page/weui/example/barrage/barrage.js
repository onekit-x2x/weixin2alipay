import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
const {mockData} = require('./utils');
import CustomPage from "../../base/CustomPage";
CustomPage({
    onShareAppMessage:function(){
        return {
            title:'barrage',
            path:'page/weui/example/barrage/barrage'
        };
    },
    data:{
        src:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        toggle:true,
        barrageValue:'',
        showBarrage:false
    },
    onReady:function(){
        this.addBarrage();
    },
    addBarrage:function(){
        const barrageComp = this.selectComponent('.barrage');
        this.barrage = barrageComp.getBarrageInstance({
            font:'bold 16px sans-serif',
            duration:15,
            lineHeight:2,
            mode:'overlap',
            padding:[
                10,
                10,
                10,
                10
            ],
            range:[
                0,
                1
            ],
            tunnelShow:false
        });
    },
    fullscreenchange:function(){
        this.setData({
            toggle:false
        });
        setTimeout(()=>{
            if(this.barrage)this.barrage.close()
            this.setData({
                toggle:true
            });
            this.addBarrage();
        },1000);
    },
    handleOpenClick:function(){
        this.setData({
            showBarrage:true
        });
        this.barrage.open();
        const data = mockData(3);
        this.barrage.addData(data);
        this.timer = setInterval(()=>{
            const data = mockData(5);
            this.barrage.addData(data);
        },2000);
    },
    handleCloseClick:function(){
        this.barrage.close();
        this.setData({
            showBarrage:false
        });
    },
    handleInput:function(e){
        this.setData({
            barrageValue:e.detail.value
        });
    },
    handleAddClick:function(){
        const data = mockData(1,[
            this.data.barrageValue
        ]);
        this.barrage.addData(data);
        this.setData({
            barrageValue:''
        });
    },
    handleTunnelShowClick:function(){
        this.barrage.showTunnel();
    },
    handleTunnelHideClick:function(){
        this.barrage.hideTunnel();
    }
});
