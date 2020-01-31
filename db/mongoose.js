const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/instagram-api' //url with database name

mongoose.connect(connectionURL, {
     useNewUrlParser:true,
     useCreateIndex: true,
     findAndModify: false 
     // just to avoid the depreciation warning in the console
})