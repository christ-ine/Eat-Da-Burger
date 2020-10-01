// Import MySQL connection.
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


var orm = {

    selectAll: function (table, callback) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;

            callback(result)
        })
    },

    insertOne: function (table, cols, vals, callback) {
        var queryString = "INSERT INTO " + table

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);


        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;

            callback(result)
        })
    },


    // updateOne: function (table, col, val, condition, callback){
    //     var queryString = "UPDATE ?? SET ? = ? WHERE" + condition;

    //     connection.query = (queryString, [table, col, val, condition], function (err, result){
    //         if (err) throw err;

    //         callback(result)
    //     })
    // }
}

module.exports = orm;
