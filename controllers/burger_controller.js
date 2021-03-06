var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();


router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };

        // console.log(hbsObject);


        res.render("index", hbsObject);
    })
})

router.put("/api/burgers/:id", function (req, res) {

    var condition = "id = " + req.params.id;
    console.log("condition: " + condition);

    burger.updateOne(
        {devoured: req.body.devoured},
        condition, function (result) {
            if (result.changedRows === 0) {

                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    )
})

router.post("/api/burgers", function (req, res) {
    burger.insertOne(
        ["burger_name"],
        [req.body.burger_name],
        function (result) {
            res.json({ id: result.insertId })
        })
})

router.get("*", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };

        // console.log(hbsObject);


        res.render("index", hbsObject);
    })
})








// Export routes for server.js to use.
module.exports = router;