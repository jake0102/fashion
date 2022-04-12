import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSort, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

import BackToPHome from '../BackToPHome'

function List(props) {

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

                <div className="List-container-main">
                    {/* <div className="List-container-main-item"></div>
                    <div className="List-container-main-item"></div>
                    <div className="List-container-main-item"></div>
                    <div className="List-container-main-item"></div> */}
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