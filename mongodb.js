const {MongoClient} = require("mongodb")

const url= 'mongodb://localhost:27017'

const client =new MongoClient(url);

async function getConnection(){
    let result =await client.connect();
   let db=  result.db("department")
   return collection = db.collection("csc")
//    let d= await collection.find({}).toArray()
//    console.log(d)

}

module.exports=getConnection