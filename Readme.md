
# Hoverintent Dropdowns w/ Bootstrap styling

See `test/example.html` for examples.

## HTML

```html
<div id="my-dropdown" class="dropdown hoverIntent no-hover-intent">
  <a class="nav-item" href="#a-target">Initialized</a>
  <div class="mover-shim"></div>
  <ul class="dropdown-menu">
    <li><a href="#sub-target">Sub Target</a></li>
    <li><a href="#sub-target1">Sub Target 1</a></li>
    <li><a href="#sub-target2">Sub Target 2</a></li>
    <li><a href="#sub-target3">Sub Target 3</a></li>
  </ul>
</div>
```

## Javascript

```javascript
var ddloader = require("dropdown-hoverintent")
  , query = require("query")
  , el = query("#my-dropdown");
ddloader(el, {'remove-class': 'no-hover-intent'});
```