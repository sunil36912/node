const express= require('express');
const path=require('path');
const app=express();

const publicpath=path.join(__dirname,'public');
//console.log(publicpath);
//app.use(express.static(publicpath));
app.get('',(req,resp)=>{
resp.sendFile(`${publicpath}/about.html`)
})
app.get('*',(req,resp)=>{
  resp.sendFile(`${publicpath}/404.html`)
  })

    app.listen(5000);
