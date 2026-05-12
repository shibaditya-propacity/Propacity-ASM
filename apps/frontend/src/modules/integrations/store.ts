import { create } from "zustand";
import { persist } from "zustand/middleware";

const STORAGE_KEY = "asm_integrations_selected_client";

interface IntegrationsStore {
  selectedClientId: string | null;
  setSelectedClientId: (id: string | null) => void;
}

export const useIntegrationsStore = create<IntegrationsStore>()(
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
