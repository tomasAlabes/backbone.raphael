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
var paper = Raphael("container", 300, 640);

// Usual backbone model
var CircleModel = Backbone.Model.extend();

var CircleView = Backbone.RaphaelView.extend({

    initialize: function(){
        var model = this.model;
        this.listenTo(model, "change", this.render);

        // Create raphael element from the model
        var circle = paper.circle(model.get("x"), model.get("y"), model.get("radio")).attr({fill: model.get("color")});

        // Set the element of the view
        this.setElement(circle);
    },

    events: {
        // Any raphael event
        "click": "sayType"
    },

    sayType: function(evt){
        console.log(evt.type);
    },

    render: function(){
        var circle = this.el;
        var model = this.model;

        //When the model changes, so the element
        circle.attr({
            cx: model.get("x"),
            cy: model.get("y"),
            r: model.get("radio"),
            fill: model.get("color")
        });
    }

});

var model = new CircleModel({
    x: 100,
    y: 150,
    radio: 50,
    color: "blue"
});

var view = new CircleView({
    model: model
});
```

**For a more complex example see the sample app in this repo.**

Thats it!

## Copyright and license
Licensed under the **MIT** license.
