// Setting the file path for the all the routes
const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const developerRoutes = require('./developerRoutes');
const platformRoutes = require('./platformRoutes');
const gameRoutes = require('./gameRoutes');

router.use('/categories', categoryRoutes);
router.use('/developers', developerRoutes);
router.use('/platforms',platformRoutes);
router.use('/games', gameRoutes);

module.exports = router;