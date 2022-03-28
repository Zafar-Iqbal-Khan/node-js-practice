const mongoose= require("mongoose")


     mongoose.connect("mongodb://localhost:27017/department")
     const CscSchema = new mongoose.Schema({
        name: String,
        age:Number
    })
    const insertInBb = async ()=>{
    const CscModel =await new mongoose.model("csas",CscSchema);
    let data = new CscModel({name:"khan",age:3})
    let result= await data.save()
    console.log(result)
    }

    const updateInDb= async ()=>{
        const CscModel = await new mongoose.model('csas',CscSchema);
        const data =await CscModel.updateOne({name:"zafar"},{$set:{age:177,name:"iqbal"}})
        console.log(data)
    }
    const deleteInDb= async ()=>{
        const CscModel = await new mongoose.model('csas',CscSchema);
        const data =await CscModel.deleteOne({name:"khan"})
        console.log(data)
    }

    const readDb= async ()=>{
        const CscModel = await new mongoose.model('csas',CscSchema);
        const data =await CscModel.find()
        console.log(data)
    }
    const readInDb= async ()=>{
        const CscModel = await new mongoose.model('csas',CscSchema);
        const data =await CscModel.find({name:"iqbal"})
        console.log(data)
    }
    // readInDb()
// readDb()
// deleteInDb()
// updateInDb()
// insertInBb()