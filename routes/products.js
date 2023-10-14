var express = require('express');
var router = express.Router();
var productsController = require('../controllers/products.controller')

router
    .get('/', productsController.find)
    .post('/', productsController.save)
    .delete('/',productsController.delete);


//get all products
router.get('/', productsController.find)
//get by id
router.get('/:_id', productsController.find)
//add new product
router.post('/:_id', productsController.save)
//update product by id
router.put('/:_id',productsController.update)
//delete product by id
router.delete('/:_id', productsController.delete)
//delete all product
router.delete('/', productsController.deleteAll)
//get by product name that starts with kw
router.get('/:name?keyword=kw', productsController.findByName)

module.exports = router;
