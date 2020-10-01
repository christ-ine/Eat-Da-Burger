var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();


router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };

        console.log(hbsObject);
        

        res.json(hbsObject);
    })
})

router.post("/api/burgers", function(req,res){
    burger.insertOne(
        ["burger_name"], 
        [req.body.burger_name], 
        function(result){
        res.json({id: result.insertId})
    })
})








// Export routes for server.js to use.
module.exports = router;