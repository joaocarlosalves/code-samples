import { Link } from "react-router-dom";

const src = 'https://avatars.githubusercontent.com/u/19309443?v=4';

export const Logo: React.FC = () => <Link to="/"><img className='logo' src={ src } /></Link>;