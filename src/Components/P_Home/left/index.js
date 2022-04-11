// Methods
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useContext } from 'react'
// import { Link } from 'react-router-dom'

// Files
import { ContentsContext } from '../../MainContainer'

function Left() {

    const contents = useContext(ContentsContext)

    useEffect(()=> {

        // console.log(contents);

        // Cleanup function
    })

    return (
        <div className="Products-left">
            <div className="Products-left-top">   
                <div className="Products-left-top-item1">   
                    <div className="item-container">
                        <div className="item-container-title">T - shirt</div>

                        {/* <Link to="/product/tshirt"> */}
                            <div className="item-container-hover" onClick={() => contents.handleChangeContents('tshirt')}>
                                <div>
                                    <FontAwesomeIcon icon={faEye} />
                                    <span> See more</span>
                                </div>
                            </div>
                        {/* </Link> */}
                    </div>
                </div>

                <div className="Products-left-top-item2">   
                    <div className="item-container">
                        <div className="item-container-title">Shoes</div>

                        {/* <Link to="/product/shoes"> */}
                            <div className="item-container-hover" onClick={() => contents.handleChangeContents('shoes')}>
                                <div>
                                    <FontAwesomeIcon icon={faEye} />
                                    <span> See more</span>
                                </div>
                            </div>
                        {/* </Link> */}
                    </div>
                </div>
            </div>

            <div className="Products-left-bot">
                <div className="Products-left-bot-item1">   
                    <div className="item-container">
                        <div className="item-container-title">One piece</div>

                        {/* <Link to="/product/onepiece"> */}
                            <div className="item-container-hover" onClick={() => contents.handleChangeContents('onepiece')}>
                                <div>
                                    <FontAwesomeIcon icon={faEye} />
                                    <span> See more</span>
                                </div>
                            </div>
                        {/* </Link> */}
                    </div>
                </div>

                <div className="Products-left-bot-item2">   
                    <div className="item-container">
                        <div className="item-container-title">Active wear</div>

                        {/* <Link to="/product/active"> */}
                            <div className="item-container-hover" onClick={() => contents.handleChangeContents('active')}>
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

export default Left