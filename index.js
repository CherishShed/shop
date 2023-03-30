const items = require("./public/data");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { root: `${__dirname}/views`, items })
})

app.listen(8081, () => {
    console.log("server started")
    // items.forEach(item => {
    //     console.log(item);

    // })
})
