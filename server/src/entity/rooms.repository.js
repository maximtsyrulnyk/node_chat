import { db } from '../utils/db.js';

const getAll = () => db.room.findMany();

const create = (name) =>
  db.room.create({
    data: { name },
  });

const remove = (id) =>
  db.room.delete({
    where: { id },
  });

export const roomsRepository = {
  getAll,
  create,
  remove,
};