import { create } from "zustand";

interface NavDropdownState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useNavDropdown = create<NavDropdownState>()((set) => ({
  isOpen: false,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
}));

export default useNavDropdown;
