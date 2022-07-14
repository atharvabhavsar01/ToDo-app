const express= require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+ "/date.js")
const app = express();

let  items = [];
let workitems = [];
// let item = "";

 //using ejs template 
app.set('view engine', 'ejs');

//using body-parser
app.use(bodyParser.urlencoded({extended: true}));

//use static files
app.use("/public",express.static(__dirname+"/public"));

app.get("/", function (req,res){

        let day = date();
    
        // render the template
        res.render("list", {
            listTitle : day,
            newlistItems : items
        });
});

 // post request to add new item in the list extracted from the user input
 app.post("/",function(req,res){
    var item = req.body.newItem;
    if(req.body.list==="work"){
        workitems.push(item);
        res.redirect("/work");
    }else{
        // console.log(input);/
        items.push(item);
        res.redirect("/");
    }

     
});



//working route
app.get("/work",function(req,res){
        res.render("list", {listTitle:"Work List", newlistItems:workitems});
});

//post for work
app.post("/",function(req,res){
    let item= req.body.newItem;
    workitems.push(item);
    res.redirect("/");
    
})

//about page
app.get("/about",function(req,res){
    res.render("about");
});

// listening on localhost  
app.listen(5000,(req,res)=>{
    console.log("server is running successfully");
});






















// let day = today.getDay();
    // if(today.getDay()===6 || today.getDay()===0){
    //     day =today.getDay();
    //     res.render("list",{kindofDay:day});
    //     // res.send("You can enjoy your weekend!");
    // }else{
    //     day=today.getDay();
    //     res.render("list",{kindofDay:day});
    //     // res.send("fortunately you have to work today");
    // }
    // let days = ["sunday","monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    // let currentday = today.getDay();
    // let day="";
    // for(let i=0;i<7;i++){
    //     if(currentday=== i){
    //         day = days[i];
    //         // res.render("list",{kindofDay:day});
    //         console.log(currentday);
    //         console.log(day);
    //     }
    // }
    // res.render("list",{kindofDay:day}); 
