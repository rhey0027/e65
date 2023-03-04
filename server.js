const express=require('express');
const app=express();
//--serve static files from public
app.use(express.static("public"));
//--configure express to pass data from
app.use(express.urlencoded({extended: true}));
//-home
app.get("/",(req,res)=>{
      //console.log(__dirname);
      //res.send("homepage");
      res.sendFile(__dirname + "/public/pages/index.html");
});
app.get("/about",(req,res)=>{
      //console.log(__dirname);
      //res.send("homepage");
      res.sendFile(__dirname + "/public/pages/about.html");
});
app.get("/addPost",(req,res)=>{
      res.sendFile(__dirname + "/public/pages/addPost.html");
});
app.post("/addPost",(req,res)=>{
      res.send(req.body)
})
app.listen(3000,()=>{
      console.log("Server running at port 3000");
});