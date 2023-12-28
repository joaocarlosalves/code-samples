import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Close } from '../../../components/Icons/Close';
import { MenuIcon } from './../../../components/Icons/MenuIcon';
import { ls } from './../../../services/local';

export const Menu: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    const user = JSON.parse(ls.get('user'));

    return (
        <>
            <button className='open-menu' onClick={() => setOpen(true)}>
                <MenuIcon />
            </button>
            {open && 
                <nav className='menu-nav'>
                    <button className='close-menu' onClick={() => setOpen(false)}>
                        <Close />
                    </button>
                    <ul>
                        <li onClick={() => setOpen(false)}>
                            <Link to="/">Home</Link>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <Link to={ '/user/edit/' + user.id }>Meus Dados</Link>
                        </li>
                    </ul>
                </nav>
            }
        </>
    );
};