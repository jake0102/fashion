// React methods
import { Routes, Route } from 'react-router-dom'

// Files
import './App.scss'
import Product from './Pages/Product'
import About from './Pages/About'
import { ContentsProvider } from './Components/ContentsProvider'

function App() {
  return (
    <ContentsProvider>
      <Routes>
        <Route path="/" element={<Product />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </ContentsProvider>
    // <Product />
  )
}

export default App