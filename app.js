const getConnection=require("./mongodb")
// getConnection().then((res)=>{
//     res.find({}).toArray().then((data)=>{
//         console.log(data)
//     })
// })



const getData=async ()=>{
    let data= await getConnection()
    finaldata= await data.find({name:"khan"}).toArray()
    console.log(finaldata)
   
}

getData()