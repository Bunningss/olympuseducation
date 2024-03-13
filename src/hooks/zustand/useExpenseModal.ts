import { create } from "zustand";

interface ExpenseModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useExpenseModal = create<ExpenseModalState>()((set) => ({
  isOpen: false,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
}));

export default useExpenseModal;
