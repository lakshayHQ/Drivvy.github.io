import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router  , Routes , Route } from "react-router-dom" ; 
import Home from './components/home';

function App() {
  return (
    <Router> 
    <NavBar />
    <Routes> 
      <Route exact path='/'  element = {<Home />} >
      </Route>
    </Routes>
    </Router>
  )
}

export default App;
