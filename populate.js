 

const connectDB = require('./db/connect')
const Product = require('./models/product')

const jsonProduct = require('./products.json')

const start = async () => {
    try {
        // mongodb+srv://<username>:<password>@cluster0.wuqqy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
        await connectDB('mongodb+srv://usman:1234@cluster0.wuqqy.mongodb.net/store-api-filter?retryWrites=true&w=majority')
        await Product.deleteMany()
        await Product.create(jsonProduct)
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()