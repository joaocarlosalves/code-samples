import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ls } from './../../../services/local';
import './Avatar.css';

const src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPfMbUeuad7vLziKQG_64ZBev9j-EFTZDluw&usqp=CAU';

export const Avatar: React.FC = () => {
    const json = JSON.parse(ls.get('user'));
    const [user, setUser] = useState(json);

    useEffect(() => {
        window.addEventListener('user', (u) => setUser(u?.detail.data))        
    }, [])

    return (
        <>
            <Link to={ '/user/edit/' + user?.id }>
                <div className='avatar'>
                    <div className='img-ct'>
                        <img src={ src } />
                    </div>
                    <span>{ user?.firstName + ' ' + user?.lastName }</span>
                </div>
            </Link>
        </>
    );
};