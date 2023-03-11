const express= require('express');
const app=express();
app.get('',(req,res)=>{
res.send('<h1>This is my Home Page</h1>');
});
app.get('/about',(req,res)=>{
  res.send('<h1>This is my About Page</h1>');
  });
  app.get('/help',(req,res)=>{
    console.log(req.query.name);
    res.send(`<h1>This is my Help Page</h1>`+req.query.name);
    });

    app.get('/contact',(req,res)=>{
      //res.send('<h1>This is my Contact Page</h1>');
     
      res.send(`
      <input type="text" placeholder="Enter Name"
   /><button type="button"  >Click Me</button>
   `);
      });

    app.listen(5000);
