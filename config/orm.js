// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {

    selectAll: function(tableInput){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result){
            if (err) throw err;

            console.log(results)
        })
    },

    insertOne: function(){
        var queryString = "INSERT INTO ?? (?) VALUES (?)"
        connection.query(queryString, [table, col, vals], function(err, result){
            if (err) throw err;

            console.log(result)
        })
    }

}