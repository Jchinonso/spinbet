import applyFilter from './applyFilter';

describe('applyFilter', () => {
  const data = [
    { id: 1, status: { type: 'finished' } },
    { id: 2, status: { type: 'inprogress' } },
    { id: 3, status: { type: 'notstarted' } },
    { id: 4, status: { type: 'finished' } },
    { id: 5, status: { type: 'inprogress' } },
  ];

  test('should return original data when no filter is applied', () => {
    const result = applyFilter(data, null);
    expect(result).toEqual(data);
  });

  test('should return only matches with status type "finished" when filter is "RESULT"', () => {
    const expectedResult = [
      { id: 1, status: { type: 'finished' } },
      { id: 4, status: { type: 'finished' } },
    ];
    const result = applyFilter(data, 'RESULT');
    expect(result).toEqual(expectedResult);
  });

  test('should return only matches with status type "inprogress" when filter is "LIVE"', () => {
    const expectedResult = [
      { id: 2, status: { type: 'inprogress' } },
      { id: 5, status: { type: 'inprogress' } },
    ];
    const result = applyFilter(data, 'LIVE');
    expect(result).toEqual(expectedResult);
  });

  test('should return only matches with status type "notstarted" when filter is "UPCOMING"', () => {
    const expectedResult = [
      { id: 3, status: { type: 'notstarted' } },
    ];
    const result = applyFilter(data, 'UPCOMING');
    expect(result).toEqual(expectedResult);
  });

  test('should return original data when an unknown filter is applied', () => {
    const result = applyFilter(data, 'UNKNOWN_FILTER');
    expect(result).toEqual(data);
  });
});
