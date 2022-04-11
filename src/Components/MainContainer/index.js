// React methods
import { createContext, useEffect, useState } from 'react'

// Files
import P_Home from '../P_Home'
import TShirt from '../TShirt'
import Shoes from '../Shoes'

export const ContentsContext = createContext()

function MainContainer() {

    const [content, setContent] = useState(<P_Home />)

    const handleChangeContents = function(value){
        switch (value) {
            case 'tshirt':
                setContent(<TShirt />)
                break;
            case 'shoes':
                setContent(<Shoes />)
                break;
            default:
                console.warn('aaa');
                break;
        }
    }
    
    const contents = {
        handleChangeContents
    }

    return (
        <ContentsContext.Provider value={contents}>
            <div className="MainContainer">
                {content}
            </div>
        </ContentsContext.Provider>
    )
}

export default MainContainer