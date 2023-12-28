import { useEffect, useState } from "react";
import { Table } from "./../../../shared/components/Table/Table";
import { useApi } from "./../../../shared/hooks/useApi";
import { DynamicTable, TableRow } from "./../../../shared/components/Table/TableInterface";
import { Pagination } from "./../../../shared/components/Pagination/Pagination";
import { setEvent } from "./../../../shared/services/emitt";

export const TableContainer: React.FC = () => {
    const [searchThisOnTable, setSearchThisOnTable] = useState<string>('')
    const [tableData, setTableData] = useState<DynamicTable<TableRow<[]>>>();
    const api = useApi();
    const searchOnTable = (event: React.KeyboardEvent) => {
        if(event.key == 'Enter') setSearchThisOnTable(event?.target.value)
    };

    const currencyTableFormater = (data): void => {
        const 
            headers = [
                { 'id': 'id', 'text': 'ID' },
                { 'id': 'moeda', 'text': 'Moeda' },
                { 'id': 'valor', 'text': 'Valor' },
                { 'id': 'horario', 'text': 'Data Horario' }
            ], 
            rows = [];
      
        for(let i = 0; i < Object.keys(data.rates).length; i++) {
            rows.push({ 
                'id': i,
                'moeda': Object.keys(data.rates)[i], 
                'valor': (Object.values(data.rates)[i]).toFixed(2),
                'horario': `${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString()}`
            })
        }

        setTableData({'headers': headers, 'rows': rows});
    };

    useEffect(() => { 
        const callApi = async () => {  
            //setTableData(await api.get('people').then((data) => {return data}));
            await api.get('people-pag').then((data) => setTableData({headers: data.headers, rows: data.rows[0]}));
            //api.getCurrencies().then((data) => currencyTableFormater(data))
        };   
        
        window.addEventListener('page', async (p) => {
            await api.get('people-pag').then((data) => {
                setEvent('table', {headers: data.headers, rows: data.rows[p.detail.data]})
            });
        });                    

        callApi();
    }, []);

    return (
        <>
            <h2>Dataview</h2>
            <div className="card data-table-ct">
                <div className="data-table-search-inp">
                    <label>Buscar</label>
                    <input className='input-text' type='text' onKeyUp={searchOnTable} />
                </div>

                {tableData && 
                    <>
                        <Table data={tableData} search={searchThisOnTable} />
                        <Pagination />
                    </>
                }
            </div>
        </>
    )
};