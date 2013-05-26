$(document).ready(function () {
    'use strict';

    var paper = Raphael("container", 300, 640);

    var CircleModel = Backbone.Model.extend({
        defaults: {
            x: 0,
            y: 0,
            radio: 5,
            label: "Default",
            color: "RED"
        }
    });

    var CircleView = Backbone.RaphaelView.extend({

        initialize: function(){
            var model = this.model;
            this.listenTo(model, "change", this.render);

            var figure = paper.circle(model.get("x"), model.get("y"), model.get("radio")).attr({fill: model.get("color")}),
                figureBbox = figure.getBBox(),
                label = paper.text(model.get("x"), model.get("y") + figureBbox.height / 1.5, model.get("label")),
                circle = paper.set();

            circle.push(figure);
            circle.push(label);

            this.setElement(circle);
        },

        events: {
            "click": "moveX"
        },

        moveX: function(evt){
            this.model.set({
                x: this.model.get("x") + 10
            });
        },

        render: function(){
            var figure = this.$el[0];
            var label = this.$el[1];

            var model = this.model;
            figure.attr({
                cx: model.get("x"),
                cy: model.get("y"),
                radio: model.get("radio"),
                color: model.get("color")
            });

            var figureBbox = figure.getBBox();
            label.attr({
                x: model.get("x"),
                y: model.get("y") + figureBbox.height / 1.5,
                text: model.get("label")
            });
        }

    });

    var model = new CircleModel({
        x: 100,
        y: 150,
        radio: 50,
        label: "MyLabel",
        color: "blue"
    });

    var view = new CircleView({
        model: model
    });

});