import { useEffect, useState } from 'react';
import { ls } from './../../../services/local';
import { Sun } from './../../../components/Icons/Sun';
import { Moon } from './../../../components/Icons/Moon';

export const ThemeChanger: React.FC = () => {
    const [theme, setTheme] = useState<string>('');
    const getTheme = () => theme == 'light' ? 'dark' : 'light';
    const setBodyClass = (cls: string): void => { document.body.className = cls };
    const changeTheme = (theme: string) => {
        setTheme(theme);
        setBodyClass(theme);
        ls.set('theme', theme);
    };

    useEffect(() => {
        const saved = ls.get('theme');
        const curr = saved == null ? 'light' : saved;
        changeTheme(curr);
    });

    return (
        <>
            <button className='theme-btn' onClick={() => changeTheme(getTheme())}>
                {theme == 'light' ? <Moon /> : <Sun />}
            </button>
        </>
    );
};