import { create } from 'zustand';

type LaboratoryStoreState = {
  search: string;
  setSearch: (value: string) => void;
};

export const useLaboratoryStore = create<LaboratoryStoreState>((set) => ({
  search: '',
  setSearch: (search) => set({ search }),
}));
