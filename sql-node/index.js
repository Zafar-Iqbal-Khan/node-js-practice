const mysql = require("mysql")
const express = require("express")
const app = express()

var conn= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"e-comm"
})

conn.connect(function(err){
    if(err) throw err;
    console.log('connected')

})

app.use(express.json())
app.get("/", async (req,res)=>{
    conn.query("SELECT * FROM `products` WHERE `name` LIKE 'zafar' ", function (err,result){
        if(err) throw err;
        res.send(result)
    })
})


app.post("/",async (req,res)=>{
    conn.query("INSERT INTO `products` set?",req.body ,function (err,result){
            if(err) throw err
            res.send(result)
        })
})


app.delete("/:age",(req,res)=>{
    conn.query("DELETE FROM products WHERE age = " + req.params.age,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

app.put("/", (req,res)=>{
    conn.query('UPDATE products SET name = ?, age = ?, phone = ? WHERE name = ?', [req.body.name, req.body.age, req.body.phone, req.body.name], function (error, results, fields) {
        if (error) throw error;
        console.log(results)
        res.send(results)
      });
})

app.listen(3030)


// conn.query("SELECT * FROM `products` WHERE `name` LIKE 'zafar' AND `price` = 234", function (err,result){
//     if(err) throw err;
//     console.log(result)
// })


// conn.query("INSERT INTO `products` (`name`, `price`, `phone`, `age`) VALUES ('iqbal', '222', '12345678', '1')",function (err,result){
//     if(err) throw err
//     console.log(result)
// })

// conn.query("DELETE FROM products WHERE name = 'khan'",function (err,result){
//     if(err) throw err
//     console.log(result)
// })

// conn.query('UPDATE products SET name = ?, age = ?, phone = ? WHERE name = ?', ['avc', 23, 'dkdks;d', 'zafar'], function (error, results, fields) {
//     if (error) throw error;
//     console.log(results)
//     // ...
//   });
