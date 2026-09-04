import { Router } from 'express';
import applyRoutes from './apply.routes.js';
import contactRoutes from './contact.routes.js';

const router = Router();

router.get('/health', (_req, res) => res.json({ ok: true }));
router.use('/apply', applyRoutes);
router.use('/contact', contactRoutes);

export default router;
