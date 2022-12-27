import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import Problems from './Pages/Problems';
import React from "react";
import ProblemPage from './Pages/ProblemPage';
import Submission from './Pages/Submission';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route element = {<Problems/>} path = '/problem'/>
          <Route element = {<ProblemPage/>} path = '/problem/:id'/>
          <Route element = {<Submission/>} path = '/problem/submission/:id'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
