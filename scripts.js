(function($) {
$(document).ready(function() {
	$(document).pluginLoader('content, params',{
		'content': function(el, opt) {
			el.content(opt);
		}
	});
});
})(jQuery);