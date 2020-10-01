var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();


router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };

        // console.log(hbsObject);
        

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

router.put("/api/burgers/:id", function (req, res){

    var condition = "id = " + req.params.id;
    // console.log("condition: " + condition);

    burger.updateOne(
        {devoured: req.body.devoured},
    condition, function(result){
        if (result.changedrows == 0){
            return res.status(404).end();
        } else {
            // console.log("successfully devoured")
            res.status(200).end();
        }

        
    }
    )
})








// Export routes for server.js to use.
module.exports = router;