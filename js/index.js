(function(){
	
	var aset=document.getElementsByTagName("aside")[0].getElementsByTagName("a");
	var curEle=aset[0]; //当前激活的链接元素
	var height=document.body.height-125+"px";
	//重置链接和内容区的样式
	function reset(){
		for(var i=0;i<aset.length;i++){
			aset[i].className="";
			document.getElementById(aset[i].getAttribute("data-anchor")).className="";
		}
	}
	for(var i=0;i<aset.length;i++){
		/* aside链接效果与切换 */
		aset[i].addEventListener("mouseover",function(){
			this.getElementsByTagName("span")[0].className="span-selected";
		},false);
		aset[i].addEventListener("mouseout",function(){
			this.getElementsByTagName("span")[0].className="";
		},false);
		
		/* aside链接点击事件 */
		aset[i].addEventListener("click",function(event){
			event.preventDefault();
			//重置
			reset();
			//链接切换
			this.className="a-selected";
			
			//内容区切换
			document.getElementById(this.getAttribute("data-anchor")).className="selected";
			this.style.height=height;
			
			curEle=this;
		},false);
	}
	
	/* 鼠标滚动切换 */
 
	window.addEventListener("DOMMouseScroll",wheel,false);  

	window.onmousewheel=wheel;
	function wheel(event){  
		event=event||window.event;
		var delta=0;
		if(event.wheelDelta){
			delta=event.wheelDelta/120;
		}else{
			delta=event.detail/3;
		}
		if(delta!==0){
			var nextEle=delta>0?curEle.previousSibling:curEle.nextSibling;
			//previousSibling和nextSibling有可能获取到的不是Element元素
			while(nextEle&&nextEle.nodeType!==1){
				nextEle=delta>0?nextEle.previousSibling:nextEle.nextSibling;
			}
			//切换内容区
			if(nextEle){
				reset();
				nextEle.className="a-selected";
				document.getElementById(nextEle.getAttribute("data-anchor")).className="selected";
				nextEle.style.height=height;
				
				curEle=nextEle;
			}
			
		}
		event.stopPropagation();
	}     
	

})(window, document);
