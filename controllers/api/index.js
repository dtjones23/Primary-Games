// Setting the file path for the all the routes
import categoryRoutes from './categoryRoutes.js';
import developerRoutes from './developerRoutes.js';
import platformRoutes from './platformRoutes.js';
import gameRoutes from './gameRoutes.js';
import express from "express";
import userRoutes from "./userRoutes.js";

const router = express.Router();

router.use('/', categoryRoutes);
router.use('/', developerRoutes);
router.use('/', platformRoutes);
router.use('/', gameRoutes);
router.use('/users', userRoutes);

export default router;