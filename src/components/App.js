import '../styles/Reset.scss';
import '../styles/App.scss';
import '../styles/Variables.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';
const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
