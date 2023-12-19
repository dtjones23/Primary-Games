const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    //const productData = await Product.findAll();
    //const products = productData.map((product) => product.get({ plain: true }));
    //DO THE ABOVE FOR YOUR GAME DATA OR USER DATA IN ORDER TO SHOW WITH HANDLEBARS

    res.render('homepage'
    //, {products: products}
);
  } catch (err) {
    res.status(500).json(err);
  }
});