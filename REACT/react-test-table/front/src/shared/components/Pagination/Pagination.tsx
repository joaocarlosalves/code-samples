import { useState } from 'react';
import { setEvent } from './../../services/emitt';
import './pagination.css';

interface IPagination { items?: number; total?: number }

export const Pagination: React.FC<IPagination> = () => {
    const [curr, setCurr] = useState(0);
    const arr = [1, 2, 3, 4, 5];
    const setPage = (page: number): void => {
        setCurr(page)
        setEvent('page', page);
    };
    const prevNext = (dir: string) => {
        if (dir == 'prev' && curr > 0 && curr <= arr.length - 1) setPage(curr - 1);
        if (dir == 'next' && curr >= 0 && curr < arr.length - 1) setPage(curr + 1);
    };

    return (
        <div className='pagination'>
            <ul>
                <li onClick={() => prevNext('prev')}>⯇</li>
                {arr.map((n) => <li key={n} className={curr == n - 1 ? 'pg-act' : ''} onClick={() => setPage(n - 1)}>{n}</li>)}
                <li onClick={() => prevNext('next')}>⯈</li>
            </ul>
        </div>
    );
};