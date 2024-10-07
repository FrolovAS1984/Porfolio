import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

import './App.css'

import Header from "./components/Header/Header.jsx";
import Home from "./components/Pages/Home/Home.jsx";
import About from "./components/Pages/About/About.jsx";
import Projects from "./components/Pages/Projects/Projects.jsx";

function App() {


  return (
      <Router>
          <Header />
          <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/about'} element={<About />} />
              <Route path={'/projects'} element={<Projects />} />


          </Routes>


      </Router>

  )
}

export default App
