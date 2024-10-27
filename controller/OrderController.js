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


$("#addItem").click(function (){
    let orderid = $("#orderid").val();
    let date = $("#date").val();
    let cusID = $("#CustomerId2").val();
    let ItemCode = $("#iteCode2").val();
    let ItemName = $("#Iname").val();
    let ItemPrice = $("#Iprice").val();
    let QuantityH = $("#qtyhand").val();
    let OdQu = $("#odQu").val();
    let total = ItemPrice * OdQu;


    let order = new Order(orderid, date, cusID,ItemCode,ItemName,ItemPrice,QuantityH,OdQu,total);

    cart.push(order);
    console.log(cart)
    loadCart();

});


const loadCart = () => {
    $("#cart").empty();

    cart.map((Cart, index) => {
        if (index < 5) {
            let data = `<tr><td>${Cart.orderid}</td><td>${Cart.cusid}</td><td>${Cart.iname}</td><td>${Cart.iprice}</td><td>${Cart.ordedqty}</td><td>${Cart.total}</td></tr>`;
            $("#cart").append(data);
        }
    });
};

