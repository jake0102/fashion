import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

function Next() {
    return (
        <div className="List-container-next">
            <div className="List-container-next-btn">
                <FontAwesomeIcon icon={faCaretRight} />
            </div>
        </div>
    )
}

export default Next