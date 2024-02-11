const express=require('express')

const router=express.Router()

const getAttendencePage=require('../controlers/getAttendencePage')

const postAttendence=require('../controlers/postAttendence')

const getDayAttendence=require('../controlers/getDayAttendence')

router.get('/',getAttendencePage.getAttendencePage)

router.get('/dayAttendence',getDayAttendence.getDayAttendence)


router.post('/postAttendence',postAttendence.postAttendence)

module.exports=router;