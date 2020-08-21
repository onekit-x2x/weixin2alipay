# “微信小程序变支付宝小程序”使用说明 
## 【首次安装步骤】：
可参考支付宝官方教程：[https://opendocs.alipay.com/mini/ide/npm-manage](https://opendocs.alipay.com/mini/ide/npm-manage)  
1、准备工作：  
新建支付宝小程序项目或打开现有支付宝小程序项目。  
2、下载配置依赖包：  
 2.1 点击左侧此图标，进入NPM面板(如图步骤1)  
 2.2 首次使用NPM依赖管理的情况下，点击“添加目录”(如图步骤2)  
![图1](/readme/1.png)  
2.3 随后点击以下如图所示按钮，即将项目添加进依赖管理：  
![图2](/readme/2.png)  
2.4  完成以上两个步骤之后，就创建好了package.json文件，随后点击进入文件列表(如图步骤1)，点击package.json文件(如图步骤2)，在此文件中添加此依赖(如图步骤3)：  
```
"dependencies":{  
 "weixin2alipay":"latest"  
 }
```  
随后保存文件(如图步骤4)。图示如下：  
![图3](/readme/3.png)   
2.5 再点击最左侧NPM依赖管理图标(如图步骤1)，随后点击“同步状态图标”(如图步骤2)，状态同步后就可点击下载最新版依赖包(如图步骤3)。图示如下：  
![图4](/readme/4.png)  
2.6 如出文件列表有此依赖包，则安装完成：  
![图5](/readme/5.png)  
## 【更新方法】：  
1.点击左侧如图所示图标进入文件列表(如图步骤1);  
2.删除之前版本的依赖包，(如图步骤2);  
3.点击进入package.json文件(如图步骤3);  
4.将dependencies中weixin2alipay依赖包的版本号改为latest，注意不要丢失版本号外的引号，(如图步骤4)。图示如下：  ![图6](/readme/6.png)   
5.以上步骤完成之后，点击如图所示图标，进入NPM依赖管理(如图步骤1)；  
6.点击同步按钮，获取最新依赖包(如图步骤2)。图示如下：  
![图7](/readme/7.png)   
7.刷新后，在图中1出会出现”latest”，即表明已经获取到最新依赖包；  
8.点击下载按钮，进行最新依赖包下载(如图步骤2)  
![图8](/readme/8.png)  
以上步骤进行完成，会在如下图所示处出现最新版本号，即表明依赖更新完成。  
![图9](/readme/9.png)  
## 【使用方法】： 
### 一键转换，强烈推荐！！！
#### [在代码文件(*.js)中的使用]  
**请使用单文件转换器：**  
[https://www.onekit.cn/file/weixin/alipay/code.html](https://www.onekit.cn/file/weixin/alipay/code.html)  
#### [在页面界面文件(*.axml)中的使用]  
**请使用单文件转换器：**  
[https://www.onekit.cn/file/weixin/alipay/ui.html](https://www.onekit.cn/file/weixin/alipay/ui.html)  
#### [在页面配置文件(*.json)中的使用]  
**请使用单文件转换器：**  
[https://www.onekit.cn/file/weixin/alipay/json.html](https://www.onekit.cn/file/weixin/alipay/json.html)  
#### [在页面样式(*.acss)中的使用]  
**请使用单文件转换器：**  
[https://www.onekit.cn/file/weixin/alipay/style.html](https://www.onekit.cn/file/weixin/alipay/style.html)  
### 手动转换。  
**以下转换步骤需具有一定编程经验**  
#### [在代码文件(*.js)中的使用]  
请参考以下步骤：
##### a.  app.js文件中的使用：  
 导入JS模块，即在app.js文件中添加(如图步骤2)：  
```
import wx from "weixin2alipay/wx"
import OnekitApp from "weixin2alipay/OnekitApp"
```  
 随后将你的微信小程序项目的app.js中的代码全部直接复制粘贴进此代码文件(如图步骤3)；  
 再将“App”改为“OnekitApp”即可(如图步骤4)。图示如下：  
 ![图10](/readme/10.png)
##### b. 页面JS文件中的使用：  
 1. 依次打开你的页面JS文件，例如下图中的index.js文件。  
 2. 导入JS模块，即在页面JS文件中添加(如图步骤2):  
 ```
import wx from "weixin2alipay/wx"
import OnekitPage from "weixin2alipay/OnekitPage"
 ```  
 3.随后将你的微信小程序项目的页面js代码直接全部复制粘贴进此页面代码文件(如图步骤3)  
 4.再将“Page”改为“OnekitPage”(如图步骤4)。图示如下：  
 ![图11](/readme/11.png)  
##### c. 自定义组件的JS文件中的使用：  
 1. 依次打开你的项目中自定义组件的JS文件(如图中myComponent.js文件)，再依次按照以下步骤操作。  
 2. 引入“wx”与“OnekitComponent”，即在自定义组件的JS文件中添加(如图步骤2)：  
 ```
import wx from "weixin2alipay/wx"
import OnekitComponent from "weixin2alipay/OnekitComponent"
 ```  
 3.随后将你的微信小程序项目的自定义组件的js代码直接全部复制粘贴进此文件(如图步骤3)  
 4.再将“Component”改为“OnekitComponent”(如图步骤4)。图示如下：  
 ![图12](/readme/12.png)  
#### [在页面界面文件(*.axml)中的使用]   
请参考以下步骤：  
以微信小程序的image组件在支付宝小程序使用为例：
1.<image></image>改为<onekit-image></onekit-image>;  
2.id改为onekit-id;  
3.class改为onekit-class;  
4.style改为onekit-style;  
5.事件名bind改为on，例如：bindload改为onLoad(注意更改过后Load首字母，同理其他事件名);  
6.其他：列表渲染和条件渲染的更改:  
比如：wx:for改为a:for;  
wx:if改为a:if;  
wx:else改为a:else，其他列表渲染与条件渲染的更改同理。  
两者对比如图所示：  
![图13](/readme/13.png)  
![图14](/readme/14.png)  
具体请参考微信小程序官方文档：  
[https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/)  
具体请参考支付宝小程序官方文档：  
[https://opendocs.alipay.com/mini/framework/axml](https://opendocs.alipay.com/mini/framework/axml)  
### [在页面配置文件(*.json)中的使用]  
请参考以下步骤：  
在将微信项目代码复制到支付宝平台，并且按照以上步骤修改了组件名、属性名、事件名之后，要在.json文件中注册此组件。具体操作为：在.json文件中写入全套组件注册(注意：组件注册要写在usingComponents中)，即在usingComponents中写入：
```
    "onekit-live-player":"weixin2alipay/ui/live-player/live-player",
    "onekit-radio-group":"weixin2alipay/ui/radio-group/radio-group",
    "onekit-picker-view":"weixin2alipay/ui/picker-view/picker-view",
    "onekit-textarea":"weixin2alipay/ui/textarea/textarea",
    "onekit-picker-view-column":"weixin2alipay/ui/picker-view-column/picker-view-column",
    "onekit-map":"weixin2alipay/ui/map/map",
    "onekit-canvas":"weixin2alipay/ui/canvas/canvas",
    "onekit-text":"weixin2alipay/ui/text/text",
    "onekit-cover-view":"weixin2alipay/ui/cover-view/cover-view",
    "onekit-web-view":"weixin2alipay/ui/web-view/web-view",
    "onekit-navigation-bar":"weixin2alipay/ui/navigation-bar/navigation-bar",
    "onekit-radio":"weixin2alipay/ui/radio/radio",
    "onekit-rich-text":"weixin2alipay/ui/rich-text/rich-text",
    "onekit-icon":"weixin2alipay/ui/icon/icon",
    "onekit-voip-room":"weixin2alipay/ui/voip-room/voip-room",
    "onekit-checkbox":"weixin2alipay/ui/checkbox/checkbox",
    "onekit-video":"weixin2alipay/ui/video/video",
    "onekit-editor":"weixin2alipay/ui/editor/editor",
    "onekit-slider":"weixin2alipay/ui/slider/slider",
    "onekit-audio":"weixin2alipay/ui/audio/audio",
    "onekit-label":"weixin2alipay/ui/label/label",
    "onekit-live-pusher":"weixin2alipay/ui/live-pusher/live-pusher",
    "onekit-match-media":"weixin2alipay/ui/match-media/match-media",
    "onekit-swiper-item":"weixin2alipay/ui/swiper-item/swiper-item",
    "onekit-scroll-view":"weixin2alipay/ui/scroll-view/scroll-view",
    "onekit-open-data":"weixin2alipay/ui/open-data/open-data",
    "onekit-movable-view":"weixin2alipay/ui/movable-view/movable-view",
    "onekit-button":"weixin2alipay/ui/button/button",
    "onekit-swiper":"weixin2alipay/ui/swiper/swiper",
    "onekit-navigator":"weixin2alipay/ui/navigator/navigator",
    "onekit-image":"weixin2alipay/ui/image/image",
    "onekit-switch":"weixin2alipay/ui/switch/switch",
    "onekit-cover-image":"weixin2alipay/ui/cover-image/cover-image",
    "onekit-picker":"weixin2alipay/ui/picker/picker",
    "onekit-native-component":"weixin2alipay/ui/native-component/native-component",
    "onekit-movable-area":"weixin2alipay/ui/movable-area/movable-area",
    "onekit-aria-component":"weixin2alipay/ui/aria-component/aria-component",
    "onekit-ad":"weixin2alipay/ui/ad/ad",
    "onekit-progress":"weixin2alipay/ui/progress/progress",
    "onekit-official-account":"weixin2alipay/ui/official-account/official-account",
    "onekit-functional-page-navigator":"weixin2alipay/ui/functional-page-navigator/functional-page-navigator",
    "onekit-page-meta":"weixin2alipay/ui/page-meta/page-meta",
    "onekit-checkbox-group":"weixin2alipay/ui/checkbox-group/checkbox-group",
    "onekit-input":"weixin2alipay/ui/input/input",
    "onekit-camera":"weixin2alipay/ui/camera/camera",
    "onekit-view":"weixin2alipay/ui/view/view"
  
```  
![图15](/readme/15.png)  
具体请参考微信小程序官方文档：  
[https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html)  
具体请参考支付宝小程序官方文档：  
[https://opendocs.alipay.com/mini/framework/page-json](https://opendocs.alipay.com/mini/framework/page-json)  
### [在页面样式(*.acss)中的使用]  
请参考以下步骤：  
具体请参考微信小程序官方文档：  
[https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/](https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/)  
具体请参考支付宝小程序官方文档：  
[https://opendocs.alipay.com/mini/framework/acss](https://opendocs.alipay.com/mini/framework/acss)  
