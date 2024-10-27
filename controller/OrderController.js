import {customerArray} from "../db/database.js";


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