import { createRepository } from '../services/repository.service.js';

const repo = createRepository('messages', 'messages.json');

export const MessageModel = {
  create(data) {
    return repo.create(data);
  },
  findAll() {
    return repo.findAll();
  },
};
