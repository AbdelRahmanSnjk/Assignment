import { Router } from 'express';
import { getRandomQuote } from '../controllers/quoteController.js';

const router = Router();

// Define the routes
router.get('/generate', getRandomQuote);

export default router;