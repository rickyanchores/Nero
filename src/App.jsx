import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Footer from './Pages/Footer/Footer'
import About from './Pages/About/About'
import Banner from './Pages/Banner/Banner'
import Product from './Pages/Product/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
      <Nav />
      <Routes>
        <Route exact Component={Home}/>
      </Routes>
      <Home />
      <Product />
      <About />
      <Banner />
      <Footer />
      </div>
    </Router>
  )
}

export default App;
