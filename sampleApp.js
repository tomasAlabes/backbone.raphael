$(document).ready(function () {
    'use strict';

    var paper = Raphael(0, 0, 600, 600, "container");
    var circle = paper.circle(200, 200, 100).attr({fill: "red"});

    //var cModel = Backbone.Model.extend();

    var CircleView = Backbone.raphaelView.extend({

        events: {
            "click": "sayEventType",
            "dblclick": "sayEventType",
            "mousedown": "sayEventType",
            "mousemove": "sayEventType",
            "mouseout": "sayEventType",
            "mouseover": "sayEventType",
            "mouseup": "sayEventType"
        },

        sayEventType: function(evt){
            console.log(evt.type);
        }

    });

    var view = new CircleView({
        el: circle
    });

});