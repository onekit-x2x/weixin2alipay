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
OnekitPage({
    takePhoto:function(){
      const ctx = wx.createCameraContext()
      ctx.takePhoto({
        quality:'high',
        success:(res)=>{this.setData({
            src:res.tempImagePath
          })}
      })
    },
    error:function(e){
      console.log(e.detail)
    }
  })

//button
// OnekitPage({
//   button_tap(){
//     console.log('xxxx')
//   }
// })