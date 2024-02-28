import { UserProps } from "@/utils/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserState {
  user: UserProps | string;
  onLogin: (userData: UserProps) => void;
}

const useUserState = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: "{}",
        onLogin: (userData: UserProps) => set((state) => ({ user: userData })),
      }),
      { name: "user" }
    )
  )
);

export default useUserState;
