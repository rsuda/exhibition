var mysql = require('mysql');
exports.select = (sql_statement, cb) => {
var responce = [];
var con = mysql.createConnection(
        {
                host: "ec2-3-16-215-130.us-east-2.compute.amazonaws.com",
                user: "robin1",
                password: "staples8",
                database: "login",
                stringifyObjects: "true"
        }
);

con.connect(function(err){

        if(err) throw err;
        console.log("connected!");
        var typeSQL = sql_statement;
        con.query(typeSQL, function(err, result, fields){
                if (err)  throw err;;
                if (result.length){
                        for(var i = 1; i <= result.length;i++){
                        responce.push(result);
                        };
                }
                cb(result);
//              console.log(result);
//              console.log(fields)
        //      console.log(result.recordset)

        });


});
console.log("test");
console.log(responce.pop());
return "123 123 123 123";
}
