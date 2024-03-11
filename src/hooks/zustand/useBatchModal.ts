import { create } from "zustand";

interface BatchModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useBatchModal = create<BatchModalState>()((set) => ({
  isOpen: false,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
}));

export default useBatchModal;
