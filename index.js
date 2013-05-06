var jQuery = require('jquery');

function DropDown (el, config) {
	var menu = jQuery('.dropdown-menu', el);
	var remove_class = config? config['remove-class'] || null : null;
	var jel = jQuery(el).addClass('dropdown').addClass('hoverIntent');
	if (remove_class){
		jel.removeClass(remove_class);
	}
	jel.hoverIntent(function() {
		menu.show();
	}, function() {
		menu.hide();
	});
}

module.exports = function(el, config) {
	return new DropDown(el, config);
};
