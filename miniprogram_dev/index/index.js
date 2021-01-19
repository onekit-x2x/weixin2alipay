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
// function getRandomColor(){
//   const rgb = [
//   ]
//   for(var i = 0;i < 3;++i){
//     var color = Math.floor(Math.random() * 256).toString(16);
//     color = color.length == 1?'0' + color:color;
//     rgb.push(color);
//   }
//   return '#' + rgb.join('')
// }
// OnekitPage({
//     onShareAppMessage:function(){
//       return {
//         title:'video',
//         path:'page/component/pages/video/video'
//       }
//     },
//     onReady:function(){
//       this.videoContext = wx.createVideoContext('myVideo')
//     },
//     onHide:function(){
//     },
//     inputValue:'',
//     data:{
//         enableAutoRotation:true,
//         src:'',
//         danmuList:[
//           {
//               text:'第 1s 出现的弹幕',
//               color:'#ff0000',
//               time:1
//             },
//           {
//               text:'第 3s 出现的弹幕',
//               color:'#ff00ff',
//               time:3
//             }
//         ]
//       },
//     bindInputBlur:function(e){
//       this.inputValue = e.detail.value
//     },
//     bindButtonTap:function(){
//       const that = this
//       wx.chooseVideo({
//         sourceType:[
//           'album',
//           'camera'
//         ],
//         maxDuration:60,
//         camera:[
//           'front',
//           'back'
//         ],
//         success:function(res){
//           that.setData({
//             src:res.tempFilePath
//           })
//         }
//       })
//     },
//     bindVideoEnterPictureInPicture:function(){
//       console.log('进入小窗模式')
//     },
//     bindVideoLeavePictureInPicture:function(){
//       console.log('退出小窗模式')
//     },
//     bindPlayVideo:function(){
//       this.videoContext.play()
//     },
//     bindSendDanmu:function(){
//       this.videoContext.sendDanmu({
//         text:this.inputValue,
//         color:getRandomColor()
//       })
//     },
//     videoErrorCallback:function(e){
//       console.log('视频错误信息:')
//       console.log(e.detail.errMsg)
//     },
//     handleSwitchChange:function(e){
//       this.setData({
//         enableAutoRotation:e.detail.value
//       })
//     }
//   })

//canvas
// const app = getApp()
// OnekitPage({
//     data:{},
//     onLoad:function(){
//       this.position = {
//         x:150,
//         y:150,
//         vx:2,
//         vy:2
//       }
//       this.x = -100
//       wx.createSelectorQuery().select('#canvas').fields({
//     node:true,
//     size:true
//   }).exec(this.init.bind(this))
//     },
//     init:function(res){
//       console.log(res)
//       const width = res[0].width
//       const height = res[0].height
//       const canvas = res[0].node
//       const ctx = canvas.getContext('2d')
//       const dpr = wx.getSystemInfoSync().pixelRatio
//       canvas.width = width * dpr
//       canvas.height = height * dpr
//       ctx.scale(dpr,dpr)
//       const renderLoop = ()=>{
//       this.render(canvas,ctx)
//       canvas.requestAnimationFrame(renderLoop)
//     }
//       canvas.requestAnimationFrame(renderLoop)
//       const img = canvas.createImage()
//       img.onload = ()=>{this._img = img}
//       img.src = './car.png'
//     },
//     render:function(canvas,ctx){
//       ctx.clearRect(0,0,300,300)
//       this.drawBall(ctx)
//       this.drawCar(ctx)
//     },
//     drawBall:function(ctx){
//       const p = this.position
//       p.x += p.vx
//       p.y += p.vy
//       if(p.x >= 300){
//       p.vx = -2;
//     }
//       if(p.x <= 7){
//       p.vx = 2;
//     }
//       if(p.y >= 300){
//       p.vy = -2;
//     }
//       if(p.y <= 7){
//       p.vy = 2;
//     }
//       function ball(x,y){
//       ctx.beginPath()
//       ctx.arc(x,y,5,0,Math.PI * 2)
//       ctx.fillStyle = '#1aad19'
//       ctx.strokeStyle = 'rgba(1,1,1,0)'
//       ctx.fill()
//       ctx.stroke()
//     }
//       ball(p.x,150)
//       ball(150,p.y)
//       ball(300 - p.x,150)
//       ball(150,300 - p.y)
//       ball(p.x,p.y)
//       ball(300 - p.x,300 - p.y)
//       ball(p.x,300 - p.y)
//       ball(300 - p.x,p.y)
//     },
//     drawCar:function(ctx){
//       if(!this._img)return
//       if(this.x > 350){
//       this.x = -100;
//     }
//       ctx.drawImage(this._img,this.x++,150 - 25,100,50)
//       ctx.restore()
//     }
//   })

//map
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
      this.mapCtx = wx.createMapContext('myMap')
    },
    getCenterLocation:function(){
      this.mapCtx.getCenterLocation({
        success:function(res){
          console.log(res.longitude)
          console.log(res.latitude)
        }
      })
    },
    moveToLocation:function(){
      this.mapCtx.moveToLocation()
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
          console.log('animation end')
        }
      })
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
      })
    }
  })