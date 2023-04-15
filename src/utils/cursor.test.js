import { createCursor, parseCursor } from './cursor';

describe('createCursor', () => {
  test('should create a base64 encoded cursor from a given index', () => {
    const index = 10;
    const expectedResult = Buffer.from('cursor-10').toString('base64');
    const result = createCursor(index);
    expect(result).toEqual(expectedResult);
  });

  test('should handle zero index correctly', () => {
    const index = 0;
    const expectedResult = Buffer.from('cursor-0').toString('base64');
    const result = createCursor(index);
    expect(result).toEqual(expectedResult);
  });
});

describe('parseCursor', () => {
  test('should parse the index from a given base64 encoded cursor', () => {
    const cursor = Buffer.from('cursor-10').toString('base64');
    const expectedResult = 10;
    const result = parseCursor(cursor);
    expect(result).toEqual(expectedResult);
  });

  test('should handle a zero index cursor correctly', () => {
    const cursor = Buffer.from('cursor-0').toString('base64');
    const expectedResult = 0;
    const result = parseCursor(cursor);
    expect(result).toEqual(expectedResult);
  });

  test('should return NaN when the cursor format is invalid', () => {
    const invalidCursor = 'invalid';
    const result = parseCursor(invalidCursor);
    expect(Number.isNaN(result)).toBe(true);
  });
});
