(function($) {

var loader = {};

var methods = {
	init: function(options) {
		return this.each(function(index) {
			var self = $(this);
		});
	}
};

$.fn.pluginLoader = function(options) {
	/*if (methods[options]) {
		return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
	} else if (typeof options === 'object' || !options) {
		return methods.init.apply(this, arguments);
	} else {
		$.error('Method '+options+' does not exist on jQuery.pluginLoader');
	}*/
	//$(plugins).each(function(index) {
	//	var self = $(this);
	//	var attrs = self[0].attributes;
	//	for (var i = 0; i < attrs.length; i++) {
	//		if (!attrs[i].nodeName.match(/data-(.)*/)) continue;
	//		var parsed = attrs[i].nodeName.replace(/data-/, '');
	//		if (loader[parsed]) loader[parsed](self, self.data(parsed));
	//	}
	//});
}

})(jQuery);