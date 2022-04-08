import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

function left() {
    return (
        <div className="Products-left">
            <div className="Products-left-top">
                <div className="Products-left-top-item1">   
                    <div className="item-container">
                        <div className="item-container-title">T - shirt</div>

                        <div className="item-container-hover">
                            <div>
                                <FontAwesomeIcon icon={faEye} />
                                <span> See more</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Products-left-top-item2">   
                    <div className="item-container">
                        <div className="item-container-title">Shoes</div>

                        <div className="item-container-hover">
                            <div>
                                <FontAwesomeIcon icon={faEye} />
                                <span> See more</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Products-left-bot">
                <div className="Products-left-bot-item1">   
                    <div className="item-container">
                        <div className="item-container-title">One piece</div>

                        <div className="item-container-hover">
                            <div>
                                <FontAwesomeIcon icon={faEye} />
                                <span> See more</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Products-left-bot-item2">   
                    <div className="item-container">
                        <div className="item-container-title">Active wear</div>

                        <div className="item-container-hover">
                            <div>
                                <FontAwesomeIcon icon={faEye} />
                                <span> See more</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default left