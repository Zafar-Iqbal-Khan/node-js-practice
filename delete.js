const dbConnect = require("./mongodb")

const dlt=async()=>{
        const db= await dbConnect()
        const result = await db.deleteOne({name:"hello"})
        console.log(result)
}

dlt()