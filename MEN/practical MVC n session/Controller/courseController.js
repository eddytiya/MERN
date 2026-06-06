const courseModel = require("../Model/courseModel");


//show
const showCourse = async(req,resp)=>{
    try {
        const data = await courseModel.find();

        resp.render("dashboard",{
            user:req.session.name,
            data
        })
    } catch (error) {
        console.log(error);
            
    }
}   

//add 

const addCourse = async(req,resp)=>{
    try {
        await courseModel.create({
            cname:req.body.cname,
            tname:req.body.tname,
            duration:req.body.duration,
            fees:req.body.fees
        })

        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);
        
        
    }
}


const editForm = async(req,resp)=>{
    try {
        const data=await courseModel.findById(req.params.id);
        resp.render("edit",{data})
    } catch (error) {
        console.log(error);
        
        
    }
}


const updateCourse=async(req,resp)=>{
    try {
        await courseModel.findByIdAndUpdate(req.params.id,
            {
            cname:req.body.cname,
            tname:req.body.tname,
            duration:req.body.duration,
            fees:req.body.fees
            }
        );

        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);
        
        
    }
}

const deleteCourse = async (req, resp) => {
    try {

        await courseModel.findByIdAndDelete(req.params.id);

        resp.redirect("/dashboard");

    } catch (error) {
        console.log(error);
    }
};

const addForm=(req,resp)=>{
    resp.render("addCourse",{
        user:req.session.name
    });
};

module.exports={
    showCourse,
    addCourse,
    editForm,
    addForm,
    updateCourse,
    deleteCourse
}