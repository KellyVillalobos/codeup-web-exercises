(function() {

    // sum up all the expenses
// get an average of all the expenses

    var expenses = [
        {itemName: "macbook pro", cost: "$2,400"},
        {itemName: "raspberry pi", cost: "$60"},
        {itemName: "Dell XPS laptop", cost: "$1,200"}
    ];
        var totalCost = 0;

        expenses.forEach(function (expense) {
            var itemCost = (parseFloat(expense.cost.replace(/\$|,/g, '')));
            totalCost += itemCost;

        })

    console.log("Total expenses are: " + "$" + totalCost.toLocaleString());

function getAverage(number){
   var average = number / expenses.length;
   return average;
 }


 console.log("The average of the toal cost is:" + " $" + getAverage(totalCost).toLocaleString());
})();



