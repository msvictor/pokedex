import React from 'react';

type UseLoadingValues = {
  isLoading: boolean;
  turnLoadingOn: () => void;
  turnLoadingOff: () => void;
};

export function useLoading(): UseLoadingValues {
  const [isLoading, setIsLoading] = React.useState(true);

  const turnLoadingOn = (): void => setIsLoading(true);

  const turnLoadingOff = (): void => setIsLoading(false);

  return { isLoading, turnLoadingOn, turnLoadingOff };
}
