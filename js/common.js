function parseParam(query) {
	var params = {};
	query.substring(1)	// ?이후 문자열 리턴
		.split('&')		// &로 분리된 문자열 리턴
		.forEach(e=>{	// 배열 순회
			param = e.split("=");			// 속성명, 속성값 분리
			params[param[0]] = param[1];	// 객체 속성으로 추가
		});
	return params;
}

location.params=parseParam(location.search);


Array.prototype.shuffle = function() {
	var j, x, i;
	for (i = this.length; i > 0 ; --i) {
		j = parseInt(Math.random() * i);
		x = this[i - 1];
		this[i - 1] = this[j];
		this[j] = x;
	}
	return this;	
}



