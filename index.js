const {faker} = require('@faker-js/faker');
const mysql = require('mysql2');
const methodOverride = require('method-override');



const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true})); //to parse form data
app.use(methodOverride("_method"));

const path = require('path');

const port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  database : 'MySQL_Node_Express',
  password : 'harika'
});


// let data = [];

// let getUser = () =>{
//   return [
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password()
//   ]
// }


// for(let i=0;i<100;i++){
//   data.push(getUser());
// }

// let q = "INSERT INTO users(id,username,email,password) VALUES ?";

// try{
//   connection.query(q,[data],(e,res)=>{
//     if(e) throw e;
//     console.log(res);
//   });
// }catch(e){
//   console.log(e);
// }


//HOME Route
app.get("/",(req,res)=>{
  let q = `SELECT COUNT(*) FROM users`;
  try{
    connection.query(q,(error,result)=>{
      if(error) throw error;
      console.log(result);
      let count = result[0]["COUNT(*)"];
      res.render("home.ejs",{count});
    });
  }catch(error){
    console.log(error);
    res.send("_________ERROR_________");
  }
});

//SHOW Route : Displays table of users
app.get("/showUsers",(req,res)=>{
  let q = `SELECT * FROM users`;

  try{
    connection.query(q,(error,users)=>{
      if(error) throw error;
      res.render("showUsers.ejs",{users});
    });
  }catch(error){
    console.log(error);
    res.send("____ERROR____");
  }
});


//EDIT users 
app.get("/users/:id/edit",(req,res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM users WHERE id = '${id}'`;
  try{
    connection.query(q,(error,result)=>{
      if(error) throw error;
      let user = result[0]
      console.log(result);
      res.render("edit.ejs",{user});
    });
  }catch(error){
    console.log(error);
    res.send("___ERROR___");
  }
});

//UPDATE (DB) ROUTE
app.patch("/users/:id",(req,res)=>{
  let {id} = req.params;

  // password: formPass means “take the value of req.body.password and assign it to a new variable called formPass.”
  let {password : formPass, username : newUserName} = req.body;

//   req.body.password  --->  formPass
// req.body.username  --->  newUserName

  let q = `SELECT * FROM users WHERE id = '${id}'`;

  try{
    connection.query(q,(error,result)=>{
      if(error) throw error;
      let user = result[0];
      if(formPass != user.password){
        res.send("WRONG PASSWORD");
      }else{
        let q2 = `UPDATE users SET username = '${newUserName}' where id = '${id}'`
        try{
          connection.query(q2,(error,result)=>{
          if(error) throw error;
          console.log(result);
          res.redirect("/showUsers");
    });
  }catch(error){
    console.log(error);
    res.send("___ERROR___");
  }
      }
      console.log(result);
    });
  }catch(error){
    console.log(error);
    res.send("___ERROR___");
  }
});

app.listen(port,()=>{
  console.log(`Server is listening to ${port}`);
});