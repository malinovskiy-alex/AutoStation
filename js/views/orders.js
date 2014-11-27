/**
 * Created by malinovsky on 9/4/2014.
 */
var app = app || {}
app.OrdersView = Backbone.View.extend({
    el: '.container',
    events: {
        'click #add': 'addOrder'
    },
    initialize: function (initialOrders) {
        this.collection = new app.OrderList(initialOrders);
        this.render();
        this.listenTo(this.collection, "add", this.renderOrder);
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
        $("#orders").append(orderView.render().el);
    },
    addOrder: function (e) {
        e.preventDefault();
        var formData = {};
        $("#order input").each(function (i, el) {
            if ($(el).val() != '') {
                formData[el.id] = $(el).val()
            }
        });
        this.collection.add(new app.Order(formData));
    }
});