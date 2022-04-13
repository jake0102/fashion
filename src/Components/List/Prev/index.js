import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'

function Prev() {
    return (
        <div className="List-container-prev">
            <div className="List-container-prev-btn">
                <FontAwesomeIcon icon={faCaretLeft} />
            </div>
        </div>
    )
}

export default Prev