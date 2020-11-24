import { OnekitPage } from '../weixin2alipay/index';
import { wx } from '../weixin2alipay/index';

global = {};
OnekitPage({
    data:{
        atitude:23.099994,
        longitude:113.32452,
        markers:[
            {
                latitude:23.099994,
                longitude:113.32452
            },
            {
                latitude:23.099994,
                longitude:113.32252
            },
            {
                latitude:23.099994,
                longitude:113.32652
            },
            {
                latitude:23.096994,
                longitude:113.32952
            }
        ]
    },
    onLoad:function(){
        var that = this;
        const ctx = wx.createMapContext('myMap');
        ctx.includePoints({
        points:this.data.markers,
        padding:[
            '10',
            '10',
            '30',
            '10'
        ],
        success:function(e){
            console.log(e,'232323');
        },
        fail:function(e){
            console.log('da');
        }
    });
    }
});
