// React methods
import { createContext, useState } from 'react'

// Files
import LNav from '../../Components/LNav'
import TNav from '../../Components/TNav'
import MNav from '../../Components/MNav'
import MModal from '../../Components/MModal'
import MainContainer from '../../Components/MainContainer'

// Function
export const FuncContext = createContext()

function Product() {

    const [show, setshow] = useState(false)

    const [ani, setAni] = useState(false)

    const handleShow = function(){
        setshow(!show)
        setAni(!ani)
    }

    const values = {
        handleShow,
        scaleAni: ani
    }

    return (
        <>
            <FuncContext.Provider value={values}>
                <LNav />
                <TNav />
                <MainContainer />
                <MNav />
                <MModal show={show}/>
            </FuncContext.Provider>
        </>
    )
}

export default Product