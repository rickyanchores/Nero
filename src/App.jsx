import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Nero</h1>
      <Home />
    </div>
  )
}

export default App
