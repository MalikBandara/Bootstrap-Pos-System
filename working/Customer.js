// Customer save part

let customer_arry = [];

// load the customer table


const loadCustomerTable = () => {
    // Clear the table body first
    $("#CustomerTableBody").empty();

    // Use map but limit the number of entries displayed to 5
    customer_arry.map((customer, index) => {
        if (index < 5) { // Limit to first 5 customers
            console.log(customer);
            let data = `<tr>
                            <td>${customer.customerId}</td>
                            <td>${customer.Cusname}</td>
                            <td>${customer.CusAddress}</td>
                            <td>${customer.CusSalary}</td>
                        </tr>`;
            $("#CustomerTableBody").append(data);
        }
    });
    $("#CustomerTableBody2").empty();

    // Use map but limit the number of entries displayed to 5
    customer_arry.map((customer, index) => {

            console.log(customer);
            let data = `<tr>
                            <td>${customer.customerId}</td>
                            <td>${customer.Cusname}</td>
                            <td>${customer.CusAddress}</td>
                            <td>${customer.CusSalary}</td>
                        </tr>`;
            $("#CustomerTableBody2").append(data);

    });
}


$("#customerSaveButton").click(function (){

    /* get data from input field */

    let customerId = $("#CustomerId").val();
    let Cusname = $("#name").val();
    let CusAddress = $("#address").val();
    let CusSalary = $("#salary").val();

    console.log(customerId);
    console.log(Cusname);
    console.log(CusAddress);
    console.log(CusSalary);



    // pass the data for the constructor

    let Customer = {
        customerId :customer_arry.length+1,
        Cusname : Cusname,
        CusAddress : CusAddress,
        CusSalary : CusSalary

    }

    // push data into created array

    customer_arry.push(Customer);
    console.log(customer_arry)

    loadCustomerTable()
    console.log(customer_arry)

});


// Search customer

function searchCustomer(){
    let SearchFieldValue = $("#searchCustomerIf").val();
    console.log(SearchFieldValue);

    // Convert to a number and ensure it's a valid number
    let searchValueNumber = parseInt(SearchFieldValue);

    if (isNaN(searchValueNumber)) {
        console.log("Please enter a valid number.");
        return;  // Exit the function if the input is not a valid number
    }

    let customerFound = false;  // Variable to track if a match is found

    for (let i = 0; i < customer_arry.length; i++) {
        if (searchValueNumber === customer_arry[i].customerId) {


            customerFound = true;  // Mark that the customer was found

            // Load customer details into input fields
            $("#CustomerId").val(customer_arry[i].customerId);
            $("#name").val(customer_arry[i].Cusname);
            $("#address").val(customer_arry[i].CusAddress);
            $("#salary").val(customer_arry[i].CusSalary);

            break;
        }
    }


    if (!customerFound) {
        alert("customer not found !! ")
    }
}

$("#searchCustomer").click(function () {
    searchCustomer()
});





// clear customer

$("#ClearCustomer").click(function (){
     $("#CustomerId").val('');
     $("#name").val('');
     $("#address").val('');
     $("#salary").val('');

});


// Customer Update

$("#CustomerUpdateButton").click(function () {
    let customerId = parseInt($("#CustomerId").val());
    let Cusname = $("#name").val();
    let CusAddress = $("#address").val();
    let CusSalary = $("#salary").val();

    // Flag to track if the customer was found
    let customerFound = false;

    for (let i = 0; i < customer_arry.length; i++) {
        if (customerId === customer_arry[i].customerId) { // Use == for type coercion

            // Update customer details
            customer_arry[i].customerId = customerId;  // You can also keep this line if you need to reassign it
            customer_arry[i].Cusname = Cusname;
            customer_arry[i].CusAddress = CusAddress;
            customer_arry[i].CusSalary = CusSalary;

            // Log the updated customer array
            console.log("Updated Customer: ", customer_arry[i]);
            customerFound = true; // Mark that the customer was found
            loadCustomerTable();
            break; // Exit the loop since we've found and updated the customer
        }
    }

    // If no customer was found after the loop
    if (!customerFound) {
        console.log("Customer not found for ID: " + customerId);
    }

    // Log the input values
    console.log("Customer ID: " + customerId);
    console.log("Customer Name: " + Cusname);
    console.log("Customer Address: " + CusAddress);
    console.log("Customer Salary: " + CusSalary);

    // Log the entire array after update
    console.log("Updated Customer Array: ", customer_arry);
});



// customer delete


$("#DeleteCustomer").click(function () {
    let customerId = parseInt($("#CustomerId").val());
    let customerFound = false; // Flag to track if the customer was found

    // Loop through the customer array
    for (let i = 0; i < customer_arry.length; i++) {
        if (customerId === customer_arry[i].customerId) {
            // Remove the customer from the array
            customer_arry.splice(i, 1); // Removes 1 element at index i
            customerFound = true; // Mark that the customer was found
            console.log(`Customer with ID ${customerId} deleted.`);
            break; // Exit the loop once the customer is found and deleted
        }
    }

    // Reload the customer table to reflect the changes
    loadCustomerTable();

    // If no customer was found, show an alert
    if (!customerFound) {
        alert("Customer not found!");
    }
});


$("#customerAllTable").click(function (){
   loadCustomerTable();
});

