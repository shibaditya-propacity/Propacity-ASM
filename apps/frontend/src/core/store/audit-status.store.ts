import { create } from "zustand";

interface AuditStatusState {
  /** ID of the audit currently running in this session, or null */
  runningAuditId: string | null;
  setRunning: (id: string | null) => void;
}

export const useAuditStatusStore = create<AuditStatusState>((set) => ({
  runningAuditId: null,
  setRunning: (id) => set({ runningAuditId: id }),
}));
