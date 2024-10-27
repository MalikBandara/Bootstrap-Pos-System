// // Item Save
//
// // 2nd step
// let ItemArray = [];
//
// $("#AddNewItem").click(function (){
//
//
//     // 1st step
//
//     let ItemId = parseInt($("#ItemId").val());
//     let ItemName = $("#ItemName").val();
//     let ItemPrice = $("#price").val();
//     let QuantityItem = $("#Qty").val();
//
//     console.log(ItemId)
//     console.log(ItemPrice)
//     console.log(ItemName)
//     console.log(QuantityItem)
//
//     // 3rd step
//     let Item =  {
//         ItemId:ItemArray.length+1,
//         ItemName:ItemName,
//         ItemPrice:ItemPrice,
//         QuantityItem:QuantityItem
//     }
//
//     // 4th step
//     ItemArray.push(Item);
//     console.log(ItemArray)
//     loadItemTable()
//
//
// });
//
// // 5th step
// const loadItemTable  = ()=>{
//
//     // 6th step
//     $("#ItemTableBody").empty();
//
//     // 7th step
//
//     ItemArray.map((Item,Index)=>{
//         if (Index < 5 ) {
//             console.log(Item);
//             // 8th step
//             let data = `<tr><td>${Item.ItemId}</td><td>${Item.ItemName}</td><td>${Item.ItemPrice}</td><td>${Item.QuantityItem}</td></tr>`
//
//             // 9th step
//             $("#ItemTableBody").append(data);
//         }
//
//     });
//
//     $("#ItemTableBody2").empty();
//
//     // 7th step
//
//     ItemArray.map((Item,Index)=>{
//
//             console.log(Item);
//             // 8th step
//             let data = `<tr><td>${Item.ItemId}</td><td>${Item.ItemName}</td><td>${Item.ItemPrice}</td><td>${Item.QuantityItem}</td></tr>`
//
//             // 9th step
//             $("#ItemTableBody2").append(data);
//
//
//     });
// }
//
//
// // clear Item
//
//
// $("#ItemClear").click(function (){
//     $("#ItemId").val('');
//     $("#ItemName").val('');
//     $("#price").val('');
//     $("#Qty").val('');
// });
//
//
//
// // Item Search
//
// $("#ItemSearch").click(function (){
//     // 1st
//    let SerachValue = $("#ItemField").val();
//    console.log(SerachValue);
//
//    let ItemSNumber = parseInt(SerachValue);
//
//    let ItemFound = false;
//
//    for (let i = 0 ; i < ItemArray.length ; i++){
//        if (ItemSNumber === ItemArray[i].ItemId){
//         ItemFound = true;
//
//            $("#ItemId").val(ItemArray[i].ItemId);
//            $("#ItemName").val(ItemArray[i].ItemName);
//            $("#price").val(ItemArray[i].ItemPrice);
//            $("#Qty").val(ItemArray[i].QuantityItem);
//
//        }
//    }
//
//
// });
//
//
// //item Update
//
//
// $("#UpdateItems").click(function () {
//     let ItemId = parseInt($("#ItemId").val());
//     let ItemName = $("#ItemName").val();
//     let ItemPrice = $("#price").val();
//     let QuantityItem = $("#Qty").val();
//
//     // Flag to track if the Item was found
//     let ItemFound = false;
//
//     for (let i = 0; i < ItemArray.length; i++) {
//         if (ItemId === ItemArray[i].ItemId) {
//
//             // Update Item details
//             ItemArray[i].ItemId = ItemId;  // You can also keep this line if you need to reassign it
//             ItemArray[i].ItemName = ItemName;
//             ItemArray[i].ItemPrice = ItemPrice;
//             ItemArray[i].QuantityItem = QuantityItem;
//
//             // Log the updated customer array
//             console.log("Updated Item: ", ItemArray[i]);
//             ItemFound = true; // Mark that the Item was found
//             loadItemTable();
//             break; // Exit the loop since we've found and updated the Item
//         }
//     }
//
//     // If no customer was found after the loop
//     if (!ItemFound) {
//         console.log("Item not found for ID: " + ItemId);
//     }
//
//
//
//     // Log the entire array after update
//     console.log("Updated Item Array: ", ItemArray);
// });
//
//
//
// // Delete Item
//
// $("#DeleteItem").click(function () {
//     let ItemId = parseInt($("#ItemId").val());
//     let ItemFound = false;
//
//     // Loop through the Item array
//     for (let i = 0; i < ItemArray.length; i++) {
//         if (ItemId === ItemArray[i].ItemId) { // Remove the item from the array
//             ItemArray.splice(i, 1); // Removes 1 element at index i
//             ItemFound = true; // Mark that the item was found
//             console.log(`Item with ID ${ItemId} deleted.`);
//             break; // Exit the loop once the item is found and deleted
//         }
//     }
//
//     // Reload the item table to reflect the changes
//     loadItemTable();
//
//     // If no item was found, show an alert
//     if (!ItemFound) {
//         alert("Item not found!");
//     }
// });
