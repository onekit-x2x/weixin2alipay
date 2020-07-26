import {OnekitApp,OnekitPage} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'editor',
            path:'page/component/pages/editor/editor'
        };
    },
    data:{
        formats:{},
        readOnly:false,
        placeholder:'开始输入...',
        editorHeight:300,
        keyboardHeight:0,
        isIOS:false,
        safeHeight:0,
        toolBarHeight:50
    },
    readOnlyChange:function(){
        this.setData({
            readOnly:!this.data.readOnly
        });
    },
    onLoad:function(){
        const {platform,safeArea,model,screenHeight} = wx.getSystemInfoSync();
        var safeHeight;
        if(safeArea){
            safeHeight = screenHeight - safeArea.bottom;
        } else {
            safeHeight = 32;
        }
        this._safeHeight = safeHeight;
        var isIOS = platform === 'ios';
        this.setData({
            isIOS:isIOS,
            safeHeight:safeHeight,
            toolBarHeight:isIOS?safeHeight + 50:50
        });
        const that = this;
        this.updatePosition(0);
        var keyboardHeight = 0;
        wx.onKeyboardHeightChange((res)=>{
            if(res.height === keyboardHeight){
                return;
            }
            const duration = res.height > 0?res.duration * 1000:0;
            keyboardHeight = res.height;
            setTimeout(()=>{
                wx.pageScrollTo({
                    scrollTop:0,
                    success:function(){
                        that.updatePosition(keyboardHeight);
                        that.editorCtx.scrollIntoView();
                    }
                });
            },duration);
        });
    },
    updatePosition:function(keyboardHeight){
        const toolbarHeight = 50;
        const {windowHeight,platform} = wx.getSystemInfoSync();
        var editorHeight = keyboardHeight > 0?windowHeight - keyboardHeight - toolbarHeight:windowHeight;
        if(keyboardHeight === 0){
            this.setData({
                editorHeight:editorHeight,
                keyboardHeight:keyboardHeight,
                toolBarHeight:this.data.isIOS?50 + this._safeHeight:50,
                safeHeight:this._safeHeight
            });
        } else {
            this.setData({
                editorHeight:editorHeight,
                keyboardHeight:keyboardHeight,
                toolBarHeight:50,
                safeHeight:0
            });
        }
    },
    calNavigationBarAndStatusBar:function(){
        const systemInfo = wx.getSystemInfoSync();
        const {statusBarHeight,platform} = systemInfo;
        const isIOS = platform === 'ios';
        const navigationBarHeight = isIOS?44:48;
        return statusBarHeight + navigationBarHeight;
    },
    onEditorReady:function(){
        const that = this;
        wx.createSelectorQuery().select('#editor').context(function(res){
    that.editorCtx = res.context;
}).exec();
    },
    blur:function(){
        this.editorCtx.blur();
    },
    format:function(e){
        var {name,value} = e.target.dataset;
        if(!name)return
        this.editorCtx.format(name,value);
    },
    onStatusChange:function(e){
        const formats = e.detail;
        this.setData({
            formats:formats
        });
    },
    insertDivider:function(){
        this.editorCtx.insertDivider({
            success:function(){
                console.log('insert divider success');
            }
        });
    },
    clear:function(){
        this.editorCtx.clear({
            success:function(res){
                console.log("clear success");
            }
        });
    },
    removeFormat:function(){
        this.editorCtx.removeFormat();
    },
    insertDate:function(){
        const date = new Date();
        const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        this.editorCtx.insertText({
            text:formatDate
        });
    },
    insertImage:function(){
        const that = this;
        wx.chooseImage({
            count:1,
            success:function(res){
                that.editorCtx.insertImage({
                    src:res.tempFilePaths[0],
                    data:{
                        id:'abcd',
                        role:'god'
                    },
                    width:'80%',
                    success:function(){
                        console.log('insert image success');
                    }
                });
            }
        });
    }
});
