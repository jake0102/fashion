// React methods
import { createContext } from 'react'

// Files
import P_Home from '../P_Home'
import TShirt from '../TShirt'

export const ContentsContext = createContext()

const handleChangeContents = function(value){

    console.log(value);
}

const contents = {
    handleChangeContents
}

function MainContainer() {
    return (
        <ContentsContext.Provider value={contents}>
            <div className="MainContainer">
                <P_Home />
            </div>
        </ContentsContext.Provider>
    )
}

export default MainContainer