// React methods
import { createContext } from 'react'

// Files
import LNav from '../../Components/LNav'
import TNav from '../../Components/TNav'
import MNav from '../../Components/MNav'
import MModal from '../../Components/MModal'
import MainContainer from '../../Components/MainContainer'

// Function
export const FuncContext = createContext()

const value = 'acv..'

function Product() {
    return (
        <>
            <FuncContext.Provider value={value}>
                <LNav />
                <TNav />
                <MainContainer />
                <MNav />
                <MModal />
            </FuncContext.Provider>
        </>
    )
}

export default Product