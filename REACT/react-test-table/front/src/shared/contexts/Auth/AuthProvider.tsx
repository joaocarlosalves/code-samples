import { useState } from 'react';
import { useApi } from './../../hooks/useApi';
import { TUser } from './../../types/User';
import { AuthContext } from './AuthContext';

interface IAuthProvider { children: JSX.Element }

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<TUser | null>(null);
    const api = useApi();

    const signIn = async (email: string, password: string) => {
        const data = await api.signIn(email, password);
        console.log(data)
        if (data.user && data.token) {
            setUser(user);
            return true;
        }
        return false;
    };

    const signOut = async () => {
        await api.signOut();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}