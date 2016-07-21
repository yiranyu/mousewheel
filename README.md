# mousewheel
简单的鼠标滚动切换例子实现

把学习的代码都放到github是个好习惯！


###鼠标滚轮事件
最先实现鼠标滚轮事件（mousewheel）的浏览器是IE6，随后很多主流的浏览器也都支持啦，而Firefox支持的类似事件是DOMouseScroll，所以要特别处理。

	window.addEventListener("DOMMouseScroll",wheel,false);  // for Firefox
	window.onmousewheel=wheel; // for Chrome,Opera...
	
mousewheel事件对应的event对象包含鼠标事件的信息，我们主要用到的是wheelDelta属性：鼠标向上滚动时wheelDelta为正，是120的倍数，向下滚动时wheelDelta为负数，是-120的倍数。DOMMouseScroll事件有关鼠标滚轮的信息保存在detail属性中，属性值为3的倍数，向上为正向下为负。
  
    event=event||window.event;
  		var delta=0;
  		if(event.wheelDelta){
  			delta=event.wheelDelta/120;
  		}else{
  			delta=event.detail/3;
  		}
		
###其它
HTML DOM Element对象的nextSibling 属性和previousSibling 属性可以获取当前元素的同胞节点，被返回的节点以 Node 对象的形式返回，如果没有则返回null。

需要注意的是高级浏览器下会识别出文本节点（/n也包含在内），为了正常获取到我们所需要的节点，可以使用nodeType判断。适应ie8以下的
兼容写法为：

    var ulEl = obj.nextElementSibling||obj.nextSibling;
