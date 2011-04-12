(function($) {
$(document).ready(function() {
	$(document).pluginLoader(['content ', ' params'], {'content': function(el, opt) { alert('content loader method called'); }});
});
})(jQuery);