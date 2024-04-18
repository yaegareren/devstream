import { db } from "./db";

export const getStreamByUserid = async (userId: string) => {
  const stream = await db.stream.findUnique({
    where: {
      userId,
    },
  });

  return stream;
};
