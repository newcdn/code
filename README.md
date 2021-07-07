# 说明文档

## 通用调用地址
* js：
```
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/newcdn/code/js/xxx.js"></script>
```
* css：
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/newcdn/code/css/xxx.css">
```
----
----
----

### 1、防止死循环文件，能有效减少网站图片死循环导致CPU飙升的现象
* 方法：
在footer文件添加以下代码
```
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/newcdn/code/js/fzsxh.js"></script>
```
### 2、微信或QQ打开网页强制用浏览器打开
* 方法：
* 在head下添加
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/newcdn/code/css/wxqztzbrowser.css">
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/newcdn/code/js/wxqztzbrowser.js"></script>
```
* 在需要提示的页面body后添加
``` HTML  
<div class="weixin-tip">
<p>
<img src="https://cdn.jsdelivr.net/gh/newcdn/img/wx/wx.png" alt="微信打开"/>
</p>
</div>
   ```
### 3、微信或QQ打开网页提示用浏览器打开，但是不强制
* 方法：
* 在head下添加
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/newcdn/code/css/wxtzbrowser.css">
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/newcdn/code/js/wxtzbrowser.js"></script>
```  
* 在需要提示的页面body后添加
``` HTML
<div id='weixin-tip-box'>
<div class="triangle_border_up">
<span></span>
</div>
<div class="weixin-tip">
<p>
请点击右上角
</p>
<p class="content">
选择"浏览器中打开"
</p>
</div>
</div>
   ```
# 文件列表
https://cdn.jsdelivr.net/gh/newcdn/code/
- - - - - - - - - - - - - - - - 
# 刷新缓存
https://purge.jsdelivr.net/gh/newcdn/code/


