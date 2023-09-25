import '../styles/Contact.scss';
import '../styles/Variables.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
  return (
    <div className="contact_body">
      <h1 className="contact_title">CONTACT</h1>
      <div className="contact_rrss">
        <div className="contact_email">
          <FontAwesomeIcon icon={faEnvelope} />
          <a
            href="mailto:italavero@hotmail.com"
            className="contact_email--link"
          >
            italavero@hotmail.com
          </a>
        </div>

        <div className="contact_linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
          <a
            href="https://www.linkedin.com/in/irene-talavero-palomino/"
            className="contact_linkedin--link"
          >
            linkedin.com/in/irene-talavero-palomino/
          </a>
        </div>
        <div className="contact_github">
          <FontAwesomeIcon icon={faGithubAlt} />
          <a
            href="https://github.com/IreneTaPa"
            className="contact_github--link"
          >
            github.com/IreneTaPa
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
