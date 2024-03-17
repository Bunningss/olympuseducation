import { create } from "zustand";

interface BathcModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useBatchModal = create<BathcModalProps>()((set) => ({
  isOpen: false,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
}));

export default useBatchModal;
