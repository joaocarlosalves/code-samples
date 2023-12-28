import { ITableProps } from './TableInterface';
import { useEffect, useState } from 'react';
import './Table.css';

export const Table: React.FC<ITableProps> = (props) => {
    const [bool, setBool] = useState<boolean>(false);
    const [rows, setRows] = useState(props?.data?.rows);
    const setHeaders = () => {
        return props?.data?.headers.map((header) => 
            (<th onClick={() => sortTable(header.id)} key={header?.id}>{header.text}</th>));
    };
    const setCells = () => {
        return rows?.map((row) => 
            (<tr key={row?.id}>{Object.values(row).map(r => (<td key={r + 1}>{r}</td>))}</tr>));
    };
    const sortTable = (header: string) => {
        setBool(!bool);        
        const table = rows.sort((a, b) => {
            const d1 = a[header], d2 = b[header];
            if(!bool) return d2 < d1 ? 1 : d2 > d1 ? -1 : 0;
            else return d2 > d1 ? 1 : d2 < d1 ? -1 : 0;
        });
        setRows(table);
    };
    
    useEffect(() => {
        const searching = (txt: string | number) => {
            const table = rows.filter((item: string) => Object.values(item).some((cell) => {
                const cl = new String(cell).toLowerCase(),
                      ev = new String(txt).toLowerCase();
        
                if(cl.includes(`${ev}`)) return cell;
            }));
            setRows(table);
        };

        window.addEventListener('table', async (t) => setRows(t.detail.data.rows))
        
        searching(props?.search);

    }, [props?.search, props?.data]);

    return (
        <div className='table-ct'>
            <table>
                <thead>
                    <tr>{setHeaders()}</tr>
                </thead>
                <tbody>
                    {setCells()}
                </tbody>
                {props?.footer && <tfoot>{props.footer}</tfoot>}
            </table>
        </div>
    );
};