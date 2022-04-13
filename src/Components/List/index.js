import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSort, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

import BackToPHome from '../BackToPHome'
import Container from './Container'

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

        window.addEventListener('resize', x);

        return ()=>{
            window.removeEventListener('resize', x);
        }

    },[num])

    return (
        <div className="List">
            <div className="List-title">
                <img src={props.imgSrc} />
            </div>

            <div className="List-nav">
                <div className="List-nav-container">
                    <div className="List-nav-container-recommend">
                        <FontAwesomeIcon icon={faStar} />
                        Recommend
                    </div>

                    <div className="List-nav-container-sort">
                        <FontAwesomeIcon icon={faSort} />
                        Sort by
                    </div>
                </div>
            </div>

            <div className="List-container">
                <div className="List-container-prev">
                    <div className="List-container-prev-btn">
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </div>
                </div>

                {/* <div className="List-container-main-4">
                    <div className="List-container-main-item"></div>
                    <div className="List-container-main-item"></div>
                    <div className="List-container-main-item"></div>
                    <div className="List-container-main-item"></div>
                </div>

                <div className="List-container-main-3">
                    <div className="List-container-main-item"></div>
                    <div className="List-container-main-item"></div>
                    <div className="List-container-main-item"></div>
                </div>

                <div className="List-container-main-2">
                    <div className="List-container-main-item"></div>
                    <div className="List-container-main-item"></div>
                </div>

                <div className="List-container-main-1">
                    <div className="List-container-main-item"></div>
                </div> */}

                <Container myNum={num} />

                <div className="List-container-next">
                    <div className="List-container-next-btn">
                        <FontAwesomeIcon icon={faCaretRight} />
                    </div>
                </div>
            </div>

            <BackToPHome />
        </div>
    )
}

export default List