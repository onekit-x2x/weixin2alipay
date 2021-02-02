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
// OnekitPage({
//     data:{
//         latitude:23.099994,
//         longitude:113.32452,
//         markers:[
//           {
//               id:1,
//               latitude:23.099994,
//               longitude:113.32452,
//               name:'T.I.T 创意园'
//             }
//         ],
//         covers:[
//           {
//               latitude:23.099994,
//               longitude:113.34452,
//               iconPath:'/image/location.png'
//             },
//           {
//               latitude:23.099994,
//               longitude:113.30452,
//               iconPath:'/image/location.png'
//             }
//         ]
//       },
//     onReady:function(e){
//       this.mapCtx = wx.createMapContext('myMap')
//     },
//     getCenterLocation:function(){
//       this.mapCtx.getCenterLocation({
//         success:function(res){
//           console.log(res.longitude)
//           console.log(res.latitude)
//         }
//       })
//     },
//     moveToLocation:function(){
//       this.mapCtx.moveToLocation()
//     },
//     translateMarker:function(){
//       this.mapCtx.translateMarker({
//         markerId:1,
//         autoRotate:true,
//         duration:1000,
//         destination:{
//             latitude:23.10229,
//             longitude:113.3345211
//           },
//         animationEnd:function(){
//           console.log('animation end')
//         }
//       })
//     },
//     includePoints:function(){
//       this.mapCtx.includePoints({
//         padding:[
//           10
//         ],
//         points:[
//           {
//               latitude:23.10229,
//               longitude:113.3345211
//             },
//           {
//               latitude:23.00229,
//               longitude:113.3345211
//             }
//         ]
//       })
//     }
//   })

//movable-view
// OnekitPage({
//     onShareAppMessage:function(){
//       return {
//         title:'movable-view',
//         path:'page/component/pages/movable-view/movable-view'
//       }
//     },
//     data:{
//         x:0,
//         y:0,
//         scale:2
//       },
//     tap:function(){
//       this.setData({
//         x:30,
//         y:30
//       })
//     },
//     tap2:function(){
//       this.setData({
//         scale:3
//       })
//     },
//     onChange:function(e){
//       console.log(e.detail)
//     },
//     onScale:function(e){
//       console.log(e.detail)
//     }
//   })

//scoll-view
// const order = [
//   'demo1',
//   'demo2',
//   'demo3'
// ]
// OnekitPage({
//     onShareAppMessage:function(){
//       return {
//         title:'scroll-view',
//         path:'page/component/pages/scroll-view/scroll-view'
//       }
//     },
//     data:{
//         toView:'green'
//       },
//     upper:function(e){
//       console.log(e)
//     },
//     lower:function(e){
//       console.log(e)
//     },
//     scroll:function(e){
//       console.log(e)
//     },
//     scrollToTop:function(){
//       this.setAction({
//         scrollTop:0
//       })
//     },
//     tap:function(){
//       for(var i = 0;i < order.length;++i){
//       if(order[i] == this.data.toView){
//         this.setData({
//             toView:order[i + 1],
//             scrollTop:((i + 1)) * 200
//           });
//         break;
//       }
//     }
//     },
//     tapMove:function(){
//       this.setData({
//         scrollTop:this.data.scrollTop + 10
//       })
//     }
//   })

//swiper
// OnekitPage({
//     data:{
//         background:[
//           'demo-text-1',
//           'demo-text-2',
//           'demo-text-3'
//         ],
//         indicatorDots:true,
//         vertical:false,
//         autoplay:false,
//         circular:false,
//         interval:2000,
//         duration:500,
//         previousMargin:0,
//         nextMargin:0
//       },
//     changeProperty:function(e){
//       var propertyName = e.currentTarget.dataset.propertyName
//        console.log(propertyName,e.detail.value)
//       var newData = {}
//       newData[propertyName] = e.detail.value
//       this.setData(newData)
//     },
//     changeIndicatorDots:function(e){
//       this.setData({
//         indicatorDots:!this.data.indicatorDots
//       })
//     },
//     changeAutoplay:function(e){
//       this.setData({
//         autoplay:!this.data.autoplay
//       })
//     },
//     intervalChange:function(e){
//       this.setData({
//         interval:e.detail.value
//       })
//     },
//     durationChange:function(e){
//       this.setData({
//         duration:e.detail.value
//       })
//     }
//   })

//picker
// OnekitPage({
//     data:{
//         array:[
//           '美国',
//           '中国',
//           '巴西',
//           '日本'
//         ],
//         objectArray:[
//           {
//               id:0,
//               name:'美国'
//             },
//           {
//               id:1,
//               name:'中国'
//             },
//           {
//               id:2,
//               name:'巴西'
//             },
//           {
//               id:3,
//               name:'日本'
//             }
//         ],
//         index:0,
//         multiArray:[
//           [
//             '无脊柱动物',
//             '脊柱动物'
//           ],
//           [
//             '扁性动物',
//             '线形动物',
//             '环节动物',
//             '软体动物',
//             '节肢动物'
//           ],
//           [
//             '猪肉绦虫',
//             '吸血虫'
//           ]
//         ],
//         objectMultiArray:[
//           [
//             {
//                 id:0,
//                 name:'无脊柱动物'
//               },
//             {
//                 id:1,
//                 name:'脊柱动物'
//               }
//           ],
//           [
//             {
//                 id:0,
//                 name:'扁性动物'
//               },
//             {
//                 id:1,
//                 name:'线形动物'
//               },
//             {
//                 id:2,
//                 name:'环节动物'
//               },
//             {
//                 id:3,
//                 name:'软体动物'
//               },
//             {
//                 id:3,
//                 name:'节肢动物'
//               }
//           ],
//           [
//             {
//                 id:0,
//                 name:'猪肉绦虫'
//               },
//             {
//                 id:1,
//                 name:'吸血虫'
//               }
//           ]
//         ],
//         multiIndex:[
//           0,
//           0,
//           0
//         ],
//         date:'2016-09-01',
//         time:'12:01',
//         region:[
//           '广东省',
//           '广州市',
//           '海珠区'
//         ],
//         customItem:'全部'
//       },
//     bindPickerChange:function(e){
//       console.log('picker发送选择改变，携带值为',e.detail.value)
//       this.setData({
//         index:e.detail.value
//       })
//     },
//     bindMultiPickerChange:function(e){
//       console.log('picker发送选择改变，携带值为',e.detail.value)
//       this.setData({
//         multiIndex:e.detail.value
//       })
//     },
//     bindMultiPickerColumnChange:function(e){
//       console.log('修改的列为',e.detail.column,'，值为',e.detail.value)
//       var data = {
//         multiArray:this.data.multiArray,
//         multiIndex:this.data.multiIndex
//       }
//       data.multiIndex[e.detail.column] = e.detail.value
//           switch(e.detail.column){
//       case 0:
//         switch(data.multiIndex[0]){
//   case 0:
//     data.multiArray[1] = [
//   '扁性动物',
//   '线形动物',
//   '环节动物',
//   '软体动物',
//   '节肢动物'
// ];
//     data.multiArray[2] = [
//   '猪肉绦虫',
//   '吸血虫'
// ];
//     break;
//   case 1:
//     data.multiArray[1] = [
//   '鱼',
//   '两栖动物',
//   '爬行动物'
// ];
//     data.multiArray[2] = [
//   '鲫鱼',
//   '带鱼'
// ];
//     break;
// };
//         data.multiIndex[1] = 0;
//         data.multiIndex[2] = 0;
//         break;
//       case 1:
//         switch(data.multiIndex[0]){
//   case 0:
//     switch(data.multiIndex[1]){
//   case 0:
//     data.multiArray[2] = [
//   '猪肉绦虫',
//   '吸血虫'
// ];
//     break;
//   case 1:
//     data.multiArray[2] = [
//   '蛔虫'
// ];
//     break;
//   case 2:
//     data.multiArray[2] = [
//   '蚂蚁',
//   '蚂蟥'
// ];
//     break;
//   case 3:
//     data.multiArray[2] = [
//   '河蚌',
//   '蜗牛',
//   '蛞蝓'
// ];
//     break;
//   case 4:
//     data.multiArray[2] = [
//   '昆虫',
//   '甲壳动物',
//   '蛛形动物',
//   '多足动物'
// ];
//     break;
// };
//     break;
//   case 1:
//     switch(data.multiIndex[1]){
//   case 0:
//     data.multiArray[2] = [
//   '鲫鱼',
//   '带鱼'
// ];
//     break;
//   case 1:
//     data.multiArray[2] = [
//   '青蛙',
//   '娃娃鱼'
// ];
//     break;
//   case 2:
//     data.multiArray[2] = [
//   '蜥蜴',
//   '龟',
//   '壁虎'
// ];
//     break;
// };
//     break;
// };
//         data.multiIndex[2] = 0;
//         console.log(data.multiIndex);
//         break;
//     }
//       this.setData(data)
//     },
//     bindDateChange:function(e){
//       console.log('picker发送选择改变，携带值为',e.detail.value)
//       this.setData({
//         date:e.detail.value
//       })
//     },
//     bindTimeChange:function(e){
//       console.log('picker发送选择改变，携带值为',e.detail.value)
//       this.setData({
//         time:e.detail.value
//       })
//     },
//     bindRegionChange:function(e){
//       console.log('picker发送选择改变，携带值为',e.detail.value)
//       this.setData({
//         region:e.detail.value
//       })
//     }
//   })

//mapContext
// OnekitPage({
//     onLoad:function(){
//       const ctx = wx.createCanvasContext('myCanvas')
//       // Draw coordinates
// ctx.arc(100, 75, 50, 0, 2 * Math.PI)
// ctx.setFillStyle('#EEEEEE')
// ctx.fill()

// ctx.beginPath()
// ctx.moveTo(40, 75)
// ctx.lineTo(160, 75)
// ctx.moveTo(100, 15)
// ctx.lineTo(100, 135)
// ctx.setStrokeStyle('#AAAAAA')
// ctx.stroke()

// ctx.setFontSize(12)
// ctx.fillText('0', 165, 78)
// ctx.fillText('0.5*PI', 83, 145)
// ctx.fillText('1*PI', 15, 78)
// ctx.fillText('1.5*PI', 83, 10)

// // Draw points
// ctx.beginPath()
// ctx.arc(100, 75, 2, 0, 2 * Math.PI)
// ctx.setFillStyle('lightgreen')
// ctx.fill()

// ctx.beginPath()
// ctx.arc(100, 25, 2, 0, 2 * Math.PI)
// ctx.setFillStyle('blue')
// ctx.fill()

// ctx.beginPath()
// ctx.arc(150, 75, 2, 0, 2 * Math.PI)
// ctx.setFillStyle('red')
// ctx.fill()

// // Draw arc
// ctx.beginPath()
// ctx.arc(100, 75, 50, 0, 1.5 * Math.PI)
// ctx.setStrokeStyle('#333333')
// ctx.stroke()

// ctx.draw()
//     }
//   })

//MapContext
OnekitPage({
  data: {
    // markers: [{
    //   id: 1,
    //   latitude: 23.099994,
    //   longitude: 113.324520,
    //   name: 'T.I.T 创意园',
    // }],
    // covers: [{
    //   latitude: 23.099994,
    //   longitude: 113.344520,
    //   iconPath: '/image/location.png'
    // }, {
    //   latitude: 23.099994,
    //   longitude: 113.304520,
    //   iconPath: '/image/location.png'
    // }]
     markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }, {
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/location.png'
    },{
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/location.png'
    }]
  },
  onLoad(){
    const ctx = wx.createMapContext('myMap');
    ctx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude:23.10229,
        longitude:113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  }
})

// OnekitPage({
//     data:{
//         latitude:23.099994,
//         longitude:113.32452,
//         markers:[
//           {
//               id:1,
//               latitude:23.099994,
//               longitude:113.32452,
//               name:'T.I.T 创意园'
//             }
//         ],
//         covers:[
//           {
//               latitude:23.099994,
//               longitude:113.34452,
//               iconPath:'/image/location.png'
//             },
//           {
//               latitude:23.099994,
//               longitude:113.30452,
//               iconPath:'/image/location.png'
//             }
//         ]
//       },
//     onReady:function(e){
//       this.mapCtx = wx.createMapContext('myMap')
//     },
//     getCenterLocation:function(){
//       this.mapCtx.getCenterLocation({
//         success:function(res){
//           console.log(res.longitude)
//           console.log(res.latitude)
//         }
//       })
//     },
//     moveToLocation:function(){
//       this.mapCtx.moveToLocation()
//     },
//     translateMarker:function(){
//       this.mapCtx.translateMarker({
//         markerId:1,
//         destination:{
//             latitude:23.10229,
//             longitude:113.3345211
//           },
//         autoRotate:true,
//         rotate:90,
//         moveWithRotate:true,
//         duration:1000,
//         animationEnd:function(){
//           console.log('animation end')
//         },
//         success:(res)=>{console.log(res)}
//       })
//     },
//     includePoints:function(){
//       this.mapCtx.includePoints({
//         padding:[
//           10
//         ],
//         points:[
//           {
//               latitude:23.10229,
//               longitude:113.3345211
//             },
//           {
//               latitude:23.00229,
//               longitude:113.3345211
//             }
//         ]
//       })
//     }
//   })
