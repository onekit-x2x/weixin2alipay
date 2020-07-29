import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitComponent({
    behaviors:[
    ],
    options:{
        addGlobalClass:true,
        pureDataPattern:new RegExp("^_","")
    },
    properties:{
        duration:{
            type:Number,
            value:500
        },
        easingFunction:{
            type:String,
            value:'default'
        },
        loop:{
            type:Boolean,
            value:false
        },
        videoList:{
            type:Array,
            value:[
            ],
            observer:function(){
                const newVal = arguments.length > 0 && arguments[0] !== undefined?arguments[0]:[
                ];
                console.log(newVal);
                this._videoListChanged(newVal);
            }
        }
    },
    data:{
        nextQueue:[
        ],
        prevQueue:[
        ],
        curQueue:[
        ],
        circular:false,
        _last:1,
        _change:-1,
        _invalidUp:0,
        _invalidDown:0,
        _videoContexts:[
        ]
    },
    lifetimes:{
        attached:function(){
            this.data._videoContexts = [
                wx.createVideoContext('video_0',this),
                wx.createVideoContext('video_1',this),
                wx.createVideoContext('video_2',this)
            ];
        }
    },
    methods:{
        _videoListChanged:function(newVal){
            const _this = this;
            const data = this.data;
            newVal.forEach(function(item){
                data.nextQueue.push(item);
            });
            if(data.curQueue.length === 0){
                this.setData({
                    curQueue:data.nextQueue.splice(0,3)
                },function(){
                    _this.playCurrent(0);
                });
            }
        },
        animationfinish:function(e){
            const _data = this.data;
            const _last = _data._last;
            const _change = _data._change;
            const curQueue = _data.curQueue;
            const prevQueue = _data.prevQueue;
            const nextQueue = _data.nextQueue;
            const current = e.detail.current;
            const diff = current - _last;
            if(diff === 0)return
            this.data._last = current;
            this.playCurrent(current);
            this.triggerEvent('change',{
                activeId:curQueue[current].id
            });
            const direction = diff === 1 || diff === -2?'up':'down';
            if(direction === 'up'){
                console.log(this.data);
                if(this.data._invalidDown === 0){
                    const change = _change + 1 % 3;
                    const add = nextQueue.shift();
                    const remove = curQueue[change];
                    if(add){
                        prevQueue.push(remove);
                        curQueue[change] = add;
                        this.data._change = change;
                    } else {
                        this.data._invalidUp += 1;
                    }
                } else {
                    this.data._invalidDown -= 1;
                }
            }
            if(direction === 'down'){
                if(this.data._invalidUp === 0){
                    const _change2 = _change;
                    const _remove = curQueue[_change2];
                    const _add = prevQueue.pop();
                    if(_add){
                        curQueue[_change2] = _add;
                        nextQueue.unshift(_remove);
                        this.data._change = _change2 - 1 + 3 % 3;
                    } else {
                        this.data._invalidDown += 1;
                    }
                } else {
                    this.data._invalidUp -= 1;
                }
            }
            var circular = true;
            if(nextQueue.length === 0 && current !== 0){
                circular = false;
            }
            if(prevQueue.length === 0 && current !== 2){
                circular = false;
            }
            this.setData({
                curQueue:curQueue,
                circular:circular
            });
        },
        playCurrent:function(current){
            this.data._videoContexts.forEach(function(ctx,index){
                index !== current?ctx.pause():ctx.play();
            });
        },
        onPlay:function(e){
            this.trigger(e,'play');
        },
        onPause:function(e){
            this.trigger(e,'pause');
        },
        onEnded:function(e){
            this.trigger(e,'ended');
        },
        onError:function(e){
            this.trigger(e,'error');
        },
        onTimeUpdate:function(e){
            this.trigger(e,'timeupdate');
        },
        onWaiting:function(e){
            this.trigger(e,'wait');
        },
        onProgress:function(e){
            this.trigger(e,'progress');
        },
        onLoadedMetaData:function(e){
            this.trigger(e,'loadedmetadata');
        },
        trigger:function(e,type){
            const ext = arguments.length > 2 && arguments[2] !== undefined?arguments[2]:{};
            const detail = e.detail;
            const activeId = e.target.dataset.id;
            this.triggerEvent(type,Object.assign(Object.assign(Object.assign({},detail),{
                activeId:activeId
            }),ext));
        }
    }
});
