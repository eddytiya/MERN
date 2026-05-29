const empModel = require("../Model/empModel");

const showEmp=async(req,resp)=>{
    try{
    const data= await empModel.find()
    resp.json(data)
    }catch(err){
        console.log(err);
        
    }
}

const addEmp=async(req,resp)=>{
    try{
    const data= new empModel({
        name:req.body.name,
        salary:req.body.salary,
        dept:req.body.dept
    })
    const result=await data.save()
    resp.json(result)
    }catch(err){
        console.log(err);
        
    }
}


const updateEmp=async (req,resp)=>{
    try {
        const data = await empModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        resp.json(data)
        
    } catch (error) {
        console.log(error);
        
    }
}

const deleteEmp= async (req,resp)=>{
    try {   
        const data= await empModel.findByIdAndDelete(req.params.id)
        resp.json(data);
        
    } catch (error) {
        console.log(error);   
    }
}


const searchEmp=async (req,resp)=>{
    try {
        const data = await empModel.findById(req.params.id)
        resp.json(data);
    } catch (error) {
console.log(error);

        
    }
}
module.exports={showEmp,addEmp,updateEmp,deleteEmp,searchEmp}