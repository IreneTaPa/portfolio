import '../styles/Header.scss';
import '../styles/Portfolio.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="hero_image"></div>
      <div className="header_div">
        <p className="name">Irene Talavero</p>
        <nav>
          <ul className="list">
            <li>
              <Link to="/">Portfolio</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cv">CV</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="div_line"></div>
    </div>
  );
};

export default Header;
