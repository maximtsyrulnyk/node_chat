import { db } from '../utils/db.js';

const getAllByRoom = async (roomId) => {
  return db.message.findMany({
    where: { roomId },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
  });
};

const create = async ({ content, userId, roomId }) => {
  return db.message.create({
    data: {
      content,
      userId,
      roomId,
    },
    include: {
      user: true,
    },
  });
};

export const messagesRepository = {
  getAllByRoom,
  create,
};
