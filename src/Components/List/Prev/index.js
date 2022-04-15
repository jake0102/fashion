import { useRef, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'

import { ScrollContext } from '../../List'

function Prev() {

    const prevRef = useRef()

    const scrollContext = useContext(ScrollContext)

    return (
        <div className="List-container-prev">
            <div className="List-container-prev-btn" ref={prevRef} onClick={() => scrollContext.handleScroll('prev')}>
                <FontAwesomeIcon icon={faCaretLeft} />
            </div>
        </div>
    )
}

export default Prev