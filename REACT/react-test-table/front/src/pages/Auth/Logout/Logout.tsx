import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => { 
        document.querySelector('header')?.classList.add('hidden');
        setTimeout(() => navigate('/login'), 5000);
    }, [navigate]);

    // call signout service
    return (
        <div className="not-found">
            <h1>Até breve!</h1>
            <span>Você será redirecionado(a) para o login em alguns segundos...</span>
        </div>
    );
};

export default Logout;