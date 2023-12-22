import {monitorEventLoopDelay} from "node:perf_hooks";
import express from "express";
import Game from "../models/Game.js";

const router = express.Router();

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

router.get('/checkout/:id', async (req, res) => {
  try {
    const gameData = await Game.findByPk(req.params.id);
    const game = gameData.get({ plain: true });

    res.render('checkout', { game });
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;