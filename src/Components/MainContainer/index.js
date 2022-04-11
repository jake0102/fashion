// React methods
import { createContext, useEffect, useState } from 'react'

// Files
import P_Home from '../P_Home'
import TShirt from '../TShirt'
import Shoes from '../Shoes'
import OnePiece from '../OnePiece'
import Active from '../Active'
import Autumn from '../Autumn'
import Summer from '../Summer'
import Accessories from '../Accessories'
import SaleShoes from '../SaleShoes'

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
            case 'onepiece':
                setContent(<OnePiece />)
                break;
            case 'active':
                setContent(<Active />)
                break;
            case 'onepiece':
                setContent(<OnePiece />)
                break;
            case 'autumn':
                setContent(<Autumn />)
                break;
            case 'summer':
                setContent(<Summer />)
                break;
            case 'accessories':
                setContent(<Accessories />)
                break;
            case 'saleshoes':
                setContent(<SaleShoes />)
                break;
            default:
                console.warn('Please Check Again!');
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