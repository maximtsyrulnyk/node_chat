import { db } from '../utils/db.js';

const getById = (id) => db.user.findUnique({ where: { id } });

const getByUsername = (username) =>
  db.user.findUnique({ where: { username } });

const create = (username) =>
  db.user.create({ data: { username } });

const update = (id, username) =>
  db.user.update({
    where: { id },
    data: { username },
  });

export const usersRepository = {
  getById,
  getByUsername,
  create,
  update,
};