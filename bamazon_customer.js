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
});


function products() {

        connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        
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
            
            var price = ("HELP!", results[response.products - 1].price * response.item);
            // console.log("help0", price);
            // console.log("HELP1", results);
            // console.log("help2",response.products);
            // console.log("help3", results[response.products - 1].price);
           

            //console.log(results[response.products - 1]);
            if (results[response.products - 1].stock_quanitity >= response.item) {
                console.log("Your order has been placed!");
                console.log("Your order total is $ " + price);
               // console.log(price);

                connection.query("UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quanitity: results[response.products - 1].stock_quanitity - response.item
                        },
                        {
                            item_id: results[response.products - 1].item_id
                        }
                    ],
                    

                    function err(err) {
                        if (err) throw err;
                    }
                );
            } else {
                console.log("Sorry Out of Stock!"); 
            };
        });

    });

    //connection.end();
}
