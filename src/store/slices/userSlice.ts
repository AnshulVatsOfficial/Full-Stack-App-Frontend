import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IUserData {
  name: string;
  email: string;
}

interface IUser {
  userData: IUserData;
  setUserData: (userData: any) => void;
}

export const useUserData = create<IUser>()(
  persist(
    (set) => ({
      userData: { name: "", email: "" },
      setUserData: (userData: { name: string; email: string }) =>
        set(() => ({ userData: userData })),
    }),
    {
      name: "userData",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
