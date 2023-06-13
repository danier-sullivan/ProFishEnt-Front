import { Link } from 'react-router-dom';
import './header.css'; // Import the CSS file

const Header = (props) => {
  return (
    <nav className="nav">
      <Link to="/">
        <div className="logo">Pro Fish Ent App</div>
      </Link>
    </nav>
  );
};

export default Header;
