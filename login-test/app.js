var express = require('express')

var app =express()

var path = require('path')

require('dotenv').config()

var ejs = require('ejs')

 ,static = require('serve-static')

var bodyParser = require('body-parser')

var loginRouter = require('./router/login.js')





app.set('views', path.join(__dirname,'views'))

app.set('view engine', 'ejs')



app.use(static(path.join(__dirname,'public')))



//body-parser을 이용해 application/x-www-form-urlencoded 파싱

app.use(bodyParser.urlencoded({extends:false}))



app.use('/', loginRouter);

// app.use((req, res)=>{

//     var paramId = req.body.id || req.query.id

//     var paramPs = req.body.pass || req.query.pass

//     res.writeHead('200', {'Content-Type':'text/html;charset=utf8'})

//     res.write('<h1>서버가 응답한 결과 입니다.</h1>')

//     res.write('<div><p> Param Id :'+paramId+'</p></div>')

//     res.write('<div><p> Param PassWord :'+paramPs+'</p></div>')

//     res.end();

// })



var port = process.env.PORT || 3000;

app.listen(port, ()=>{

    console.log(`Server is Starting at http://localhost:${port}`)

})