// add customer
import CustomerModel from "../models/customerModel.js";
import { customerArray } from "../db/database.js";


let index = null;
const getNextCustomerId = () => {
    return customerArray.length + 1;
};

$("#customerSaveButton").click(function (){
    let customerId = getNextCustomerId();
    let Cusname = $("#name").val();
    let CusAddress = $("#address").val();
    let CusSalary = $("#salary").val();
    let mobile = $("#mobile").val();
    let email = $("#email").val();

    console.log(customerId);
    console.log(Cusname);
    console.log(CusAddress);
    console.log(CusSalary);
    console.log(mobile);
    console.log(email);

    let customer = new CustomerModel(customerId,Cusname,CusAddress,CusSalary,mobile,email);
    customerArray.push(customer);

    console.log(customer);
    CustomerTableLoad();
    ClearField();
});



// add table
const CustomerTableLoad = () => {
    $("#CustomerTableBody").empty();

    customerArray.map((customer, index) => {

        if (index < 5) {
            // Access by getter methods
            let data = `<tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.address}</td>
            <td>${customer.salary}</td>
            <td>${customer.mobile}</td>
            <td>${customer.email}</td>
        </tr>`;
            $("#CustomerTableBody").append(data);
        }
    });
};
const CustomerTableLoadAll = () => {
    $("#CustomerTableBody2").empty();

    customerArray.map((customer, index) => {


            // Access by getter methods
            let data = `<tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.address}</td>
            <td>${customer.salary}</td>
            <td>${customer.mobile}</td>
            <td>${customer.email}</td>
        </tr>`;
            $("#CustomerTableBody2").append(data);

    });
};


const ClearField = () => {
     $("#CustomerId").val(getNextCustomerId())
     $("#name").val('');
     $("#address").val('');
     $("#salary").val('');
     $("#mobile").val('');
     $("#email").val('');
}

$("#ClearCustomer").click(function (){
    ClearField();
})

// when click the table body details need to load the table body

$("#CustomerTableBody").on('click','tr',function (){
    index = $(this).index();
    console.log(index);
    let customer = customerArray[index];
    $("#CustomerId").val(customer.id);
    $("#name").val(customer.name);
    $("#address").val(customer.address);
    $("#salary").val(customer.salary);
    $("#mobile").val(customer.mobile);
    $("#email").val(customer.email);
});


// update Customer

$("#CustomerUpdateButton").click(function (){

    let selected_index = index
    let customerId = $("#CustomerId").val();
    let Cusname = $("#name").val();
    let CusAddress = $("#address").val();
    let CusSalary = $("#salary").val();
    let mobile = $("#mobile").val();
    let email = $("#email").val();

    console.log(customerArray[selected_index]);
    let UpdatedCus = new CustomerModel(customerId,Cusname,CusAddress,CusSalary,mobile,email);
    customerArray[selected_index]=UpdatedCus;
    console.log(customerArray[selected_index]);
    ClearField();
    CustomerTableLoad();
});


// delete customer


$("#DeleteCustomer").click(function (){
    console.log(customerArray);
    customerArray.splice(index ,1);
    ClearField();
    CustomerTableLoad();
    console.log(customerArray);
});


// load All Customer

$("#viewAllCustomerT").click(function (){
    CustomerTableLoadAll();
})