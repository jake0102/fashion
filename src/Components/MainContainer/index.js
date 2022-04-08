// React methods
import { Routes, Route } from 'react-router-dom'

// Files
import Products from '../../Pages/Products'

function MainContainer() {
    return (
        <div className="MainContainer">
            <Routes>
                <Route path="/" element={<Products />}/>
            </Routes>
        </div>
    )
}

export default MainContainer