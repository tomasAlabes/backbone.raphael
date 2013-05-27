Backbone.RaphaelView = Backbone.View.extend({

    setElement: function(element, delegate, undelegateEvents) {
        if (this.el && undelegateEvents) this.undelegateEvents();
        // el and $el will be the same, $el would have no special meaning...
        this.el = this.$el = element;
        if (delegate !== false) this.delegateEvents();
        return this;
    },

    delegateEvents: function(events, undelegateEvents) {
        if (!(events || (events = _.result(this, 'events')))) return this;
        if(undelegateEvents) this.undelegateEvents();
        for (var eventName in events) {
            var method = events[eventName];
            if (!_.isFunction(method)) method = this[events[eventName]];
            if (!method) continue;

            method = _.bind(method, this);
            //If it is one of the svg/vml events
            if(this.el[eventName]){
                this.el[eventName](method);
            }
            // Custom events for RaphaelView object
            else{
                this.on(eventName, method);
            }

        }
        return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    undelegateEvents: function() {
        if(this.el.type) this.el.unbindAll();
        return this;
    }

});

