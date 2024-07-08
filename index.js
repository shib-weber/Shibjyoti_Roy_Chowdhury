const express=require('express');
const mongoose=require('mongoose');
const http=require('http');
const{Server}=require('socket.io');
const bodyParser =require("body-parser");
const path = require("path");
const {router}=require('./router/user')
require('dotenv').config();

const PORT= process.env.PORT || 8080;
const app=express();
const server=http.createServer(app);
const io=new Server(server);

router.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.json())
app.set('view engine','ejs')
app.set('views',path.resolve('./views'))

mongoose.connect('mongodb://127.0.0.1:27017/feedback').then(console.log("database connected"))

app.use(router)

server.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})