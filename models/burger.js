// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {

    selectAll: function(callback){
        orm.selectAll("burgers", function(res){
            callback(res);
        })
    },

    insertOne: function(cols, vals, callback){
        orm.insertOne("burgers", cols, vals, function(res){
            callback(res)
        })
    },

    // updateOne: function(col, vals, condition, callback){
    //     orm.updateOne("burgers", col, vals, condition, function(res){
    //         callback(res)
    //     });
    // }

}

module.exports = burger;