import { createContext, useEffect, useRef, useState } from 'react'

import BackToPHome from '../BackToPHome'
import Container from './Container'
import Nav from './Nav'
import Prev from './Prev'
import Next from './Next'

export const ScrollContext = createContext()

function List(props) {

    const [w, setW] = useState(window.innerWidth)

    useEffect(()=>{
        const handleResize = () => {
            setW(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [window.innerWidth])

    const handleScroll = (value) => {
        if(w <= 475){
            switch (value) {
                case 'next':
                    xRef.current.scrollLeft += 280
                    break;
                case 'prev':
                    xRef.current.scrollLeft -= 280
                    break;
                default:
                    break;
            }
        }else{
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