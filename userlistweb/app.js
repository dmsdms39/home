var express = require(`express`);
var app = express();
var path = require(`path`);
var bodyParser = require('body-parser');
require('dotenv').config();

var listRouter = require('./router/index')

//셋팅
app.set(`views`,path.join(__dirname,`views`));
app.set(`view engine`,`ejs`);

app.set(`html`,require(`ejs`).renderFile);

//미들웨어
app.use(express.static(path.join(__dirname,`public`)));
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', listRouter)
//listen
var serverPort = process.env.SERVER_PORT || 3000;
app.listen(serverPort,()=>{
    console.log(`Server is starting at http://localhost:${serverPort}`);
});
