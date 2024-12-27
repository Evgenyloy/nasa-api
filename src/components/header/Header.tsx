import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
  return (
    <Link to={'/'} className="header">
      Near Earth Object Web Service
    </Link>
  );
}

export default Header;
