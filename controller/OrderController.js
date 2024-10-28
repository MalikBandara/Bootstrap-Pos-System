import {customerArray,ItemArray,cart} from "../db/database.js";
import Order from "../models/OrderModel.js";

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
        else {
            alert("no")
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


let dis;
$("#disButton").click(function (){
   let discount = $("#discount").val();

   dis = total - discount;

    $("#subtotal").text(`subtotal: ${dis}` + " Rs/=");

});


$("#balancecal").click(function (){
        let givenCash = $("#cashGiven").val();

        let balance = givenCash - dis;

    $("#lastBal").text(`Balance: ${balance}` + " Rs/=");
});