import { Avatar } from './Avatar/Avatar';
import { Logo } from './Logo/Logo';
import { Menu } from './Menu/Menu';
import { ThemeChanger } from './ThemeChanger/ThemeChanger';

export const Header: React.FC = () => {
    return (
        <div className='container'>
            <header>
                <Logo />
                <Menu />
                <div className='flex gap-10px center'>
                    <Avatar />
                    <ThemeChanger />
                </div>
            </header>
        </div>
    );
};