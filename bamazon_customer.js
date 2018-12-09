var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "4Children!",
    database: "bamazon"

});

connection.connect(function (err) {
    if (err) throw err;
    //console.log("connected as id " + connection.threadId);
    products();
    //query2();
});

function products() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        //console.log(results);
        // console.log(results[0].item_id);
        // console.log(JSON.stringify(results, null, 2));
        // console.log(results.price);
        inquirer.prompt([
            {
                type: "rawlist",
                name: "products",
                choices: function () {
                    var items = [];
                    for (var i = 0; i < results.length; i++) {
                        items.push(results[i].product_name);
                    }
                    return items;
                },
                message: "Which item would you like to purchase?"
            },

            {
                name: "item",
                type: "input",
                message: "How many would you like?"
            },
            // ]).then(function(response){
            //     var chosenItem;
            //     for (var i = 0; i < results.length; i++){
            //         if(results[i].product_name === response.choices){
            //             chosenItem = results[i];
            //         }
            //         }


            connection.end(),
    
        // )}    
])
})}
