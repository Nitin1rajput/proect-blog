const express = require('express');
const bodyParser = require('body-parser');
const { render } = require('ejs');
require('dotenv').config();
const fileUpload = require('express-fileupload');



const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/public',express.static('public'));
app.use(fileUpload());

let title = "";



app.get("/", (req,res)=>{
    res.render('index', {})
})

app.post("/", (req,res)=>{
    title = req.body.title;
    const userPass = req.body.pass;
    
    if(process.env.PASS===userPass){
        res.redirect("/main");
    }else{
        
        res.redirect("/tryagain")
    }
        
        
});


app.get("/tryagain",(req,res)=>{
    res.render('tryagain',{});
});
app.post("/tryagain",(req,res)=>{
    res.redirect("/");
});

app.get("/new",(req,res)=>{

   
   
});
app.post("/new", (req,res)=>{
   

});

app.get("/main", (req,res)=>{
   
    res.render('main',{title:title,row:rows});
   
});

app.listen(3000,()=>{console.log('Running at port 3000');})