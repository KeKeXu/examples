window.onload = function() {

	var str = '欢迎光临本网站，请帮我们大力宣传！';
	var iNow = 2;

	var oDiv = document.createElement('div');
	var oP = document.createElement('p');
	oDiv.id = 'content';
	oDiv.appendChild(oP);
	document.title = '打字动画效果';
	document.body.appendChild(oDiv);

	function colorText() {
		var txt = '';
		for(var i = 0; i < str.length; i++) {
			if(i == iNow) {
				txt += '<span style="color:red">' + str.charAt(i) + '</span>';
			} else {
				txt += str.charAt(i);
			}
		}

		oP.innerHTML = txt;

		if(iNow > str.length) {
			iNow = 0;
		} else {
			iNow++;
		}
	}

	setInterval(colorText, 200);
}