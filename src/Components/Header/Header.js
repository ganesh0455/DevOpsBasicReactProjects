import { Link } from 'react-router-dom';
import './Header.css';

const Header=()=>{
    return(
        <div className='nav-bar'>
            <ul className="header">
                <li>
                    <Link to="/" className='removeLine'>Homeeee</Link>
                </li>
                <li>
                    <Link to="/about" className='removeLine'>Aboutttt</Link>
                </li>
                <li>
                    <Link to="/contact" className='removeLine'>Contactttt</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;