import React,{useState, useEffect} from "react";
import './css/app.css'
import './css/responsive.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Controls from "./components/Controls";
import { BrowserRouter as Router,Routes, Route, useLocation, useNavigate } from 'react-router-dom';

function App() {
  const [lightMode, setlightMode] = useState(false)

  return(
    <Router>
      <div className={lightMode?'light-mode':""}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About/>} />
            <Route path="projects" element={<Projects/>} />
            <Route path="contact" element={<Contact/>} />
          </Route>
        </Routes>
        <Controls setlightMode={setlightMode} lightMode={lightMode}/>
      </div>
    </Router>
  )
}

export default App;