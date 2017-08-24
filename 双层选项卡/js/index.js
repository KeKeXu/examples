window.onload = function() {
	var oNav = document.getElementById('nav');
	var navLi = oNav.getElementsByTagName('li');
	var oImg = document.getElementById('img').getElementsByTagName('img')[0];
	var oSub = document.getElementById('sub');
	var subLi = oSub.getElementsByTagName('li');

	var aImg1 = ["imgs/pg1.jpg", "imgs/pg2.jpg", "imgs/pg3.jpg", "imgs/pg4.jpg"];
	var aImg2 = ["imgs/cz1.jpg", "imgs/cz2.jpg", "imgs/cz3.jpg"];
	var aImg3 = ["imgs/cm1.jpg", "imgs/cm2.jpg", "imgs/cm3.jpg"];
	var aImg4 = ["imgs/pt1.jpg", "imgs/pt2.jpg"];
	var aText1 = ["苹果1", "苹果2", "苹果3", "苹果4"];
	var aText2 = ["橙子1", "橙子2", "橙子3"];
	var aText3 = ["草莓1", "草莓2", "草莓3"];
	var aText4 = ["葡萄1", "葡萄2"];

	for(var i = 0; i < navLi.length; i++) {
		navLi[i].index = i;
	}

	change(aImg1, aText1);

	oNav.onclick = function(evt) {
		var target = getTarget(evt);
		if(target.tagName == 'LI') {
			//eval():将字符串型JS脚本转换为真正的JS脚本执行。
			change(eval('aImg' + (target.index + 1)), eval('aText' + (target.index + 1)));

		}
	}

	function change(arrImg, arrText) {
		oImg.src = arrImg[0];
		var str = '';
		for(var i = 0; i < arrImg.length; i++) {
			str += '<li>' + arrText[i] + '</li>'
		}
		oSub.innerHTML = str;

		for(var i = 0; i < subLi.length; i++) {
			subLi[i].index = i;
		}

		oSub.onclick = function(evt) {
			var target = getTarget(evt);
			if(target.tagName == 'LI') {
				changeImg(target, arrImg);
			}
		}
	}

	function changeImg(obj, arr) {
		oImg.src = arr[obj.index];
	}

	function getTarget(ev) {
		var e = ev || event;
		return e.target || e.srcElement;
	}
}