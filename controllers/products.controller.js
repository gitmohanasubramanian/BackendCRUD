let ProductsModel = require('../models/products.model');

//get by id and get all products
/*module.exports.find = async (req, res) => {
    if (req.params.name == null){
        let result = await ProductModel.find(req.params);
        res.json(result);
    } else {
        const product = req.query.keyword;
        let result = await ProductModel.find({name:{$regex: product, $options:'i'}});
        res.json(result);
    } 
}*/
//get by id and get all products
module.exports.find = async (req, res) => {
    let result = await ProductsModel.find(req.params);
        res.json(result);
}
//add new product
module.exports.save = async (req, res) => {
    const product = new ProductsModel(req.body);
    let result = await product.save();
    res.json(result);
}
//update product by id
module.exports.update = async (req, res) => {
    const product = new ProductsModel(req.body);
    let result = await ProductsModel.findByIdAndUpdate(req.params._id, req.body,{new:true});
    res.json(result);
}
//delete by id
module.exports.delete = async (req, res) => {
    let result = await ProductsModel.findByIdAndDelete(req.params);
    res.json(result);
}
//delete all
module.exports.deleteAll = async (req, res) => {
    let result = await ProductsModel.deleteMany({});
    res.json(result);
}
//find all products which name contains 'kw'
module.exports.findByName = async (req, res) => {
    //const product = req.query.keyword;
    //let result = await ProductsModel.find({name:{$regex: keyword, $options:'i'}});
    //res.json(result);
    const { name } = req.query;
    if (name && name.toLowerCase() === 'kw') {
    const filteredProducts = ProductsModel.filter(products =>
      products.name.toLowerCase().startsWith(name.toLowerCase())
    );
    res.json(filteredProducts);
    } else {
     res.status(400).json({ error: 'Invalid query parameter.' });
    }
}