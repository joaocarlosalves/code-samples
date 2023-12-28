import './Dialog.css';

type TDialogType = {
    open: boolean,
    position?: string,
    styles?: string,
    html: JSX.Element
};

export const Dialog: React.FC<TDialogType> = (props) => 
    <>
        {props.open &&
            <div className={props.position ? 'back ' + props.position : 'back'}>
                <dialog className={props.styles ? props.styles : ''}>{props.html}</dialog>
            </div>
        }
    </>;
