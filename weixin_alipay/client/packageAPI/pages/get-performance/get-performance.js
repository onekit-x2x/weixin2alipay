import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
const util = require('./util');
const performance = wx.getPerformance?wx.getPerformance():{};
const performanceObserver = performance.createObserver?performance.createObserver():null;
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'周期性缓存',
            path:'packageAPI/pages/get-performance/get-performance'
        };
    },
    data:{
        array:[
        ],
        support:false
    },
    onLoad:function(){
        console.log('canIUse:getPerformance:',wx.canIUse('getPerformance'));
        var canIUse = false;
        if(wx.getPerformance){
            canIUse = true;
        }
        this.setData({
            support:canIUse
        });
    },
    getPerformanceInfo:function(){
        const EntryList = performance.getEntries();
        const array = [
        ];
        EntryList.forEach((item)=>{array.push({
            entryType:util.renderEntryType(item.entryType),
            name:util.renderName(item.name),
            duration:util.renderDuration(item.duration),
            startTime:util.renderStartTime(item.startTime)
        })});
        this.setData({
            array:array
        });
    },
    startObserver:function(){
        performanceObserver.observe({
            entryTypes:[
                'render',
                'script',
                'navigation'
            ]
        });
    },
    stopObserver:function(){
        performanceObserver.disconnect();
    }
});
