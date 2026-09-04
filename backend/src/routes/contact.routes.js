import { Router } from 'express';
import { submitContactMessage, listMessages } from '../controllers/contact.controller.js';
import { validateContactMessage } from '../validators/contact.validator.js';
import { requireAdminKey } from '../middleware/requireAdminKey.js';
import { submissionLimiter } from '../middleware/rateLimiter.js';
import { honeypotCheck } from '../middleware/honeypotCheck.js';

const router = Router();

router.post('/', submissionLimiter, honeypotCheck, validateContactMessage, submitContactMessage);
router.get('/', requireAdminKey, listMessages);

export default router;
