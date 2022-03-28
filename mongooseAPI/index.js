const express = require("express");
const { process_params } = require("express/lib/router");
require("./config");
const civil = require("./civil");

const app = express();
app.use(express.json())
app.post("/",(req,res)=>{

   insertInBb(req,res);
    res.send("done");

})

app.get("/",async (req,res)=>{
    let data= await civil.find()
    res.send(data)
})

app.put("/",async (req,res)=>{
    let data = await civil.updateOne({name:req.body.name},{$set:req.body})
    res.send(data)
    console.log(data)
})

app.delete("/", async (req,res)=>{
    let data = await civil.deleteOne({name:req.body.name})
    res.send(data)
    console.log(data)
})

// search all in db from one collection 
app.get("/search/:key",async (req,res)=>{
    let data = await civil.find(
        {
        "$or":[
            {"name":{$regex:req.params.key}}, 
            {"stream":{$regex:req.params.key}}
            // you can add more 
        ]
    }
    )
    res.send(data)
})


const insertInBb = async (req,_)=>{
    let data = new civil(req.body)
    let result= await data.save()
    console.log(result)
    }

app.listen(2020)