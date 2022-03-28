const express = require("express")
const dbConnect = require("./mongodb")
const mongodb= require("mongodb")
const app = express()


app.get("/",async (req,res)=>{
    let data = await dbConnect()
    let result = await data.find({}).toArray()
    res.send(result)
})
app.use(express.json())
app.post("/",async (req,res)=>{
    
    let data = await dbConnect()
    let result = await data.insertOne(req.body)
    res.send(result.acknowledged)
    console.log(req.body)
})

app.put("/:name",async (req,res)=>{
    let data = await dbConnect()
    let result = await data.updateOne(
        {name:req.params.name},
        {$set:req.body}
        )
    res.send(result)

})

app.delete("/:id",async (req,res)=>{
    let data = await dbConnect()
    let result = await data.deleteOne({_id:mongodb.ObjectId(req.params.id)})
    res.send(result)
})

app.listen(2029)