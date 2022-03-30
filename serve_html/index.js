const port = 3000;
const express = require("express");
const path = require("path");
const routes = require("./router.js");
const app = express();


app.set("views", path.join(__dirname,"html"));
app.use(express.static(path.join(__dirname,"/public")));
//app.set(express.static(path.join(__dirname,"public/images")));
app.use(express.static(path.join(__dirname,"node_modules")));

//app.set("view engine", "ejs")

app.use("/",routes)

app.listen(port, () => {
    console.log("im listening")
})
/*

indexdir = ("./views/");
app

.get("/", (req, res) => {
    res.sendFile(path.join(indexdir + "index.html"))
})


app.get("/", function(req,res) {
    res.sendFile(path.join(indexdir + "index.html"))
});

app.get("/contact", function(req,res) {
    res.sendFile(path.join(indexdir + "contact.html"))
});

app.get("/books", function(req,res) {
    res.sendFile(path.join(indexdir + "books.html"))
});

app.get("/survay", function(req,res) {
    res.sendFile(path.join(indexdir + "survay.html"))
});*/