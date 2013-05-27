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

    var FigureView = Backbone.RaphaelView.extend({

        initialize: function(){
            this.el = paper.circle(model.get("x"), model.get("y"), model.get("radio")).attr({fill: model.get("color")});
        },

        events: {
            "click": "sayCircle"
        },

        sayCircle: function(evt){
            console.log("circle");
        },

        render: function(model){
            var figure = this.el;
            figure.attr({
                cx: model.get("x"),
                cy: model.get("y"),
                radio: model.get("radio"),
                color: model.get("color")
            });
            return this;
        }

    });

    var LabelView = Backbone.RaphaelView.extend({

        initialize: function(options){
            this.circleFigure = options.circleFigure;

            var figureBbox = this.circleFigure.getBBox();
            this.el = paper.text(model.get("x"), model.get("y") + figureBbox.height / 1.5, model.get("label"));
        },

        events: {
            "click": "sayLabel"
        },

        sayLabel: function(evt){
            console.log("label");
        },

        render: function(model){
            var label = this.el;
            var figureBbox = this.figure.getBBox();

            label.attr({
                x: model.get("x"),
                y: model.get("y") + figureBbox.height / 1.5,
                text: model.get("label")
            });
            return this;
        }

    });

    var CircleView = Backbone.RaphaelView.extend({

        initialize: function(){
            var model = this.model;
            this.listenTo(model, "change", this.render);

            this.figureView = new FigureView();
            this.labelView = new LabelView({circleFigure: this.figureView.el});

            var element = paper.set();
            element.push(this.figureView.el);
            element.push(this.labelView.el);

            this.el = element;
        },

        render: function(){
            this.figureView.render(this.model);
            this.labelView.render(this.model);

            return this;
        },

        events: {
            mouseout: "sayCompound"
        },

        sayCompound: function(evt){
            console.log("Compound");
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