import '../styles/About.scss';
import '../styles/Variables.scss';
import img from '../images/photo.jpeg';
import TechnologiesDetail from './TechnologiesDetail';
const About = () => {
  return (
    <div className="body_about">
      <h1 className="about_title">ABOUT</h1>
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
      <h1>TECHNOLOGIES</h1>
      <ul className="technologies_list">{<TechnologiesDetail />}</ul>
    </div>
  );
};

export default About;
