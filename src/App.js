import React,{useState} from "react";
import './css/app.css'
import './css/responsive.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Controls from "./components/Controls";

function App() {
  const [activeSec, setactiveSec] = useState('home')
  const [lightMode, setlightMode] = useState(false)
  return(
    <div className={lightMode?'light-mode':""}>
      {activeSec === 'home' && <Home/>}
      {activeSec === 'about' && <About setactiveSec={setactiveSec}/>}
      {activeSec === 'projects' && <Projects/>}
      {activeSec === 'contact' && <Contact/>}
      <Controls setactiveSec={setactiveSec} activeSec={activeSec} setlightMode={setlightMode} lightMode={lightMode}/>
    </div>
  )
}

export default App;