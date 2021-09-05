import { renderHook, act } from '@testing-library/react-hooks';
import { useLoading } from '@modules/_shared/hooks/useLoading';

describe('use loading', () => {
  it('should be declared', async () => {
    const { result } = renderHook(() => useLoading());

    act(() => {
      result.current.turnLoadingOff();
    });
    expect(result.current.isLoading).toEqual(false);

    act(() => {
      result.current.turnLoadingOn();
    });
    expect(result.current.isLoading).toEqual(true);
  });
});
