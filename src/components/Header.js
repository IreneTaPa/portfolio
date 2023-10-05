import '../styles/Header.scss';
import '../styles/Variables.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header_image"></div>
      <div className="header_div">
        <p className="name">Irene Talavero</p>
        <p className="profession">Front-End Developer</p>
        <nav>
          <ul className="list">
            <li>
              <Link className="link" to="/">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
