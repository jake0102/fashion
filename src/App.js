// React methods
import { Routes, Route } from 'react-router-dom'

// Files
import './App.scss'
import Product from './Pages/Product'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Register from './Pages/Register'
import Cart from './Pages/Cart'
import { ContentsProvider } from './Components/ContentsProvider'

function App() {
  return (
    <ContentsProvider>
      <Routes>
        <Route path="/" element={<Product />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </ContentsProvider>
  )
}

export default App