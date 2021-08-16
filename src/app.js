const express = require("express");
const path = require("path");
 require("./db/conn");

const User = require("./models/usermessage");

const hbs = require("hbs");
const { registerPartial } = require("hbs");
const connectDB = require("./db/conn");
const body = require("body-parser");
const app = express();
const port = process.env.PORT|| 3000;
const staticpath = path.join(__dirname,"../public"); 
const templatepath = path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname,"../templates/partials");

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use(express.static(staticpath));
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.set("view engine","hbs");

app.set("views",templatepath);
hbs.registerPartials(partialpath);
app.get("/",(req,res)=>{
    res.render("index.hbs");
})

app.get("/contact",(req,res)=>{
  res.render("contact.hbs");
})


app.post("/contact",async(req,res)=>{
    try{
        //  res.send(req.body)
        const userData = new User(req.body);
        // console.log(userData);
        await userData.save();
        console.log(userData);
    }
    catch(error){
       res.status(400).send(error);
       console.log(error);
    }
    res.status(201).render("index.hbs");
})

app.listen(port,()=>{
  console.log(`hi kashish `);
});

