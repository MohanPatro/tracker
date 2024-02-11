const {sequelize,Sequelize,Student}=require('../database/student')

exports.getDayAttendence=async (req,res)=>{
    const date=req.query.date;
    const absent=await Student.findAll({where:{Date:new Date(date),status:'absent'}});
    const present=await Student.findAll({where:{Date:new Date(date),status:'present'}});
    res.json({present:present,absent:absent});
}