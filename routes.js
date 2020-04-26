const express = require('express');
const path = require('path');
const router = express.Router();
const sql = require('./events')
resultSet = {
test: "asdf",
test2: "fdsa"
};
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



router.get('/login:username', (req,res)=> {
        login_info = req.params;
        login = login_info.username.split(':');
        console.log(login_info);
        console.log(login);
        let sql_statement = "SELECT first_name FROM customers WHERE email = '" + login[1] + "' AND password = '" + login[2] + "'";
        console.log(sql_statement);
        sql.select(sql_statement, function(result){
        console.log(result);
        res.send(result);
});

        var loopedItem = "";
        //responce.forEach(element => loopedItem += element + "");
        //console.log("  asdf  " + loopedItem);
});



module.exports = router;
