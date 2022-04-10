// React methods
import { Routes, Route } from 'react-router-dom'

// Files
import P_Home from '../P_Home'
import TShirt from '../TShirt'

function MainContainer() {
    return (
        <div className="MainContainer">
            <Routes>
                <Route path="/" element={<P_Home />}/>
                <Route path="/product/tshirt" element={<TShirt />}/>
            </Routes>
        </div>
    )
}

export default MainContainer