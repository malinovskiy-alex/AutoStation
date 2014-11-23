/**
 * Created by malinovsky on 9/1/2014.
 */
var app = app || {};
app.Order = Backbone.Model.extend({
    defaults: {
        clientName: '',
        clientAddress: '',
        recipientName: '',
        recipientAddress: '',
        status: 'Dispatch',
        productName: '',
        productWeight: 0,
        timeToSolve: 0
    }
})