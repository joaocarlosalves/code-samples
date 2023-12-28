import { createContext } from 'react';
import { TUser } from './../../types/User';

export type AuthContextType = {
    user: TUser | null;
    signIn: (email: string, password: string) => Promise<boolean>;
    signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);