import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
// import { Link } from 'react-router-dom'

// Files
import { ContentsContext } from '../../ContentsProvider'

function Right() {

    const contents = useContext(ContentsContext)

    return (
        <div className="Products-right">
            <div className="Products-right-top">
                <div className="Products-right-top-item1">   
                    <div className="item-container">
                        <div className="item-container-title">Autumn wear</div>

                        {/* <Link to="/product/autumn"> */}
                            <div className="item-container-hover" onClick={() => contents.handleChangeContents('autumn')}>
                                <div>
                                    <FontAwesomeIcon icon={faEye} />
                                    <span> See more</span>
                                </div>
                            </div>
                        {/* </Link> */}
                    </div> 
                </div>

                <div className="Products-right-top-item2">   
                    <div className="item-container">
                        <div className="item-container-title">Summer wear</div>

                        {/* <Link to="/product/summer"> */}
                            <div className="item-container-hover" onClick={() => contents.handleChangeContents('summer')}>
                                <div>
                                    <FontAwesomeIcon icon={faEye} />
                                    <span> See more</span>
                                </div>
                            </div>
                        {/* </Link> */}
                    </div>
                </div>
            </div>

            <div className="Products-right-bot">
                <div className="Products-right-bot-item1">   
                    <div className="item-container">
                        <div className="item-container-title">Accessories</div>

                        {/* <Link to="/product/accessories"> */}
                            <div className="item-container-hover" onClick={() => contents.handleChangeContents('accessories')}>
                                <div>
                                    <FontAwesomeIcon icon={faEye} />
                                    <span> See more</span>
                                </div>
                            </div>
                        {/* </Link> */}
                    </div>
                </div>

                <div className="Products-right-bot-item2">   
                    <div className="item-container">
                        <div className="item-container-title">Sale shoes</div>

                        {/* <Link to="/product/saleshoes"> */}
                            <div className="item-container-hover" onClick={() => contents.handleChangeContents('saleshoes')}>
                                <div>
                                    <FontAwesomeIcon icon={faEye} />
                                    <span> See more</span>
                                </div>
                            </div>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Right