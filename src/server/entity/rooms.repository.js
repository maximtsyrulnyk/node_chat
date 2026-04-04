import { db } from '../utils/db.js';

const getAll = async () => {
  return db.room.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  });
};

const getById = async (id) => {
  return db.room.findUnique({
    where: { id },
  });
};

const create = async (name) => {
  return db.room.create({
    data: { name },
  });
};

const remove = async (id) => {
  return db.room.delete({
    where: { id },
  });
};

export const roomsRepository = {
  getAll,
  getById,
  create,
  remove,
};
