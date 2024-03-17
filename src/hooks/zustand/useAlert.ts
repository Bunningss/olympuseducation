import { create } from "zustand";

interface AlertModalProps {
  alert: string | null;
  onAlert: (message: string) => void;
  onAlertReset: () => void;
}

const useAlert = create<AlertModalProps>()((set) => ({
  alert: null,
  onAlert: (message) => set(() => ({ alert: message })),
  onAlertReset: () => set(() => ({ alert: null })),
}));

export default useAlert;
