import { createRepository } from '../services/repository.service.js';

const repo = createRepository('applications', 'applications.json');

export const ApplicationModel = {
  create(data) {
    return repo.create(data);
  },
  findAll() {
    return repo.findAll();
  },
};
