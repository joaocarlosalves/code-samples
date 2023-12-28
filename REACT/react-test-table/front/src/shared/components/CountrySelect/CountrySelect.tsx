import { Dropdown } from './../Dropdown/Dropdown';
import { ICountryProps } from './CountrySelectInterface';
import { pt } from './data/countries-pt.ts';
import './CountrySelect.css';

export const CountrySelect: React.FC<ICountryProps> = (props) => {
    const path: string[] = ['./../../src/assets/data/countries/flags/', '.svg'];
    const html = () => (
        <div className='country-list flex column full'>
            <ul className='flex column full'>
                {pt.map((c) => (
                    <li key={c.index} onClick={() => props?.sendCountry(c)} className='flex full pointer'>
                        <img src={`${path[0] + c.id.toLowerCase() + path[1]}`} />
                        <span>{c.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );

    return <Dropdown open={props.open} html={html()} />;
};
