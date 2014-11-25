/**
 * Created by malinovsky on 9/4/2014.
 */
var app = app || {}
app.OrdersView = Backbone.View.extend({
    el: '#orders',
    initialize: function (initialOrders) {
        this.collection = new app.OrderList(initialOrders);
        this.render();
    },
    render: function () {
        this.collection.each(function (item) {
            this.renderOrder(item)
        }, this);
    },
    renderOrder: function (item) {
        var orderView = new app.OrderView({
            model: item
        });
        this.$el.append(orderView.render().el)
    }
})