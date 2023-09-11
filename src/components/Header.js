import '../styles/Header.scss';
const Header = () => {
  return (
    <div className="header">
      <div className="hero_image"></div>
      <div className="header_div">
        <p className="name">Irene Talavero</p>
        <ul className="list">
          <li>Portfolio</li>
          <li>About</li>
          <li>CV</li>
        </ul>
      </div>
      <div className="div_line"></div>
    </div>
  );
};

export default Header;
