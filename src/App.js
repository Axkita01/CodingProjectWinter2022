import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import Problems from './Pages/Problems';
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
    </div>
  );
}

export default App;
