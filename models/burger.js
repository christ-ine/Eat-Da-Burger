// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {

    selectAll: function(callback){
        orm.selectAll("burgers", function(res){
            callback(res);
        })
    },

    insertOne: function(col, vals, callback){
        orm.insertOne("burgers", col, vals, function(res){
            callback(res)
        })
    },

    updateOne: function(col, val, condition, callback){
        orm.updateOne("burgers", col, vals, function(res){
            callback(res)
        });
    }

}

module.exports = burger;