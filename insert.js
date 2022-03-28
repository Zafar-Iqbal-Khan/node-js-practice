const dbConnect= require("./mongodb")


const insert=async ()=>{
    let db=await dbConnect()
    const result =await  db.insert(
        [
            {name:'abc', age:"443",phone:"489j",home:"kmrs"   },
            {name:'def', age:"430",phone:"djsk",home:"kmrs"   }
    ]
    )
    console.log(result)
}

insert()