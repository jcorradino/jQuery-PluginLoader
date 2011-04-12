(function($) {
$(document).ready(function() {
	$(document).pluginLoader(['content ', ' params'], {'content': function(el, opt) { console.log('content loader method called'); }});
});
})(jQuery);