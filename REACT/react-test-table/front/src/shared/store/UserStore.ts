import { create } from 'zustand';

export interface UserData {
  id: number;
  name: string;
  email: string;
}

export interface UserStore {
  user: UserData | null;
  setUser: (user: UserData | null) => void;
  editUser: (updatedUser: Partial<UserData>) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  editUser: (updatedUser) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...updatedUser } : null,
    })),
}));


