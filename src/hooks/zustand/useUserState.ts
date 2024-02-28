import { UserProps } from "@/utils/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserState {
  user: UserProps | null;
  onLogin: (userData: UserProps) => void;
  onLogout: () => void;
}

const useUserState = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        onLogin: (userData: UserProps) => set((state) => ({ user: userData })),
        onLogout: () => set((state) => ({ user: null })),
      }),
      { name: "user" }
    )
  )
);

export default useUserState;
