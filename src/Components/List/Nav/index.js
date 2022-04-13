import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSort } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return (
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
    )
}

export default Nav