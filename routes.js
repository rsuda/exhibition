const express = require('express');
const path = require('path');
const router = express.Router();
const sql = require('./events')
loginSet =
{
        credentials: false,
        username: ""
};
signUpSet =
{
        credentials: false
}
addItemSet =
{
        addItem: true
}
changedPassSet =
{
        changedPass: true
}
let cartSet = {}
let sellSet = {}
var mysql = require('mysql');
var con = mysql.createConnection(
{
        host: "ec2-3-16-215-130.us-east-2.compute.amazonaws.com",
        user: "robin1",
        password: "staples8",
        database: "login",
        stringifyObjects: "true"
});

test = "";
router.get('/where', (req,res) => {
                sql.select(sql_statement, function(result){
                                console.log(result[0]);



                                //      var strSplit = result.toString();
                                //      strSplit = strSplit.split("}");
                                /**
                                  result.map( (element,i) => {
                                  console.log("split:");
                                  resultSet[i] = element;
                                  test = element.id;
                                  console.log(element)
                                  test = JSON.stringify(result);
                                  test = test.slice(1,test.length - 1);
                                  console.log(test)
                                  });

                                 **/

                                //       resultset = JSON.parse(result);
                                //      console.log(resultset);
                });
});

/**
Login
input = {usernamen, password}
output = {username, boolean value}
*/
router.get('/Login:input', (req,res)=>
{
        console.log("\nLogin attempt!\n");
        login_info = req.params;
        console.log(login_info);
        login = login_info.input.split('"');
        console.log(login);
        //console.log(login_info.input.user);
        let sql_statement = "SELECT username FROM customers WHERE username = '" + login[3] + "' AND password = '" + login[7] + "'";
        console.log(sql_statement);
        sql.select(sql_statement, function(result)
                {
                        if (result[0] != null)
                        {
                                loginSet.credentials = true;
                                loginSet.username = login[3];
                        }
                        else
                        {
                                loginSet.credentials = false;
                                loginSet.username = "";
                        }
                        console.log(loginSet);
                        console.log("\n")
                        res.send(loginSet);
                });
        var loopedItem = "";
        //responce.forEach(element => loopedItem += element + "");
        //console.log("  asdf  " + loopedItem);
});

router.get('/Signup:input', (req,res)=>
{
        console.log("\nSignup attempt!\n");
        signup_info = req.params;
        signup = signup_info.input.split('"');
        console.log(signup_info);
        console.log(signup);
        let sql_statement = "INSERT INTO customers (username, name, email, address, password) VALUES ('" + signup[11] + "', '" + signup[3]
        + "', '" + signup[7] + "', '" + signup[19] + "', '" + signup[15] + "')";
        console.log(sql_statement);
        let sql_statement_dupCheck = "SELECT username FROM customers WHERE username = '" + signup[11] + "'";
        console.log(sql_statement_dupCheck);
        sql.select(sql_statement_dupCheck, function(result)
        {
                if (result[0] != null)
                {
                        signUpSet.credentials = false;
                }
                else
                {
                        signUpSet.credentials = true;
                        con.connect(function(err)
                        {
                                if (err) throw err;
                        });
                        con.query(sql_statement, function(err, resultr)
                        {

                        });
                }
                console.log(signUpSet);
                console.log("\n");
                res.send(signUpSet);
        });
        var loopedItem = "";
});

router.get('/Sell:input', (req,res)=> {
                console.log("\nSale attempt!\n")
                sell_info = req.params;
                sell = sell_info.input.split('"');
                console.log(sell_info);
                console.log(sell);
                let sql_statement1 = "SELECT Item.name, Item.pic, Item.uniqueid FROM Item INNER JOIN Cart WHERE Item.uniqueid = Cart.uniqueid AND Cart.username = '" + sell[3] + "'";
                let sql_statement2 = "SELECT Item.name, Item.pic, Item.uniqueid FROM Item INNER JOIN Solditems WHERE Item.uniqueid = Solditems.uniqueid AND Solditems.username = '" + sell[3] + "'";
                console.log(sql_statement1);
                console.log(sql_statement2);
                con.connect(function(err){
                        if (err) throw err;
                        console.log("Select sell connected")
                        });
con.query(sql_statement1, function(err, resultr){
                sellSet['currentItems'] = resultr;
                console.log(resultr);
                //sellSet.currentItems = resultr;
                con.query(sql_statement2, function(err, results){
                                sellSet['soldItems'] = results;
                                console.log(results);
                                console.log(sellSet);
                                res.send(sellSet);
                                console.log("\n");
                                //sellSet.soldItems = results;
                                });
                });
});

router.get('/Add:input', (req,res)=> {
                console.log("\nAdd attempt\n");
                add_info = req.params;
                add = add_info.input.split('"');
                console.log(add_info);
                console.log(add);
                let sql_statement = "INSERT INTO Item (name, price, pic, miniDescription, description, uniqueid) VALUES ('" + add[3] + "', '" + add[7] + "', '" + add[11] + "', '" + add[15] + "', '" + add[19] + "', '" + add[23] + "')";

                console.log(sql_statement);

                sql_statement_dupCheck = "SELECT uniqueid from Item WHERE uniqueid = '" + add[23] + "'";
                console.log(sql_statement_dupCheck);
                sql.select(sql_statement_dupCheck, function(result) {
                                if (result[0] != null)
                                {
                                addItemSet.addItem = false;
                                }
                                else
                                {
                                addItemSet.addItem = true;
                                console.log("else reached");
                                console.log("else reached");
                                con.connect(function(err){
                                        if (err) throw err;
                                        console.log("Insert connected")
                                        });
                                con.query(sql_statement, function(err, resultr){

                                        });
}
console.log(addItemSet);
console.log("\n");
res.send(addItemSet);
});
});

router.get('/Cart:input', (req,res)=> {
                console.log("\nCart request!\n");
                cart_info = req.params;
                cart = cart_info.input.split('"');
                console.log(cart_info);
                console.log(cart);
                let sql_statement = "SELECT Item.name, Cart.quantity, Item.price FROM Cart, Item WHERE Cart.uniqueid = Item.uniqueid AND Cart.username = '" + cart[3] + "'";
                console.log(sql_statement);
                sql.select(sql_statement, function(result){
                                //var test = JSON.parse(result);
                                //console.log(test);
                                cartSet = result;
                                console.log(cartSet);
                                console.log("\n");
                                res.send(cartSet);
                                });
                });

router.get('/Item:input', (req,res)=> {
                console.log("\nItem request!\n");
                item_info = req.params;
                item = item_info.input.split('"');
                console.log(item_info);
                console.log(item);
                let sql_statement = "SELECT * FROM Item WHERE Item.uniqueid = '" + item[3] + "'";
                console.log(sql_statement);
                sql.select(sql_statement, function(result){
                                //var test = JSON.parse(result);
                                //console.log(test);
                                console.log(result);
                                console.log("\n");
                                res.send(result);
                                });
                });
router.get('/previousOrders:input', (req,res)=>
        {
                console.log("\nPrevious order request!\n");
                prevOrders_info = req.params;
                prevOrders = prevOrders_info.input.split('"');
                console.log(prevOrders_info);
                console.log(prevOrders);
                let sql_statement = "SELECT * FROM Solditems INNER JOIN Item WHERE Solditems.uniqueid = Item.uniqueid AND Solditems.username = '"
                + prevOrders[3] + "'";
                console.log(sql_statement);
                sql.select(sql_statement, function(result)
                {
                        console.log(result);
                        console.log("\n");
                        res.send(result);
                });
        });
		
/**
Change Password
input {username,currentPassword,newPassword}
output {changedPass:boolean}
*/
router.get('/Change:input', (req,res)=>
        {
                console.log("\nChange password attempt!\n");
                changePassword_info = req.params;
                changePassword = changePassword_info.input.split('"');
                console.log(changePassword_info);
                console.log(changePassword);
                let sql_statement = "UPDATE customers SET password = '" + changePassword[11] + "' WHERE username = '" + changePassword[3] + "'";
                console.log(sql_statement);
                let sql_statement_dupCheck = "SELECT username FROM customers WHERE username = '" + changePassword[3]
                + "' AND password = '" + changePassword[7] + "'";
                console.log(sql_statement_dupCheck);
                sql.select(sql_statement_dupCheck, function(result)
                {
                        if (result[0] == null)
                                {
                                        changedPassSet.changedPass = false;
                                }
                        else
                                {
                                        changedPassSet.changedPass = true;
                                        con.connect(function(err)
                                        {
                                                if (err) throw err;
                                                console.log("Password was changed");
                                        });
                                        con.query(sql_statement, function(err, resultr)
                                        {

                                        });
                                }
                        console.log(changedPassSet);
                        console.log("\n");
                        res.send(changedPassSet);
                });
                var loopedItem = "";
        });


module.exports = router;