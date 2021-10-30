
const Product = require('../models/product')


const getAllProductsStatic = async (req,res) => {
    
    const search ='albany table'
    const products = await Product.find({

        name :{ $regex: search,$options: 'i'}
        // featured:true,
        // name:'vase table'
    })
    res.status(200).json({products,nbHits:products.length})
}
const getAllProducts = async (req,res) => { 
 
     const {featured ,name,company} = req.query

    const queryObject = {}
    if(featured){ 
        queryObject.featured = featured === 'true'?true:false
 
    }
    if(company){
        queryObject.company = company
    }
    console.log( queryObject )
    if(name){
        queryObject.name = {$regex:name,$options:'i'}
    }


    const products =await Product.find(queryObject)

    res.status(200).json({products,nbHits:products.length})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
} 