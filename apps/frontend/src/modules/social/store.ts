import { create } from "zustand";
import { persist } from "zustand/middleware";

const STORAGE_KEY = "asm_social_selected_client";

interface SocialStore {
  selectedClientId: string | null;
  setSelectedClientId: (id: string | null) => void;
}

export const useSocialStore = create<SocialStore>()(
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
