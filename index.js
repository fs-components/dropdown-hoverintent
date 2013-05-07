require('query-qwery');
var query = require('query')
  , classes = require('classes')
  , hoverIntent = require('hover-intent');

module.exports = function (el, config) {
  var menu = query('.dropdown-menu', el)
    , remove_class = config? config['remove-class'] || null : null
    , clist = classes(el).add('dropdown').add('hoverIntent');
  if (remove_class){
    clist.remove(remove_class);
  }
  hoverIntent(el, function() {
    menu.style.display = 'block';
  }, function() {
    menu.style.display = 'none';
  });
}

