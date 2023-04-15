import countMatchesByStatus from './countMatchesByStatus';

describe('countMatchesByStatus', () => {
  const data = [
    { id: 1, status: { type: 'finished' } },
    { id: 2, status: { type: 'inprogress' } },
    { id: 3, status: { type: 'notstarted' } },
    { id: 4, status: { type: 'finished' } },
    { id: 5, status: { type: 'inprogress' } },
  ];

  test('should return correct counts for each status type and total count', () => {
    const expectedResult = {
      all: 5,
      result: 2,
      live: 2,
      upcoming: 1,
    };
    const result = countMatchesByStatus(data);
    expect(result).toEqual(expectedResult);
  });

  test('should return counts with zero values when data is empty', () => {
    const expectedResult = {
      all: 0,
      result: 0,
      live: 0,
      upcoming: 0,
    };
    const result = countMatchesByStatus([]);
    expect(result).toEqual(expectedResult);
  });

  test('should handle unknown status types correctly', () => {
    const dataWithUnknownStatus = [
      ...data,
      { id: 6, status: { type: 'unknown' } },
    ];
    const expectedResult = {
      all: 6,
      result: 2,
      live: 2,
      upcoming: 1,
    };
    const result = countMatchesByStatus(dataWithUnknownStatus);
    expect(result).toEqual(expectedResult);
  });
});
