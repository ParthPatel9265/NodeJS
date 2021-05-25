// const path = require('path');

// const express = require('express');

// const rootDir = require('../util/path');
// const adminData = require('./admin');

// const router = express.Router();

// router.get('/', (req, res, next) => {
//   console.log('shop.js', adminData.products);
//   res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// });

// module.exports = router;



//


// const path = require('path');

// const express = require('express');

// const rootDir = require('../util/path');
// const adminData = require('./admin');

// const router = express.Router();

// router.get('/', (req, res, next) => {
//   const products = adminData.products;
//   console.log(products);
//   res.render('shop', {
//     prods: products,
//     pageTitle: 'Shop',
//     path: '/',
//     hasProducts: products.length > 0,
//     activeShop: true,
//     productCSS: true
//   });
// });

// module.exports = router;


//const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
