window.onload = function() {
	var oImg = document.getElementById('imgBig');
	var oP = document.getElementById('imgBox').getElementsByTagName('p')[0];
	var aSpan = document.getElementsByTagName('span');
	var oUl = document.getElementById('imgBox').getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');

	var arrB = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg"];
	var arrS = ["img/imgS1.jpg", "img/imgS2.jpg", "img/imgS3.jpg", "img/imgS4.jpg"];
	var arrT = ["圣诞烧鸡", " 红烧牛排 ", " 蝴蝶牛排 ", " 鲜花牛排 "];

	var iNow = 0; //控制索引
	var str = '';

	change();

	for(var i = 0; i < arrB.length; i++) {
		if(i == 0) {
			str += '<li class="circleLi1"><div class="hidden"><img src="' + arrS[i] + '"></div></li>';
		} else {
			str += '<li class="circleLi"><div class="hidden"><img src="' + arrS[i] + '"></div></li>';
		}
	}
	oUl.innerHTML = str;

	for(var i = 0; i < aSpan.length; i++) {
		aSpan[i].index = i;
		aSpan[i].onclick = function() {
			if(this.index == 0) {
				iNow--;
				if(iNow < 0) {
					iNow = 0;
				}
				aLi[iNow].className = 'circleLi1';
				aLi[iNow + 1].className = 'circleLi';
			} else {
				iNow++;
				if(iNow >= arrB.length) {
					iNow = arrB.length - 1;
				}
				aLi[iNow].className = 'circleLi1';
				aLi[iNow - 1].className = 'circleLi';
			}

			change();
		}
	}

	for(var i = 0; i < aLi.length; i++) {
		aLi[i].index = i;
	}

	oUl.onmouseover = function(evt) {
		var target = getTarget(evt);
		/*if(target.tagName == 'LI') {
			target.getElementsByTagName('div')[0].className = 'visible';
		}*/
		getDiv(target, 'visible');
	}

	oUl.onmouseout = function(evt) {
		var target = getTarget(evt);
		/*if(target.tagName == 'LI') {
			target.getElementsByTagName('div')[0].className = 'hidden';
		}*/
		getDiv(target, 'hidden');
	}

	oUl.onclick = function(evt) {
		var target = getTarget(evt);
		if(target.tagName == 'LI') {
			iNow = target.index;
		}
		for(var i = 0; i < aLi.length; i++) {
			aLi[i].className = 'circleLi';
		}
		aLi[iNow].className = 'circleLi1';
		change();
	}

	function change() {
		oImg.src = arrB[iNow];
		oP.innerHTML = arrT[iNow];
	}

	function getTarget(ev) {
		var e = ev || event;
		return e.target || e.srcElement;
	}

	function getDiv(obj, cName) {
		if(obj.tagName == 'LI') {
			obj.getElementsByTagName('div')[0].className = cName;
		}
	}
}