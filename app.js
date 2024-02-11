require('dotenv').config()

const express=require('express');

const app=express();

const router=require('./routes/route')

app.use(express.urlencoded({extended:false}));


app.set('view engine','ejs');
app.set('views','views')

app.use(router)

const port=process.env.port

app.listen(port);