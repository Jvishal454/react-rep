import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home';
import Test from './Components/Test/Test';
import LandingPage from './Pages/LandingPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/test' element={<Test />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
