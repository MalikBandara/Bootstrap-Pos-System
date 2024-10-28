import {customerArray,ItemArray,cart,orderHistory} from "../db/database.js";
import Order from "../models/OrderModel.js";

import OrderHistory from "../models/orderHistory.js";



$("#customerSearch").click(function (){

    let customerSerachId = parseInt($("#customerSearchId").val());


    let search = false;
    for (let i = 0 ; i < customerArray.length ; i++){
        if (customerSerachId === customerArray[i].id){
                $("#CustomerId2").val(customerArray[i].id);
                $("#cuname").val(customerArray[i].name);
                $("#cusalary").val(customerArray[i].salary);
                $("#cuaddress").val(customerArray[i].address);
        }

    }




});

$("#itemSearchOrder").click(function () {

    let itemFound = false; // Track if item is found
    let itemSearchCode = parseInt($("#iteCode").val());

    for (let i = 0; i < ItemArray.length; i++) {
        if (itemSearchCode === ItemArray[i].id) {
            console.log("Item found:", ItemArray[i].id);
            $("#iteCode2").val(ItemArray[i].id);
            $("#Iname").val(ItemArray[i].iName);
            $("#Iprice").val(ItemArray[i].Price);
            $("#qtyhand").val(ItemArray[i].Quantity);

            itemFound = true;
            break; // Stop searching once found
        }
    }

    if (!itemFound) {
        alert("Item not found"); // Only alert once if not found
    }
});

let total = 0  ;
$("#addItem").click(function (){
    let orderid = $("#orderid").val();
    let date = $("#date").val();
    let cusID = $("#CustomerId2").val();
    let ItemCode = $("#iteCode2").val();
    let ItemName = $("#Iname").val();
    let ItemPrice = $("#Iprice").val();
    let QuantityH = $("#qtyhand").val();
    let OdQu = $("#odQu").val();
    total = ItemPrice * OdQu;


    let order = new Order(orderid, date, cusID,ItemCode,ItemName,ItemPrice,QuantityH,OdQu,total);

    cart.push(order);
    console.log(cart)
    $("#totalDisplay").text(`Total: ${total}` + " Rs/=");
    loadCart();

});


const loadCart = () => {
    $("#cart").empty();
    total = 0;

    cart.forEach((item) => {
        total += item.total;
        let row = `<tr>
                    <td>${item.orderid}</td>
                    <td>${item.cusid}</td>
                    <td>${item.iname}</td>
                    <td>${item.iprice}</td>
                    <td>${item.ordedqty}</td>
                    <td>${item.total}</td>
                   </tr>`;
        $("#cart").append(row);
    });

    $("#totalDisplay").text(`Total: ${total} Rs/=`);
    $("#subtotal").text("Last total: 0 Rs/=");
    $("#lastBal").text("Balance : 0 Rs/=");
};

$("#removecart").click(function () {
    let orderid = $("#orderid").val();

    let indexToRemove = cart.findIndex((item) => item.orderid === orderid);

    if (indexToRemove !== -1) {
        let removedItem = cart.splice(indexToRemove, 1)[0];
        total -= removedItem.total;  // Update total by subtracting the removed item's total

        loadCart();  // Refresh cart display
    } else {
        alert("Order ID not found");
    }
});


// let dis;
// $("#disButton").click(function (){
//    let discount = $("#discount").val();
//
//    dis = total - discount;
//
//     $("#subtotal").text(`subtotal: ${dis}` + " Rs/=");
//
// });


$("#balancecal").click(function (){
        let givenCash = $("#cashGiven").val();

        let balance = givenCash - total;

    $("#lastBal").text(`Balance: ${balance}` + " Rs/=");
});



$("#purchase").click(function (){
    let givenCash = parseFloat($("#cashGiven").val()) || 0;
    let balance = givenCash - total;
    $("#lastBal").text(`Balance: ${balance} Rs/=`);
    let customerId = parseInt($("#CustomerId2").val(), 10); // Convert to number
    let orderId = parseInt($("#orderid").val(), 10); // Convert to number



    if (customerId === orderId){
    // Add cart to order history on checkout if cash is sufficient
    if (balance >= 0) {
        cart.forEach((item) => {
            let existingOrder = orderHistory.find(order => order.orderid === item.orderid);
            if (existingOrder) {
                // Update total and add item details if order ID already exists
                existingOrder.total += item.total;
                existingOrder.items.push(item); // Add item to existing order's items
            } else {
                // If new order ID, create and push to history
                let newOrder = new OrderHistory(
                    item.orderid,
                    item.date,
                    item.cusid,
                    item.total,
                    [item] // Start with the current item in the items array
                );
                orderHistory.push(newOrder);
            }
        });
        cart.length = 0; // Clear the cart
        loadCart(); // Reload cart display
        alert("Transaction completed successfully!");
    }
    else {
        alert("Insufficient cash provided.");
    }
    }
    else {
        alert("customer different")
    }
});



const loadOrderHistory = () => {
    $("#OrderHistoryTable").empty();

    orderHistory.forEach((order, index) => {
        // Display the main row for the order with consolidated total
        let mainRow = `<tr>
                        <td>${index + 1}</td>
                        <td>${order.orderid}</td>
                        <td>${order.date}</td>
                        <td>${order.cusid}</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>${order.total}</td>
                       </tr>`;
        $("#OrderHistoryTable").append(mainRow);

        // Display each item in the order as a sub-row
        order.items.forEach((item) => {
            let itemRow = `<tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>${item.iname}</td>
                            <td>${item.iprice}</td>
                            <td>${item.ordedqty}</td>
                            <td>${item.total}</td>
                           </tr>`;
            $("#OrderHistoryTable").append(itemRow);
        });
    });
};


$("#orderHistroy").click(function () {
    loadOrderHistory();
});