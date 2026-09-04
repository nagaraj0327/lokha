import { Router } from 'express';
import { submitApplication, listApplications } from '../controllers/apply.controller.js';
import { validateApplication } from '../validators/apply.validator.js';
import { requireAdminKey } from '../middleware/requireAdminKey.js';
import { submissionLimiter } from '../middleware/rateLimiter.js';
import { honeypotCheck } from '../middleware/honeypotCheck.js';
import { uploadDocuments, attachUploadedFilePaths } from '../middleware/upload.js';

const router = Router();

router.post(
  '/',
  submissionLimiter,
  uploadDocuments,
  attachUploadedFilePaths,
  honeypotCheck,
  validateApplication,
  submitApplication
);

router.get('/', requireAdminKey, listApplications);

export default router;
