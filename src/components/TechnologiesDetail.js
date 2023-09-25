import '../styles/TechnologiesDetail.scss';
import htmlLogo from '../images/html-logo.png';
import cssLogo from '../images/css-logo.png';
import sassLogo from '../images/saas-logo.png';
import jsLogo from '../images/js-logo.png';
import reactLogo from '../images/react-logo.png';
import gulpLogo from '../images/gulp-logo.svg';
import jestLogo from '../images/jest-logo.png';
import nodeLogo from '../images/node-logo.jpg';
import sqlLogo from '../images/mysql-logo.png';
import mongoLogo from '../images/mongod-logo.png';
import gitLogo from '../images/git-logo.png';
import githubLogo from '../images/github-logo.png';

const TechnologiesDetail = () => {
  const imagesData = [
    { id: 1, src: htmlLogo },
    { id: 2, src: cssLogo },
    { id: 3, src: sassLogo },
    { id: 4, src: jsLogo },
    { id: 5, src: reactLogo },
    { id: 6, src: gulpLogo },
    { id: 7, src: jestLogo },
    { id: 8, src: nodeLogo },
    { id: 9, src: sqlLogo },
    { id: 10, src: mongoLogo },
    { id: 11, src: gitLogo },
    { id: 12, src: githubLogo },
  ];

  return (
    <>
      {imagesData.map((image) => (
        <li key={image.id} className="technologies_elements">
          <img src={image.src} alt="logo" className="technologies_images" />
        </li>
      ))}
    </>
  );
};

export default TechnologiesDetail;
