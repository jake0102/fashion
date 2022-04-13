// React methods
import { Routes, Route } from 'react-router-dom'

// Files
import './App.scss'
import Product from './Pages/Product'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { ContentsProvider } from './Components/ContentsProvider'

function App() {
  return (
    <ContentsProvider>
      <Routes>
        <Route path="/" element={<Product />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </ContentsProvider>
    // <Product />
  )
}

export default App