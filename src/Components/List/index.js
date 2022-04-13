import { useEffect, useState } from 'react'

import BackToPHome from '../BackToPHome'
import Container from './Container'
import Nav from './Nav'
import Prev from './Prev'
import Next from './Next'

function List(props) {

    const [num, setNum] = useState(4)

    useEffect(()=>{
        const x = function() {
            
            let w = window.innerWidth;
            let h = window.innerHeight;

            if(w > 1700){
                setNum(4)
            }else if(w <= 1700 && w > 1400){
                setNum(3)
            }else if(w <= 1400 && w > 800){
                setNum(2)
            }else{
                setNum(1)
            }
        }

        window.addEventListener('resize', x)

        return ()=>{
            window.removeEventListener('resize', x)
        }

    }, [num])

    return (
        <div className="List">
            <div className="List-title">
                <img src={props.imgSrc} />

                <div>{props.myTitle}</div>
            </div>

            <Nav />

            <div className="List-container">
                <Prev />

                <Container myNum={num} />

                <Next />
            </div>

            <BackToPHome />
        </div>
    )
}

export default List