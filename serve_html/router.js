const express = require("express");
app = express();
path = require("path");
router = express.Router();

//app.use(express.static("views"))
app.use(express.static(__dirname+"public"))
app.use(express.static(__dirname+"css"))


router.get("/home", function(req,res) {
    res.sendFile(path.join(__dirname + "/views/index.html"))
});
router.get("/books", function(req,res) {
    res.sendFile(path.join(__dirname + "/views/books.html"))
});
router.get("/contact", function(req,res) {
    res.sendFile(path.join(__dirname + "/views/contact.html"))
});
router.get("/survay", function(req,res) {
    res.sendFile(path.join(__dirname + "/views/survay.html"))
});
router.get("/book1", function(req,res) {
    res.sendFile(path.join(__dirname + "/views/book1.html"))
});
router.get("/book2", function(req,res) {
    res.sendFile(path.join(__dirname + "/views/book2.html"))
});
router.get("/book3", function(req,res) {
    res.sendFile(path.join(__dirname + "/views/book3.html"))
});
module.exports = router;

app.use("/",router);