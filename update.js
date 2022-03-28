const dbConnect= require("./mongodb")

const upd=async ()=>{
    const db= await dbConnect()
    const result = await db.updateOne({"name":'iqbal',"home":"delhi"},{$set:{age:'10',house:"london"}})
    console.log(result)
}


upd()