var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name:"Pikachu", image:"https://vignette.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/150?cb=20140328192412"},
    {name:"Bulbasaur", image:"https://vignette.wikia.nocookie.net/pokemon/images/2/21/001Bulbasaur.png/revision/latest/scale-to-width-down/150?cb=20140328190757"},
    {name:"Charmander", image:"https://vignette.wikia.nocookie.net/pokemon/images/8/87/004CharmanderFRLG.png/revision/latest/scale-to-width-down/132?cb=20100305223926"},
    {name:"Squirtle", image:"https://vignette.wikia.nocookie.net/pokemon/images/3/39/007Squirtle.png/revision/latest/scale-to-width-down/150?cb=20140328191525"}
];

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs") ;
});

app.post("/campgrounds", function(req, res) {
    // get data from form and add to camp array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image};
    campgrounds.push(newCampground);
    // redirect to campgrounds
    res.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp server is up!");
});