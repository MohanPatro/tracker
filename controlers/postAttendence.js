
const {sequelize,Sequelize,Student}=require('../database/student')


exports.postAttendence=async (req,res)=>{
    console.log(req.body);
    await Student.create(req.body);

    res.redirect('/')

}