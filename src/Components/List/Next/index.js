import { useRef, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

import { ScrollContext } from '../../List'

function Next() {

    const nextRef = useRef()

    const scrollContext = useContext(ScrollContext)

    return (
        <div className="List-container-next" ref={nextRef} onClick={() => scrollContext.handleScroll()}>
            <div className="List-container-next-btn">
                <FontAwesomeIcon icon={faCaretRight} />
            </div>
        </div>
    )
}

export default Next