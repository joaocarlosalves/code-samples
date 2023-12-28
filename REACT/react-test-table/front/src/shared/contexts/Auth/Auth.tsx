//import { useContext } from 'react';
//import { AuthContext } from './AuthContext';
import Login from './../../../pages/Auth/Login/Login';
import { ls } from './../../services/local';

export const Auth = ({ children }: { children: JSX.Element }) => {
    //const isAuth = useContext(AuthContext);

    //if (!isAuth) { return <Login /> }
    if (ls.get('user') == null) { return <Login /> }

    return children;
}
