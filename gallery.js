$.fn.gallery = function(opt){
	opt = $.extend({
		title: '갤러리',
		arr: []
	}, opt);
	
	//이벤트 핸들러에서 사용할 수 있도록 self로 this 저장
	var self = this;
	var start = 0;
	
	var templ = `
	<h2>${opt.title}<h2>
	<div class="detail"><img src="${images[0]}"></div>
	<div class="thumbs">
		<div class="left control"><i class="fas fa-angle-left"></i></div>
		<div class="thumb-list"></div>
		<div class="right control "><i class="fas fa-angle-right"></i></div>
	</div>
	`;
	
	this.append(templ);
	
	var thumbs = this.find('.thumb');
	var left = this.find('.left');
	var right = this.find('.right');
	
	// click 이벤트 처리 위임
	thumbs.on('click', 'img', function(){
		var src = $(this).attr('src');
		self.find('.detail>img').attr('src', src);
	});
	
	//이미지 추가
	opt.arr.slice(0, 4)
		.forEach(function(img){
			var thumbList = self.find('.thumb-list');
			thumbList.append(`<img src="${img}"/>`);
		});//
	
	//이미지가 4개를 초과한 경우
	if(opt.arr.length > 4){
		//이벤트 핸들러
		left.click(function(){
			var thumbList = self.find('.thumb-list');
			if(start == (opt.arr.length-4)) return;
			start++;
			thumbList.children().first().remove();
			thumbList.append(`<img src="${opt.arr[start+3]}"/>`);
		});
		
		right.click(function(){
			var thumbList = self.find('.thumb-list');
			if(start == 0) return;
			start--;
			thumbList.children().last().remove();
			thumbList.prepend(`<img src="${opt.arr[start]}"/>`);
		});
	}else{	//이미지가 4개 이하인 경우
		$('.control').hide();
	}
	return this;
}