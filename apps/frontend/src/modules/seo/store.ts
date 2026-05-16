import { create } from "zustand";
import { persist } from "zustand/middleware";

const STORAGE_KEY = "asm_seo_selected_client";

interface SeoStore {
  selectedClientId: string | null;
  setSelectedClientId: (id: string | null) => void;
}

export const useSeoStore = create<SeoStore>()(
  persist(
    (set) => ({
      selectedClientId: null,
      setSelectedClientId: (id) => set({ selectedClientId: id }),
    }),
    {
      name: STORAGE_KEY,
      partialize: (state) => ({ selectedClientId: state.selectedClientId }),
    },
  ),
);
