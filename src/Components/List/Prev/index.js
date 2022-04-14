import { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'

function Prev() {

    const prevRef = useRef()

    useEffect(()=>{
        const handleNext = () => {
            console.log('prev');
        }

        prevRef.current.addEventListener('click', handleNext)

        // Cleanup func
        // return () => {
        //     prevRef.current.removeEventListener('click', handleNext)
        // }
    })

    return (
        <div className="List-container-prev" ref={prevRef}>
            <div className="List-container-prev-btn">
                <FontAwesomeIcon icon={faCaretLeft} />
            </div>
        </div>
    )
}

export default Prev