

// capsulate a simple function to simulate jQuery Ajax function

var $ = {

	params: function(params) {
		var data = '';
		// concat the args
		for(key in params) {
			data += key + '=' + params[key] + '&';
		}

		// delete the last &
		return data.slice(0, -1);
	},

	// Ajax instance
	ajax: function (options) {
		
		// instance XMLHttpRequest object
		var xhr = new XMLHttpRequest(),

		// default as 'get' method 
		    type = options.type || 'get',
	    // set the request url and default one
	    	url = options.url || location.pathname,
	    // format the data as key1=value1&key2=value2
	   		 data = this.params(options.data),

	    	callback = options.success;

    	// get method will concat the arguments to url and set data as null
    	if (type === 'get') {
    		url = url + '?' + data;
    		data = null;
    	}

    	xhr.open(type, url);

    	// post method will set request header
    	if (type === 'post') {
    		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    	}
    	// send the request body
    	xhr.send(data);

    	// listen response
    	xhr.onreadystatechange = function() {
    		if (xhr.readyState === 4 && xhr.status === 200) {

    			// get response type
    			var contentType = xhr.getResponseHeader('Content-Type');
    			var data = xhr.responseText;

    			//  analyze JSON
    			if (contentType.indexOf('json') != -1) {
    				data = JSON.parse(data);
    			}
    			// call success 
    			// options.success(data);
    			callback(data);
    		} else {
    			options.error('request fail!!!');
    		}
    	}

	}

};





















