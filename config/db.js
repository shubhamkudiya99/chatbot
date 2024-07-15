const mongoose = require("mongoose");

const mongoUrl = 'mongodb://localhost:27017/mydb';

mongoose.connect(mongoUrl)
const db = mongoose.connection;

db.on('connected', () =>{
    console.log('Connected to the MongoDB Server');
})

db.on('error', (err) => {
    console.error('MongoDB connection error : ', err);
})

db.on('disconnected', () =>{
    console.log('MongoDB Disconnected');
})

module.exports.db =  {db};