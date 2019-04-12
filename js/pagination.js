$.fn.pagination = function(opt){
	opt = $.extend({
		total : 0,
		active : 1,
		size : '',
		align : ''
	}, opt);
	console.log(opt);
	
	var ul = $(`<ul class = "pagination ${opt.size} ${opt.align}">`);
	for(var ix = 1;ix<=opt.total;ix++){
		var li = $(`<li class="page-item">
			<a class="page-link" href = "?page=${ix}">${ix}</a>
		</li>`);
		li.appendTo(ul);
	}
	ul.find('.page-item').eq(opt.active-1).addClass('active');
	this.append(ul);
	return this;
}

