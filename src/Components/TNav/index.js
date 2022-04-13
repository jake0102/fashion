// React methods
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faBars, faShoppingCart, faUser, faCookieBite } from '@fortawesome/free-solid-svg-icons'

// Files
import { FuncContext } from '../../Pages/Product'
import { ContentsContext } from '../ContentsProvider'

// Func

function TNav() {

    const values = useContext(FuncContext)

    const contents = useContext(ContentsContext)

    let ani

    values.scaleAni === true ? ani = 'scale8Animation' : ani = ''

    return (
        <div className="TNav">
            <div className="TNav-container-logo">
                Yashion
            </div>

            <div className="TNav-search">
                <FontAwesomeIcon icon={faQuestion} />
                <input type="text" placeholder="Search..." spellCheck={false}/>
            </div>

            <div className="TNav-nav">
                <div className="TNav-nav-bar" onClick={() => values.handleShow()}>
                    <FontAwesomeIcon icon={faBars} />
                    {/* <div className={`TNav-nav-fake ${ani}`}></div> */}
                </div>


                <div className="TNav-nav-item" onClick={() => contents.handleChangeContents('back')}>
                    Products
                </div>

                <div className="TNav-nav-item">
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="TNav-nav-item">
                    <Link to="/about">About us</Link>
                </div>

                <div className="TNav-nav-item">
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Link>
                </div>

                <div className="TNav-nav-item">
                    <Link to="/login">
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TNav