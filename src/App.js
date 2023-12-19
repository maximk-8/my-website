import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Projects from "./Projects";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-display">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
