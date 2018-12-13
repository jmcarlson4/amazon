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
        var items = [];
        function inventory() {


            for (var i = 0; i < results.length; i++) {
                items.push(results[i].product_name + " " + results[i].price + " " + results[i].item_id);
            }

        }
        inventory();
        console.log(items);
        inquirer.prompt([
            {
                type: "input",
                name: "products",

                message: "Which item would you like to purchase?"
            },

            {
                name: "item",
                type: "input",
                message: "How many would you like?"
            }
        ]).then(function (response) {
            //console.log(response.item);
            console.log(response.products);
            //var chosenItem;

            // for (var i = 0; i < results.length; i++) {
            //    // console.log(results);
            //     if (results[i].product_name === response.products) {
            //         chosenItem = results[i];
            //     }
            // }
            console.log(results[response.products - 1]);
            if (results[response.products - 1].stock_quanitity >= response.item) {

                console.log("HELP!");
                connection.query("UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quanitity: response.item
                        },
                        {
                            item_id: response.products
                        }
                    ],
                    function err(err) {
                        if (err) throw err;
                        //console.log("hello" ,err);

                        // need function to calculate order total
                        //console.log("Your total is " + price);


                        //function price(){
                        //connection.query(SELECT * FROM bamazon, function(err, results){
                        //response.item *)};

                        //);
                        console.log("Your order has been placed!");
                    });
            }
            else {
                console.log("Out of Stock!");
            }
        });

        //connection.end();





    });
}
