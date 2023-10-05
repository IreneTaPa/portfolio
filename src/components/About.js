import '../styles/About.scss';
import '../styles/Variables.scss';
import img from '../images/photo.jpeg';
import document from '../document/IreneTalaveroPalominoResume.pdf';
import TechnologiesDetail from './TechnologiesDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
const About = () => {
  return (
    <div className="body_about">
      <div className="div_letter">
        <img src={img} alt="Author" className="author_img" />
        <div className="letter">
          Proveniente del sector farmacéutico, he tenido la oportunidad de
          adquirir sólidos conocimientos a través de mi bootcamp en la escuela
          Adalab, donde me he especializado en tecnologías web como HTML, CSS,
          JavaScript, REACT... He trabajado en proyectos prácticos para crear
          sitios web interactivos y amigables. Además, he colaborado en
          diferentes equipos, lo que ha enriquecido mi capacidad para
          comunicarme eficazmente y trabajar en entornos colaborativos. Un
          aspecto que me enorgullece es haber sido parte de una iniciativa que
          fomenta la diversidad y la inclusión en el campo de la tecnología.
        </div>
      </div>
      <a className="download_button" href={document} download>
        <FontAwesomeIcon icon={faDownload} className="download_button--icon" />
        <p>Download CV</p>
      </a>
      <h1 className="technologies_title">TECHNOLOGIES</h1>
      <ul className="technologies_list">{<TechnologiesDetail />}</ul>
    </div>
  );
};

export default About;
