// React methods
import { Routes, Route } from 'react-router-dom'

// Files
import Products from '../../Pages/Products'
import Contact from '../../Pages/Contact'

function MainContainer() {
    return (
        <div className="MainContainer">
            <Routes>
                <Route path="/" element={<Products />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </div>
    )
}

export default MainContainer