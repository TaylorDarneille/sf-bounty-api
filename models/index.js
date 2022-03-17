// set up the mongoose connection
const mongoose = require('mongoose')

// Mongo connection string
mongoose.connect('mongodb://127.0.0.1/springforwardpractice')

// shortcute to the db
const db = mongoose.connection

// event listeners
db.once('open', ()=>{
    console.log(`Connected to mongodb at ${db.host}:${db.port}`)
})

db.on('error', (err)=>{
    console.error(`Database error: \n ${err}`)
})

module.exports.Bounty = require('./bounty')