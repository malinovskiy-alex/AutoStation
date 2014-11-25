/**
 * Created by malinovsky on 9/1/2014.
 */
var app = app || {}
$(function () {
    var orders = [
        {clientName: 'Alex', clientAddress: 'Gv.Shir.73', recipientName: 'Roman', recipientAddress: 'Gigant, room 271', productName: 'Book', productWeight: '1', orderStatus: 'Opening'},
        {clientName: 'Roman', clientAddress: 'Address2', recipientName: 'Ivan', recipientAddress: 'Address3', productName: 'Table', productWeight: '10', orderStatus: 'Dispatching'},
        {clientName: 'Alexey', clientAddress: 'Address4', recipientName: 'Dimitriy', recipientAddress: 'Address5', productName: 'Plate', productWeight: '2', orderStatus: 'Opening'}
    ]
    new app.OrdersView(orders)
})
