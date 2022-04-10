import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function right() {
    return (
        <div className="Products-right">
            <div className="Products-right-top">
                <div className="Products-right-top-item1">   
                    <div className="item-container">
                        <div className="item-container-title">Autumn wear</div>

                        <Link to="/product/autumn">
                            <div className="item-container-hover">
                                <div>
                                    <FontAwesomeIcon icon={faEye} />
                                    <span> See more</span>
                                </div>
                            </div>
                        </Link>
                    </div> 
                </div>

                <div className="Products-right-top-item2">   
                    <div className="item-container">
                        <div className="item-container-title">Summer wear</div>

                        <Link to="/product/summer">
                            <div className="item-container-hover">
                                <div>
                                    <FontAwesomeIcon icon={faEye} />
                                    <span> See more</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="Products-right-bot">
                <div className="Products-right-bot-item1">   
                    <div className="item-container">
                        <div className="item-container-title">Accessories</div>

                        <Link to="/product/accessories">
                            <div className="item-container-hover">
                                <div>
                                    <FontAwesomeIcon icon={faEye} />
                                    <span> See more</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="Products-right-bot-item2">   
                    <div className="item-container">
                        <div className="item-container-title">Sale shoes</div>

                        <Link to="/product/saleshoes">
                            <div className="item-container-hover">
                                <div>
                                    <FontAwesomeIcon icon={faEye} />
                                    <span> See more</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default right