import '../styles/Projects.scss';
import '../styles/Variables.scss';
import anonymous from '../images/2.png';
import cleopatra from '../images/3.png';
import restaurant from '../images/1.png';
const Projects = () => {
  const projects = [
    {
      id: 1,
      image: anonymous,
      title: 'Anonymous Proxy',
      desc: 'lorem impsum',
      github:
        'https://github.com/IreneTaPa/modulo-1-evaluacion-final-IreneTaPa',
      web: 'https://irenetapa.github.io/modulo-1-evaluacion-final-IreneTaPa/',
    },
    {
      id: 2,
      image: cleopatra,
      title: 'Cleopatras Digital Empire',
      desc: 'hflfjs',
      github: 'dre',
      web: 'resgts',
    },
    {
      id: 3,
      image: restaurant,
      title: 'Restaurant',
      desc: 'hflfjs',
      github: 'dre',
      web: 'resgts',
    },
  ];

  return (
    <div className="body_porfolio">
      <h1 className="portfolio_title">PROJECTS</h1>

      <ul className="projects_list">
        {projects.map((project) => (
          <li key={project.id}>
            <img
              src={project.image}
              className="project_image"
              alt={project.desc}
            ></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
