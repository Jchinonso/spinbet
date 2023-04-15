import { getProgress, getColor } from './statusUtils';

describe('getProgress', () => {
  test('should return progress for inprogress matches', () => {
    const status = 'inprogress';
    const liveStatus = '35';
    expect(getProgress(status, liveStatus)).toEqual(35);
  });

  test('should return progress for inprogress matches with HT liveStatus', () => {
    const status = 'inprogress';
    const liveStatus = 'HT';
    expect(getProgress(status, liveStatus)).toEqual(45);
  });

  test('should return progress for inprogress matches with liveStatus greater than 90', () => {
    const status = 'inprogress';
    const liveStatus = '95';
    expect(getProgress(status, liveStatus)).toEqual(90);
  });

  test('should return progress for finished matches', () => {
    const status = 'finished';
    expect(getProgress(status)).toEqual(90);
  });

  test('should return progress for other status types', () => {
    const status = 'notstarted';
    expect(getProgress(status)).toEqual(0);
  });
});

describe('getColor', () => {
  test('should return green for finished matches', () => {
    const status = 'finished';
    expect(getColor(status)).toEqual('green');
  });

  test('should return green for inprogress matches', () => {
    const status = 'inprogress';
    expect(getColor(status)).toEqual('green');
  });

  test('should return gray for other status types', () => {
    const status = 'notstarted';
    expect(getColor(status)).toEqual('gray');
  });
});
