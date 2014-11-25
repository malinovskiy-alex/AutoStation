/**
 * Created by malinovsky on 9/4/2014.
 */
var app = app || {}
app.OrderView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template($('#orderView').html()),
    render: function () {
        this.$el.html(this.template(this.model.toJSON()))
        return this;
    }
});