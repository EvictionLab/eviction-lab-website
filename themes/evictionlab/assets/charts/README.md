# Eviction Lab Charts

This folder contains the javascript for rendering charts on the eviction lab website.

Charts are built with d3, using the Elab.ChartBuilder helper (chart-builder.js).

See the [shortcodes documentation](../../../../docs/shortcodes.md) for usage details.

## Contributing

### Namespaces

To avoid populating the global scope, all code should be contained within modules under the `Elab` namespace. (e.g. `Elab.BarChart`)

[Learn more about this pattern](https://medium.com/@petertumulty/avoiding-the-global-scope-with-the-revealing-module-pattern-6796ae7af1b9)

To add a module to the Elab namespace, follow this pattern:

e.g. `my-module.js`

```js
"use strict";

// use the global namespace if it exists
// if not, create it.
var Elab = Elab || {};

// create a new module
Elab.MyModule = (function (Elab) {
  // module code goes here

  function _privateFunction() {
    console.log(
      "this is a private function that can only be used within the module"
    );
  }

  function doSomething() {
    _privateFunction();
    console.log("this is a public function exposed in your module");
  }

  // return any public variables / functions
  return {
    doSomething: doSomething,
  };
})(Elab); // pass in the existing name space
```

Then you can use the module on the page by calling:

```js
Elab.MyModule.doSomething();
```

### Creating a Chart

To create a chart shortcode, you need to do the following:

1. create a new module for the type of chart (e.g. `./stack-chart.js`)
1. add your javascript file to the charts bundle in the [footer](../../layouts/partials/footer.html#L171)
1. create an HTML template in the [shortcodes directory](../../layouts/shortcodes)
   _this file provides the HTML skeleton and initializes the your chart module._
1. add any chart-specific CSS to `./charts.css` using the `.chart--{{type}}` selector. (chart CSS selectors follow [Block, Element, Modifier (BEM) methodology](https://css-tricks.com/bem-101/) )
1. add documentation of your shortcode to the [shortcodes documentation](../../../../docs/shortcodes.md)
1. (_optional_) add a widget to Netlify CMS so this component can be added / edited via CMS

> Note: the full details of the chart builder are not yet documented. Check out `bar-chart.js` or `line-chart.js` for example implementations. If you need support here, get in touch with [Lane](https://github.com/Lane)
