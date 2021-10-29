// require('dotenv').config()
//async errors

const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./db/connect')
const app= express()
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')


const port = 4000
//middleware
app.use(express.json())

//routes
app.get('/',(req,res) => {
    res.send('<h1>Home </h1>')
}) 
app.use('/api/v1/products',productsRouter)

app.use(notFoundMiddleware)
app.use(errorMiddleware)
//dbsetup

const dbconnect =async () => {   
    try {
        await connectDB('mongodb+srv://usman:1234@cluster0.wuqqy.mongodb.net/store-api-filter?retryWrites=true&w=majority')
     
    } catch (error) {
        console.log(error)
    }
        
}


app.listen(port,(err)=>{
    console.log( `server is listning on port ${port}` )
})
dbconnect()
