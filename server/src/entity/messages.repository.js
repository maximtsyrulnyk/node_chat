import { db } from '../utils/db.js';

const getAllByRoom = (roomId) =>
  db.message.findMany({
    where: { roomId },
    include: { user: true },
  });

const create = ({ content, userId, roomId }) =>
  db.message.create({
    data: {
      content,
      userId,
      roomId,
    },
  });

export const messagesRepository = {
  getAllByRoom,
  create,
};