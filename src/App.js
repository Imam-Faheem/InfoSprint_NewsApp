import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(0);

  let newsTypes = "everything";//everything
  let pageSize = 20;
  let country = "in";//ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za 
  let apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
        />
        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={country} newsTypes={newsTypes} />} />
          <Route path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} category="general" country={country} newsTypes={newsTypes} />} />
          <Route path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSize} category="health" country={country} newsTypes={newsTypes} />} />
          <Route path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} category="business" country={country} newsTypes={newsTypes} />} />
          <Route path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} category="sports" country={country} newsTypes={newsTypes} />} />
          <Route path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} category="entertainment" country={country} newsTypes={newsTypes} />} />
          <Route path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} category="science" country={country} newsTypes={newsTypes} />} />
          <Route path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} category="technology" country={country} newsTypes={newsTypes} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
