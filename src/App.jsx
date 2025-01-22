import './App.css'
import About from './component/About'
import Contact from './component/Contact'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Project from './component/Project'

function App() {
  

  return (
    <div className="w-screen mx-auto flex flex-col items-center justify-center">
  <Navbar />
  <Home />
  <About />
  <Project />
  <Contact />
  </div>

  )
}

export default App
