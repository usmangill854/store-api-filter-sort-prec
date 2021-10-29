const getAllProductsStatic = async (req,res) => {
    res.status(200).json({msg:'product static testing'})
}
const getAllProducts = async (req,res) => {
    res.status(200).json({msg:'product testing'})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}