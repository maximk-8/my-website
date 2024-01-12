import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Projects from "./Projects";
import About from "./About";

import './index.css';

function App() {
  const typewriterStorage = {
    header: false,
    home: false,
    projects: false,
  } 

  return (
    <Router>
      <div className="App">
        <Header typewriterStorage={typewriterStorage}/>
        <div className="main-display">
          <Routes>
            <Route exact path="/" element={<Home typewriterStorage={typewriterStorage}/>} />
            <Route path="/projects" element={<Projects typewriterStorage={typewriterStorage}/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
