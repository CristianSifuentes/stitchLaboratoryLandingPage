import { create } from 'zustand';

type UiStoreState = {
  denseLayout: boolean;
  toggleDenseLayout: () => void;
  hydratePreferences: () => void;
};

const STORAGE_KEY = 'laboratory-ui-preferences';

export const useUiStore = create<UiStoreState>((set, get) => ({
  denseLayout: false,
  toggleDenseLayout: () => {
    const nextValue = !get().denseLayout;
    set({ denseLayout: nextValue });
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ denseLayout: nextValue }));
  },
  hydratePreferences: () => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return;

    try {
      const parsed = JSON.parse(data) as { denseLayout?: boolean };
      set({ denseLayout: Boolean(parsed.denseLayout) });
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  },
}));
