function cssTransform(el,attr,val) {
	if(!el.transform){
		el.transform = {};
	}
	if(arguments.length>2) {
		el.transform[attr] = val;
		var sVal = "";
		for(var s in el.transform){
			switch(s) {
				case "rotate":
				case "skewX":
				case "skewY":
					sVal +=s+"("+el.transform[s]+"deg) ";
					break;
				case "translateX":
				case "translateY":
					sVal +=s+"("+el.transform[s]+"px) ";
					break;
				case "scaleX":
				case "scaleY":
				case "scale":
					sVal +=s+"("+el.transform[s]+") ";
					break;	
			}
			el.style.WebkitTransform = el.style.transform = sVal;
		}
	} else {
		val  = el.transform[attr];
		if(typeof val == "undefined" ) {
			if(attr == "scale" || attr == "scaleX" || attr == "scaleY"  ) {
				val = 1;
			} else {
				val = 0;
			}
		}
		return val;
	}
}

/*---------------------平滑拖动----------------------*/

function navSwipe(box,ele) {
	var startPoint = 0;
	var startX = 0;
	var minX = box.clientWidth - ele.offsetWidth;
	var step = 1;
	var lastX = 0; //上次的距离
	var lastTime = 0;//上次的时间戳
	var lastDis = 0;
	var lastTimeDis = 0;
		box.addEventListener(
		'touchstart', 
		function(e) {
			ele.style.transition = "none";
			startPoint = e.changedTouches[0].pageX;
			startX = cssTransform(ele,"translateX");
			step = 1;
			lastX = startX;
			lastTime = new Date().getTime();
			lastDis = 0;
			lastTimeDis = 0;
		}
	);
		box.addEventListener(
		'touchmove', 
		function(e) {
			var nowPoint = e.changedTouches[0].pageX;
			var dis = nowPoint - startPoint;
			var left = startX + dis;
			var nowTime = new Date().getTime();
			if(left > 0) {
				step = 1-left / navScroll.clientWidth; //根据超出长度计算系数大小，超出的越到 系数越小
				left = parseInt(left*step);
				/*left = 0;*/
			}
			if(left < minX) {
				var over = minX - left; // 计算下超出值
				step = 1-over / box.clientWidth; //根据超出值计算系数
				over = parseInt(over*step);
				left = minX - over;
			}
			lastDis = left-lastX; //距离差值
			lastTimeDis = nowTime - lastTime; //时间差值
			lastX = left;
			lastTime = nowTime;
			cssTransform(ele,"translateX",left);
		}
	);
		box.addEventListener(
		'touchend', 
		function (){
			var speed = (lastDis/lastTimeDis)*300; //用距离差值/时间差值 = 速度   速度*系数 = 缓冲距离
			var left = cssTransform(ele,"translateX");
			var target = left + speed; //当前值 + 缓冲距离 = 目标点
			var type = "cubic-bezier(.34,.92,.58,.9)";
			var time = Math.abs(speed*.9);
			time = time<300?300:time;
			if(target > 0) {
				target = 0;
				type ="cubic-bezier(.08,1.44,.6,1.46)";
			}
			if(target < minX) {
				target = minX;
				type ="cubic-bezier(.08,1.44,.6,1.46)";
			}
			ele.style.transition = time+"ms " + type;
			cssTransform(ele,"translateX",target);
		}
	);
   }