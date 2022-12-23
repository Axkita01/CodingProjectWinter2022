import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import Problems from './Pages/Problems';
import React from "react";
import Textbox from './Components/Textbox';
import ProblemDesc from './Components/ProblemDesc';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route element = {<Problems/>} path = '/problem'/>
          <Route element = {<ProblemDesc/>} path = '/problem/:id'/>
        </Routes>
      </Router>
      <div className="editor">
        <Textbox/>
      </div>
      
    </div>
  );
}

export default App;
