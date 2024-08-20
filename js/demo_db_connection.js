var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Test22test$",
  insecureAuth : true
});

con.connect(function(err) {
   if (err) throw err;
     console.log("Connected!");
    //  use mysql;
    con.query("use mysql", function (err, result, fields) {
        // if (err) throw err;
        console.log(result);
      });
  con.query("select * from Persons", function (err, result, fields) {
    // if (err) throw err;
    console.log(result);
  });

});