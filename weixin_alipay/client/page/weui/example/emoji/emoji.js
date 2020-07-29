import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
import CustomPage from "../../base/CustomPage";
import {compareVersion} from "../../../../util/util";
CustomPage({
    onShareAppMessage:function(){
        return {
            title:'emoji',
            path:'page/weui/example/emoji/emoji'
        };
    },
    data:{
        lineHeight:24,
        functionShow:false,
        emojiShow:false,
        comment:'',
        focus:false,
        cursor:0,
        _keyboardShow:false,
        emojiSource:'https://res.wx.qq.com/op_res/eROMsLpnNC10dC40vzF8qviz63ic7ATlbGg20lr5pYykOwHRbLZFUhgg23RtVorX',
        historyList:[
        ],
        layoutHeight:'0px',
        safeHeight:0,
        keyboardHeight:0,
        isIOS:false,
        canIUse:true
    },
    onLoad:function(){
        const system = wx.getSystemInfoSync();
        var isIOS = system.platform === 'ios';
        this.safeHeight = system.screenHeight - system.safeArea.bottom;
        const layoutHeight = wx.getSystemInfoSync().windowHeight - this.safeHeight / 2;
        this.setData({
            isIOS:isIOS,
            safeHeight:this.safeHeight,
            layoutHeight:layoutHeight
        });
        const emojiInstance = this.selectComponent('.mp-emoji');
        this.emojiNames = emojiInstance.getEmojiNames();
        this.parseEmoji = emojiInstance.parseEmoji;
    },
    onReady:function(){
        const {SDKVersion} = wx.getSystemInfoSync();
        if(compareVersion(SDKVersion,'2.9.1') < 0){
            this.setData({
                canIUse:false
            });
        }
    },
    onkeyboardHeightChange:function(e){
        const {height} = e.detail;
        if(height === 0){
            this.data._keyboardShow = false;
            this.setData({
                safeHeight:this.safeHeight,
                keyboardHeight:height
            });
        } else {
            this.data._keyboardShow = true;
            this.setData({
                safeHeight:0,
                functionShow:false,
                emojiShow:false,
                keyboardHeight:height
            });
        }
    },
    hideAllPanel:function(){
        this.setData({
            functionShow:false,
            emojiShow:false
        });
    },
    showEmoji:function(){
        this.setData({
            functionShow:false,
            emojiShow:this.data._keyboardShow || !this.data.emojiShow
        });
    },
    showFunction:function(){
        this.setData({
            functionShow:this.data._keyboardShow || !this.data.functionShow,
            emojiShow:false
        });
    },
    chooseImage:function(){
    },
    onFocus:function(){
        this.data._keyboardShow = true;
        this.hideAllPanel();
    },
    onBlur:function(e){
        this.data._keyboardShow = false;
        this.data.cursor = e.detail.cursor || 0;
    },
    onInput:function(e){
        const value = e.detail.value;
        this.data.comment = value;
    },
    onConfirm:function(){
        this.onsend();
    },
    insertEmoji:function(evt){
        const emotionName = evt.detail.emotionName;
        const {cursor,comment} = this.data;
        const newComment = comment.slice(0,cursor) + emotionName + comment.slice(cursor);
        this.setData({
            comment:newComment,
            cursor:cursor + emotionName.length
        });
    },
    onsend:function(){
        const comment = this.data.comment;
        const parsedComment = {
            emoji:this.parseEmoji(this.data.comment),
            id:`emoji_${this.data.historyList.length}`
        };
        this.setData({
            historyList:[
                ...this.data.historyList,
                parsedComment
            ],
            comment:'',
            emojiShow:false
        });
    },
    deleteEmoji:function(){
        const pos = this.data.cursor;
        const comment = this.data.comment;
        var result = '';
        var cursor = 0;
        var emojiLen = 6;
        var startPos = pos - emojiLen;
        if(startPos < 0){
            startPos = 0;
            emojiLen = pos;
        }
        const str = comment.slice(startPos,pos);
        const matchs = str.match(new RegExp("\[([\u4e00-\u9fa5\w]+)\]$","g"));
        if(matchs){
            const rawName = matchs[0];
            const left = emojiLen - rawName.length;
            if(this.emojiNames.indexOf(rawName) >= 0){
                const replace = str.replace(rawName,'');
                result = comment.slice(0,startPos) + replace + comment.slice(pos);
                cursor = startPos + left;
            }
        } else {
            var endPos = pos - 1;
            if(endPos < 0)endPos = 0
            const prefix = comment.slice(0,endPos);
            const suffix = comment.slice(pos);
            result = prefix + suffix;
            cursor = endPos;
        }
        this.setData({
            comment:result,
            cursor:cursor
        });
    }
});
