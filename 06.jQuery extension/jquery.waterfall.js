

// 1. left value = the fixed width * current column index
// 2. top value = the current lest column height
// 3. in the column, when add one element, the relative column height is changed


// the closure
(function($){

	$.fn.waterfall = function(options) {

		var defaults = {
			gap: 10
		};

		// extend the arguments
		options = $.extend(defaults, options);

		console.log(options);

		// 这里的this指的是需要定位元素的父节点，这里是items

		// need to count the how many columns in one row
		var items = $(this).children(),

		// console.log(items); // get the children list of items

		// jquery will get the first child element width.
			width = items.width(),
			height = 0,

			gap = options.gap,

		// count the columns in one row
			columns = Math.floor( $(this).width() / (width + gap) ),

			// console.log(columns); 

			// define a array to store every column height
			h =[];


			items.each(function(key, val) {  // similar as for loop

				// console.log(val);
				// get every element height
				height = $(val).height();
 
				if (key < columns) {  // when in the first column

					h[key] = height; // so get the first row elements height and store in h array.

					// setting first row 
					$(val).css({
						top: 0,
						left: key * (width + gap)
					})

				} else {  
					//  setting other row

					// we need get the lest value of height
					
					var min_h = h[0];
					var min_k = 0;
					for (var i = 0; i < h.length; i++) {
						if (h[i] < min_h) {
							min_h = h[i];
							min_k = i;
						}
					}

					h[min_k] += height;

					$(val).css({
						top: min_h,
						left: min_k * (width + gap)
					});

				}

			});
		

			// setting the max height column
			var max_h = h[0];
			for(var j = 0; j < h.length; j++) {
				if (h[j] > max_h) {
					max_h = h[j];
				}
			}

			// setting parent element--items height
			$(this).css('height', max_h);



	} 

})(jQuery);


























