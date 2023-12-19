// Setting the file path for the all the routes
import categoryRoutes from './categoryRoutes.js';
import developerRoutes from './developerRoutes.js';
import platformRoutes from './platformRoutes.js';
import gameRoutes from './gameRoutes.js';
import express from "express";

const router = express.Router();

router.use('/categories', categoryRoutes);
router.use('/developers', developerRoutes);
router.use('/platforms',platformRoutes);
router.use('/games', gameRoutes);

export default router;