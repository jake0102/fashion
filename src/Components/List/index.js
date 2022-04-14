import { createContext } from 'react'

import BackToPHome from '../BackToPHome'
import Container from './Container'
import Nav from './Nav'
import Prev from './Prev'
import Next from './Next'

export const ScrollContext = createContext()

function List(props) {

    const handleScroll = () => {
        console.log('testing...');
    }

    const values = {
        handleScroll
    }

    return (
        <ScrollContext.Provider value={values}>
            <div className="List">
                <div className="List-title">
                    <img src={props.imgSrc} />

                    <div>{props.myTitle}</div>
                </div>

                <Nav />

                <div className="List-container">
                    <Prev />

                    <Container link={props.myLink}/>

                    <Next />
                </div>

                <BackToPHome />
            </div>
        </ScrollContext.Provider>
    )
}

export default List