// Setting up main router
import apiRoutes from './api/index.js';
import userRoutes from './api/userRoutes.js';
import homeRoutes from "./homeRoutes.js";
import express from "express";

const router = express.Router();

router.use('/', homeRoutes);
router.use('/', apiRoutes);
router.use('/users', userRoutes);

export default router;