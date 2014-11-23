/**
 * Created by malinovsky on 9/4/2014.
 */
var app = app || {}
app.OrderList = Backbone.Collection.extend({
    model: app.Order
});