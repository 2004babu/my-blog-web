import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from './components/Main.tsx'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Contact from './components/Contact.tsx'
import About from './components/About.tsx'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
