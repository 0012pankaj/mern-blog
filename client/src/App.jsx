import {BrowserRouter, Routes,Route} from 'react-router-dom' 
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import Projects from './pages/Projects'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/dashboard' element={<Dashboard />} />
         <Route path='/sign-in' element={<SignIn />} />
         <Route path='/sign-up' element={<SignUp />} />
         <Route path='/projects' element={<Projects />} />

     </Routes>  
    </BrowserRouter>
  )
}

/*creat routing of diferent page and provide path of each page*/