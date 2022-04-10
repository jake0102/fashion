// React methods
import { Routes, Route } from 'react-router-dom'

// Files
import './App.scss'
import Product from './Pages/Product'
import About from './Pages/About'

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Product />}/>
    //   <Route path="/about" element={<About />}/>
    // </Routes>
    <Product />
  )
}

export default App