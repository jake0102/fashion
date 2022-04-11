import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSort, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'

import BackToPHome from '../BackToPHome'

function List(props) {

    const [itemNum, setItemNum] = useState(4)

    const itemRef = useRef()

    useEffect(()=>{
        for (let index = 0; index < itemNum; index++) {
            
            // itemRef.current.innerHTML = <div className="List-container-main-item"></div>
            
        }
    }, [itemNum])

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

                <div className="List-container-main" ref={itemRef}>
                    
                </div>

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