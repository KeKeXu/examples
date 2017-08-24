window.onload = function() {

	var str = '欢迎光临本网站，请帮我们大力宣传！';
	var iNow = 0;
	var timer = null;

	var oDiv = document.createElement('div');
	oDiv.id = 'content';

	document.title = '打字动画效果';
	document.body.appendChild(oDiv);

	function writeKey() {
		var keys = str.substring(0, iNow);
		oDiv.innerHTML = keys;
		iNow++;
		if(iNow > str.length) {
			clearInterval(timer);
		}
	}

	timer = setInterval(writeKey, 300);
}