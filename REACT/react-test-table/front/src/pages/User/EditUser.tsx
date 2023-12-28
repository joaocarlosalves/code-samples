import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import { CountrySelect } from './../../shared/components/CountrySelect/CountrySelect';
import { ICountries } from './../../shared/components/CountrySelect/CountrySelectInterface';
import { IUser } from './UserType';
import { Logo } from './../../shared/layout/header/Logo/Logo';
import { ls } from './../../shared/services/local';
import { setEvent } from './../../shared/services/emitt';

const EditUser: React.FC<IUser> = () => {
    const userID = useParams().id;
    const [user, setUser] = useState<IUser>()
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [mail, setMail] = useState<string>('');
    const [openDropdown, setOpenDropdown] = useState<boolean>(false);
    const [country, setCountry] = useState<ICountries>();
    const path: string[] = ['./../../src/assets/data/countries/flags/', '.svg'];
    const navigate = useNavigate();
    const addUser = async () => {
        // send user to api
        const user: IUser = { 
            id: 1,
            firstName: firstName, 
            lastName: lastName, 
            mail: mail,
            country: country
        };
        ls.set('user', JSON.stringify(user));
        setEvent('user', user);
        setTimeout(() => navigate('/'), 1000);
    };
    const selectCountry = (c: ICountries): void => {
        setCountry(c);
        setOpenDropdown(false);
    };

    useEffect(() => { 
        const getUser = () => {
            if(userID) {
                const user = JSON.parse(ls.get('user'));
                setUser(user);
                setFirstName(user.firstName);
                setLastName(user.lastName);
                setMail(user.mail);
                setCountry(user.country);
            }
        };
        
        if(!userID) document.querySelector('header')?.classList.add('hidden')
        
        getUser();
    }, []);

    return (
        <div className='centered column full'>
            {!userID && 
                <div className='column centered ct-logo'>
                    <Logo />
                    <h2>Cadastro</h2>
                </div>
            }
            {userID && 
                <div className='column centered'>
                    <h2>Olá, { user?.firstName + ' ' + user?.lastName }</h2>
                </div>
            }
            <form className='flex column gap-10px auth-form card'>
                <div>
                    <label>Nome</label>
                    <input className='input-text' type='text' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>

                <div>
                    <label>Sobrenome</label>
                    <input className='input-text' type='text' name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div>
                    <label>E-mail</label>
                    <input className='input-text' type='mail' name='mail' value={mail} onChange={(e) => setMail(e.target.value)} />
                </div>

                <div>
                    <label>País</label>
                    <div className='full flex relative'>
                        <div className='trigger flex gap-10px full' onClick={() => setOpenDropdown(!openDropdown)}>
                            { country && <img width='20' src={`${path[0] + country?.id.toLowerCase() + path[1]}`} /> }
                            <span>{country?.name || 'Selecione...'}</span>
                        </div>
                        <CountrySelect sendCountry={(c) => selectCountry(c)} open={openDropdown} />
                    </div>
                </div>

                <div className='flex row-reverse'>
                    <button onClick={addUser} type='button'>{ !userID ? 'CADASTRAR' : 'ATUALIZAR' }</button>
                </div>
            </form>
        </div>
    );
};

export default EditUser;