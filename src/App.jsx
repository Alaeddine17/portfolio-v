import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css'
import {Header, Hero, Footer} from './section/index'
import {Home, Resume, Projects, Contact} from './Pages/index'


function App() {

  return (
    <>
    <Router>
      <Header/>
      <Hero/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/AboutMe' element={<Home/>}/>
                <Route path='/Resume' element={<Resume/>}/>
                <Route path='/Projects' element={<Projects/>}/>
                <Route path='/Contact' element={<Contact/>}/>
            </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App

    {/*<Contact/>*/}
    {/*<Project/>*/}
    {/*<Timeline/>*/}
    {/*<About/>*/}
    {/*<Technologies>*/}
    {/*<Resume*/}
