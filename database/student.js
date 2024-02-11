// const { database } = require('pg/lib/defaults');
const Sequelize=require('sequelize')


const database=process.env.database
const username=process.env.user

const password=process.env.password

const host=process.env.host


const sequelize=new Sequelize(database,username,password,{
    host:host,
    dialect:'mysql'
});


const Student=sequelize.define('student',{
    roll:{
        type:Sequelize.INTEGER,
    },
    Date:{
        type:Sequelize.DATE
    },
    Time:{
        type:Sequelize.TIME
    },
    status:{
        type:Sequelize.STRING
    },
    reason:{
        type:Sequelize.STRING,
        defaultValue:"none"
    }

},{
    freezeTableName:true
})

 Student.sync({alter:true})

module.exports={sequelize,Sequelize,Student};
