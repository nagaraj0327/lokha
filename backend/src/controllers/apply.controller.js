import { ApplicationModel } from '../models/Application.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { notifyNewApplication } from '../services/notification.service.js';

export const submitApplication = asyncHandler(async (req, res) => {
  const saved = await ApplicationModel.create(req.body);
  notifyNewApplication(saved).catch(() => {});
  res.status(201).json({ ok: true, application: saved });
});

export const listApplications = asyncHandler(async (_req, res) => {
  res.json({ ok: true, applications: await ApplicationModel.findAll() });
});
