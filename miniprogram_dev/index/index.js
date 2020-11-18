import { OnekitPage } from '../weixin2alipay/index';
import { wx } from '../weixin2alipay/index';

global = {};
OnekitPage({
    data:{
        latitude:23.099994,
        longitude:113.32452,
        markers:[
            {
                id:1,
                latitude:23.099994,
                longitude:113.32452,
                name:'T.I.T 创意园'
            }
        ],
        covers:[
            {
                latitude:23.099994,
                longitude:113.34452,
                iconPath:'/image/location.png'
            },
            {
                latitude:23.099994,
                longitude:113.30452,
                iconPath:'/image/location.png'
            }
        ]
    },
    onReady:function(e){
        this.mapCtx = wx.createMapContext('myMap');
    },
    getCenterLocation:function(){
        this.mapCtx.getCenterLocation({
        success:function(res){
            console.log(res.longitude);
            console.log(res.latitude);
        }
      });
    },
    moveToLocation:function(){
      this.mapCtx.moveToLocation();
    },
    translateMarker:function(){
        this.mapCtx.translateMarker({
        markerId:1,
        autoRotate:true,
        duration:1000,
        destination:{
            latitude:23.10229,
            longitude:113.3345211
        },
        animationEnd:function(){
            console.log('animation end');
        }
    });
    },
    includePoints:function(){
        this.mapCtx.includePoints({
        padding:[
            10
        ],
        points:[
            {
                latitude:23.10229,
                longitude:113.3345211
            },
            {
                latitude:23.00229,
                longitude:113.3345211
            }
        ]
    });
    }
});

