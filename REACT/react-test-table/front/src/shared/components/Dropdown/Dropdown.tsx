import './Dropdown.css';

interface IDropdown {
    styles?: string;
    open?: boolean;
    html?: JSX.Element | React.ReactNode | React.JSX.Element;
}

export const Dropdown: React.FC<IDropdown> = (props) => 
    <>{props.open && <div className={'dropdown ' + props?.styles }>{props.html}</div>}</>;