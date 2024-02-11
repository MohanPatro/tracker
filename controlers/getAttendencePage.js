const {sequelize,Sequelize,Student}=require('../database/student')


exports.getAttendencePage=async (req,res)=>{
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; 
    var year = currentDate.getFullYear();
    var formattedDate = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);

    const absent=await Student.findAll({where:{Date:new Date(formattedDate),status:'absent'}})
    const present=await Student.findAll({where:{Date:new Date(formattedDate),status:'present'}})

    res.render('index',{absent:absent,present:present});
}