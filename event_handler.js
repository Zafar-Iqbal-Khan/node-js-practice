const express =require("express")
const EventEmitter = require("events")

const app = express()

const event = new EventEmitter()

event.on("localApi",()=>{
    console.log("home api clicked")
})
event.on("aboutApi",()=>{
    console.log("about api clicked")
})
event.on("profileApi",()=>{
    console.log("profile api clicked")
})
app.get("/",(req,res)=>{
    res.send("local host")
    event.emit("localApi")
})

app.get("/about",(req,res)=>{
    res.send("about page")
    event.emit("aboutApi")
})


app.get("/profile",(req,res)=>{
    res.send("profile page")
    event.emit("profileApi")
})

app.listen(3000)