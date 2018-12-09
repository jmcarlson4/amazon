DROP DATABASE if exists bamazon;
CREATE DATABASE	bamazon;

USE bamazon;

CREATE TABLE products(
	item_id VARCHAR(5),
	product_name VARCHAR(25),
    department_name VARCHAR(30),
    price DECIMAL(10,2),
    stock_quanitity INTEGER
    );
    
    INSERT INTO products (item_id, product_name, department_name, price, stock_quanitity)
    VALUES ("A1", "Purse", "Accessories", 27.99, 100);
    
    INSERT INTO products (item_id, product_name, department_name, price, stock_quanitity)
    VALUES ("A2", "underwear", "Lingerie", 10, 250);
    
    INSERT INTO products (item_id, product_name, department_name, price, stock_quanitity)
    VALUES ("A3", "Skirt", "Womens", 39.99, 50);
    
    INSERT INTO products (item_id, product_name, department_name, price, stock_quanitity)
    VALUES ("A4", "sandals", "Shoes", 50, 75);
    
    INSERT INTO products (item_id, product_name, department_name, price, stock_quanitity)
    VALUES ("A5", "Sweatshirt", "Boys", 19.99, 55);
    
    INSERT INTO products (item_id, product_name, department_name, price, stock_quanitity)
    VALUES ("A6", "pants", "mens", 29.99, 80);
    
    INSERT INTO products (item_id, product_name, department_name, price, stock_quanitity)
    VALUES ("A7", "earrings", "jewelery", 49.95, 100);
    
    INSERT INTO products (item_id, product_name, department_name, price, stock_quanitity)
    VALUES ("A8", "belts", "Accessories", 9.75, 95);
    
    INSERT INTO products (item_id, product_name, department_name, price, stock_quanitity)
    VALUES ("A9", "pajamas", "Girls", 29.99, 175);
    
    INSERT INTO products (item_id, product_name, department_name, price, stock_quanitity)
    VALUES ("A10", "sunglasses", "Accessories", 10.99, 15);
    
    SELECT * FROM products;