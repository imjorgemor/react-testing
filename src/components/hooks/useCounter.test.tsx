import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

//test custom hooks we rely on renderhook
describe('useCounter()', () => {
  test('should render the initial count', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test('should accept and redner the same initial count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10
      }
    });
    expect(result.current.count).toBe(10);
  });

  test('should increment the count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  // When testing, code that causes React state updates should be wrapped into act(...):
  test('should decrement the count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
