import { renderHook } from '@testing-library/react-hooks';
import useBorderStyle from './useBorderStyle';

describe('useBorderStyle hook', () => {
  it('returns "border-green-500" for "finished" status', () => {
    const { result } = renderHook(() => useBorderStyle('finished', '0'));
    expect(result.current).toBe('border-green-500');
  });

  it('returns "border-gray-300" for "notstarted" status', () => {
    const { result } = renderHook(() => useBorderStyle('notstarted', '0'));
    expect(result.current).toBe('border-gray-300');
  });

  it('returns "border-gray-300" for "canceled" status', () => {
    const { result } = renderHook(() => useBorderStyle('canceled', '0'));
    expect(result.current).toBe('border-gray-300');
  });

  it('returns the correct conic background for "inprogress" status', () => {
    const { result } = renderHook(() => useBorderStyle('inprogress', '45'));
    expect(result.current).toBe('bg-conic-to-180-from-green-500');
  });

  it('returns the correct conic background for "inprogress" status with 90', () => {
    const { result } = renderHook(() => useBorderStyle('inprogress', '90'));
    expect(result.current).toBe('bg-conic-to-360-from-green-500');
  });

  it('returns the correct conic background for "inprogress" status with more than 90', () => {
    const { result } = renderHook(() => useBorderStyle('inprogress', '100'));
    expect(result.current).toBe('bg-conic-to-360-from-green-500');
  });
});
