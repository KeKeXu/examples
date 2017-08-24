window.onload = function() {

	var oUl1 = document.getElementById('ul1');
	var oUl2 = document.getElementById('ul2');
	var aLi = document.getElementById('box').getElementsByTagName('li');
	var oZb = document.getElementsByName('zb')[0];
	var oBtn = document.getElementsByName('btn')[0];

	/*
	 * 1、如何添加及删除
	 * 2、不能重复选择
	 * 3、要按顺序排放
	 */

	var arr = ["头盔", "头盔", "宝剑", "宝剑", "铠甲", "铠甲", ]; //防止重复

	for(var i = 0; i < aLi.length; i++) {
		aLi[i].index = i; //保证顺序正确
		aLi[i].on = true; //查看li在哪个ul里， true=>oUl1   false=>oUl2
		aLi[i].na = arr[i]; //防止重复

		aLi[i].onclick = function() {
			if(this.on) {
				var set = oUl2.getElementsByTagName('li');
				//console.log(set);
				if(set.length != 0) {
					for(var j = 0; j < set.length; j++) {
						console.log(set[j])
						if(this.na == set[j].na) {
							//console.log(this);
							alert('对不起，物品不能重复选择！');
							return;
						}
					}
					moveLi(this, oUl2);
					this.on = false;
				} else { //oUl2里面没有li
					oUl2.appendChild(this);
					this.on = false;
				}
			} else {
				moveLi(this, oUl1);
				this.on = true;
			}
		}
	}
	
	oBtn.onclick=function () {
		var set=oUl2.children;
		if (set.length==0) {
			alert('至少要选择一项物品！');
			return false;
		}else{
			var str='';
			for (var i=0; i<set.length; i++) {
				str+=set[i].title+',';
			}
			str=str.substring(0,str.length-1);
			oZb.value=str;
		}
	}
	
	function moveLi(objLi, objUl) {
		var set = objUl.children;
		if(set.length != 0) {
			for(var i = 0; i < set.length; i++) {
				if(objLi.index < set[i].index) {
					objUl.insertBefore(objLi, set[i]);
					break;
				} else if(objLi.index > set[i].index) {
					objUl.appendChild(objLi);
				}
			}
		}

	}

}