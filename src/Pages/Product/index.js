// React methods
import { createContext, useState } from 'react'

// Files
import LNav from '../../Components/LNav'
import TNav from '../../Components/TNav'
import MNav from '../../Components/MNav'
import MModal from '../../Components/MModal'
import MainContainer from '../../Components/MainContainer'
import Confirm from '../../Components/Confirm'

// Function
export const FuncContext = createContext()

function Product() {

    const [show, setshow] = useState(false)

    // const [ani, setAni] = useState(false)

    const handleShow = function(){
        // setAni(!ani)
        setshow(!show)
    }

    const values = {
        handleShow,
        // scaleAni: ani
    }

    return (
        <>
            <FuncContext.Provider value={values}>
                <LNav />
                <TNav />
                <MainContainer />
                <MNav />
                <MModal show={show}/>
                <Confirm />
            </FuncContext.Provider>
        </>
    )
}

export default Product