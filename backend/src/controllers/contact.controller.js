import { MessageModel } from '../models/Message.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { notifyNewMessage } from '../services/notification.service.js';

export const submitContactMessage = asyncHandler(async (req, res) => {
  const saved = await MessageModel.create(req.body);
  notifyNewMessage(saved).catch(() => {});
  res.status(201).json({ ok: true, message: saved });
});

export const listMessages = asyncHandler(async (_req, res) => {
  res.json({ ok: true, messages: await MessageModel.findAll() });
});
