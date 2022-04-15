import { createContext, useEffect, useRef } from 'react'

import BackToPHome from '../BackToPHome'
import Container from './Container'
import Nav from './Nav'
import Prev from './Prev'
import Next from './Next'

export const ScrollContext = createContext()

function List(props) {

    const handleScroll = (value) => {
        switch (value) {
            case 'next':
                xRef.current.scrollLeft += 330
                break;
            case 'prev':
                xRef.current.scrollLeft -= 330
                break;
            default:
                break;
        }
    }

    const values = {
        handleScroll
    }

    const xRef = useRef()

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

                    <Container link={props.myLink} ref={xRef}/>

                    <Next />
                </div>

                <BackToPHome />
            </div>
        </ScrollContext.Provider>
    )
}

export default List