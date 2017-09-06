var express = require('express');
var burgers = require('./../models/burgers.js');
var router = express.Router();

// This is the file where we make our routers!

//Here is where we write the get function for all the data:
// hbsObject stands for "Handlebars Object"
router.get('/', function(req,res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject)
        res.render("index", hbsObject)
    });
    
})

var router;

module.exports = router;