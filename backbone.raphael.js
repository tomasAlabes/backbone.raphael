Backbone.RaphaelView = Backbone.View.extend({

    delegateEvents: function(events) {
        if (!(events || (events = _.result(this, 'events')))) return this;
        this.undelegateEvents();
        for (var key in events) {
            var method = events[key];
            if (!_.isFunction(method)) method = this[events[key]];
            if (!method) continue;

            var match = key.match(/^(\S+)\s*(.*)$/);
            var eventName = match[1];
            method = _.bind(method, this);
            this.$el[0][eventName](method);
        }
        return this;
    }

});

