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
import img1 from "./_upscaled_image.png";
import img2 from "./_text_summarizer.png";
import img3 from "./_graph_api.png";
import img4 from "./_huffman_coding.png";
import img5 from "./_coin_box.png";
import img6 from "./_speed_reader.png";
import img7 from "./profile.jpeg";

function App() {
  useEffect(() => {
    const images = [img1, img2, img3, img4, img5, img6, img7];
    const links = [];

    images.forEach(image => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = image;
      document.head.appendChild(link);
      links.push(link);
    });

    return () => {
      links.forEach(link => {
        document.head.removeChild(link);
      });
    };
  }, []);

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
    <Router>
      <div className="App">
        <Header typewriterStorage={typewriterStorage}/>
        <div className="main-display">
          <Routes>
            <Route exact path="/" element={<Home typewriterStorage={typewriterStorage}/>} />
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
    </Router>
  );
}

export default App;