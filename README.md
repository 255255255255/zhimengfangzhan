## 织梦仿站

### 1.将自己的网站项目放在C:\wamp\www\dede\templets目录下，这就是一个新的模板

### 2.将所有的CSS、JS、Image文件换成基于网站根目录的绝对路径

#### 2.1.CSS代码的路径：

```
{dede:global.cfg_basehost/}{dede:global.cfg_indexurl/}/templets/zhimeng/CSS/

{dede:global.cfg_basehost/}{dede:global.cfg_indexurl/}/templets/zhimeng/JS

{dede:global.cfg_basehost/}{dede:global.cfg_indexurl/}/templets/zhimeng/img
```
#### 2.2.JS代码的路径

#### 2.3.Image代码的路径

### 3.标题和描述的自动获取

```
<title>{dede:global.cfg_webname/}</title>
<meta name="Keywords" content="{dede:global.cfg_keywords/}">
<meta name="Description" content="{dede:global.cfg_description /}">
```
### 4.幻灯片的制作

#### 4.1.查看默认模板中的代码，可以借用

目录：C:\wamp\www\dede\templets\default\

#### 4.2.制作幻灯片的代码

```
<div id="KinSlideshow" style="visibility:hidden;">
<script language='javascript'>
linkarr = new Array();
picarr = new Array();
textarr = new Array();
var swf_width=220;
var swf_height=180;
//文字颜色|文字位置|文字背景颜色|文字背景透明度|按键文字颜色|按键默认颜色|按键当前颜色|自动播放时间|图片过渡效果|是否显示按钮|打开方式
var configtg='0xffffff|0|0x3FA61F|5|0xffffff|0xC5DDBC|0x000033|2|3|1|_blank';
var files = "";
var links = "";
var texts = "";
//这里设置调用标记
{dede:arclist flag='f' row='5'}
linkarr[[field:global.autoindex/]] = "[field:arcurl/]";
picarr[[field:global.autoindex/]]  = "[field:litpic/]";
textarr[[field:global.autoindex/]] = "[field:title function='html2text(@me)'/]";
{/dede:arclist}
for(i=1;i<picarr.length;i++){
if(files=="") files = picarr[i];
else files += "|"+picarr[i];
}
for(i=1;i<linkarr.length;i++){
if(links=="") links = linkarr[i];
else links += "|"+linkarr[i];
}
for(i=1;i<textarr.length;i++){
if(texts=="") texts = textarr[i];
else texts += "|"+textarr[i];
}
document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+ swf_width +'" height="'+ swf_height +'">');
document.write('<param name="movie" value="{dede:global.cfg_templeturl /}/default/images/bcastr3.swf"><param name="quality" value="high">');
document.write('<param name="menu" value="false"><param name=wmode value="opaque">');
document.write('<param name="FlashVars" value="bcastr_file='+files+'&bcastr_link='+links+'&bcastr_title='+texts+'&bcastr_config='+configtg+'">');
document.write('<embed src="{dede:global.cfg_templeturl /}/default/images/bcastr3.swf" wmode="opaque" FlashVars="bcastr_file='+files+'&bcastr_link='+links+'&bcastr_title='+texts+'&bcastr_config='+configtg+'&menu="false" quality="high" width="'+ swf_width +'" height="'+ swf_height +'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />'); document.write('</object>');
</script>
```
#### 4.3.必须要将织梦后台的数据设置为幻灯的效果

### 5.自动获取织梦后台的新闻部分

```
{dede:arclist typeid="18"  row='3' orderby='pubdate'}
<li>
 <a href="[field:arcurl/]">[field:title/]</a><span class="fr">[field:pubdate function="MyDate('m-d',@me)"/]</span>
</li>
{/dede:arclist}
```
### 6.轮播图片的自动获取

```
 {dede:arclist row=5 orderby=pubdate type='image.' imgwidth='116' imgheight='92'}
 <li><a href="[field:arcurl/]">[field:image/]</a></li>
{/dede:arclist}
```
### 7.产品分类的设置

```
{dede:channel typeid='7'}
<li><a href="[field:typelink/]">[field:typename/]</a></li>
{/dede:channel}
```
### 8.友情链接的设置

```
{dede:flink row='24'/}
```
### 9.栏目内容的获取

#### 9.1.图片列表的制作（list标签和pagelist标签的结合使用）

```
<ul>{dede:list infolen='50'  pagesize='3'}
 <li> [field:array runphp='yes']@me = (empty(@me['litpic']) ? "" : "<a href='{@me['arcurl']}' class='preview'><img src='{@me['litpic']}' style='width:208px; height:180px'/></a>"); [/field:array]
 <li>
 <a href="[field:arcurl/]"><br />[field:title/]</a>
 </li>
 {/dede:list}   
<div id="showpages"style="padding:10px">{dede:pagelist listsize='2' listitem=''/}</div>
```
### 10.为pagelist标签生成的样式设置CSS样式

#### 10.1.生成的默认样式

```
http://sucai.redocn.com/kexuejishu_4994896.html
```
#### 10.2.栏目的标题

```
{dede:type}
[field:typename /]
{/dede:type}
```
### 11.头部和尾部分离出来一个新的html文件，然后单独的引入到每个模块

```
{dede:include filename="../zhimeng/header.htm"/}
{dede:include filename="../zhimeng/footer.htm"/}
```
### 12.导航位置的更改


#### 12.1.公司简介

```
{dede:type typeid="1"} 
<a href='[field:typelink'>[field:typename/]</a>
{/dede:type}
```
#### 12.2.产品展示

```
<li class="nav_li">
 {dede:type typeid="7"}<a href='[field:typelink'>[field:typename/]</a>
{/dede:type}
</li>
```
