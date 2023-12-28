import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './../../../shared/contexts/Auth/AuthContext';
import { Logo } from './../../../shared/layout/header/Logo/Logo';

const Login = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const newUser = () => navigate('/user/new');
    const doLogin = async () => {
        if (username && password) {
            const isLogged = await auth.signIn(username, password);
            isLogged ? navigate('/') : console.log('Errr');
        }
        navigate('/');
    };

    useEffect(() => document.querySelector('header')?.classList.add('hidden'), []);

    return (
        <div className='centered column full'>
            <div className='column centered ct-logo'>
                <Logo />
                <h2>Login</h2>
            </div>
            
            <form className='flex column gap-10px auth-form card'>
                <div>
                    <label>Username</label>
                    <input className='input-text' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div>
                    <label>Password</label>
                    <input className='input-text' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className='flex row-reverse gap-10px'>
                    <button onClick={doLogin} type='button'>ENTRAR</button>
                    <button className='btn-sign-up' onClick={newUser} type='button'>Cadastrar</button>
                </div>
            </form>
        </div>
    );
};

export default Login;