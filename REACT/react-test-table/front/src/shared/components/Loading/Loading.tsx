import loading from './loading.gif';

export const Loading: React.FC = () => {
    return (
        <div className='loading'>
            <img src={ loading } alt='Loading...' />
        </div>
    );
};
