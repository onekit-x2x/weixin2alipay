&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们是中国未来之门团队，我们的产品是OneKit智能引擎，国内第一家任意平台项目自动翻译器,官网 (https://www.onekit.cn) ，欢迎大家来体验。该翻译器目前为1.0版本，若有使用问题请联系我们，并耐心等待翻译器2.0上线。现将移植框架部分开源，希望大家一起来学习和维护。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本项目仅为微信小程序SDK的支付宝小程序的实现，其目的为方便微信小程序开发者快速开发支付宝小程序项目。具体使用问题请参考使用说明。

- 如果遇到本项目(weixin2alipay)的bug请通过Github的 issue功能反馈给我们。如果你愿意一起来完善移植框架，欢迎通过 Pull Request 的方式贡献代码。
- 如果遇到翻译器(www.onekit.cn) 的bug请关注微信公众号”未来之门科技”进行交流和反馈。


========================= 使用说明 ======================

本项目是可直接演示demo。其中的client文件夹中的onekit文件夹为本框架，若想在项目中使用本框架，请按以下步骤:
1.把onekit文件夹复制到app.js同级目录。
2.在每一个需要使用本框架的所有js文件第一行插入一行代码：import wx from "/onekit/wx";

微信小程序工程师啊\~你们已经是个大孩子了\~请开始你们的支付宝小程序之旅吧！o(*￣▽￣*)ブ 奥利给~~~


========================= 爬坑之路 ======================

由于微信小程序与支付宝小程序的功能不一致，以下部分需要开发者手动修改。

转换能力
 .json: JSON文件转换
 .js: 脚本文件转换
 样式文件.wxss 转 .acss
 模板文件.wxml 转 .axml
 文件.wxs 转 .sjs
 api使用wx2my.js文件桥接函数转换
 todo.html 转换结果报告，方便开发者查找检查
详细介绍
app.json 转换
app.json文件为整个小程序配置文件，不过微信小程序app.json和支付宝小程序在app.json配置文件支持的能力不完全一致，部分一致的但名称不一致的配置，转换工具会分析并转换出来。

转换方式：
navigationBarTitleText -->defaultTitle**
enablePullDownRefresh -->pullRefresh**
navigationBarBackgroundColor -->titleBarColor**
...等
其中微信小程序支持，支付宝小程序不支持的，需要开发者自己手动修改，如：networkTimeout、functionalPages、workers等

全局组件转换
微信小程序支持全局组件，即在app.json中添加usingComponents字段，这样在小程序内的页面或自定义组件中可以直接使用全局组件而无需再声明。

转换方式： 转换工具会分析小程序中所有页面和组件，找到那些使用了全局组件的页面和组件，并把全局组件声明在页面或组件的json文件中，当做普通组件引用和使用。同时把全局组件的声明删除。

wxml文件转换
转换逻辑是以wx:xxx开头的，替换为a:xxx方式。

a. 事件相关的转换，微信中 bindeventname 或 bind:eventname 转换为 onEventname， 如下：

转换前：

<page
  bindtap="showName"
  bind:input = "actionName"
  catchchange="catchchange"
  bindtouchend="onTouchEnd"
></page>
转换后：

<page
  onTap="showName"
  onInput = "actionName"
  catchChange="catchchange"
  onTouchEnd="onTouchEnd"
></page>
b: 循环语句转换， 如下：

转换前：

<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName" wx:key="unique">
  {{idx}}: {{itemName.message}}
</view>
转换后：

<view a:for="{{array}}" a:for-index="idx" a:for-item="itemName" a:key="unique">
  {{idx}}: {{itemName.message}}
</view>
c: wxs代码转换，微信小程序中的wxs功能对应支付宝小程序中的sjs功能，微信wxml中支持引用外部wxs文件和内联wxs代码，支付宝中只支持引用外部文件方式使用sjs，不支持内联sjs代码。

转换前：

<wxs src="../wxs/utils.wxs" module="utils" />
<wxs src="../wxs/utils.wxs" module="utils"> </wxs>

<wxs module="parse">
  module.exports.getMax = getMax;
</wxs>
转换后：

<import-sjs from="../wxs/utils.sjs" name="utils" />
<import-sjs from="../wxs/utils.sjs" name="utils"/>

<import-sjs from="./parse.sjs" name="sjsTest" />
并在同级目录下创建了 parse.sjs 文件，并转换wxs的CommonJS为ESM

parse.sjs文件内容：

 export default { getMax };

d: UI页面按如下方式转换：

转换前：

<buton/>
转换后：

<onekit-button/>

并在每个页面的json文件按以下设置：

"usingComponents":{
"onekit-ad":"/onekit/ui/ad/ad",
"onekit-button":"/onekit/ui/button/button",
"onekit-checkbox":"/onekit/ui/checkbox/checkbox",
"onekit-editor":"/onekit/ui/editor/editor",
"onekit-icon":"/onekit/ui/icon/icon",
"onekit-map":"/onekit/ui/map/map",
"onekit-modal":"/onekit/ui/modal/modal",
"onekit-open-data":"/onekit/ui/open-data/open-data",
"onekit-rich-text":"/onekit/ui/rich-text/rich-text",
"onekit-video":"/onekit/ui/video/video"
}
