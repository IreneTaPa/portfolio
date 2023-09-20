import '../styles/Contact.scss';
import '../styles/Variables.scss';

const Contact = () => {
  return (
    <div className="body_cv">
      <h1 className="cv_title">CONTACT</h1>
      <div className="contact">
        <a href="mailto:italavero@hotmail.com" className="email">
          italavero@hotmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/irene-talavero-palomino/"
          className="linkedin"
        >
          linkedin.com/in/irene-talavero-palomino/
        </a>
        <a href="https://github.com/IreneTaPa" className="github">
          github.com/IreneTaPa
        </a>
      </div>
    </div>
  );
};

export default Contact;
