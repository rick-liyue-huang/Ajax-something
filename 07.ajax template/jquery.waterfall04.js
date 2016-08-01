

// please refer my waterfall.js in folder of jQuery extension
(function ($) {
	$.fn.waterFall = function (options) {

		
		var defalut = $.extend({
			gap: 20
		}, options);

	
		var _this = $(this),
			items = _this.children(),
			width = items.width(),
			height = 0,
			
			count = Math.floor(_this.width() / (width + defalut.gap)),
			columns = [];

		items.each(function (key, val) {
		
			height = $(val).height();

			
			if(key < count) {
				
				columns[key] = height;

				
				$(val).css({
					top: 0, 
					left: (width + defalut.gap) * key
				});
			} else {
				var min_h = columns[0];
				var min_k = 0;

				
				for(var i=0; i<columns.length; i++) {
					if(columns[i] < min_h) {
						min_h = columns[i];
						min_k = i;
					}
				}

				
				columns[min_k] += height;

				$(val).css({
					top: min_h + defalut.gap,
					left: (width + defalut.gap) * min_k
				});
			}
		});




		columns = columns.sort(function (a, b) {
			return b - a;
		});

		_this.css({
			height: columns[0]
		});

	}
})(jQuery);


