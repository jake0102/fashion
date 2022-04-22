// React methods
import { createContext, useState, useEffect } from 'react'

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
import Newin from '../Newin'
import Clothing from '../Clothing'
import Gift from '../Gift'
import Inspiration from '../Inspiration'

const ContentsContext = createContext()

function ContentsProvider( { children } ){

    const [content, setContent] = useState(<P_Home />)

    const [search, setSearch] = useState('')

    const [item, setItem] = useState([])

    const [conf, setConf] = useState(false)

    const [value_, setValue_] = useState()

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
            case 'new':
                setContent(<Newin />)
                break;
            case 'clothing':
                setContent(<Clothing />)
                break;
            case 'gift':
                setContent(<Gift />)
                break;
            case 'inspiration':
                setContent(<Inspiration />)
                break;
            case 'back':
                setContent(<P_Home />)
                break;
            default:
                console.warn('Please Check Again!');
                break;
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleGet = (value) => {
        setConf(!conf)

        setValue_(value)
    }

    const handleCancel = () => {
        setConf(!conf)
    }

    const handleAdd = () => {
        setItem([
            ...item,
            value_
        ])

        setConf(!conf)
    }

    const handleDel = (id) => {
        for(let i = 0; i < item.length; i++){
            if(item[i] === id){
                item.splice(i, 1)

                setItem([
                    ...item
                ])
            }
        }
    }
    
    const contents = {
        content,
        search,
        item,
        conf,
        handleChangeContents,
        handleSearch,
        handleAdd,
        handleDel,
        handleGet,
        handleCancel
    }

    return(
        <ContentsContext.Provider value={contents}>
            {children}
        </ContentsContext.Provider>
    )
}

export { ContentsProvider, ContentsContext }