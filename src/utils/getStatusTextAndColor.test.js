import { getStatusTextAndColor } from './getStatusTextAndColor';
import formatDate from '@/utils/formatDate';

describe('getStatusTextAndColor', () => {
  test('should return statusText and textColor for finished matches', () => {
    const node = { status: { type: 'finished' } };
    const expectedResult = { statusText: 'FT', textColor: 'rgb(34 197 94)' };
    const result = getStatusTextAndColor(node);
    expect(result).toEqual(expectedResult);
  });

  test('should return statusText and textColor for inprogress matches', () => {
    const node = { status: { type: 'inprogress' } };
    const expectedResult = { statusText: 'Live', textColor: 'rgb(234 179 8)' };
    const result = getStatusTextAndColor(node);
    expect(result).toEqual(expectedResult);
  });

  test('should return statusText and textColor for notstarted matches', () => {
    const timestamp = new Date(2023, 0, 1, 12, 30).getTime();
    const node = { status: { type: 'notstarted' }, timestamp };
    const expectedResult = {
      statusText: formatDate(timestamp),
      textColor: 'rgb(209 213 219)',
    };
    const result = getStatusTextAndColor(node);
    expect(result).toEqual(expectedResult);
  });

  test('should return statusText and textColor for undefined or other status types', () => {
    const node = { status: { type: 'canceled' } };
    const expectedResult = {
      statusText: 'Canceled',
      textColor: 'rgb(239 68 68)',
    };
    const result = getStatusTextAndColor(node);
    expect(result).toEqual(expectedResult);
  });

  test('should handle missing status', () => {
    const node = {};
    const expectedResult = {
      statusText: 'Canceled',
      textColor: 'rgb(239 68 68)',
    };
    const result = getStatusTextAndColor(node);
    expect(result).toEqual(expectedResult);
  });
});
