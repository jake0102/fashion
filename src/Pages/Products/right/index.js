import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

function right() {
    return (
        <div className="Products-right">
            <div className="Products-right-top">
                <div className="Products-right-top-item1">   
                    <div className="item-container">
                        <div className="item-container-title">Autumn wear</div>

                        <div className="item-container-hover">
                            <div>
                                <FontAwesomeIcon icon={faEye} />
                                <span> See more</span>
                            </div>
                        </div>
                    </div> 
                </div>

                <div className="Products-right-top-item2">   
                    <div className="item-container">
                        <div className="item-container-title">Summer wear</div>

                        <div className="item-container-hover">
                            <div>
                                <FontAwesomeIcon icon={faEye} />
                                <span> See more</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Products-right-bot">
                <div className="Products-right-bot-item1">   
                    <div className="item-container">
                        <div className="item-container-title">Accessories</div>

                        <div className="item-container-hover">
                            <div>
                                <FontAwesomeIcon icon={faEye} />
                                <span> See more</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Products-right-bot-item2">   
                    <div className="item-container">
                        <div className="item-container-title">Sale shoes</div>

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

export default right