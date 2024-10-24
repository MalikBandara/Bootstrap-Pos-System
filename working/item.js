// Item Save

// 2nd step
let ItemArray = [];

$("#AddNewItem").click(function (){


    // 1st step

    let ItemId = parseInt($("#ItemId").val());
    let ItemName = $("#ItemName").val();
    let ItemPrice = $("#price").val();
    let QuantityItem = $("#Qty").val();

    console.log(ItemId)
    console.log(ItemPrice)
    console.log(ItemName)
    console.log(QuantityItem)

    // 3rd step
    let Item =  {
        ItemId:ItemId,
        ItemName:ItemName,
        ItemPrice:ItemPrice,
        QuantityItem:QuantityItem
    }

    // 4th step
    ItemArray.push(Item);
    console.log(ItemArray)
    loadItemTable()


});

// 5th step
const loadItemTable  = ()=>{

    // 6th step
    $("#ItemTableBody").empty();

    // 7th step
    ItemArray.map((Item,Index)=>{

        console.log(Item);
        // 8th step
        let data = `<tr><td>${Item.ItemId}</td><td>${Item.ItemName}</td><td>${Item.ItemPrice}</td><td>${Item.QuantityItem}</td></tr>`

        // 9th step
        $("#ItemTableBody").append(data);


    });
}


// clear Item


$("#ItemClear").click(function (){
    $("#ItemId").val('');
    $("#ItemName").val('');
    $("#price").val('');
    $("#Qty").val('');
});