import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons'

import { ContentsContext } from '../ContentsProvider'

function BackToPHome() {

    const contents = useContext(ContentsContext)

    return (
        <div 
            className="btph"
            onClick={() => contents.handleChangeContents('back')}
        >
            <FontAwesomeIcon icon={faArrowLeft} />

            <div className="btph-hover">
                BACK
            </div>
        </div>
    )
}

export default BackToPHome