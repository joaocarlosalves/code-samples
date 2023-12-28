import { useEffect } from 'react';
import { DialogContainer } from './components/DialogContainer';
import { TableContainer } from './components/TableContainer';

const Home: React.FC = () => {
    useEffect(() => document.querySelector('header')?.classList.remove('hidden'), []);

    return (
        <>
            <DialogContainer />
            <TableContainer />
        </>
    );
};

export default Home;