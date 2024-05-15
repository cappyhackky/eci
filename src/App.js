import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Components/Home';
import Navbar from './Components/Partials/Navbar';
import OperatorDB from './Components/OperatorDB';
function App() {
  return (
    <>
  
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/operator" Component={OperatorDB} />
        </Routes>
      </Router>
    </>
  );
}
 
export default App;
