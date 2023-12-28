import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const NotFound: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => { setTimeout(() => navigate('/'), 10000) }, [navigate]);

    return (
        <div className="not-found">
            <h1>404 - A página não existe :(</h1>
            <span>Você será redirecionado(a) para a home page em alguns segundos...</span>
        </div>
    )
};