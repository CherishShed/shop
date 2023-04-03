const items = require("./public/data");
const cat = [{ name: "Furniture", background: "https://media.istockphoto.com/id/1415799772/photo/home-interior-with-vintage-furniture.jpg?s=612x612&w=0&k=20&c=E5aUyAFo5_xjHcdk0nEZGVDipOkYEtyXQmJBskUbqo8=" }, { name: "Sports", background: "https://media.istockphoto.com/id/1136317339/photo/sports-equipment-on-floor.jpg?s=612x612&w=0&k=20&c=-aI8u_Se89IC-HJZYH724ei5z-bIcSvRW6qUwyMtRyE=" }, { name: "Grocery", background: "https://media.istockphoto.com/id/1412723839/photo/online-buying-and-delivery-concept.jpg?s=612x612&w=0&k=20&c=GoPboEBhcm4AEsVPI7kgcD3lYIUABarVnp6_otsTHcY=" }, { name: "Accesories", background: "https://media.istockphoto.com/id/1331089160/photo/different-elegant-bijouterie-and-plate-on-white-marble-table-flat-lay.jpg?s=612x612&w=0&k=20&c=3WOGBkSwU9hfJD-x43wMEBITuc0NrUD6E8x1l0BYQOA=" }, { name: "Electronics", background: "https://media.istockphoto.com/id/1335669510/vector/vector-isometric-devices-set.jpg?s=612x612&w=0&k=20&c=DBjsHSWGxGDkKrWTFus2CvvCDUHhksziuj8cN4FZKwo=" }, { name: "Clothing", background: "https://media.istockphoto.com/id/1396160859/photo/baby-and-child-clothes-toys-in-box-second-hand-apparel-idea-circular-fashion-donation-charity.jpg?s=612x612&w=0&k=20&c=cjKWIeNfmEPVdQUBABIWSdGAvm5SUoEdQYB02XOI35c=" }]
const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/shop", (req, res) => {
    res.render("index", { root: `${__dirname}/views`, items, title: "ShediQuery", style: "styles.css" })
})

app.get("/", (req, res) => {
    res.render("home", { root: `${__dirname}/views`, items, title: "ShediQuery", cat, style: "home.css" })
})

app.listen(8081, () => {
    console.log("server started")
    // items.forEach(item => {
    //     console.log(item);

    // })
})
