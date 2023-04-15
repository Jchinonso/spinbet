import formatDate from './formatDate';

describe('formatDate', () => {
  test('should format date correctly', () => {
    const timestamp = new Date(2023, 0, 1, 12, 30).getTime();
    const expectedResult = 'JAN 1st 12:30';
    const result = formatDate(timestamp);
    expect(result).toEqual(expectedResult);
  });

  test('should handle different date suffixes', () => {
    const first = new Date(2023, 0, 1, 0, 0).getTime();
    const second = new Date(2023, 0, 2, 0, 0).getTime();
    const third = new Date(2023, 0, 3, 0, 0).getTime();
    const eleventh = new Date(2023, 0, 11, 0, 0).getTime();
    expect(formatDate(first)).toContain('1st');
    expect(formatDate(second)).toContain('2nd');
    expect(formatDate(third)).toContain('3rd');
    expect(formatDate(eleventh)).toContain('11th');
  });

  test('should handle leading zeros in hours and minutes', () => {
    const timestamp = new Date(2023, 1, 1, 7, 5).getTime();
    const expectedResult = 'FEB 1st 07:05';
    const result = formatDate(timestamp);
    expect(result).toEqual(expectedResult);
  });
});
