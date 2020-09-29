// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {

    selectAll: function(table){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result){
            if (err) throw err;

            console.log(results)
        })
    },

    insertOne: function(table, col, vals){
        var queryString = "INSERT INTO ?? (?) VALUES (?)"
        connection.query(queryString, [table, col, vals], function(err, result){
            if (err) throw err;

            console.log(result)
        })
    },


    updateOne: function (){
        var queryString = "UPDATE ?? SET ? = ? WHERE" + condition;

        connection.query = (queryString, [table, col, val, condition], function (err, result){
            if (err) throw err;

            console.log(result)
        })
    }
}

module.exports = orm;
