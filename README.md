========================= 项目介绍 ======================

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们是中国未来之门团队，我们的产品是OneKit智能引擎，国内第一家任意平台项目自动翻译器,官网 (https://www.onekit.cn )，欢迎大家来体验。《项目自动翻译器》目前为1.0版本，若有使用问题请联系我们，并耐心等待翻译器2.0上线。现将移植框架部分开源，希望大家一起来学习和维护。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本项目仅为微信小程序SDK的支付宝小程序的实现，其目的为方便微信小程序开发者快速开发支付宝小程序项目。具体使用问题请参考使用说明。

目前市面上有很多微信小程序，同时开发者开发完微信小程序后，希望可以同时发布到支付宝小程序平台上，可惜微信小程序并不能直接发布到支付宝平台上，如果您想将您的微信小程序发布到支付宝小程序平台，您可以：
【项目全自动翻译】
通过我们的全平台项目自动翻译器将您的微信小程序项目直接翻译为支付宝小程序项目，翻译后的项目无需做任何修改，可以直接发布到支付宝小程序平台；（推荐）


【兼容包+手动翻译】
使用我们的兼容库，手动对项目做一些修改以达到微信小程序转换成支付宝小程序的目的，修改方式如参考下面的《手动翻译》：

如果遇到本网站(www.onekit.cn) 的bug请关注微信公众号”未来之门科技”进行交流和反馈。
如果遇到本项目(weixin2alipay)的bug请通过Github的issue功能反馈给我们。如果你愿意一起来完善移植框架，欢迎通过 Pull Request 的方式贡献代码。

微信小程序工程师啊\~你们已经是个大孩子了\~请开始你们的支付宝小程序之旅吧！o(*￣▽￣*)ブ 奥利给~~~

========================= 手动翻译 ======================
# 项目配置

本项目是可直接演示demo。其中的client文件夹中的onekit文件夹为本框架，若想在项目中使用本框架，请按以下步骤:
1. 新建支付宝小程序空项目
2. 将微信小程序中新建的源文件拷贝到支付宝小程序对应路径下
3. 把onekit文件夹复制到app.js同级目录。
4. 需要在支付宝小程序全局css文件(app.acss)中第一行加入如下代码：
```
@import "/onekit/onekit.acss";
```
5. 全局配置，请参考以下官方链接自行处理：
支付宝小程序：https://opendocs.alipay.com/mini/framework/app
微信小程序：https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html

# 页面axml文件
文件名后缀.wxml 改为 .axml<br/>
【自动修改】<br/>
使用我们的《单文件处理工具》，详见：https://onekit.cn/file<br/>
【手动修改】<br/>
a. 修改页面文件的控件标签，如：editor 改为 onekit-editor<br/>
转换前：
```
<editor />
```
转换后：
```
<onekit-editor />
```
并在每个页面的json文件按以下设置：
```
{
	"usingComponents":{
		"onekit-editor":"/onekit/ui/editor/editor",
	}
}
```
b. 事件相关的转换，微信中 bindeventname 或 bind : eventname 转换为 onEventname， 如下：

转换前：
```
<page
  bindtap="showName"
  bind:input="actionName"
  catchchange="catchchange"
  bindtouchend="onTouchEnd"
></page>
```
转换后：
```
<page
  onTap="showName"
  onInput="actionName"
  catchChange="catchchange"
  onTouchEnd="onTouchEnd"
></page>
```
c. 转换逻辑是以wx:xxx(例如wx:for)开头的，替换为a:xxx(例如a:for)方式。 如循环语句转换：

转换前：
```
<view wx:for="{{checkboxItems}}" class="label-1">
  <label>
	<text class="label-1-text">{{item.value}}</text>
  </label>
</view>
```
转换后：
```
<view a:for="{{checkboxItems}}" class="label-1">
  <label>
	<text class="label-1-text">{{item.value}}</text>
  </label>
</view>
```

# 页面js文件
后缀名为.js: 无需修改文件名后缀<br/>
【自动修改】<br/>
使用我们的《单文件处理工具》，详见：https://onekit.cn/file<br/>
【手动修改】<br/>
a. 在每一个需要使用本框架的所有js文件第一行插入一行代码：<br/>
```
import wx from "/onekit/wx";
```

# 页面json文件
后缀名为.json:无需修改文件名后缀<br/>
【自动修改】<br/>
使用我们的《单文件处理工具》，详见：https://onekit.cn/file<br/>
【手动修改】<br/>
按修改usingComponents中的组件标签名，格式为: xxx -> onekit-xxx，如：
```
{
	"usingComponents":{
		"onekit-editor":"/onekit/ui/editor/editor",
	}
}
```

# 页面acss文件
后缀名为.acss:无需修改文件名后缀，直接复制到支付宝小程序对应路径下即可。

# 页面wxs文件
后缀名为.wxs 改为 .sjs<br/>
【自动修改】<br/>
《单文件处理工具》暂不提供该格式的文件翻译功能。<br/>
【手动修改】<br/>
wxs代码转换，微信小程序中的wxs功能对应支付宝小程序中的sjs功能，微信wxml中支持引用外部wxs文件和内联wxs代码，支付宝中只支持引用外部文件方式使用sjs，不支持内联sjs代码。<br/>

转换前：
```
<wxs src="../wxs/utils.wxs" module="utils" />
<wxs src="../wxs/utils.wxs" module="utils"> </wxs>

<wxs module="parse">
  module.exports.getMax = getMax;
</wxs>
```
转换后：
```
<import-sjs from="../wxs/utils.sjs" name="utils" />
<import-sjs from="../wxs/utils.sjs" name="utils"/>

<import-sjs from="./parse.sjs" name="sjsTest" />
```
并在同级目录下创建 parse.sjs 文件，并转换wxs的CommonJS为ESM

parse.sjs文件内容：
```
 export default { getMax };
```
