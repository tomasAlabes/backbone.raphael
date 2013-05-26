# Backbone.raphael
## An easy way to add svg/vml views into your Backbone app

This extension enables you to add views to your backbone apps tweaking how
Backbone and RaphaelJS handle event bindings.

## Quickstart guide
* Add backbone.raphael.js after Backbone and all it dependencies

```html
<script type="text/javascript" src="raphael.js"></script>

<script type="text/javascript" src="jquery-2.0.1.js"></script>
<script type="text/javascript" src="underscore.js"></script>
<script type="text/javascript" src="backbone.js"></script>


<script type="text/javascript" src="backbone.raphael.js"></script>


<script type="text/javascript" src="yourApp.js"></script>
```


* Use it in your app

```js
var paper = Raphael(0, 0, 320, 640, "container");
var circle = paper.circle(200, 200, 100).attr({fill: "red"});

var CircleView = Backbone.RaphaelView.extend({

    events: {
        // Any raphael event
        "click": "sayHello"
    },

    sayHello: function(evt){
        alert("Hello!!!");
    }

});

var view = new CircleView({
    el: circle
});
```

**For a more complex example see the sample app in this repo.**

Thats it!

Anyway, is work in progress.

## Copyright and license
Licensed under the **MIT** license.
