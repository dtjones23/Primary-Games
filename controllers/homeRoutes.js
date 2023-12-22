// controllers/homeRoutes.js
import express from "express";
import Game from "../models/Game.js";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        if (req.session.loggedIn) {
        res.redirect('/homepage');
        } else {
            res.render('login');
        }
    } catch (err) {
        console.error('Error rendering login page', err);
        res.status(500).json(err);
    }
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/homepage', (req, res) => {
  res.render('homepage');
});

router.get('/mygames', (req, res) => {
    res.render('mygames');
  });
  

router.get('/checkout', (req, res) => {
    res.render('checkout');
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
