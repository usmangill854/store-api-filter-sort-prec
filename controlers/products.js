

const getAllProductsStatic = async (req,res) => {
    throw new Error('testing async error')
    res.status(200).json({msg:'product static testing'})
}
const getAllProducts = async (req,res) => {
    res.status(200).json({msg:'product testing'})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}