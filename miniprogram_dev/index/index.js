import { OnekitPage,wx} from '../weixin2alipay/index';
global = {};

//slider
// var pageData = {}
// for(var i = 1;i < 5;++i){
//   (function(index){
//     pageData[`slider${index}change`] = function(e){
//     console.log(`slider${index}发生change事件，携带值为`,e.detail.value)
//   }
//   })(i);
// }
// OnekitPage(pageData)

//switch
// var pageData = {
//     data:{
//         switch1Checked:true,
//         switch2Checked:false,
//         switch1Style:'',
//         switch2Style:'text-decoration: line-through'
//       }
//   }
// for(var i = 1;i <= 2;++i){
//   (function(index){
//     pageData[`switch${index}Change`] = function(e){
//     console.log(`switch${index}发生change事件，携带值为`,e.detail.value)
//     var obj = {}
//     obj[`switch${index}Checked`] = e.detail.value
//     this.setData(obj)
//     obj = {}
//     obj[`switch${index}Style`] = e.detail.value?'':'text-decoration: line-through'
//     this.setData(obj)
//   }
//   })(i);
// }
// OnekitPage(pageData)

//textarea
// OnekitPage({
//     data:{
//         focus:false
//       },
//     bindTextAreaBlur:function(e){
//       console.log(e.detail.value)
//     }
//   })

//camera
// OnekitPage({
//     takePhoto:function(){
//       console.log('xxx')
//       const ctx = wx.createCameraContext()
//       console.log(ctx)
//       ctx.takePhoto({
//         quality:'high',
//         success:(res)=>{
//           console.log(res)
//           this.setData({
//             src:res.tempImagePath
//           })
//         },
//         fail:(res) =>{
//           console.log('fail', res)
//         }
//       })
//     },
//     error:function(e){
//       console.log(e.detail)
//     }
//   })
// OnekitPage({
//     onLoad:function(){
//           console.log('onLoad')
//       this.ctx = wx.createCameraContext()
//       console.log(this.ctx)
//     },
//     takePhoto:function(){
//       this.ctx.takePhoto({
//         quality:'high',
//         success:(res)=>{this.setData({
//             src:res.tempImagePath
//           })}
//       })
//     },
//     startRecord:function(){
//       this.ctx.startRecord({
//         success:(res)=>{console.log('startRecord')}
//       })
//     },
//     stopRecord:function(){
//       this.ctx.stopRecord({
//         success:(res)=>{this.setData({
//             src:res.tempThumbPath,
//             videoSrc:res.tempVideoPath
//           })}
//       })
//     },
//     error:function(e){
//       console.log(e.detail)
//     }
//   })

//button
// OnekitPage({
//   button_tap(){
//     console.log('xxxx')
//   }
// })

//image
// OnekitPage({
//     data:{
//         array:[
//           {
//               mode:'scaleToFill',
//               text:'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
//             },
//           {
//               mode:'aspectFit',
//               text:'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
//             },
//           {
//               mode:'aspectFill',
//               text:'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
//             },
//           {
//               mode:'top',
//               text:'top：不缩放图片，只显示图片的顶部区域'
//             },
//           {
//               mode:'bottom',
//               text:'bottom：不缩放图片，只显示图片的底部区域'
//             },
//           {
//               mode:'center',
//               text:'center：不缩放图片，只显示图片的中间区域'
//             },
//           {
//               mode:'left',
//               text:'left：不缩放图片，只显示图片的左边区域'
//             },
//           {
//               mode:'right',
//               text:'right：不缩放图片，只显示图片的右边边区域'
//             },
//           {
//               mode:'top left',
//               text:'top left：不缩放图片，只显示图片的左上边区域'
//             },
//           {
//               mode:'top right',
//               text:'top right：不缩放图片，只显示图片的右上边区域'
//             },
//           {
//               mode:'bottom left',
//               text:'bottom left：不缩放图片，只显示图片的左下边区域'
//             },
//           {
//               mode:'bottom right',
//               text:'bottom right：不缩放图片，只显示图片的右下边区域'
//             }
//         ],
//         src:'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'
//       },
//     imageError:function(e){
//       console.log('image3发生error事件，携带值为',e.detail.errMsg)
//     }
//   })

//video
function getRandomColor(){
  const rgb = [
  ]
  for(var i = 0;i < 3;++i){
    var color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1?'0' + color:color;
    rgb.push(color);
  }
  return '#' + rgb.join('')
}
OnekitPage({
    onShareAppMessage:function(){
      return {
        title:'video',
        path:'page/component/pages/video/video'
      }
    },
    onReady:function(){
      this.videoContext = wx.createVideoContext('myVideo')
    },
    onHide:function(){
    },
    inputValue:'',
    data:{
        enableAutoRotation:true,
        src:'',
        danmuList:[
          {
              text:'第 1s 出现的弹幕',
              color:'#ff0000',
              time:1
            },
          {
              text:'第 3s 出现的弹幕',
              color:'#ff00ff',
              time:3
            }
        ]
      },
    bindInputBlur:function(e){
      this.inputValue = e.detail.value
    },
    bindButtonTap:function(){
      const that = this
      wx.chooseVideo({
        sourceType:[
          'album',
          'camera'
        ],
        maxDuration:60,
        camera:[
          'front',
          'back'
        ],
        success:function(res){
          that.setData({
            src:res.tempFilePath
          })
        }
      })
    },
    bindVideoEnterPictureInPicture:function(){
      console.log('进入小窗模式')
    },
    bindVideoLeavePictureInPicture:function(){
      console.log('退出小窗模式')
    },
    bindPlayVideo:function(){
      this.videoContext.play()
    },
    bindSendDanmu:function(){
      this.videoContext.sendDanmu({
        text:this.inputValue,
        color:getRandomColor()
      })
    },
    videoErrorCallback:function(e){
      console.log('视频错误信息:')
      console.log(e.detail.errMsg)
    },
    handleSwitchChange:function(e){
      this.setData({
        enableAutoRotation:e.detail.value
      })
    }
  })