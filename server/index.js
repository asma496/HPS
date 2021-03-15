const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:true}));
const dbConnect = require('./config/db.js');
var cors = require('cors')
// const userRoute  = require('./routes/api/users')
// const postRoute =  require('./routes/api/posts.js')
const app = express();
app.use(cors())
const dotenv = require('dotenv')
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000
///connect to db
dbConnect();
///to start app
app.listen(PORT, (req,res)=>{
console.log('server is running at', PORT)
})

///Routes
// app.use('/api/users', userRoute)
// app.use('/api/posts', postRoute)