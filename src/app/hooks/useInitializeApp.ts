import { useEffect } from 'react';
import { useUiStore } from '@/shared/store/uiStore';

export const useInitializeApp = () => {
  const hydratePreferences = useUiStore((state) => state.hydratePreferences);

  useEffect(() => {
    hydratePreferences();
  }, [hydratePreferences]);
};
