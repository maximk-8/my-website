import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from "./Projects";
import About from "./About";
import './index.css';
import TextSummarizer from "./TextSummarizer";
import GraphAPI from "./GraphAPI";
import HuffmanCoding from "./HuffmanCoding";
import SuperCoinBox from "./SuperCoinBox";
import SpeedReader from "./SpeedReader";
import React, { useEffect } from "react";
import LandingPage from "./LandingPage";
import { Analytics } from '@vercel/analytics/react';
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  const typewriterStorage = {
    header: false,
    home: false,
    projects: false,
    text_summarizer: false,
    graphAPI: false,
    huffmanCoding: false,
    superCoinBox: false,
    speedReader: false,
    about: false,
  } 

  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/*" element={
            <div className="App">
              <Header typewriterStorage={typewriterStorage}/>
              <div className="main-display">
                <Routes>
                  <Route path="/home" element={<Home typewriterStorage={typewriterStorage}/>} />
                  <Route path="/projects" element={<Projects typewriterStorage={typewriterStorage}/>} />
                  <Route path="/projects/text-summarizer" element={<TextSummarizer typewriterStorage={typewriterStorage}/>} />
                  <Route path="/projects/graph-api" element={<GraphAPI typewriterStorage={typewriterStorage}/>} />
                  <Route path="/projects/huffman-coding" element={<HuffmanCoding typewriterStorage={typewriterStorage}/>} />
                  <Route path="/projects/super-coin-box" element={<SuperCoinBox typewriterStorage={typewriterStorage}/>} />
                  <Route path="/projects/speed-reader" element={<SpeedReader typewriterStorage={typewriterStorage}/>} />
                  <Route path="/about" element={<About typewriterStorage={typewriterStorage} />} />
                </Routes>
              </div>
              <Footer />
            </div>
          } />
        </Routes>
      </Router>
      <Analytics />
    </div>
  );
}

export default App;