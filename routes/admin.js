// const path = require('path');
// const express = require('express');
// const rootDir = require('../util/path');
// const router = express.Router();
// const products = [];

// // /admin/add-product => GET
// router.get('/add-product', (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
// });

// // /admin/add-product => POST
// router.post('/add-product', (req, res, next) => {
//   products.push({ title: req.body.title });
//   res.redirect('/');
// });

// exports.routes = router;
// exports.products = products;


//


// const path = require('path');
// const express = require('express');
// const rootDir = require('../util/path');
// const router = express.Router();

// const products = [];

// // /admin/add-product => GET
// router.get('/add-product', (req, res, next) => {
//   res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true });
// });

// // /admin/add-product => POST
// router.post('/add-product', (req, res, next) => {
  
//   products.push({ title: req.body.title });
  
//   res.redirect('/');
// });

// exports.routes = router;
// exports.products = products;

const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
