	var tips; var theTop = 300; var old = theTop;
	function initFloatTips() {
	   tips = document.getElementById('rightNavbox');
	   moveTips();
	};
	function moveTips() {
	   var tt=50;
	   if (window.innerHeight) {
	      pos = window.pageYOffset
	   }else if (document.documentElement &&document.documentElement.scrollTop){
	     pos = document.documentElement.scrollTop
	 }else if (document.body) {
	     pos = document.body.scrollTop;
	 }
	  pos=pos-tips.offsetTop+theTop;
	  pos=tips.offsetTop+pos/10;
	  if (pos < theTop) pos = theTop;
	  if (pos != old) {
	     tips.style.top = pos+"px";
	     tt=10;
	 }
	old = pos;
	setTimeout(moveTips,tt);
  }
  initFloatTips();
//关闭和展开按钮
function bar1190_show() {
    document.getElementById('Bar1190_big').style.display = '';
    document.getElementById('Bar1190_small').style.display = 'none';
    $('#rightNavbox').css("background", "url('../images/rightNavbox.png')");
    $('#rightNavbox').css("background-repeat","no-repeat");

}
function bar1190_hidden() {
    document.getElementById('Bar1190_big').style.display = 'none';
    document.getElementById('Bar1190_small').style.display = '';
    $('#rightNavbox').css("left", "0px");
    $('#rightNavbox').css("background-image", "url('http://www.mx-fm.com/skins/moxing/images/touming.gif')");
}
//var autohide1190 = setTimeout("bar1190_hidden()", 6000);
