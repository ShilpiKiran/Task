var express = require("express");
var router  = express.Router();

router.get("/", function(req, res){
    res.render("main/main"); 
 });

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error","please login first!");
    res.redirect("/login");
}

module.exports = router;