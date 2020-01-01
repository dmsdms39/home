var express = require('express')

var router = express.Router();



router.get('/',(req , res)=>{

    res.render('login')

})



router.route('/process/login').post((req , res)=>{

    console.log("/process/login 처리함")

    paramId = req.body.id || req.query.id

    paramPs = req.body.pass || req.query.pass



    res.render('loged', {dataId:paramId , dataPs:paramPs})

    // res.writeHead('200', {'Content-Type':'text/html;charset=utf8'})

    // res.write('<h1>서버가 응답한 결과 입니다.</h1>')

    // res.write('<div><p> Param Id :'+paramId+'</p></div>')

    // res.write('<div><p> Param PassWord :'+paramPs+'</p></div>')

    // res.end();

})



module.exports = router;