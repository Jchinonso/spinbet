const createCursor = (index) =>
  Buffer.from(`cursor-${index}`).toString("base64");
const parseCursor = (cursor) =>
  parseInt(Buffer.from(cursor, "base64").toString("utf8").substring(7), 10);

export { createCursor, parseCursor };
