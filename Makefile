
build: components index.js dropdown-hoverintent.css
	@component build --dev

dropdown-hoverintent.css: dropdown-hoverintent.styl
	@stylus dropdown-hoverintent.styl

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
