const empModel = require("../Model/empModel");

//6
const addForm = (req,resp)=>{
    resp.render("add")
}

const showEmp=async(req,resp)=>{
    try{
    const data= await empModel.find()
    //4
    resp.render("show",{data})
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
    await data.save();
    res.redirect("/showEmp");
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